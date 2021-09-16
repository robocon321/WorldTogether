require('dotenv').config()
const express = require("express");
const argon2 = require("argon2");
const jwt = require("jsonwebtoken");
const router = express.Router();
const Account = require("../models/Account");
const verifyToken = require("../middleware/verifyToken");

router.get("/", verifyToken, async (req, res) => {
  try {
    const account = await Account.findById(req.uid).select('-pwd');
    return res.status(200).json({success: true, message: "Successfull!", account})
  } catch (e) {
    console.log("Get account error", e);
    return res.status(500).json({success: false, message: "Invalid server error"});
  }
})

router.post("/register", async (req, res) => {
  let {uname, pwd, email} = req.body;

  if(!uname) return res.status(400).json({success: false, message: "Username required"});
  if(!pwd) return res.status(400).json({success: false, message: "Password required"});
  if(!email) return res.status(400).json({success: false, message: "Email required"});

  try {
    const account = await Account.findOne({ uname });
    if(account) return res.status(400).json({success: false, message: "Username already taken"});
    else {
      let pwdHash = await argon2.hash(pwd);
      let now = Date.now
      const newAccount = new Account({uname, pwd: pwdHash, email});
      await newAccount.save();

      let accessToken = jwt.sign({uid: newAccount._id}, process.env.ACCESS_TOKEN);
      return res.status(200).json({success: true, message: "Create new account sucessful!", accessToken});
    }
  } catch(e) {
    console.log("Register error", e);
    return res.status(500).json({success: false, message: "Internal server error"});
  }
});

router.post("/login", async (req, res) => {
  let {uname, pwd} = req.body;

  if(!uname || !pwd) return res.status(400).json({success: false, message: "Missing username and/or password"});
  
  try{
    let account = await Account.findOne({uname});
    if(!account) return res.status(400).json({success: false, message: "Username or password incorrect"});
    else {
      let verify = await argon2.verify(account.pwd, pwd);
      if(!verify) return res.status(400).json({success: false, message: "Username or password incorrect"});
      else {
        let accessToken = jwt.sign({uid: account._id}, process.env.ACCESS_TOKEN);
        return res.status(200).json({success: true, message: "Login successful!", accessToken})
      }    
    }
  } catch (e) {
    console.log("Login error", e);
    return res.status(500).json({success: false, message: "Interval server error"});
  }
  
})

module.exports = router;