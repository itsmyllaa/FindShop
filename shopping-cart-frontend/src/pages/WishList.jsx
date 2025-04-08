import React, { useState } from "react";
import { Trash2 } from "lucide-react";
import "./wishlist.css"; // Importa o CSS com a animação

const Wishlist = () => {
    const [wishlist, setWishlist] = useState([
        { id: 1, name: "Óculos de lente arco-íris" },
        { id: 2, name: "Vinil do Pink Floyd" },
        { id: 3, name: "Luz de LED psicodélica" },
    ]);

    const removeItem = (id) => {
        setWishlist(wishlist.filter((item) => item.id !== id));
    };

    return (
        <div className="wishlist-bg min-h-screen flex flex-col items-center justify-center text-lime-300 p-6">
            <h1 className="text-4xl font-bold mb-10 text-fuchsia-400 breathing-text">
                ✨ 🌀 Wishlist 🌀 ✨
            </h1>
            <ul className="w-full max-w-xl space-y-6">
                {wishlist.map((item) => (
                    <li
                        key={item.id}
                        className="breathing-card bg-gradient-to-r from-fuchsia-800 via-indigo-700 to-purple-600 text-white rounded-3xl p-5 flex justify-between items-center shadow-2xl transition-transform duration-300 hover:scale-105 hover:rotate-1"
                    >
                        <span className="text-xl">{item.name}</span>
                        <button
                            onClick={() => removeItem(item.id)}
                            className="text-yellow-300 hover:text-red-500"
                        >
                            <Trash2 />
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Wishlist;
