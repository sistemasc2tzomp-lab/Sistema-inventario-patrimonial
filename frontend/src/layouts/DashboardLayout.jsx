import React, { useState } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { 
    LayoutDashboard, 
    Layers, 
    Users, 
    Settings, 
    LogOut, 
    Menu, 
    X, 
    Bell, 
    Search,
    ChevronDown,
    Shield,
    Archive,
    History,
    FileText
} from 'lucide-react';

const SidebarItem = ({ icon: Icon, label, path, active }) => (
    <Link 
        to={path} 
        className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
            active 
            ? 'bg-primary-600 text-white shadow-lg shadow-primary-600/20' 
            : 'text-slate-400 hover:bg-slate-800 hover:text-white'
        }`}
    >
        <Icon size={20} />
        <span className="font-medium">{label}</span>
    </Link>
);

const DashboardLayout = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const location = useLocation();

    const menuItems = [
        { icon: LayoutDashboard, label: 'Dashboard', path: '/dashboard' },
        { icon: Archive, label: 'Inventario', path: '/inventario' },
        { icon: Layers, label: 'Departamentos', path: '/admin/departamentos' },
        { icon: Users, label: 'Responsables', path: '/admin/responsables' },
        { icon: History, label: 'Movimientos', path: '/inventario/movimientos' },
        { icon: FileText, label: 'Reportes', path: '/admin/reportes' },
    ];

    const adminItems = [
        { icon: Users, label: 'Usuarios', path: '/admin/usuarios' },
        { icon: Shield, label: 'Roles y Permisos', path: '/admin/roles' },
        { icon: Settings, label: 'Configuración', path: '/admin/configuracion' },
    ];

    return (
        <div className="flex min-h-screen bg-slate-950 text-slate-100">
            {/* Sidebar */}
            <aside className={`fixed inset-y-0 left-0 z-50 w-72 bg-slate-900 border-r border-slate-800 transition-transform duration-300 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0`}>
                <div className="flex flex-col h-full p-6">
                    <div className="flex items-center gap-3 pb-8 mb-8 border-b border-slate-800">
                        <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center">
                            <Shield size={22} className="text-white" />
                        </div>
                        <span className="text-xl font-bold">SIPM SaaS</span>
                        <button className="lg:hidden ml-auto" onClick={() => setIsSidebarOpen(false)}>
                            <X size={20} />
                        </button>
                    </div>

                    <div className="space-y-1 mb-8">
                        <p className="px-4 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-4">Menú Principal</p>
                        {menuItems.map((item) => (
                            <SidebarItem 
                                key={item.path}
                                active={location.pathname === item.path}
                                {...item}
                            />
                        ))}
                    </div>

                    <div className="space-y-1 mt-auto">
                        <p className="px-4 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-4">Administración</p>
                        <SidebarItem 
                            icon={Users} 
                            label="Usuarios" 
                            path="/admin/usuarios"
                            active={location.pathname === '/admin/usuarios'}
                        />
                        <SidebarItem 
                            icon={Settings} 
                            label="Ajustes" 
                            path="/admin/configuracion"
                            active={location.pathname === '/admin/configuracion'}
                        />
                        <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-rose-400 hover:bg-rose-500/10 transition-all mt-4 font-medium">
                            <LogOut size={20} />
                            Cerrar Sesión
                        </button>
                    </div>
                </div>
            </aside>

            {/* Main Content */}
            <main className={`flex-1 flex flex-col transition-all duration-300 ${isSidebarOpen ? 'lg:ml-72' : ''}`}>
                {/* Header */}
                <header className="h-20 bg-slate-900/50 backdrop-blur-md border-b border-slate-800 px-8 flex items-center justify-between sticky top-0 z-40">
                    <div className="flex items-center gap-4">
                        <button 
                            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                            className="p-2 hover:bg-slate-800 rounded-lg lg:hidden"
                        >
                            <Menu size={20} />
                        </button>
                        <div className="relative group hidden md:block">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-primary-500 transition-colors" size={18} />
                            <input 
                                type="text" 
                                placeholder="Buscar en el sistema..."
                                className="bg-slate-800/50 border border-slate-700/50 rounded-xl py-2 pl-10 pr-4 w-64 text-sm focus:outline-none focus:ring-2 focus:ring-primary-600/50 focus:border-primary-600 transition-all"
                            />
                        </div>
                    </div>

                    <div className="flex items-center gap-6">
                        <button className="relative p-2 text-slate-400 hover:text-white transition-colors">
                            <Bell size={20} />
                            <span className="absolute top-2 right-2 w-2 h-2 bg-primary-500 rounded-full border-2 border-slate-900"></span>
                        </button>
                        
                        <div className="h-8 w-px bg-slate-800"></div>

                        <div className="flex items-center gap-3 group cursor-pointer">
                            <div className="text-right hidden sm:block">
                                <p className="text-sm font-bold">Admin Municipal</p>
                                <p className="text-xs text-slate-500 uppercase tracking-tighter">Administrador</p>
                            </div>
                            <div className="w-10 h-10 rounded-xl bg-slate-800 overflow-hidden border border-slate-700 group-hover:border-primary-500 transition-all">
                                <img src={`https://ui-avatars.com/api/?name=Admin+Municipal&background=2563eb&color=fff`} alt="avatar" />
                            </div>
                            <ChevronDown size={16} className="text-slate-500 group-hover:text-primary-500 transition-all" />
                        </div>
                    </div>
                </header>

                <div className="p-8 pb-12 overflow-y-auto h-[calc(100vh-80px)]">
                    <Outlet />
                </div>
            </main>
        </div>
    );
};

export default DashboardLayout;
