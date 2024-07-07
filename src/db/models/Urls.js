import mongoose from "mongoose";

const UrlSchema = mongoose.Schema({
    originalUrl:{
        type:String,
        required:true,
        unique:true
    },

    shortUrl1: String,
    shortUrl2: String,
    shortUrl3: String,

    clicks:{
        type:Number,
    }

},{
    timestamps:true
})

const UrlStr = mongoose.models.urls || mongoose.model("urls", UrlSchema)
export default UrlStr