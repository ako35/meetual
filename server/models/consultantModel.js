import mongoose from "mongoose";

const ConsultantSchema = new mongoose.Schema({
    username: String,
    password: String,
    role: {type: String, default: "consultant"},
    approved: {type: Boolean, default: false}
})

export default mongoose.model("consultant", ConsultantSchema)