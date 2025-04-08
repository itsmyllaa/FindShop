// src/pages/ItemList.jsx
import React, { useState } from "react";

const ItemList = () => {
    const [items, setItems] = useState([]);
    const [inputValue, setInputValue] = useState("");

    const addItem = () => {
        if (inputValue.trim() !== "") {
            const newItem = {
                name: inputValue,
                type: "desejo", // pode ser "critico" ou "desejo"
            };
            setItems([...items, newItem]);
            setInputValue("");
        }
    };

    const toggleType = (index) => {
        const updatedItems = [...items];
        updatedItems[index].type =
            updatedItems[index].type === "desejo" ? "critico" : "desejo";
        setItems(updatedItems);
    };

    const removeItem = (index) => {
        const updatedItems = items.filter((_, i) => i !== index);
        setItems(updatedItems);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-yellow-300 via-pink-400 to-purple-500 text-white px-4 py-10 flex flex-col items-center">
            <h1 className="text-4xl font-bold mb-6"> 🛍️ </h1>
            <div className="flex gap-2 mb-6">
                <input
                    type="text"
                    placeholder="Digite o nome do item"
                    className="px-4 py-2 rounded-md text-black w-64"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
                <button
                    onClick={addItem}
                    className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-md"
                >
                    Adicionar
                </button>
            </div>

            <ul className="w-full max-w-md space-y-4">
                {items.map((item, index) => (
                    <li
                        key={index}
                        className={`flex justify-between items-center p-4 rounded-md shadow-lg ${
                            item.type === "critico"
                                ? "bg-red-600"
                                : "bg-blue-600"
                        }`}
                    >
                        <span className="font-semibold">{item.name}</span>
                        <div className="flex gap-2">
                            <button
                                onClick={() => toggleType(index)}
                                className="bg-white text-black px-2 py-1 rounded-md text-sm"
                            >
                                {item.type === "critico" ? "Crítico" : "Desejo"}
                            </button>
                            <button
                                onClick={() => removeItem(index)}
                                className="bg-black px-2 py-1 rounded-md text-sm"
                            >
                                ❌
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ItemList;
