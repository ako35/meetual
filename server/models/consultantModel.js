import mongoose from "mongoose";

const ScheduleSchema = new mongoose.Schema({
    clientName: String,
    description: String,
    date: Date
})

const ConsultantSchema = new mongoose.Schema({
    username: String,
    password: String,
    role: {type: String, default: "consultant"},
    approved: {type: Boolean, default: false},
    schedule: [ScheduleSchema]
})

const consultantModel = mongoose.model("consultant", ConsultantSchema);
const scheduleModel = mongoose.model("schedule", ScheduleSchema);

export default consultantModel;
export {scheduleModel}