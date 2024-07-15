import mongoose from "mongoose";


const contactUsStr = mongoose.Schema({
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

const ContactModel = mongoose.models.contacts || mongoose.model("contacts",contactUsStr)
export default contactUsStr