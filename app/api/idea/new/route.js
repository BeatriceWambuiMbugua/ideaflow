import Idea from "@models/idea"
import { connectToDatabase } from "@utils/database"

export const POST = async (request) => {
    const {userId, idea, tag} = await request.json()

    try {
        await connectToDatabase()
        const newIdea = new Idea({
            creator: userId, idea, tag
        })
        console.log(newIdea);
        await newIdea.save(); 

        return new Response(JSON.stringify(newIdea), {status: 201})
    } catch (error) {
        return new Response ("Failed to create a new idea", {status: 500})
        
    }
}
