import React from 'react';
import { Layout } from 'components';
import {Route, Routes} from "react-router";
import {ROUTES} from "../../routes";
import {AccordionPage, ButtonPage, HomePage, IconPage, ModalPage, CheckboxPage} from 'pages'
import './App.scss'
export const App:React.FC = () => {
    const handleButtonClick = (e: React.MouseEvent) => {
        alert('Button cklick')
    }
    return (
        <div className='App'>
            <Layout>
                <Routes>
                    <Route path={ROUTES.HOME} element={<HomePage />} />
                    <Route path={ROUTES.BUTTON} element={<ButtonPage />} />
                    <Route path={ROUTES.ICON} element={<IconPage />} />
                    <Route path={ROUTES.ACCORDION} element={<AccordionPage />} />
                    <Route path={ROUTES.MODAL} element={<ModalPage />} />
                    <Route path={ROUTES.CHECKBOX} element={<CheckboxPage />} />
                </Routes>
            </Layout>
        </div>
    );
};

