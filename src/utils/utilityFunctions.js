import { NextResponse } from "next/server";
import Randomstring from "randomstring";

export const sendResponse = (flag, message, data) => {
  return NextResponse.json({
    flag,
    message,
    data: flag ? data : null,
  });
};



export const generateRandomStr = (len)=>{
    const text = Randomstring.generate({length:len,charset:"alphabetic"})
    return text
}