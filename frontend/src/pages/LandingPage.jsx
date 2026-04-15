import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Package, BarChart3, QrCode, Search, UserCheck } from 'lucide-react';

const LandingPage = () => {
    return (
        <div className="min-h-screen bg-slate-950 text-white font-sans selection:bg-primary-500 selection:text-white">
            {/* Header / Nav */}
            <nav className="fixed top-0 w-full z-50 glass px-6 py-4 flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center">
                        <Shield size={24} />
                    </div>
                    <span className="text-xl font-bold tracking-tight">SIPM SaaS</span>
                </div>
                <div className="flex gap-6 items-center">
                    <Link to="/login" className="px-4 py-2 rounded-lg hover:bg-white/10 transition-colors">Iniciar Sesión</Link>
                    <Link to="/register" className="px-5 py-2 bg-primary-600 hover:bg-primary-500 rounded-lg font-medium transition-all shadow-lg shadow-primary-600/20">Registrarse</Link>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="pt-32 pb-20 px-6 max-w-7xl mx-auto text-center relative overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-600/10 blur-[120px] -z-10 rounded-full"></div>
                
                <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-white via-white to-primary-400 bg-clip-text text-transparent">
                    Gestión Inteligente del <br /><span className="text-primary-500">Patrimonio Municipal</span>
                </h1>
                <p className="text-xl text-slate-400 max-w-3xl mx-auto mb-10 leading-relaxed">
                    La plataforma SaaS definitiva para el control, seguimiento y auditoría de activos institucionales. Modernice su inventario con tecnología QR y nube.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link to="/register" className="px-8 py-4 bg-primary-600 text-lg font-bold rounded-xl hover:bg-primary-500 transition-all transform hover:scale-105 shadow-xl shadow-primary-600/30">
                        Comenzar Ahora
                    </Link>
                    <a href="#features" className="px-8 py-4 bg-slate-900 border border-slate-800 text-lg font-bold rounded-xl hover:bg-slate-800 transition-all">
                        Explorar Funciones
                    </a>
                </div>
            </section>

            {/* Features Grid */}
            <section id="features" className="py-20 px-6 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <FeatureCard 
                        icon={<Package className="text-primary-500" size={32} />}
                        title="Inventario Centralizado"
                        desc="Gestione todos los activos desde un panel único con detalles técnicos, facturas y ubicación."
                    />
                    <FeatureCard 
                        icon={<QrCode className="text-blue-400" size={32} />}
                        title="Códigos QR Únicos"
                        desc="Generación automática de QR para consulta inmediata y etiquetado físico de activos."
                    />
                    <FeatureCard 
                        icon={<Shield className="text-emerald-400" size={32} />}
                        title="Resguardos Digitales"
                        desc="Control estricto de responsables y asignaciones con firmas de entrega y vigencia."
                    />
                    <FeatureCard 
                        icon={<BarChart3 className="text-purple-400" size={32} />}
                        title="Reportes Avanzados"
                        desc="Visualización de datos por departamento, estado de conservación y valor patrimonial."
                    />
                    <FeatureCard 
                        icon={<Search className="text-amber-400" size={32} />}
                        title="Consulta Pública"
                        desc="Portal transparente para la verificación ciudadana del estatus de bienes públicos."
                    />
                    <FeatureCard 
                        icon={<UserCheck className="text-pink-400" size={32} />}
                        title="Multitenancy & Roles"
                        desc="Gestión institucional organizada por departamentos y permisos granulares."
                    />
                </div>
            </section>

            {/* Footer */}
            <footer className="py-12 border-t border-slate-900 text-center text-slate-500">
                <p>© 2026 SIPM SaaS - Sistema de Inventario Patrimonial Municipal. Todos los derechos reservados.</p>
            </footer>
        </div>
    );
};

const FeatureCard = ({ icon, title, desc }) => (
    <div className="p-8 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-primary-500/50 transition-all hover:-translate-y-1 group">
        <div className="w-16 h-16 rounded-xl bg-slate-800 flex items-center justify-center mb-6 group-hover:bg-primary-600/10 transition-colors">
            {icon}
        </div>
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <p className="text-slate-400 leading-relaxed">{desc}</p>
    </div>
);

export default LandingPage;
