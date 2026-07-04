import React from "react";
import "./AppLayout.css"


export const AppLayout = ({ children }: React.PropsWithChildren) => {
    return (
        <div className="layout_base">
            <div className="layout_header">
                <a>Página incial</a>
                <a>Usuários</a>
            </div>

            <hr className="layout_divider" />

            {children}
        </div>
    );
}