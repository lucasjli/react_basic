import CloseButton from 'react-bootstrap/CloseButton';
import {deleteItemById} from "../logic/actions.jsx";
import {triggerToast} from "./Notification.jsx";
import React from "react";

function DeleteButton({item, fetchData}) {
    return (
        <CloseButton onClick={() => {
            deleteItemById(item.id).then(r => {
                if (r.status === 200) {
                    triggerToast(item.itemname + " has been successfully deleted!");
                    console.log("Successfully deleted");
                    fetchData();
                }
            }).catch(err => {
                console.log("Error deleting item:", err);
            });
        }} />
    );
}

export default DeleteButton;
