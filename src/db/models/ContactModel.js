import mongoose from "mongoose";


const ContactUsStr = mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    message:{
        type: String,
        required:true
    }
},{
    timestamps:true
})

const ContactUs = mongoose.models.contact || mongoose.model("contact", ContactUsStr)
export default ContactUs