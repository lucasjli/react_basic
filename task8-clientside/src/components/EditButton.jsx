import Button from 'react-bootstrap/Button';
import {useState} from "react";
import UpdateItemModal from "../logic/UpdateItemModal.jsx";

function EditButton({ item, onItemUpdated }) {
    const [showModal, setShowModal] = useState(false);

    const handleClick = () => {
        setShowModal(true);
    };

    const handleClose = () => {
        setShowModal(false);
    };

    return (
        <>
            <Button variant="primary" onClick={handleClick}>Edit</Button>
            {showModal && (
                <UpdateItemModal
                    onClose={handleClose}
                    onItemAdded={onItemUpdated}
                    item={item}
                />
            )}
        </>
    );
}

export default EditButton;