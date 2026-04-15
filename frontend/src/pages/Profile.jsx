import React from 'react';
import { User, Mail, Shield, ShieldCheck, MapPin, Phone, Edit2, Camera } from 'lucide-react';

const Profile = () => {
    const user = {
        name: 'Administrador Municipal',
        email: 'admin@sistema.local',
        role: 'Administrador del Sistema',
        department: 'Dirección de Tecnologías',
        phone: '241 123 4567',
        location: 'Palacio Municipal, Planta Alta',
        joinDate: '10 de Marzo, 2026'
    };

    return (
        <div className="max-w-5xl mx-auto space-y-8 animate-fade-in">
            <div className="relative h-48 rounded-3xl bg-gradient-to-r from-primary-600 to-indigo-600 overflow-hidden shadow-2xl shadow-primary-600/20">
                <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
            </div>

            <div className="px-8 -mt-24 relative z-10 flex flex-col md:flex-row items-end gap-6 mb-8">
                <div className="relative group">
                    <div className="w-40 h-40 rounded-3xl bg-slate-900 border-8 border-slate-950 overflow-hidden shadow-2xl group-hover:border-primary-500 transition-all">
                        <img 
                            src={`https://ui-avatars.com/api/?name=Admin+Municipal&background=2563eb&color=fff&size=160`} 
                            alt="avatar" 
                        />
                    </div>
                    <button className="absolute bottom-4 right-4 p-2 bg-primary-600 text-white rounded-xl shadow-lg hover:scale-110 transition-all opacity-0 group-hover:opacity-100">
                        <Camera size={18} />
                    </button>
                </div>
                <div className="flex-1 pb-4">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div>
                            <h1 className="text-3xl font-bold text-white mb-1">{user.name}</h1>
                            <p className="flex items-center gap-2 text-primary-400 font-medium tracking-wide border px-3 py-1 rounded-full border-primary-500/30 bg-primary-500/10 w-fit">
                                <ShieldCheck size={16} />
                                {user.role}
                            </p>
                        </div>
                        <button className="px-6 py-3 bg-slate-800 hover:bg-slate-700 rounded-xl font-bold transition-all flex items-center gap-2 text-sm">
                            <Edit2 size={16} />
                            Editar Perfil
                        </button>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Details */}
                <div className="lg:col-span-2 glass p-8 rounded-3xl space-y-8">
                    <div>
                        <h2 className="text-xl font-bold mb-6 flex items-center gap-3">
                            <User className="text-primary-500" size={24} />
                            Información de Contacto
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <ProfileItem label="Correo Electrónico" value={user.email} icon={Mail} />
                            <ProfileItem label="Teléfono / Extensión" value={user.phone} icon={Phone} />
                            <ProfileItem label="Departamento" value={user.department} icon={Shield} />
                            <ProfileItem label="Ubicación Física" value={user.location} icon={MapPin} />
                        </div>
                    </div>

                    <div className="pt-8 border-t border-slate-800/50">
                        <h2 className="text-xl font-bold mb-6 flex items-center gap-3 text-emerald-400">
                            <ShieldCheck size={24} />
                            Permisos & Seguridad
                        </h2>
                        <div className="flex flex-wrap gap-2">
                            {['Control Total', 'Gestión Usuarios', 'Reportes Críticos', 'Auditoría', 'Resguardos', 'Firma Digital'].map((p) => (
                                <span key={p} className="px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-bold rounded-lg uppercase">
                                    {p}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Sidebar profile */}
                <div className="space-y-8">
                    <div className="glass p-8 rounded-3xl border-t-4 border-primary-600">
                        <h3 className="text-lg font-bold mb-4">Actividad Reciente</h3>
                        <div className="space-y-4">
                            <div className="flex gap-4 items-start">
                                <div className="w-2 h-2 rounded-full bg-primary-500 mt-2 shrink-0"></div>
                                <p className="text-sm text-slate-400">Inicio de sesión desde IP: 192.168.1.45</p>
                            </div>
                            <div className="flex gap-4 items-start">
                                <div className="w-2 h-2 rounded-full bg-slate-700 mt-2 shrink-0"></div>
                                <p className="text-sm text-slate-500">Actualización de inventario - MUN-001</p>
                            </div>
                            <div className="flex gap-4 items-start">
                                <div className="w-2 h-2 rounded-full bg-slate-700 mt-2 shrink-0"></div>
                                <p className="text-sm text-slate-500">Generación de reporte trimestral</p>
                            </div>
                        </div>
                    </div>

                    <div className="glass p-8 rounded-3xl">
                        <h3 className="text-lg font-bold mb-2">Miembro desde</h3>
                        <p className="text-slate-400 text-sm">{user.joinDate}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

const ProfileItem = ({ label, value, icon: Icon }) => (
    <div className="space-y-1">
        <p className="text-xs text-slate-500 font-bold uppercase tracking-widest flex items-center gap-2">
            <Icon size={12} />
            {label}
        </p>
        <p className="text-slate-200 font-medium">{value}</p>
    </div>
);

export default Profile;
