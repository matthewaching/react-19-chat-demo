import { useState } from "react";

const dogResponses = ['Wa-rf', 'Wa-rk', 'Ba-rk', 'Bo-rk', 'Awo-', 'Aro-'];
const dogPunctuation = ['...', '...?', '?', '!', '~'];

const ChatContainer = () => {
    const [textInput, setTextInput] = useState('');
    const [messages, setMessages] = useState<{ text: string, outbound: boolean }[]>([]);

    const handleSubmit = async (event: React.MouseEvent) => {
        event?.preventDefault();
        setMessages((prevMessages) => [...prevMessages, { text: textInput, outbound: true }]);

        const sendMessage = (input: string) => new Promise<{ message: string }>(resolve => {
            const hash = input.split('').reduce((sum, letter) => sum + letter.charCodeAt(0), 0);
            const selectedResponse = dogResponses[hash % dogResponses.length] + dogPunctuation[hash % dogPunctuation.length];
            const addedVowels = hash % 5;
            const parsedResponse = selectedResponse.replace(/(\w)-/g, (_, letter) => {
                let string = letter;
                for (let i = 0; i < addedVowels; i++) {
                    string = string + letter;
                }
                return string;
            });

            setTimeout(() => resolve({ message: parsedResponse }), 3000);
        });

        const response = await sendMessage(textInput);

        if (response?.message) {
            setMessages((prevMessages) => [...prevMessages, { text: response.message, outbound: false }]);
        }
    };

    return (
        <div className='chatContainer'>
            <div className='chatHeader'>
                <div className='chatAvatar'>A</div>
                <span>Header</span>
            </div>
            <div className='chatMessages'>
                {messages.map(message => <span className={message.outbound ? 'messageSent' : 'messageReceived'}>{message.text}</span>)}
            </div>
            <div className='chatFooter'>
                <form className='chatForm'>
                    <input value={textInput} onChange={(event => setTextInput(event.target.value))} />
                    <button type='submit' onClick={(event: React.MouseEvent) => handleSubmit(event)}>
                        <i className='ri-send-plane-2-fill' />
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ChatContainer;