const express = require("express");
const authRoute = require("./routes/auth");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());
app.use("/auth/", authRoute);

const connect = async () => {
  try{
    await mongoose.connect("mongodb+srv://robocon321:worldtogether123@cluster0.dowih.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");
    console.log("Connnect success");
  }catch(e) {
    console.log("Error connect", e.message());
  }
}

connect();

app.get("/", (req, res) => {
  res.send("Hello world");
})

const PORT = 3000

app.listen(PORT, () => console.log("Running..."));