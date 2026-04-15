import React from 'react';
import { 
    Package, 
    Users, 
    AlertTriangle, 
    TrendingUp, 
    Clock, 
    Plus,
    FileText,
    ArrowUpRight,
    ArrowDownRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

const StatCard = ({ icon: Icon, label, value, trend, trendValue, color }) => (
    <div className="glass p-6 rounded-2xl relative overflow-hidden group hover:border-primary-500/30 transition-all">
        <div className={`absolute top-0 right-0 w-24 h-24 -mr-8 -mt-8 opacity-10 blur-2xl rounded-full ${color}`}></div>
        <div className="flex justify-between items-start mb-4">
            <div className={`p-3 rounded-xl bg-slate-800 ${color.replace('bg-', 'text-')}`}>
                <Icon size={24} />
            </div>
            <div className={`flex items-center gap-1 text-sm font-bold ${trend === 'up' ? 'text-emerald-400' : 'text-rose-400'}`}>
                {trend === 'up' ? <ArrowUpRight size={16} /> : <ArrowDownRight size={16} />}
                {trendValue}
            </div>
        </div>
        <h3 className="text-slate-400 text-sm font-medium mb-1">{label}</h3>
        <p className="text-3xl font-bold">{value}</p>
    </div>
);

const DashboardHome = () => {
    return (
        <div className="space-y-8 animate-fade-in">
            {/* Page Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h1 className="text-3xl font-bold">Resumen General</h1>
                    <p className="text-slate-500">Bienvenido al sistema de inventario patrimonial.</p>
                </div>
                <div className="flex gap-3">
                    <button className="px-4 py-2 bg-slate-800 hover:bg-slate-700 rounded-xl flex items-center gap-2 transition-all font-medium">
                        <FileText size={18} />
                        Exportar Reporte
                    </button>
                    <Link to="/inventario/nuevo" className="px-4 py-2 bg-primary-600 hover:bg-primary-500 rounded-xl flex items-center gap-2 transition-all font-bold shadow-lg shadow-primary-600/20">
                        <Plus size={18} />
                        Nuevo Activo
                    </Link>
                </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatCard 
                    icon={Package}
                    label="Activos Totales"
                    value="2,543"
                    trend="up"
                    trendValue="+12%"
                    color="bg-primary-500"
                />
                <StatCard 
                    icon={Users}
                    label="Responsables"
                    value="184"
                    trend="up"
                    trendValue="+3%"
                    color="bg-purple-500"
                />
                <StatCard 
                    icon={AlertTriangle}
                    label="Resguardos Vencidos"
                    value="12"
                    trend="down"
                    trendValue="-4%"
                    color="bg-rose-500"
                />
                <StatCard 
                    icon={TrendingUp}
                    label="Valor Patrimonial"
                    value="$4.2M"
                    trend="up"
                    trendValue="+2.4%"
                    color="bg-emerald-500"
                />
            </div>

            {/* Content Bottom */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Recent Activity */}
                <div className="lg:col-span-2 glass p-8 rounded-3xl">
                    <div className="flex justify-between items-center mb-8">
                        <h2 className="text-xl font-bold">Últimos Movimientos</h2>
                        <Link to="/inventario/movimientos" className="text-primary-400 text-sm hover:underline">Ver todos</Link>
                    </div>
                    <div className="space-y-6">
                        {[1, 2, 3, 4].map((i) => (
                            <div key={i} className="flex items-center justify-between py-4 border-b border-slate-800/50 last:border-0 hover:bg-slate-800/20 px-2 rounded-xl transition-colors cursor-pointer">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center text-primary-500 font-bold">
                                        <Clock size={24} />
                                    </div>
                                    <div>
                                        <p className="font-bold text-slate-200">Laptop Dell Latitude 5420</p>
                                        <p className="text-sm text-slate-500 flex items-center gap-2">
                                            Asignado a: <span className="text-slate-400">Juan Pérez</span> • Hace 2 horas
                                        </p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                                        Asignación
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Quick Shortcuts / Alerts */}
                <div className="space-y-8">
                    <div className="glass p-8 rounded-3xl bg-primary-600/5 border-primary-500/20">
                        <h2 className="text-xl font-bold mb-4">Estado del Sistema</h2>
                        <div className="space-y-4">
                            <div className="flex justify-between text-sm">
                                <span className="text-slate-400">Base de Datos</span>
                                <span className="text-emerald-400 font-bold">Online</span>
                            </div>
                            <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                                <div className="bg-emerald-500 h-full w-[100%]"></div>
                            </div>
                            <div className="flex justify-between text-sm">
                                <span className="text-slate-400">Google Sheets Sync</span>
                                <span className="text-primary-400 font-bold">Sincronizado</span>
                            </div>
                            <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                                <div className="bg-primary-500 h-full w-[85%]"></div>
                            </div>
                        </div>
                    </div>

                    <div className="glass p-8 rounded-3xl">
                        <h2 className="text-xl font-bold mb-6">Alertas Críticas</h2>
                        <div className="space-y-4">
                            <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/20 flex gap-3">
                                <AlertTriangle className="text-rose-500 shrink-0" size={20} />
                                <div>
                                    <p className="text-sm font-bold text-rose-200">Facturas Pendientes</p>
                                    <p className="text-xs text-rose-400/80">4 activos no tienen factura digital cargada.</p>
                                </div>
                            </div>
                            <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 flex gap-3">
                                <Clock className="text-amber-500 shrink-0" size={20} />
                                <div>
                                    <p className="text-sm font-bold text-amber-200">Vigencias por Vencer</p>
                                    <p className="text-xs text-amber-400/80">8 resguardos vencen en los próximos 15 días.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardHome;
