import { prisma } from "@prisma/client";

export async function GET(req, res) {
    try {
        // Get all cards
        const cards = await prisma.card.findMany();

        // Return the cards
        return new Response(JSON.stringify(cards), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify(error), { status: 500 });
    }
}

export default async function handler(req, res) {
    switch (req.method) {
        case "GET":
            // Get all cards
            const cards = await prisma.card.findMany();

            return new Response(JSON.stringify(cards), { status: 200 });

        case "POST":
            // Get data from request
            const requestData = req.body;

            // Ensure the data is an array
            const cardsData = Array.isArray(requestData) ? requestData : [requestData];

            // ! Check if the data is valid

            // Create new cards
            const newCards = await prisma.$transaction(
                cardsData.map(card => prisma.card.create({ data: card }))
            );

            return new Response(JSON.stringify(newCards), { status: 201 });
        default:
            res.status(405).send("Method not allowed");
            break;
    }
}
