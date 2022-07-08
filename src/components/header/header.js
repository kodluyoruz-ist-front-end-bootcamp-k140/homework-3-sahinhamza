import React, { useContext } from "react";
import ThemeContext from "../../themes/themes";

// header information
export function Header() {
    const theme = useContext(ThemeContext)
    return (
        <nav className="navbar" style={theme}>
            <div className="container-fluid d-flex justify-content-center">
                <a className="navbar-brand" href="!#" style={theme}>KODLUYORUZ</a>
            </div>
        </nav>
    )
}