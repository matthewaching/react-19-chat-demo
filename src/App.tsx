import { createContext, useEffect, useState } from 'react';
import './App.css';
import ChatContainer from './components/ChatContainer';

export const MousePositionContext = createContext<number>(0);

function App() {
    const [mousePosition, setMousePosition] = useState<number>(0);

    useEffect(() => {
        const saveMousePosition = (event: MouseEvent) => {
            // Exercise ??
            if (event.screenX === 0) {
                setMousePosition(event.screenX);
            }
        };

        document.addEventListener('mousemove', saveMousePosition);

        return () => document.removeEventListener('mousemove', saveMousePosition);
    }, []);

    // console.log(mousePosition);

    return (
        <MousePositionContext.Provider value={mousePosition}>
            <ChatContainer />
        </MousePositionContext.Provider>
    );
}

export default App;
