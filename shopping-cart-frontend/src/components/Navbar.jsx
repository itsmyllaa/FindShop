import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-black bg-opacity-40 p-4 flex justify-between items-center text-white">
            <h1 className="text-2xl font-bold">Colorz Market</h1>
            <div className="space-x-4">
                <Link to="/" className="hover:underline">Home</Link>
                <Link to="/login" className="hover:underline">Login</Link>
                <Link to="/register" className="hover:underline">Cadastro</Link>
                <Link to="/list" className="hover:underline">Lista</Link>
                <Link to="/critical" className="hover:underline">Críticos</Link>
                <Link to="/wishlist" className="hover:underline">Desejos</Link>
                <Link to="/map" className="hover:underline">Mapa</Link>
            </div>
        </nav>
    );
};

export default Navbar;