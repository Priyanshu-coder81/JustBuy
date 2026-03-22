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
        trim: true,
        unique: true,
        lowercase: true,
        index: true,
        sparse:true,
    },
    phone:{
        type: String,
        unique: true,
        sparse: true,
        index:true,
    },
    firebaseUid:{
        type: String,
        unique: true,
        sparse: true,
        index:true,
    },
    avatar:{
        type: String,
    },
    pushToken:{
        type:String,
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

    isSubscribed:{
        type:Boolean,
        default:false,
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

userSchema.pre("save", async function(next){
    if(!this.isModified("password")) return next();

    this.password = await bcrypt.hash(this.password,10);
    next();
});

userSchema.methods.isPasswordCorrect = async function(password){
    return await bcrypt.compare(password, this.password);
}

userSchema.methods.generateAccessToken = function(){
    return jwt.sign(
        {
            _id: this._id,
            email: this.email,
            phone: this.phone,
            name: this.name,
            role: this.role,
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY
        }
    )
};

userSchema.methods.generateRefreshToken = function(){
    return jwt.sign(
        {
            _id: this._id,
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRY
        }
    )
};

const User = mongoose.model("User",userSchema);

export default User;
