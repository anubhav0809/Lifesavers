const mongoose=require('mongoose')
const Schema=mongoose.Schema;

const schm=Schema({
    body:String,
    rating:Number,
    author:{
        type:Schema.Types.ObjectId,
        ref:'User'
    }
})


const Review=mongoose.model('Review',schm);
module.exports=Review