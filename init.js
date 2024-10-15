//init.js
const mongoose = require("mongoose");

//So,After Acquiring it ==> we'll be setting up the ==>mongoose server as well...==>Let's acquire the Chat Model as well !!!
const Chat = require("./models/chat.js")
main().then(()=>{ console.log("Connection Succesfull !!!")})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');

}

//Yaha pe hum bahut saara data ==>Save kr ware hai ==> so, we will save the data in the form of an array !!!
let allChats=[
    {
        from : "neha",
        to:   "priya",
        msg: "send me your exam sheets",
        created_at: new Date(),
    },
    {
        from : "rohit",
        to:   "tony",
        msg: "send a flower",
        created_at: new Date(),
    },
    {
        from : "pony",
        to:   "honey",
        msg: "send me an elephant",
        created_at: new Date(),
    },
    {
        from : "sunny",
        to:   "money",
        msg: "send me your car and moving Vehicles !!!",
        created_at: new Date(),
    }
];

Chat.insertMany(allChats);