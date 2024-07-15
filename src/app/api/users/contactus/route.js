import ContactModel from "@/db/models/ContactModel";
import { sendResponse } from "@/utils/utilityFunctions";

export async function POST(request) {
  try {
    const payload = await request.json();

    const { name, email, message } = request;

    if (!name || !email || !message)
      return sendResponse(false, "Data Validation Field", null);
    else {
        const message = new ContactModel({name,email,message});
        await message.save()
        return sendResponse(true, "Message sent sucessfully...", null)
    }
  } catch (error) {
    return sendResponse(false, "some went wrong", null)
  }
}
