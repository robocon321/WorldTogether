require('dotenv').config();
const express = require("express");
const argon2 = require('argon2');
const Account = require("../../models/Account");

const router = express.Router();
const verifyToken = require('../../middleware/verifyToken');

router.get('/', verifyToken, async (req, res) => {
  const account = await Account.findOne(req.body);
  if(account) res.status(200).json({success: true, message: "Successful!", account});
  else res.status(400).json({success: false, message: "Not exists"});
})

router.post('/', verifyToken, async (req, res) => {
  req.body.pwd = await argon2.hash(req.body.pwd);
  const { uname, pwd, full_name, email, phone, sex, birthday } = req.body;
  
  if(!uname) return res.status(400).json({success: false, message: "Username is required"});
  if(!pwd) return res.status(400).json({success: false, message: "Password is required"});
  if(!full_name) return res.status(400).json({success: false, message: "Full-name is required"});
  if(!email) return res.status(400).json({success: false, message: "Email is required"});
  if(!phone) return res.status(400).json({success: false, message: "Phone is required"});
  if(!sex) return res.status(400).json({success: false, message: "Sex is required"});
  if(!birthday) return res.status(400).json({success: false, message: "Birthday is required"});

  try {
    const account = await Account.findOne({uname}).select("-pwd");
    if(account) return res.status(400).json({success: false, message: "Exists uname"});
    
    const newAccount = new Account(req.body);
    newAccount.save();
    return res.status(200).json({success: true, message: "Successful!"});
  } catch (e) {
    res.status(500).json({success: false, message: "Internal server error"})
  }

});

router.put('/', verifyToken, async (req, res) => {
  req.body.pwd = await argon2.hash(req.body.pwd);
  const { pwd, full_name, email, phone, sex, birthday, _id } = req.body;
  
  if(!pwd) return res.status(400).json({success: false, message: "Password is required"});
  if(!full_name) return res.status(400).json({success: false, message: "Full-name is required"});
  if(!email) return res.status(400).json({success: false, message: "Email is required"});
  if(!phone) return res.status(400).json({success: false, message: "Phone is required"});
  if(!sex) return res.status(400).json({success: false, message: "Sex is required"});
  if(!birthday) return res.status(400).json({success: false, message: "Birthday is required"});

  try {
    const account = await Account.findOneAndUpdate({_id}, req.body);
    if(account) return res.status(200).json({success: true, message: "Successful!"});
    else return res.status(400).json({success: false, message: "Unsuccessful!"});
  } catch (e) {
    res.status(500).json({success: false, message: "Internal server error"})
  }
})

module.exports = router;