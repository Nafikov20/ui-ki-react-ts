import React, {ReactNode} from 'react';
import {Header, MenuPanel} from 'components';
import './Layout.scss';
import {NavLink} from "react-router-dom";
import {ROUTES} from "../../routes";

export interface ILayout {
    children?: ReactNode
}

export const Layout:React.FC<ILayout> = ({children}) => {
    return (
        <div className='layout'>
            <MenuPanel />
            <Header />
            <div className='layout-container'>
                <NavLink
                    className={({ isActive, isPending }) =>
                        isActive ? "layout-container__back-active" : "layout-container__back"
                    }
                    to={ROUTES.HOME}
                >
                    Back
                </NavLink>
                {children}
            </div>
        </div>
    );
};
