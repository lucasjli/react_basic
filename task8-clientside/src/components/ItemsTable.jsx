import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import EditButton from "./EditButton.jsx";
import axios from 'axios';
import store from "../store/index.jsx";
import { deleteItemById } from "../logic/actions.jsx";
import DeleteButton from "./DeleteButton.jsx";
import {triggerToast} from "./Notification.jsx"; // Import axios

function BasicExample({ refreshFlag }) {
    // State to store the items data
    const [items, setItems] = useState([]);
    // State to handle loading or errors
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fetch data from API using the retrieveAllItems method
    const fetchData = async () => {
        try {
            const response = await axios.get(store.urls.retrieveAllItems);
            setItems(response.data); // Set the data into state
            setLoading(false); // Set loading to false after data is fetched
        } catch (error) {
            console.log(error);
            setError('Table is empty, please add some items'); // Set error state
            setLoading(false); // Set loading to false even if there's an error
        }
    };

    useEffect(() => {
        fetchData(); // Re-fetch data whenever refreshFlag changes
    }, [refreshFlag]); // Re-fetch data when refreshFlag changes

    if (loading) {
        return <div>Loading...</div>; // Show loading message while fetching data
    }

    if (error) {
        return <div>{error}</div>; // Show error message if there was an issue
    }

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
            {items.map(item => (
                <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.itemname}</td>
                    <td>{item.category}</td>
                    <td>{item.price}</td>
                    <td>{item.quantity}</td>
                    <td>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <EditButton item={item} onItemUpdated={fetchData} />
                            <DeleteButton onClick={() => {
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
                        </div>
                    </td>
                </tr>
            ))}
            </tbody>
        </Table>
    );
}

export default BasicExample;
