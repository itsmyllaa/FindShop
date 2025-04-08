import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ItemList from "./pages/ItemList";
import MapPage from "./pages/MapPage";
import Wishlist from './pages/Wishlist';
import CriticalItems from './pages/CriticalItems';

const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/list" element={<ItemList />} />
                <Route path="/map" element={<MapPage />} />
                <Route path="/wishlist" element={<Wishlist />} />
                <Route path="/critical" element={<CriticalItems />} />
            </Routes>
        </Router>
    );
};

export default App;
