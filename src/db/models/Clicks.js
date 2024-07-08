import mongoose from "mongoose"

const clickOnUrlSchema = mongoose.Schema({
    clicks: Number
},{
    timestamps:true
})

const ClicksStr = mongoose.models.clicks || mongoose.model("clicks", clickOnUrlSchema)
export default ClicksStr