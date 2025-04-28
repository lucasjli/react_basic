import {useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import StaticExample from "./components/Modal.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemsTable from "./components/ItemsTable.jsx";
import ItemForm from "./components/ItemForm.jsx";
import AddButton from "./components/AddButton.jsx";

function App() {
    // const [count, setCount] = useState(0)

    return (
        <>
            <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', paddingBottom: '10px' }}>
                    <h2 style={{ margin: 0 }}>Items</h2>
                    <div style={{ marginTop: '50px' }}>
                        <AddButton />
                    </div>
                </div>

                <ItemsTable/>
            </div>
        </>
    )
}

export default App
