"use client"
import React, { createContext, useState, ReactNode, FC, useContext, useEffect } from "react";

interface ThemeContextType {
    theme: string;  
    setTheme: (theme: string) => void;  
    toggle: () => void;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const getFromLocalStorage = (): string => {
    const value = localStorage.getItem("theme");
    return value || "light";
};

interface ThemeContextProviderProps {
    children: ReactNode;
}

export const ThemeContextProvider: FC<ThemeContextProviderProps> = ({ children }) => {
    const [theme, setTheme] = useState(() => getFromLocalStorage());

    const toggle = () => {
    setTheme(theme === "light" ? "dark" : "light"); 
    };

    useEffect(() => {
        localStorage.setItem("theme", theme)
    }, [theme])

    const value = { theme, setTheme, toggle };

    return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};