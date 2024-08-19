const ChatContainer = () => {
    return (
        <div className='chatContainer'>
            <div className='chatHeader'>
                <div className='chatAvatar'>A</div>
                <span>Header</span>
            </div>
            <div className='chatMessages'>Messages</div>
            <div className='chatInput'>
                <form>
                    <input></input>
                    <button></button>
                </form>
            </div>
        </div>
    );
};

export default ChatContainer;