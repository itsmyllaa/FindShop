// src/pages/Cadastro.jsx
import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-green-400 via-blue-500 to-purple-500 flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl shadow-2xl p-8 w-full max-w-md">
                <h2 className="text-3xl font-bold text-center text-blue-700 mb-6">Criar Conta</h2>

                <form className="space-y-4">
                    <div>
                        <label className="block text-gray-700">Nome</label>
                        <input
                            type="text"
                            className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Digite seu nome"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700">Email</label>
                        <input
                            type="email"
                            className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Digite seu email"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700">Senha</label>
                        <input
                            type="password"
                            className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Crie uma senha"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700">Confirmar Senha</label>
                        <input
                            type="password"
                            className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Confirme sua senha"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white p-3 rounded-xl hover:bg-blue-700 transition"
                    >
                        Cadastrar
                    </button>
                </form>

                <p className="text-center text-gray-600 mt-4">
                    Já tem uma conta?{" "}
                    <Link to="/login" className="text-blue-700 font-bold hover:underline">
                        Faça login
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Register;
