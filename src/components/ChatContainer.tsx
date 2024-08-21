import { useLayoutEffect, useRef, useState } from "react";
import EmojiMenu from "./EmojiMenu/EmojiMenu";
import ChatMessage from "./ChatMessage";

const dogResponses = ['Wa-rf', 'Wa-rk', 'Ba-rk', 'Bo-rk', 'Awo-', 'Aro-'];
const dogPunctuation = ['...', '...?', '?', '!', '~'];

type Theme = 'apple' | 'android' | '???';

type Message = {
    text: string,
    outbound: boolean,
    theme: Theme,
};

const ChatContainer = () => {
    const [textInput, setTextInput] = useState('');
    const [messages, setMessages] = useState<Message[]>([]);
    const [theme, setTheme] = useState<Theme>('???');

    const chatBodyRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        if (chatBodyRef.current) {
            chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight - chatBodyRef.current.clientHeight;
        }
    }, [messages]);

    const handleThemeChange = () => {
        setTheme(prevTheme => {
            const themes: Theme[] = ['android', 'apple', '???'];

            return themes[(themes.findIndex(option => option === prevTheme) + 1) % 3];
        });
    };

    const handleSubmit = async (event: React.MouseEvent) => {
        // Hmm, why isn't my submit isn't working?
        event?.preventDefault();

        const sendMessage = (inputText: string) => new Promise<{ replyText: string }>(resolve => {
            const hash = inputText.split('').reduce((sum, letter) => sum + letter.charCodeAt(0), 0);
            const selectedResponse = dogResponses[hash % dogResponses.length] + dogPunctuation[hash % dogPunctuation.length];
            const addedVowels = hash % 5;
            const parsedResponse = selectedResponse.replace(/(\w)-/g, (_, letter) => {
                let string = letter;
                for (let i = 0; i < addedVowels; i++) {
                    string = string + letter;
                }
                return string;
            });

            setTimeout(() => resolve({ replyText: parsedResponse }), 3000);
        });

        const response = await sendMessage(textInput);

        if (response?.replyText) {
            setMessages((prevMessages) => [...prevMessages, { text: textInput, outbound: true, theme: theme }]);
            setMessages((prevMessages) => [...prevMessages, { text: response.replyText, outbound: false, theme: theme }]);
            setTextInput('');
        }
    };

    let icon = '';

    if (theme === 'apple') {
        icon = 'ri-apple-fill';
    } else if (theme === 'android') {
        icon = 'ri-android-fill';
    } else if (theme === '???') {
        icon = 'ri-skull-2-fill';
    }

    return (
        <div className='chatContainer'>
            <div className='chatHeader'>
                <div className='headerAvatar'>A</div>
                <span>Header</span>
                <button className='headerButton' onClick={handleThemeChange}>
                    <i className={icon} />
                </button>
            </div>
            <div className='chatBody' ref={chatBodyRef}>
                {messages.map(message => <ChatMessage text={message.text} outbound={message.outbound} theme={message.theme} />)}
                {/* <div className='messageReceived loadingMessage'>...</div> */}
            </div>
            <div className='chatFooter'>
                <EmojiMenu onEmojiSelected={(emoji: string) => setTextInput(prevInput => prevInput + emoji)} />
                <form className='chatForm'>
                    <input value={textInput} onChange={(event => setTextInput(event.target.value))} />
                    <button type='submit' onClick={(event: React.MouseEvent) => handleSubmit(event)}>
                        <i className='ri-send-plane-2-fill' />
                    </button>
                </form>
            </div>
        </div >
    );
};

export default ChatContainer;