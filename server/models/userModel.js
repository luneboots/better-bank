const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please enter a name"],
        },
        email: {
            type: String,
            required: [true, "Please enter an email"],
            unique: true,
        },
        password: {
            type: String,
            required: [true, "Please enter a password"],
        },
        balance: {
            type: Number,
            default: 0,
        },
        account: {
            type: String,
            default: false,
        },
        admin: {
            type: Boolean,
            default: false,
        },
        image: {
            type: String,
            default: false,
        },
    },
    {
        timestamps: true,
    }
);

const User = mongoose.model("User", userSchema);

module.exports = User;