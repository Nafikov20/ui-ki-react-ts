import React from "react";
import { NavLink } from "react-router-dom";
import { ROUTES } from "routes";
import "./MenuPanel.scss";

export const MenuPanel: React.FC = () => {
    return (
        <nav className="MenuPanel">
            <div className="MenuPanel-Brand">
                <div className="MenuPanel-BrandTitle">UI</div>
                <div className="MenuPanel-BrandVersion">v1.0.0</div>
            </div>
            <div className="MenuPanel-Title">Components</div>
            <div className="MenuPanel-List">

                <NavLink
                    className={({ isActive, isPending }) =>
                        isActive ? "MenuPanel-ListItem__active" : "MenuPanel-ListItem"
                    }
                    to={ROUTES.BUTTON}
                >
                    Button
                </NavLink>

                <NavLink
                    className={({ isActive, isPending }) =>
                        isActive ? "MenuPanel-ListItem__active" : "MenuPanel-ListItem"
                    }
                    to={ROUTES.ICON}
                >
                    Icon
                </NavLink>

                <NavLink
                    className={({ isActive, isPending }) =>
                        isActive ? "MenuPanel-ListItem__active" : "MenuPanel-ListItem"
                    }
                    to={ROUTES.ACCORDION}
                >
                    Accordion
                </NavLink>

                <NavLink
                    className={({ isActive, isPending }) =>
                        isActive ? "MenuPanel-ListItem__active" : "MenuPanel-ListItem"
                    }
                    to={ROUTES.MODAL}
                >
                    Modal
                </NavLink>

                <NavLink
                    className={({ isActive, isPending }) =>
                        isActive ? "MenuPanel-ListItem__active" : "MenuPanel-ListItem"
                    }
                    to={ROUTES.CHECKBOX}
                >
                    Checkbox
                </NavLink>

            </div>
        </nav>
    )
};