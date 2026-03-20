import mongoose from "mongoose";
import Schema from "mongoose";

const orderSchema = new Schema({
    user:{
        type: Schema.Types.ObjectId,
        ref: "User",
    },
    items:[
        {
            product:{
                type:Schema.Types.ObjectId,
                ref: "Product",
            },
            name :{
                type: String,
                required:true,
            },
            price:{
                type:Number,
                required:true,
            },
            quantity:{
                type:Number,
                required:true,
            }
        }
    ],

    totalAmount:{
        type:Number,
        required:true,
    },
    status:{
        type:String,
        enum:["pending","completed","cancelled"],
        default:"pending",
    },
    deliveryAddress:{
        street:{
            type: String,
            required: true,
            trim: true,
        },
        city:{
            type: String,
            required: true,
            trim: true,
        },
        state:{
            type: String,
            //required: true,
            trim: true,
        },
        pincode:{
            type: String,
            // required: true,
            trim: true,
        }
    }
}, {timestamps: true});

const Order = mongoose.model("Order", orderSchema);

export default Order;