import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ItemForm from "../components/ItemForm.jsx";
import Form from "react-bootstrap/Form";
import {Col, Row} from "react-bootstrap";
import {useState} from "react";
import { createItem } from "./actions.jsx";

function AddItemModal({ onClose, onItemAdded }) {
    const [show, setShow] = useState(true);

    const handleClose = () => {
        setShow(false);
        if (onClose) {
            onClose();
        }
    };

    const handleFormSubmit = async (formData) => {
        try {
            const response = await createItem(formData);
            if (response.status === 201) {
                console.log('Item created successfully');
                if (onItemAdded) {
                    onItemAdded();
                }
            }
        } catch (error) {
            console.error('Error creating item:', error);
        }
    };

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header>
                <Modal.Title>Add item</Modal.Title>
            </Modal.Header>
            <Modal.Body className="d-flex justify-content-center">
                <ItemForm onSubmit={handleFormSubmit}/>
            </Modal.Body>
            <Modal.Footer className="d-flex justify-content-center">
                <Button variant="primary" type="submit" form="itemForm">Confirm</Button>
                <Button variant="secondary" onClick={handleClose}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default AddItemModal;