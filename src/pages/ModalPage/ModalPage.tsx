import React, {useState} from 'react';
import {Modal, Button} from 'ui-kit';
import './ModalPage.scss';

export const ModalPage = () => {
    const [isOpenModal ,setIsOpenModal] = useState(false);

    const handleModalOpen = () => {
        setIsOpenModal(true);
    }
    const handleCloseModal = () => {
        setIsOpenModal(false);
    }

    const handleModalSubmit = () => {
        setIsOpenModal(false);
    }
    return (
        <div className='ModalPage'>
            <h2>Modal</h2>
            <Button onClick={handleModalOpen}>Open modal</Button>
            <Modal isOpen={isOpenModal} onClose={handleCloseModal}>
                <Modal.Header>
                    <h2>Title</h2>
                </Modal.Header>
                <Modal.Content>Contents</Modal.Content>
                <Modal.Footer
                    buttonSubmitText='Choise'
                    onSubmit={handleModalSubmit}
                ></Modal.Footer>
            </Modal>
        </div>
    );
};
