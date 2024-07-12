import ClicksStr from "@/db/models/Clicks";
import UrlStr from "@/db/models/Urls";
import { sendResponse } from "@/utils/utilityFunctions";

export async function GET(request, content) {
  try {
    const { url } = content.params;


    if (url) {
      // checking if url is exists or not
        // console.log(url)
        // let newurl = `${url[0]}/${url[1]}`

        // console.log(newurl)
      const findedUrl = await UrlStr.findOne({ urlId: url });
      if (!findedUrl || findedUrl == undefined || findedUrl == NaN) {
        return sendResponse(false, "Url not exists", null);
      } else {

        const data = {
            originalUrl: findedUrl.originalUrl,
            createddDate: findedUrl.createdAt,
            shortedUrl: findedUrl.shortedUrl,
            clicks: []
        }
        // fetching the clicks (history) of the url 

        const checkThisUrlHistory = await ClicksStr.find({urlId: findedUrl._id})

        if(!checkThisUrlHistory || checkThisUrlHistory == undefined || checkThisUrlHistory == NaN){
            return sendResponse(true, "Url Record Fetched But not history", data)
        }
        else{
            data.clicks.push(checkThisUrlHistory)
            return sendResponse(true, "Url Record Fetched", data)
        }

      }
    } else {
      return sendResponse(
        false,
        "Some went wrong please try again later",
        null
      );
    }
  } catch (error) {
    console.log(error)
    return sendResponse(false, "Some went wrong please try again later", null);
  }
}
