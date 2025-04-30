import Form from 'react-bootstrap/Form';
import {Col, Row} from "react-bootstrap";
import {useState, useEffect, forwardRef} from "react";
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';

const ItemForm = forwardRef(({ onSubmit, initialData }, ref) => {
    const [formData, setFormData] = useState({
        itemname: '',
        category: '',
        price: '',
        quantity: ''
    });

    const [showToast, setShowToast] = useState(false);
    const [toastMessage, setToastMessage] = useState('');

    useEffect(() => {
        if (initialData) {
            setFormData({
                itemname: initialData.itemname,
                category: initialData.category,
                price: initialData.price,
                quantity: initialData.quantity
            });
        }
    }, [initialData]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const validateForm = () => {
        if (!Number.isInteger(Number(formData.quantity))) {
            setToastMessage('Quantity should be an integer');
            setShowToast(true);
            return false;
        }
        return true;
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (validateForm() && onSubmit) {
            onSubmit(formData);
        }
    };

    return (
        <>
            <Form ref={ref} onSubmit={handleSubmit} id="itemForm">
                <Form.Group as={Row} className="mb-3" controlId="formItemName">
                    <Form.Label column sm="4">Item Name:</Form.Label>
                    <Col sm="8">
                        <Form.Control 
                            type="text" 
                            name="itemname"
                            value={formData.itemname}
                            onChange={handleChange}
                            placeholder="Enter item name"
                            required
                        />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formCategory">
                    <Form.Label column sm="4">Category:</Form.Label>
                    <Col sm="8">
                        <Form.Control 
                            type="text" 
                            name="category"
                            value={formData.category}
                            onChange={handleChange}
                            placeholder="Enter item category"
                            required
                        />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formPrice">
                    <Form.Label column sm="4">Price:</Form.Label>
                    <Col sm="8">
                        <Form.Control 
                            type="number" 
                            name="price"
                            value={formData.price}
                            onChange={handleChange}
                            placeholder="Enter item price"
                            required
                        />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formQuantity">
                    <Form.Label column sm="4">Quantity:</Form.Label>
                    <Col sm="8">
                        <Form.Control 
                            type="number"
                            step="1" 
                            name="quantity"
                            value={formData.quantity}
                            onChange={handleChange}
                            placeholder="Enter item quantity"
                            required
                        />
                    </Col>
                </Form.Group>
            </Form>

            <ToastContainer position="top-end" className="p-3">
                <Toast 
                    show={showToast} 
                    onClose={() => setShowToast(false)} 
                    delay={3000} 
                    autohide
                >
                    <Toast.Header>
                        <strong className="me-auto">Error</strong>
                    </Toast.Header>
                    <Toast.Body>{toastMessage}</Toast.Body>
                </Toast>
            </ToastContainer>
        </>
    );
});

export default ItemForm;