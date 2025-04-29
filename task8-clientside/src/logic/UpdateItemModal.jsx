import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ItemForm from "../components/ItemForm.jsx";
import {useState, useRef} from "react";
import {updateItem} from "./actions.jsx";

function UpdateItemModal({ onClose, onItemAdded, item }) {
    const [show, setShow] = useState(true);
    const formRef = useRef(null);

    const handleClose = () => {
        setShow(false);
        if (onClose) {
            onClose();
        }
    };

    const handleFormSubmit = async (formData) => {
        try {
            const response = await updateItem({...formData, id: item.id});
            if (response.status === 200) {
                console.log('Item updated successfully');
                if (onItemAdded) {
                    onItemAdded();
                }
                handleClose();
            }
        } catch (error) {
            console.error('Error updating item:', error);
        }
    };

    const handleConfirm = () => {
        if (formRef.current) {
            formRef.current.requestSubmit();
        }
    };

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header className="d-flex justify-content-center">
                <Modal.Title>Edit item</Modal.Title>
            </Modal.Header>
            <Modal.Body className="d-flex justify-content-center">
                <ItemForm onSubmit={handleFormSubmit} initialData={item} ref={formRef}/>
            </Modal.Body>
            <Modal.Footer className="d-flex justify-content-center">
                <Button variant="primary" onClick={handleConfirm}>Confirm</Button>
                <Button variant="secondary" onClick={handleClose}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default UpdateItemModal;