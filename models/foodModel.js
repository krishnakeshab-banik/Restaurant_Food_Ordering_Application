import mongoose from "mongoose";

const foodSchema = new mongoose.Schema({
    name: {
        type:String,
        required:true //If we try to save a document without this field, it will throw an error.
    },
    description:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    }
})

const foodModel = mongoose.models.food || mongoose.model("foods",foodSchema);

export default foodModel;