import mongoose from "mongoose";
import Schema from "mongoose";

const productSchema = new Schema({

    name:{
        type:String,
        required:true,
        trim :true,
    },
    description:{
        type:String,
        trim :true,
    },
    price:{
        type:Number,
        required:true,
        trim :true,
    },
    stock:{
        type:Number,
        trim :true,
    },
    isAvailable:{
        type:Boolean,
        default:true,
    },
    image:{
        type:String,
        required:true,
    },
    category:{
        type:String,
       
        trim :true,
    },
    
}, {timestamps: true});

const Product = mongoose.model("Product", productSchema);

export default Product;
