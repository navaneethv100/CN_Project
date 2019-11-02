const mongoose=require('mongoose');
const UserSchema=new mongoose.Schema({
    name:{
        type: String,
        required: true,
        
    },
    text:{
        type: String
    }
});

module.exports=User=mongoose.model('user',UserSchema);