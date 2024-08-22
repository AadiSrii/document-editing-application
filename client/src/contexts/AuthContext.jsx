import React, { createContext, useContext, useState } from 'react';

// Create the AuthContext
const AuthContext = createContext();

// AuthProvider component
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null); // Replace with your authentication logic

    const login = (userData) => {
        setUser(userData); // Replace with your login logic
    };

    const logout = () => {
        setUser(null); // Replace with your logout logic
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

// Custom hook for using the AuthContext
export const useAuth = () => {
    return useContext(AuthContext);
};
