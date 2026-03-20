import mongoose from "mongoose";
import Schema from "mongoose"

const userSchema = new Schema({

    name:{
        type: String,
        required: true,
        trim: true,
        
    },
    email:{
        type: String,
        required: true,
        trim: true,
        unique: true,
        lowercase: true,
        index: true
    },
    password:{
        type: String,
        required: true,
        trim: true,
    },
    avatar:{
        type: String,
    },
    role:{
        type: String,
        enum: ["user", "admin"],
        default: "user"
    },

    gender:{
        type: String,
        enum:["male","female"],
        def :"male",
    },

    address:{
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
            required: true,
            trim: true,
        },
        pincode:{
            type: String,
            required: true,
            trim: true,
        }
    },


    
}, {timestamps: true});

const User = mongoose.model("User",userSchema);

export default User;
