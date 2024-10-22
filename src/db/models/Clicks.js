import mongoose from "mongoose";

const clickOnUrlSchema = mongoose.Schema(
  {
    urlId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "urls",
    },
  },
  {
    timestamps: true,
  }
);

const ClicksStr =
  mongoose.models.clicks || mongoose.model("clicks", clickOnUrlSchema);
export default ClicksStr;
