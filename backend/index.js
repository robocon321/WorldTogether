const express = require("express");
const mongoose = require("mongoose");

const app = express();

const connect = async () => {
  try{
    await mongoose.connect("mongodb+srv://robocon321:worldtogether123@cluster0.dowih.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");
    console.log("Connnect success");
  }catch(e) {
    console.log("Error connect", e)
  }
}

connect();

app.get("/", (req, res) => {
  res.send("Hello world");
})

const PORT = 3000

app.listen(PORT, () => console.log("Running..."));