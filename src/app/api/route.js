import connectDB from "@/db/ConnectDB";
import { NextResponse } from "next/server";
import Randomstring from "randomstring";


connectDB();

export async function GET(request) {
    const text = Randomstring.generate({length:3,charset:"alphabetic"})
  return NextResponse.json(
    {
      success: "!true",
      message: "WELCOME DEVELOPER.",
      lorem:text
    },
    { status: 200 }
  );
}
