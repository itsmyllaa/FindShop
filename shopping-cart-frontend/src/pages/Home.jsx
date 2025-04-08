import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-pink-500 via-yellow-400 to-green-400 flex flex-col items-center justify-center text-center px-6">
            <h1 className="text-5xl font-extrabold text-white drop-shadow-lg mb-6">
                Lista de Compras Inteligente 🛒
            </h1>
            <p className="text-white text-lg max-w-xl mb-8">
                Organize suas compras com inteligência. Receba notificações com os melhores preços e aproveite os dias ideais para economizar!
            </p>
            <Link to="/login">
                <button className="bg-white text-pink-600 hover:bg-pink-100 px-8 py-3 rounded-full text-lg font-semibold shadow-lg transition duration-300">
                    Começar
                </button>
            </Link>
        </div>
    );
};

export default Home;
