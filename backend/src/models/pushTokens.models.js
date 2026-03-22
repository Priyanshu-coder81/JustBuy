import mongoose from "mongoose";
import Schema from "mongoose";

const pushTokenSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref:"User",
    },
    token:{
        type: String,
        required: true,
    },
    deviceType:{
        type: String,
        enum: ["android", "ios", "web"],
        default: "android",
    },
    
}, {timestamps: true});

const PushToken = mongoose.model("PushToken", pushTokenSchema);

export default PushToken;