import React, {useState} from 'react';
import classNames from "classnames";
import {Icon} from "ui-kit";
import {SlideDown} from "react-slidedown";
import 'react-slidedown/lib/slidedown.css'
import './Accordion.scss'


export interface IAccordionProps {
    title?: string;
    isActive?: boolean;
    children?: React.ReactNode;
    className?: string;
}
export const Accordion: React.FC<IAccordionProps> = ({
     children,
     title,
     isActive = false,
     className
    }) => {
    const [isOpen, setIsOpen] = useState(isActive)

    const handleToggleAccordion = () => {
        setIsOpen(prevState => !isOpen)
    }
        return (
            <div className={classNames('Accordion', className, {
                'Accordion__active': isOpen
            })}
            >
                <div className='Accordion-Header' onClick={handleToggleAccordion}>
                    <div className='Accordion-HeaderTitle' >{title}</div>
                    <Icon className='Accordion-HeaderIcon' type='AccordionDown' />
                </div>
                <SlideDown className='Accordion-HeaderSlideDown'>
                    {isOpen && <div className='Accordion-Content'>{children}</div>}
                </SlideDown>
            </div>
        );
};
