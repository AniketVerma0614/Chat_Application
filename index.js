//index.js
const express = require("express");
const app = express();
//Now  Lets reuire the Mongoose as Well !!!
const mongoose = require("mongoose");
const path = require("path");

app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");


//Creating the ASYNC fucntion as well !!! ==> Lets se how !!!
main().then(()=>{ console.log("Connection Succesfull !!!")})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');

}




//Then  we will finally be able to acreate the home route !!!
app.get("/",(req,res)=>{
    res.send("root is Working");
});

//Setting up our Server at Port 8080
app.listen(8080,()=>{
    console.log("Server is listening on port 8080");
});