import { createContext, useState } from 'react';

export const UsernameContext = createContext();

export function UsernameProvider({ children }) {
    const [username, setUsername] = useState(sessionStorage.getItem('username') ?? '');

    const handleSignIn = (newUsername) => {
        sessionStorage.setItem('username', newUsername);
        setUsername(newUsername);
    };

    const handleSignOut = () => {
        sessionStorage.removeItem('username');
        setUsername('');
    };

    return (
        <UsernameContext.Provider value={{ username, handleSignIn, handleSignOut }}>
            {children}
        </UsernameContext.Provider>
    );
}