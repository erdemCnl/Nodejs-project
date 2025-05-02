import mongoose from "mongoose";
import bcyrpt from "bcrypt";
import validator from "validator";

const { Schema } = mongoose;
// kullanıcı modelini oluşturduk
const userSchema = new Schema({
    userName: {
        type: String,
        required: [true, 'Username is required'],
        lowercase: true
    },
    email:{
        type: String,
        required: [true, 'Email is required'],
        unique: true,
        validate: [validator.isEmail, 'Email is invalid']
    },
    password:{
        type: String,
        required: [true, 'Password is required'],
        minlength: [8, 'At least eight characters required']
    },
    followers: [
        {
            type: Schema.Types.ObjectId,
            ref : 'User'
        }
    ],
    followings: [
        {
            type: Schema.Types.ObjectId,
            ref : 'User'
        }
    ],
    profilePhoto: {
        url: String,
        image_id: String
    }
}
,{
    timestamps: true
});

//password'ü hashledik
userSchema.pre("save",  function (next) {
    const user = this
    bcyrpt.hash(user.password,10,(err,hash) => {
        if(err){
            return next(err)
        }
        user.password =  hash
        next()
    })
});

const User = mongoose.model("User", userSchema);

export default User;
