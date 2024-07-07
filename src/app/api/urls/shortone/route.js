import connectDB from "@/db/ConnectDB";
import UrlStr from "@/db/models/Urls";
import { generateRandomStr, sendResponse } from "@/utils/utilityFunctions";

connectDB();

export async function POST(request) {
  try {
    const payload = await request.json();
    // console.log(payload)
    if (payload) {
      const { url } = payload;

      // checking if the url is already exists or not
      const checkUrl = await UrlStr.findOne({ originalUrl: url });
      
      if (!checkUrl || checkUrl == null) {

        //   console.log("after check url", checkUrl)
        const prevUrlsLength = await UrlStr.find({})
        // console.log("the length of prevUrlsis", prevUrlsLength)



        const domain = process.env.DOMAIN;
        const createdUr1 = `${domain}${Number.parseInt(prevUrlsLength.length)+1}${generateRandomStr(3)}/`;
        const createdUr2 = `${domain}${Number.parseInt(prevUrlsLength.length)+1}${generateRandomStr(3)}/`;
        const createdUr3 = `${domain}${Number.parseInt(prevUrlsLength.length)+1}${generateRandomStr(3)}/`;


        console.log("the domain is", domain, "and the created url is ", createdUr1, createdUr2, createdUr3)

        // storing this into the database
        const doc = new UrlStr({
          originalUrl:  url,
          shortUrl1: createdUr1,
          shortUrl2: createdUr2,
          shortUrl3: createdUr3,
        });

        const saved = await doc.save();

        return sendResponse(true, "Url shorted sucess", saved);
      } else {
        const shortUrls = {
          shortUrl1: checkUrl.shortUrl1,
          shortUrl2: checkUrl.shortUrl2,
          shortUrl3: checkUrl.shortUrl3,
          originalUrl: checkUrl.originalUrl
        };
        return sendResponse(true, "Url already exists", shortUrls);
      }
    } else {
      return sendResponse(false, "Payload not found", null);
    }
  } catch (error) {
    console.log(error)
    return sendResponse(false, "some went wrong", null);
  }
}
