import mongoose from "mongoose";

const ClientSchema = new mongoose.Schema({
    username: String,
    password: String,
    role: {type: String, default: "client"},
    approved: {type: Boolean, default: false}
})

export default mongoose.model("client", ClientSchema)