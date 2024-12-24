import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
    },
    username: {
        type: String,
        required: true,
    },
    isVerified: {
        type: Boolean,
        default: false,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
    forgotPasswordToken: String,
    forgotPasswordTokenExpiry: Date,
    verifyOTP: String,  // OTP field for email verification
    verifyOTPExpiry: Date,  // OTP expiry time
    verifyToken: String, // Retained in case you still use token links elsewhere
    verifyTokenExpiry: Date, // Retained for future token expiry purposes
})

const User = mongoose.model.User || mongoose.model("User", UserSchema)
export default User;