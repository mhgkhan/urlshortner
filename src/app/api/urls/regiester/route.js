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
        const prevUrlsLength = await UrlStr.find({});
        // console.log("the length of prevUrlsis", prevUrlsLength)

        const domain = process.env.DOMAIN;
        const urlId = `${
          Number.parseInt(prevUrlsLength.length) + 1
        }${generateRandomStr(3)}`;
        const shortedUrl = `${domain}${urlId}/`;

        // storing this into the database
        const doc = new UrlStr({
          originalUrl: url,
          shortedUrl,
          urlId,
        });

        const saved = await doc.save();

        return sendResponse(true, "Url shorted sucess", saved);
      } else {
        const data = {
          shortedUrl: checkUrl.shortedUrl,
          originalUrl: checkUrl.originalUrl,
        };
        return sendResponse(true, "Url already exists", data);
      }
    } else {
      return sendResponse(false, "Payload not found", null);
    }
  } catch (error) {
    console.log(error);
    return sendResponse(false, "some went wrong", null);
  }
}
