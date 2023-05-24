import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
// import Navbar from './components/Navbar';
import List from './components/List';
import { response } from './Response';
import { useParams } from 'react-router-dom';
const people = [...response.data];

function App() {
    return (
        <div className="App">
            <Routes>
                <Route
                    path="/"
                    element={<List personList={people} />}
                />
                <Route
                    path="/navigator"
                    element={<List personList={people} />}
                />
            </Routes>
        </div>
    );
}

export default App;
