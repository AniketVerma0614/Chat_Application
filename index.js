//index.js
const express = require("express");
const app = express();
//Now  Lets reuire the Mongoose as Well !!!
const mongoose = require("mongoose");
const path = require("path");
const Chat = require("./models/chat.js");

app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");
app.use(express.static(path.join(__dirname,"public")));
//So, we won't be able to get the data from the ==> req.body ==> from the post request ==> We need to parse that data !!!
app.use(express.urlencoded({ extended: true }));



//Creating the ASYNC fucntion as well !!! ==> Lets se how !!!
main().then(()=>{ console.log("Connection Succesfull !!!")})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}
//Now here we will ==> Insert the data into the Chat !!!

let chat1 = new Chat({
    from : "neha",
    to:   "priya",
    msg: "send me your exam sheets",
    created_at: new Date(),

});


chat1.save().then((res)=>{
  console.log(res)
});
//GET request ==> /chats pe he toh hai !!!
app.get("/chats",async(req,res)=>{
// Chat.find() ==> we will get all the Data From the MONGO_DB !!! ==>With the help of the MONGOOSE !!!==> 
    let chats = await Chat.find();
      console.log(chats);
      // res.send("Working !!! fot the route /chats");
      res.render("index.ejs",{chats});
});

//New Route
app.get("/chats/new",(req,res)=>{
  res.render("new.ejs");
});

//Create Route ...
app.post("/chats",(req,res)=>{
  let {from,to,msg} = req.body; //So, we won't be able to get the data from the ==> req.body ==> from the post request ==> We need to parse that data !!!
  let newChat = new Chat({
    from: from,
    to: to,
    msg: msg,
    created_at: new Date(),
  });
  newChat
  .save()
  .then(res => {
    console.log("Chat was saved !!!", res);
  })
  .catch(err => {
    console.log("Error while saving the chat:", err);
  });


  res.redirect("/chats");
});



//Then  we will finally be able to acreate the home route !!!
app.get("/",(req,res)=>{
    res.send("The root is working !!!");
});

//Setting up our Server at Port 8080
app.listen(8080,()=>{
    console.log("Server is listening on port 8080");
});
