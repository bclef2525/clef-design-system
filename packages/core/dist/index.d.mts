import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "outline" | "ghost";
    size?: "small" | "medium" | "large";
    className?: string;
    isLoading?: boolean;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
}
declare const Button: React.FC<ButtonProps>;

interface Theme {
    colors?: {
        primary?: {
            50?: string;
            100?: string;
            200?: string;
            300?: string;
            400?: string;
            500?: string;
            600?: string;
            700?: string;
            800?: string;
            900?: string;
        };
        [key: string]: any;
    };
    spacing?: {
        [key: string]: string;
    };
    borderRadius?: {
        [key: string]: string;
    };
    [key: string]: any;
}

interface ThemeProviderProps {
    theme?: Theme;
    children: React.ReactNode;
}
declare const ThemeContext: React.Context<Theme>;
declare const ThemeProvider: React.FC<ThemeProviderProps>;

export { Button, type ButtonProps, type Theme, ThemeContext, ThemeProvider };
