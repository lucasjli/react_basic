import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import EditButton from "./EditButton.jsx";
import CloseButton from "react-bootstrap/CloseButton";
import axios from 'axios';
import store from "../store/index.jsx";
import {deleteItemById} from "./actions.jsx"; // Import axios

function BasicExample() {
    // State to store the items data
    const [items, setItems] = useState([]);
    // State to handle loading or errors
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fetch data from API using the retrieveAllItems method
    useEffect(() => {
        const fetchData = async () => {
            try {
                // Fetch data using the retrieveAllItems method
                const response = await axios.get(store.urls.retrieveAllItems);
                setItems(response.data); // Set the data into state
                setLoading(false); // Set loading to false after data is fetched
            } catch (error) {
                console.log(error);
                setError('Error fetching data'); // Set error state
                setLoading(false); // Set loading to false even if there's an error
            }
        };

        fetchData();
    }, []); // Empty dependency array to only run once when the component mounts

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
                        <EditButton />
                        <CloseButton onClick={() => {
                            // console.log("delete item: " + item.id);
                            deleteItemById(item.id).then(r => {
                                if (r.status == 200) {
                                    console.log("successfully deleted");
                                }
                            })
                        }}/>
                    </td>
                </tr>
            ))}
            </tbody>
        </Table>
    );
}

export default BasicExample;
