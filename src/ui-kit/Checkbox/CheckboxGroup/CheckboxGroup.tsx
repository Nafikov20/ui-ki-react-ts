import React from 'react';
import classNames from "classnames";
import {Icon} from "../../index";


export  interface ICheckboxGroupProps {
    className?: string;
    checkedboxByGroup: any;
    nameGroup: string;
    id: string;
    label: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>, nameGroup: string) => void;
}

export const CheckboxGroup: React.FC<ICheckboxGroupProps> = ({
    className,
    checkedboxByGroup,
    nameGroup,
    id,
    label,
    onChange
}) => {
    const isChecked: boolean = checkedboxByGroup[nameGroup].includes(label);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange(event, nameGroup);
    };

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
                    onChange={handleChange}
                    type="checkbox"
                />
            </span>
            {label && <span className="Checkbox-Label">{label}</span>}
        </label>
    );
};
