import mongoose  from "mongoose";

const SuperUserSchema = new mongoose.Schema({
    username: String,
    password: String,
    role: String
})

export default mongoose.model("superuser", SuperUserSchema)