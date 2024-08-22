import { useLayoutEffect, useRef } from "react";
import ChatMessage from "./ChatMessage";
import { Message } from "./ChatContainer";

type Props = { messages: Message[] };

const ChatConversation = ({ messages }: Props) => {
    const chatBodyRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        if (chatBodyRef.current) {
            chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight - chatBodyRef.current.clientHeight;
        }
    }, [messages]);

    return (
        <div className='chatBody' ref={chatBodyRef}>
            {messages.map(message => <ChatMessage text={message.text} outbound={message.outbound} theme={message.theme} />)}
            {/* <div className='messageReceived loadingMessage'>...</div> */}
        </div>
    );
};

export default ChatConversation;