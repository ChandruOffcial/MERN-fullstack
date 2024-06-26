import axios from 'axios';
import { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export const UserContext = createContext({});

export function UserContextProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

    // Example: Add console logs to your useEffect
    useEffect(() => {
        if (!user) {
            axios.get('/profile').then(({ data }) => {
                setUser(data);
                setLoading(false)
            }).catch((error) => {
                console.error("Error fetching user profile:", error);
            });
        }
    }, [user]);


    return (
        <UserContext.Provider value={{ user, setUser, loading, setLoading }}>
            {children}
        </UserContext.Provider>
    );
}

UserContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
