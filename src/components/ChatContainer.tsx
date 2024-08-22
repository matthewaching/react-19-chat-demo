import { useState } from "react";
import EmojiMenu from "./EmojiMenu/EmojiMenu";
import { sendMessage } from "./superDuperSecretAILogic";
import ChatConversation from "./ChatConversation";
import FormButton from "./FormButton";

type Theme = 'apple' | 'android' | '???';

export type Message = {
    text: string,
    outbound: boolean,
    theme: Theme,
    temp?: boolean,
};

type Props = {
    dogName: string,
    dogAvatar: string,
    isOpen: boolean,
};

const ChatContainer = ({ dogName, dogAvatar, isOpen }: Props) => {
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

        if (response) {
            setMessages((prevMessages) => [...prevMessages, { text: response.sent, outbound: true, theme: theme }]);
            setMessages((prevMessages) => [...prevMessages, { text: response.reply, outbound: false, theme: theme }]);
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

    // Exercise #4: Transitions
    // if (dogName === 'Odie') {
    //     stallComponent(30);
    //     stallComponent(30);
    //     stallComponent(30);
    //     stallComponent(30);
    //     stallComponent(30);
    // }

    return isOpen && (
        <div className='chatContainer'>
            <div className='chatHeader'>
                <div className='headerAvatar'>
                    <img src={dogAvatar} />
                </div>
                <span>{dogName}</span>
                <button className='headerButton' onClick={handleThemeChange}>
                    <i className={icon} />
                </button>
            </div>
            <ChatConversation messages={messages} />
            <div className='chatFooter'>
                <EmojiMenu onEmojiSelected={(emoji: string) => setTextInput(prevInput => prevInput + emoji)} />
                <form className='chatForm'>
                    <input value={textInput} onChange={(event => setTextInput(event.target.value))} />
                    <FormButton handleSubmit={handleSubmit} />
                </form>
            </div>
        </div >
    );
};

export default ChatContainer;