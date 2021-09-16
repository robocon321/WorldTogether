const jwt = require("jsonwebtoken");

const verifyToken = async (req, res, next) => {
  let authorization = req.header('Authorization')
  if(!authorization) return res.status(401).json({success: false, message: "Not found authorization"});
  let token = authorization.split(' ')[1];
  if(!token) return res.status(401).json({success: false, message: "Not found token"});
  else {
    try {
      let decode = await jwt.verify(token, process.env.ACCESS_TOKEN);
      req.uid = decode.uid;
      next();
    } catch(e) {
      console.log("Middleware error", e);
      res.status(403).json({success: false, message: "Invalid token"})
    }
  }
}

module.exports = verifyToken;