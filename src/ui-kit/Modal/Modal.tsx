import React, {JSX, ReactNode, useEffect, useState} from 'react';
import {default as ReactModal} from 'react-responsive-modal'
import classNames from "classnames";
import { Button, Icon } from 'ui-kit';
import 'react-responsive-modal/styles.css'
import './Modal.scss'

export type IModalSize = 'medium';

export interface IModalProps {
    className?: string;
    children?: ReactNode;
    size?: IModalSize;
    isOpen: boolean;
    onClose: () => void;
}

export const Modal = ({
    className,
    children,
    size,
    isOpen ,
    onClose
}: IModalProps): JSX.Element => {
    const [styles, setStyles] = useState();
    const defaultClassNames = {
        modal: classNames('ModalDefault', {
            ModalDefault__medium: size === 'medium',
        }),
        closeButton: classNames('ModalDefaultCloseButton'),
        className,
    };

    useEffect(() => {
        const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
        if (isOpen && scrollbarWidth) {
            const _styles = {
                modal: { marginRight: `${scrollbarWidth + 16}px`},
            };
            // @ts-ignore
            setStyles(_styles);
            document.body.classList.add('Modal__open');
            document.body.style.paddingRight = `${scrollbarWidth}px`;

            return () => {
                // @ts-ignore
                setStyles({});
                document.body.classList.remove('Modal__open');
                document.body.style.removeProperty('padding-right');
            }
        }
    }, [isOpen])

    return (
        <ReactModal
            classNames={defaultClassNames}
            center
            closeIcon={<Icon type='Close'/>}
            styles={styles}
            open={isOpen}
            onClose={onClose}
        >
            <div className='Modal'>{children}</div>
        </ReactModal>
    );
};

export interface IModalHeaderProps {
    className?: string;
    align?: 'start' | 'center' | 'end';
    children?: ReactNode;
}

Modal.Header = ({className, align, children}: IModalHeaderProps): JSX.Element => {
    return (
        <div className={classNames('ModalHeader', className, {
            ModalHeader__start: align === 'start',
            ModalHeader__center: align === 'center',
            ModalHeader__end: align === 'end',
        })}>
            {children}
        </div>
    )
}

export interface IModalContentProps {
    className?: string;
    children?: ReactNode;
}

Modal.Content = ({className, children}: IModalContentProps): JSX.Element => {
    return (
        <div className={classNames('ModalContent', className)}>
            {children}
        </div>
    )
}

export interface IModalFooterProps {
    className?: string;
    buttonSubmitText?: string;
    onSubmit?: () => void;
}

Modal.Footer = ({buttonSubmitText, className, onSubmit}: IModalFooterProps): JSX.Element => {
    return (
        <div className={classNames('ModalFooter', className)}>
            <Button onClick={onSubmit}>
                {buttonSubmitText}
            </Button>
        </div>
    )
}