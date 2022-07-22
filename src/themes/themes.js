import React from "react";

// theme informations
export const themes = {
    dark: {
        color: 'white',
        background: "grey",
    },
    light: {
        color: 'black',
        background: 'white'
    }
}

const ThemeContext = React.createContext(themes.light);
export default ThemeContext;