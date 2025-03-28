import { NextResponse } from "next/server"

export async function POST(req) {
  try {
    console.log("WebHook Recieved Done")
    const body = await req.json()
    console.log("📩 New Event Received:", body)

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (error) {
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
