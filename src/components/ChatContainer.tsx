import { useState } from "react";
import EmojiMenu from "./EmojiMenu/EmojiMenu";
import { sendMessage } from "./superDuperSecretAIGeneratedLogic";
import ChatConversation from "./ChatConversation";

type Theme = 'apple' | 'android' | '???';

export type Message = {
    text: string,
    outbound: boolean,
    theme: Theme,
    temp?: boolean,
};

const ChatContainer = () => {
    const [textInput, setTextInput] = useState('');
    const [messages, setMessages] = useState<Message[]>([]);
    const [theme, setTheme] = useState<Theme>('???');

    const handleThemeChange = () => {
        setTheme(prevTheme => {
            const themes: Theme[] = ['android', 'apple', '???'];

            return themes[(themes.findIndex(option => option === prevTheme) + 1) % 3];
        });
    };

    const handleSubmit = async (event: React.MouseEvent) => {
        // Hmm, why isn't my submit isn't working?
        event?.preventDefault();

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
            <ChatConversation messages={messages} />
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