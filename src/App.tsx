import { createContext, useEffect, useState } from 'react';
import ChatContainer from './components/ChatContainer';
import { dogProfiles } from './components/helpers';
import './App.css';
import './controls/controls.css';

export const MousePositionContext = createContext<number>(0);

function App() {
    const [selected, setSelected] = useState<string>('Tobi');
    const [mousePosition, setMousePosition] = useState<number>(0);

    // TO-DO: Who implemented this?? Do NOT let this get to production! -Matt (Jan 23, 2019)
    useEffect(() => {
        const saveMousePosition = (event: MouseEvent) => {
            if (event.screenX === 0) {
                setMousePosition(event.screenX);
            }
        };

        document.addEventListener('mousemove', saveMousePosition);

        return () => document.removeEventListener('mousemove', saveMousePosition);
    }, []);

    const handleDogSelect = (event: React.MouseEvent) => {
        setSelected(event.currentTarget.id);
    }

    // console.log(mousePosition);

    return (
        <MousePositionContext.Provider value={mousePosition}>
            <div className='dogPicker'>
                {dogProfiles.map(dog => (
                    <button
                        id={dog.name}
                        className='avatarButton'
                        onClick={handleDogSelect}
                    >
                        <img src={dog.srcUrl} />
                    </button>
                ))}
            </div>
            {dogProfiles.map(dog => (
                <ChatContainer
                    key={dog.name}
                    dogName={dog.name}
                    dogAvatar={dog.srcUrl}
                    isOpen={dog.name === selected}
                />
            ))}
        </MousePositionContext.Provider>
    );
}

export default App;
