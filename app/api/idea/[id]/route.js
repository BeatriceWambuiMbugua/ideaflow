//GET

import Idea from "@models/idea";
import { connectToDatabase } from "@utils/database";

export const GET = async (request, { params }) => {
  try {
    await connectToDatabase();

    const idea = await Idea.findById(params.id).populate("creator");
    if (!idea) return new Response("Idea not found", { status: 404 });

    return new Response(JSON.stringify(idea), { status: 200 });
  } catch (error) {
    return new Response("Failed to find ideas", { status: 500 });
  }
};

//Patch(update)
export const PATCH = async (request, { params }) => {
  const { idea, tag } = await request.json();

  try {
    await connectToDatabase();

    const existingIdea = await Idea.findById(params.id);
    if (!existingIdea) return new Response("Idea nor found", { status: 404 });

    existingIdea.idea = idea;
    existingIdea.tag = tag;

    await existingIdea.save();

    return new Response(JSON.stringify(existingIdea), { status: 200 });
  } catch (error) {
    return new Response("Failed to update prompt", { status: 500 });
  }
};

//Delete

export const DELETE = async (request, { params }) => {
 

  try {
    await connectToDatabase();

    await Idea.findByIdAndRemove(params.id);

    return new Response("Idea deleted Successfully", { status: 200 });
  } catch (error) {
    return new Response("Failed to delete idea", { status: 500 });
  }
};
