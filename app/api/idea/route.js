import Idea from "@models/idea";
import { connectToDatabase } from "@utils/database";

export const GET = async () => {
  try {
    await connectToDatabase();

    const ideas = await Idea.find({}).populate("creator");

    return new Response(JSON.stringify(ideas), { status: 200 });
  } catch (error) {
    return new Response("Failed to find ideas", { status: 500 });
  }
};
