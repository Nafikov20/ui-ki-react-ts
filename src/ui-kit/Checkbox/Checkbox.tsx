import React from 'react';
import {Icon} from "ui-kit";
import classNames from "classnames";
import './Checkbox.scss'

export interface ICheckboxProps {
    className?: string;
    id: string;
    label?: string;
    value?: string;
    isChecked?: boolean;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Checkbox: React.FC<ICheckboxProps> = ({
    className,
    id,
    label,
    value,
    isChecked,
    onChange
}) => {
    return (
        <label className={classNames('Checkbox', className, {
            Checkbox__active: isChecked
        })} htmlFor={id}>
            <span className='Checkbox-Inner'>
                <Icon className='Checkbox-Icon' type='Check' />
                <input
                    className='Checkbox-Input'
                    checked={isChecked}
                    name={label}
                    value={label}
                    onChange={onChange}
                    type="checkbox"
                />
            </span>
            {value && <span className="Checkbox-Label">{value}</span>}
        </label>
    );
};

