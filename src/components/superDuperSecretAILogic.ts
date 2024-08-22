const dogResponses = ['Wa-rf', 'Wa-rk', 'Ba-rk', 'Bo-rk', 'Awo-', 'Aro-'];
const dogPunctuation = ['...', '...?', '?', '!', '~'];

type GeneratedResponse = {
    sent: string,
    reply: string,
};

export const generateChatResponse = (inputText: string) => {
    const hash = inputText.split('').reduce((sum, letter) => sum + letter.charCodeAt(0), 0);
    const selectedResponse = dogResponses[hash % dogResponses.length] + dogPunctuation[hash % dogPunctuation.length];
    const addedVowels = hash % 5;

    let parsedResponse = 'Grr';
    const rudenessDetected = inputText.toLowerCase().includes('bad');
    let filteredInput = 'You are such a good boy!';

    if (!rudenessDetected) {
        parsedResponse = selectedResponse.replace(/(\w)-/g, (_, letter) => {
            let string = letter;
            for (let i = 0; i < addedVowels; i++) {
                string = string + letter;
            }
            return string;
        });
        filteredInput = inputText;
    }

    return {
        sent: filteredInput,
        reply: parsedResponse,
    };
};

export const sendMessage = (inputText: string) => new Promise<GeneratedResponse>(
    resolve => setTimeout(() => resolve(generateChatResponse(inputText)), 3000)
);