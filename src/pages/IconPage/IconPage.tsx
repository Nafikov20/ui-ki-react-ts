import React from 'react';
import { Icon } from 'ui-kit'
import './IconPage.scss'

export const IconPage = () => {
    return (
        <div className='IconPage'>
            <h2>Icon</h2>
            <Icon type='Svg'/>
            <Icon type='Prev'/>
            <Icon type='Next'/>
        </div>
    );
};
