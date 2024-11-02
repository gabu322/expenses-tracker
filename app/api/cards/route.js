import { prisma } from "@/prisma/client";

export async function GET(req, res) {
    try {

        // Get all cards
        const cards = await prisma.card.findMany({
            include: {
                CreditCard: true,
                DebitCard: true
            }
        });

        // Return the cards
        return new Response(JSON.stringify(cards), { status: 200 });
    } catch (error) {
        console.log(error)
        return new Response(JSON.stringify(error), { status: 500 });
    }
}

export async function POST(req, res) {
    try {
        // Get data from request
        const requestData = await req.json();

        // Create new card with nested credit and debit card data (if provided)
        const newCard = await prisma.card.create({
            data: {
                name: requestData.name,
                description: requestData.description,
                acceptsCredit: requestData.acceptsCredit,
                acceptsDebit: requestData.acceptsDebit,
                number: requestData.cardNumber,
                expiration: requestData.expiration,
                cvv: requestData.cvv,

                // Conditionally create CreditCard if credit info is provided
                CreditCard: requestData.acceptsCredit && requestData.creditLimit ? {
                    create: {
                        creditLimit: requestData.creditLimit,
                        currentCredit: requestData.currentCredit || 0.0
                    }
                } : undefined,

                // Conditionally create DebitCard if debit info is provided
                DebitCard: requestData.acceptsDebit && requestData.balance ? {
                    create: {
                        balance: requestData.balance
                    }
                } : undefined
            }
        });

        // Return the new card
        return new Response(JSON.stringify(newCard), { status: 201 });
    } catch (error) {
        // Log detailed error to the console
        console.error('Error creating card:', error);

        // Detailed logging for debugging
        console.error('Error details:', error.message);
        console.error('Error stack:', error.stack);

        // Return the error message and stack trace to the client (for debugging purposes)
        return new Response(
            JSON.stringify({
                error: 'Error creating card',
                message: error.message,
                stack: error.stack
            }),
            { status: 500 }
        );
    }
}
