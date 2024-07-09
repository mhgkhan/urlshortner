import mongoose from "mongoose";

const UrlSchema = mongoose.Schema({
    originalUrl:{
        type:String,
        required:true,
        unique:true
    },

    shortedUrl:{
        type:String,
        required:true,
        unique:true
    },

    urlId:{
        type:String,
        required:true,
        unique:true
    },

    isPrivate:{
        type:String
    }

},{
    timestamps:true
})

const UrlStr = mongoose.models.urls || mongoose.model("urls", UrlSchema)
export default UrlStr