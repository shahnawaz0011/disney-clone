import { app, HttpRequest, HttpResponseInit, InvocationContext } from "@azure/functions";
import { OpenAI } from 'openai'

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
})
console.log('opennnnnnnnnnnnnnnnnniiiii')

export async function getAISuggestionYoutube(request: HttpRequest, context: InvocationContext): Promise<HttpResponseInit> {
    context.log(`Http function processed request for url "${request.url}"`);

    const term = request.query.get('term')
    console.log('********************************************************************8')

    // const name = request.query.get('name') || await request.text() || 'world';

    const completion = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages: [{
            role: "system",
            content: `you are a digital video assistant working for services such as Netflix, Disney Plus & Amazon Prime Video.
            Your job is to provide suggestions based on the videos the user specifies. Provide an quircky breakdown of what the user should 
            watch next ! It should only list the names of the films after the introduction. Keep the response short and sweet! Always list at 
            least 3 films as suggestions.`
        },
        {
            role: "user",
            content: `I like ${term}`,
        },
        ]
    })

    console.log(completion.choices[0]);


    return { body: completion.choices[0].message.content || "No Suggestions"};
};


app.http('getAISuggestionYoutube', {
    methods: ['GET'],
    authLevel: 'anonymous',
    handler: getAISuggestionYoutube
});
