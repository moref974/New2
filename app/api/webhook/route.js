
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    console.log("WebHook Recieved ")
    const body = await req.json(); 
    console.log("📩 New Event Received:", body);

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message });
  }

}

export const config = {
  runtime: "edge"
}
