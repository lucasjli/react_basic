import React, { useState, useEffect } from 'react';
import { Toast, ToastContainer } from 'react-bootstrap';

let triggerToast; // export for external call

const Notification = () => {
    const [toast, setToast] = useState({ show: false, message: '' });

    useEffect(() => {
        triggerToast = (msg) => {
            setToast({ show: true, message: msg });
            setTimeout(() => {
                setToast({ show: false, message: '' });
            }, 3000); // autohide
        };
    }, []);

    return (
        <ToastContainer position="top-end" className="p-3">
            <Toast show={toast.show}>
                <Toast.Header closeButton={false}>
                    <strong className="me-auto">Notification</strong>
                </Toast.Header>
                <Toast.Body className="text-black">{toast.message}</Toast.Body>
            </Toast>
        </ToastContainer>
    );
};

export { Notification, triggerToast };
