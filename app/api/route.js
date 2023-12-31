import { main } from "../allFunctions";
import { NextResponse as res } from "next/server";

export async function POST(request) {
  const question = await request.json();
  try {
    const reply = await main(question.threadId, question.query);
    // console.log(reply);
    return res.json(reply);
  } catch (error) {
    // console.error("Error processing question:", error);
    return res.json({ error: "Internal Server Error" });
  }
}
