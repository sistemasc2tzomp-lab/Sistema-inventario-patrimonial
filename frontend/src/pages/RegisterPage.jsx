import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Shield, Mail, Lock, User, Loader2, ArrowRight, Building } from 'lucide-react';

const RegisterPage = () => {
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
            navigate('/login');
        }, 1500);
    };

    return (
        <div className="min-h-screen bg-slate-950 flex flex-col justify-center items-center px-6 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary-600/10 blur-[100px] rounded-full -ml-48 -mt-48"></div>
            
            <div className="w-full max-w-md animate-fade-in py-12">
                <div className="text-center mb-10">
                    <Link to="/" className="inline-flex items-center gap-2 mb-6">
                        <div className="w-12 h-12 bg-primary-600 rounded-xl flex items-center justify-center shadow-lg shadow-primary-600/20">
                            <Shield className="text-white" size={28} />
                        </div>
                        <span className="text-2xl font-bold text-white">SIPM SaaS</span>
                    </Link>
                    <h2 className="text-3xl font-bold text-white mb-2">Solicitar Acceso</h2>
                    <p className="text-slate-400">Regístrese para gestionar el patrimonio de su área</p>
                </div>

                <div className="glass p-8 rounded-3xl relative">
                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div className="grid grid-cols-1 gap-5">
                            <div>
                                <label className="block text-sm font-medium text-slate-300 mb-2">Nombre Completo</label>
                                <div className="relative">
                                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500">
                                        <User size={20} />
                                    </span>
                                    <input 
                                        type="text" 
                                        required
                                        className="w-full bg-slate-900/50 border border-slate-700/50 rounded-xl py-3 pl-12 pr-4 text-white focus:outline-none focus:border-primary-600 transition-all font-sans"
                                        placeholder="Juan Pérez García"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-300 mb-2">Correo Institucional</label>
                                <div className="relative">
                                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500">
                                        <Mail size={20} />
                                    </span>
                                    <input 
                                        type="email" 
                                        required
                                        className="w-full bg-slate-900/50 border border-slate-700/50 rounded-xl py-3 pl-12 pr-4 text-white focus:outline-none focus:border-primary-600 transition-all font-sans"
                                        placeholder="juan.perez@municipio.gob.mx"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-300 mb-2">Departamento / Área</label>
                                <div className="relative">
                                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500">
                                        <Building size={20} />
                                    </span>
                                    <select className="w-full bg-slate-900/50 border border-slate-700/50 rounded-xl py-3 pl-12 pr-4 text-white focus:outline-none focus:border-primary-600 transition-all appearance-none cursor-pointer">
                                        <option value="">Seleccione área...</option>
                                        <option value="sistemas">Sistemas</option>
                                        <option value="finanzas">Finanzas</option>
                                        <option value="obras">Obras Públicas</option>
                                        <option value="seguridad">Seguridad</option>
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-300 mb-2">Contraseña</label>
                                <div className="relative">
                                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500">
                                        <Lock size={20} />
                                    </span>
                                    <input 
                                        type="password" 
                                        required
                                        className="w-full bg-slate-900/50 border border-slate-700/50 rounded-xl py-3 pl-12 pr-4 text-white focus:outline-none focus:border-primary-600 transition-all font-sans"
                                        placeholder="••••••••"
                                    />
                                </div>
                            </div>
                        </div>

                        <button 
                            disabled={isLoading}
                            className="w-full bg-primary-600 hover:bg-primary-500 disabled:opacity-50 text-white font-bold py-4 rounded-xl transition-all shadow-xl shadow-primary-600/20 flex items-center justify-center gap-2 group mt-4"
                        >
                            {isLoading ? (
                                <Loader2 className="animate-spin" size={24} />
                            ) : (
                                <>
                                    Crear Cuenta
                                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                                </>
                            )}
                        </button>
                    </form>
                </div>

                <p className="text-center mt-8 text-slate-500 text-sm">
                    ¿Ya tiene acceso? <Link to="/login" className="text-primary-400 font-bold hover:text-primary-300 transition-colors">Iniciar sesión</Link>
                </p>
            </div>
        </div>
    );
};

export default RegisterPage;
