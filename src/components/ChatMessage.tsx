import { useContext } from "react";
import { MousePositionContext } from "../App";

type Props = {
    text: string,
    outbound: boolean,
    theme: 'apple' | 'android' | '???',
}

const ChatMessage = ({ text, outbound, theme }: Props) => {
    const mousePosition = useContext(MousePositionContext);

    let color = 'inherit';

    if (theme === 'apple') {
        color = 'linear-gradient(rgb(50, 165, 254), rgb(40, 155, 254))';
    } else if (theme === 'android') {
        color = 'linear-gradient(rgb(0, 235, 80), rgb(0, 220, 70))';
    } else if (theme === '???') {
        color = `#${mousePosition.toString(16).padStart(6, '0')}`;
    }

    // Exercise ??: Conditionally render Context with 'use'
    // stallComponent(10);

    return (
        <div
            className={outbound ? 'messageSent' : 'messageReceived'}
            style={outbound ? { background: color } : undefined}
        >
            {text}
        </div>
    );
};

export default ChatMessage;