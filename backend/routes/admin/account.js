require('dotenv').config();
const express = require("express");
const argon2 = require('argon2');
const Account = require("../../models/Account");

const router = express.Router();
const verifyToken = require('../../middleware/verifyToken');

router.get('/', verifyToken, async (req, res) => {
    const { query } = req;
    const {skip, limit, sort, search} = query;
    
    delete query.skip;
    delete query.limit;
    delete query.search;

    try {
      const count = await Account.find({...query, uname: { $regex: new RegExp(search, 'i')}}).count();
      const account = await Account.find({...query, uname: { $regex: new RegExp(search, 'i')}}).skip(skip && parseInt(skip)).limit(limit && parseInt(limit)).sort(sort);

      if(account) return res.status(200).json({success: true, message: "Successful!", account, count});
      else return res.status(400).json({success: false, message: "Not exists"});  
    } catch (e) {
      return res.status(500).json({success: false, message: "Interval server"});
    }
})

router.post('/', verifyToken, async (req, res) => {
  req.body.pwd = await argon2.hash(req.body.pwd);
  req.body.cre_uid = req.uid;

  const { uname, pwd, full_name, email, phone, sex, birthday } = req.body;
  
  if(!uname) return res.status(400).json({success: false, message: "Username is required"});
  if(!pwd) return res.status(400).json({success: false, message: "Password is required"});
  if(!full_name) return res.status(400).json({success: false, message: "Full-name is required"});
  if(!email) return res.status(400).json({success: false, message: "Email is required"});
  if(!phone) return res.status(400).json({success: false, message: "Phone is required"});
  if(sex === '' || sex === null || sex === undefined) return res.status(400).json({success: false, message: "Sex is required"});
  if(!birthday) return res.status(400).json({success: false, message: "Birthday is required"});

  try {
    const account = await Account.findOne({uname, is_delete: false}).select("-pwd");
    if(account) return res.status(400).json({success: false, message: "Exists uname"});
    
    const newAccount = new Account(req.body);
    newAccount.save();
    return res.status(200).json({success: true, message: "Successful!"});
  } catch (e) {
    res.status(500).json({success: false, message: "Internal server error"})
  }

});

router.put('/', verifyToken, async (req, res) => {
  if(req.body.pwd) req.body.pwd = await argon2.hash(req.body.pwd);
  const { _id } = req.body;
  req.body.mod_uid = req.uid;
  req.body.mod_time = new Date().getTime();

  try {
    const account = await Account.findOneAndUpdate({_id}, req.body);
    if(account) return res.status(200).json({success: true, message: "Successful!"});
    else return res.status(400).json({success: false, message: "Unsuccessful!"});
  } catch (e) {
    res.status(500).json({success: false, message: "Internal server error"})
  }
})

router.delete('/', verifyToken, async (req, res) => {
  const {id} = req.query;

  try {
    await Account.findOneAndUpdate({_id: id}, {is_delete: true, mod_uid: req.uid, mod_time: new Date().getTime()})
    return res.status(200).json({success: true, message: "Successful!"});
  } catch (e) {
    console.log(e);
    return res.status(500).json({success: false, message: 'Interval Server'});
  }

})

module.exports = router;