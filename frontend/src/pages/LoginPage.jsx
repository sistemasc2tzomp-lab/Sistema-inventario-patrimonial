import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Shield, Mail, Lock, Loader2, ArrowRight } from 'lucide-react';

const LoginPage = () => {
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        // Simulación de login
        setTimeout(() => {
            setIsLoading(false);
            navigate('/dashboard');
        }, 1500);
    };

    return (
        <div className="min-h-screen bg-slate-950 flex flex-col justify-center items-center px-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-600/10 blur-[100px] rounded-full -mr-48 -mt-48"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/5 blur-[100px] rounded-full -ml-48 -mb-48"></div>

            <div className="w-full max-w-md animate-fade-in">
                <div className="text-center mb-10">
                    <Link to="/" className="inline-flex items-center gap-2 mb-6">
                        <div className="w-12 h-12 bg-primary-600 rounded-xl flex items-center justify-center shadow-lg shadow-primary-600/20">
                            <Shield className="text-white" size={28} />
                        </div>
                        <span className="text-2xl font-bold text-white">SIPM SaaS</span>
                    </Link>
                    <h2 className="text-3xl font-bold text-white mb-2">Bienvenido de nuevo</h2>
                    <p className="text-slate-400">Ingrese sus credenciales para acceder al sistema</p>
                </div>

                <div className="glass p-8 rounded-3xl relative">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">Correo Electrónico</label>
                            <div className="relative">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500">
                                    <Mail size={20} />
                                </span>
                                <input 
                                    type="email" 
                                    required
                                    className="w-full bg-slate-900/50 border border-slate-700/50 rounded-xl py-3 pl-12 pr-4 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-primary-600/50 focus:border-primary-600 transition-all"
                                    placeholder="nombre@municipio.gob.mx"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex justify-between items-center mb-2">
                                <label className="block text-sm font-medium text-slate-300">Contraseña</label>
                                <a href="#" className="text-xs text-primary-400 hover:text-primary-300 transition-colors">¿Olvidó su contraseña?</a>
                            </div>
                            <div className="relative">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500">
                                    <Lock size={20} />
                                </span>
                                <input 
                                    type="password" 
                                    required
                                    className="w-full bg-slate-900/50 border border-slate-700/50 rounded-xl py-3 pl-12 pr-4 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-primary-600/50 focus:border-primary-600 transition-all"
                                    placeholder="••••••••"
                                />
                            </div>
                        </div>

                        <button 
                            disabled={isLoading}
                            className="w-full bg-primary-600 hover:bg-primary-500 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold py-4 rounded-xl transition-all shadow-xl shadow-primary-600/20 flex items-center justify-center gap-2 group"
                        >
                            {isLoading ? (
                                <Loader2 className="animate-spin" size={24} />
                            ) : (
                                <>
                                    Ingresar
                                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                                </>
                            )}
                        </button>
                    </form>
                </div>

                <p className="text-center mt-8 text-slate-500 text-sm">
                    ¿No tiene una cuenta? <Link to="/register" className="text-primary-400 font-bold hover:text-primary-300 transition-colors">Solicitar acceso</Link>
                </p>
            </div>
        </div>
    );
};

export default LoginPage;
