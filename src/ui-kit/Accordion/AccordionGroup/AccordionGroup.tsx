import React, {ReactNode} from 'react';
import './AccordionGroup.scss'

export interface IAccordionGroupProps {
    children?: ReactNode;
    title?: string;
}

export const AccordionGroup: React.FC<IAccordionGroupProps> = ({title = '', children}) => {
    return (
        <div className='AccordionGroup'>
            {title && <div className='AccordionGroup-Title'>{title}</div>}
            {children}
        </div>
    );
};

