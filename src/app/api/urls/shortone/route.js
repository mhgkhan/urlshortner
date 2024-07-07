import connectDB from "@/db/ConnectDB";
import UrlStr from "@/db/models/Urls";
import { generateRandomStr, sendResponse } from "@/utils/utilityFunctions";

connectDB();

export async function POST(request) {
  try {
    const payload = await request.json();

    if (payload) {
      const { url } = payload;

      // checking if the url is already exists or not
      const checkUrl = await UrlStr.findOne({ originalUrl: url });

      if (!checkUrl || checkUrl == null) {
        const prevUrlsLength = (await UrlStr.find({}).length) + 1;

        const domain = process.env.DOMAIN;
        const createdUr1 = `${domain}${prevUrlsLength}${generateRandomStr(3)}/`;
        const createdUr2 = `${domain}${prevUrlsLength}${generateRandomStr(3)}/`;
        const createdUr3 = `${domain}${prevUrlsLength}${generateRandomStr(3)}/`;

        // storing this into the database
        const doc = new UrlStr({
          originalUrl: payload,
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
        };
        return sendResponse(true, "Url already exists", shortUrls);
      }
    } else {
      return sendResponse(false, "Payload not found", null);
    }
  } catch (error) {
    return sendResponse(false, "some went wrong", null);
  }
}
