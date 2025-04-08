// src/pages/Login.jsx
import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-500 via-pink-500 to-yellow-500 flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl shadow-2xl p-8 w-full max-w-md">
                <h2 className="text-3xl font-bold text-center text-purple-700 mb-6">Entrar</h2>

                <form className="space-y-4">
                    <div>
                        <label className="block text-gray-700">Email</label>
                        <input
                            type="email"
                            className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                            placeholder="Digite seu email"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700">Senha</label>
                        <input
                            type="password"
                            className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                            placeholder="Digite sua senha"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-purple-600 text-white p-3 rounded-xl hover:bg-purple-700 transition"
                    >
                        Entrar
                    </button>
                </form>

                <p className="text-center text-gray-600 mt-4">
                    Não tem uma conta?{" "}
                    <Link to="/register" className="text-purple-700 font-bold hover:underline">
                        Cadastre-se
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
