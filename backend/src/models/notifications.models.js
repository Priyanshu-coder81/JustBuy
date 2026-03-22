import mongoose from "mongoose";
import Schema from "mongoose";

const notificationSchema = new Schema({

    tilte:{
        type:String,
        required:true,
    },
    type:{
        type:String,
        enum:["product","order"],
        required:true,
    },
    message:{
        type:String,
        required:true,
    },
    productId:{
        type:Schema.Types.ObjectId,
        ref:"Product",
    },
    orderId:{
        type:Schema.Types.ObjectId,
        ref:"Order",
    },
    
},{timestamps:true});

const Notification = mongoose.model("Notification", notificationSchema);

export default Notification;

