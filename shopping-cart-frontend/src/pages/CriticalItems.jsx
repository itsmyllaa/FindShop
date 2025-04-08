import React from "react";
import { AlertCircle, Flame } from "lucide-react";
import "./critical.css";

const criticalData = [
    { id: 1, name: "Arroz", quantity: 1 },
    { id: 2, name: "Feijão", quantity: 0 },
    { id: 3, name: "Sabonete", quantity: 1 },
];

const CriticalItems = () => {
    return (
        <div className="critical-container">
            <h2 className="critical-title"><Flame size={32} /> Itens Críticos</h2>
            <ul className="critical-list">
                {criticalData.map(item => (
                    <li key={item.id} className="critical-item">
                        <AlertCircle color="red" />
                        <span>{item.name}</span>
                        <span className="qty">({item.quantity} restante)</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CriticalItems;
