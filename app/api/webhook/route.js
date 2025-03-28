import { NextResponse } from "next/server"

export async function POST(req) {
  try {
    console.log("✅ WebHook Received!")
    const body = await req.json()
    console.log("📩 New Event Received:",JSON.stringify(body, null, 2))

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (error) {
    console.error("❌ Webhook Error:", error.message) 
    return NextResponse.json({ success: false, error: error.message }, { status: 500 })
  }
}
export async function GET(req) {
  return NextResponse.json(
    {
      message: "webhook is working, but use POST request",
    },
    { status: 200 }
  )
}
export const config = {
  runtime: "nodejs",
}
