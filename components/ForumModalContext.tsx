'use client';

import React, { createContext, useContext, useState } from 'react';

const ForumModalContext = createContext<{
    visible: boolean;
    toggleModal: () => void;
} | null>(null);

export const ForumModalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [visible, setVisible] = useState(false);

    const toggleModal = () => {
        setVisible((prev) => !prev);
    };
    

return (
        <ForumModalContext.Provider value={{ visible, toggleModal }}>
            {children}
        </ForumModalContext.Provider>
    );
};

export const useForumModal = () => {
    const context = useContext(ForumModalContext);
    if (!context) {
        throw new Error('useModal must be used within a ForumModalProvider');
    }
    return context;
}