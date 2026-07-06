import React from "react";
import "./AppLayout.css"
import { NavLink } from "react-router-dom";


export const AppLayout = ({ children }: React.PropsWithChildren) => {
    return (
        <div className="layout_base">
            <div className="layout_header">
                <NavLink to='/'>Página incial</NavLink>
                <NavLink to='/sobre'>Sobre</NavLink>
            </div>

            <hr className="layout_divider" />

            {children}
        </div>
    );
}