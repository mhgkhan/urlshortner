import ContactModel from "@/db/models/ContactModel";
import { sendResponse } from "@/utils/utilityFunctions";

export async function POST(request) {
  try {
    const payload = await request.json();
    const { name, email, message } = payload;

    if (!name || !email || !message)
      return sendResponse(false, "Data Validation Field", null);
    else {
      console.log(payload);
      const saveMessage = new ContactModel({
        name: name,
        email: email,
        message: message,
      });
      const savedMessage = await saveMessage.save();

      return sendResponse(true, "Message sent sucessfully...", null);
    }
  } catch (error) {
    console.log(error);
    return sendResponse(false, "some went wrong", null);
  }
}
