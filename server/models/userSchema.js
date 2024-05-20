const mongoose = require("mongoose");
const validator = require("validator");
const jwt = require("jsonwebtoken");
const SECRET_KEY = "abdul";

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Not Valid Email");
      }
    },
  },
  profileIndex: {
    type: String,
    required: true,
    unique: true
  },
  username: {
    type: String,
    required: true,
    unique: true
  },
  tokens: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],
});
// Token Generate
userSchema.methods.generateAuthtoken = async function () {
  try {
    const newtoken = jwt.sign({ _id: this._id }, SECRET_KEY, {
      expiresIn: "1d",
    });

    this.tokens = this.tokens.concat({token:newtoken})
    await this.save()
    return newtoken
    
  } catch (error) {
    res.status(400).json(error);
  }
};
// creating model
const users = new mongoose.model("users", userSchema);
module.exports = users;
