import Table from 'react-bootstrap/Table';
import EditButton from "./EditButton.jsx";
import CloseButton from "react-bootstrap/CloseButton";

function BasicExample() {
    return (
        <Table striped bordered hover>
            <thead>
            <tr>
                <th>ID</th>
                <th>Item Name</th>
                <th>Category</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>1</td>
                <td>Item 1</td>
                <td>C1</td>
                <td>12.02</td>
                <td>10</td>
                <td colSpan={2}>
                    <EditButton/>
                    <CloseButton/>
                </td>
            </tr>
            </tbody>
        </Table>
    );
}

export default BasicExample;