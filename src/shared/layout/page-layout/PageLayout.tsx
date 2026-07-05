import type React from "react";
import PageLayoutStyles from "./PageLayout.module.css"

interface IPageLayoutProps {
    title: string;
    children: React.ReactNode;
}

export const PageLayout = ({ children, title }: IPageLayoutProps) => {
    return (
        <div className={PageLayoutStyles.PageLayoutContainer}>
            <div className={PageLayoutStyles.PageContext}>
                <div className={PageLayoutStyles.PageTitle}>
                    <h1>{title}</h1>
                </div>

                <div>
                    {children}
                </div>
            </div>
        </div>
    );
}