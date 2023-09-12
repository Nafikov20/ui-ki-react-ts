import React, {DOMAttributes} from 'react';
import classNames from "classnames";
import './Icon.scss'
import {IconType, iconTypes} from "./IconType";

export interface IIconProps extends DOMAttributes<HTMLDivElement>{
    className?: string;
    type: IconType;
}

const getIcon = (type: IconType): JSX.Element =>
    iconTypes.get(type) as JSX.Element

export const Icon: React.FC<IIconProps> = ({
       children,
       className,
       type,
        ...rest
    }) => {
        return (
            <div className={classNames('Icon', className)} {...rest}>{getIcon(type)}</div>
        );
    };