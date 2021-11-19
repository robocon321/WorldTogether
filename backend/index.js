const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const authRoute = require("./routes/auth");
const adminRoute = require("./routes/admin/index");
const clientRoute = require("./routes/client/index");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/auth/", authRoute);
app.use("/admin/", adminRoute);
app.use("/", clientRoute);


const connect = async () => {
  try{
    await mongoose.connect("mongodb+srv://robocon321:worldtogether123@cluster0.dowih.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");
    console.log("Connnect success");
  }catch(e) {
    console.log("Connect fail", e);
  }
}

connect();

app.get("/", (req, res) => {
  res.send("Hello world");
})

const PORT = 5000

app.listen(PORT, () => console.log("Running..."));