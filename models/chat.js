//chat.js
const mongoose = require("mongoose");

const chatSchema = new mongoose.Schema({
    from : {
        type : String,
        required : true,

    },
    to : {
        type : String,
        required : true,
    },
    msg : {
        type : String,
        maxLength : 50,
        // required : true, Sometimes the Messages are empty as well !!!
    },
    created_at: {
        type : Date,
        required : true,
    }
});

//Now we will create the Model --> I guess !!!

const Chat = mongoose.model("Chat",chatSchema);

module.exports = Chat;