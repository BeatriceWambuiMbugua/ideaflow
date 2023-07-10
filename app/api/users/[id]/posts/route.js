import Idea from "@models/idea";
import { connectToDatabase } from "@utils/database";

export const GET = async (request, {params}) => {
  try {
    await connectToDatabase();

    const ideas = await Idea.find({creator: params.id}).populate("creator");

    return new Response(JSON.stringify(ideas), { status: 200 });
  } catch (error) {
    return new Response("Failed to find ideas", { status: 500 });
  }
};
