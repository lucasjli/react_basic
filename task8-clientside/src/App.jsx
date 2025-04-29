import { useState } from 'react'
import './App.css'
import AddItemModal from "./logic/AddItemModal.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemsTable from "./components/ItemsTable.jsx";
import AddButton from "./components/AddButton.jsx";

function App() {

    const [showModal, setShowModal] = useState(false);
    const [refreshFlag, setRefreshFlag] = useState(false);

    const handleAddClick = () => {
        setShowModal(true);
    };

    const handleModalClose = () => {
        setShowModal(false);
    };

    const handleItemAdded = () => {
        setRefreshFlag(prev => !prev);
        setShowModal(false);
    };

    return (
        <>
            <h1>Items Information</h1>
            <ItemsTable refreshFlag={refreshFlag}/>
            <div onClick={handleAddClick}>
                <AddButton/>
            </div>
            {showModal && <AddItemModal onClose={handleModalClose} onItemAdded={handleItemAdded}/>}
        </>
    )
}

export default App
