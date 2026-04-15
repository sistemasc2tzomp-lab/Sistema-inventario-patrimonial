import React from 'react';
import { 
    Search, 
    Filter, 
    Download, 
    Plus, 
    MoreHorizontal, 
    Edit, 
    Eye, 
    Trash2,
    QrCode
} from 'lucide-react';
import { Link } from 'react-router-dom';

const InventoryList = () => {
    const assets = [
        { id: 1, codigo: 'MUN-001', nombre: 'Silla Ejecutiva', categoria: 'Mobiliario', departamento: 'Sistemas', responsable: 'Carlos Ruiz', estado: 'Bueno' },
        { id: 2, codigo: 'MUN-002', nombre: 'Laptop Dell', categoria: 'Computo', departamento: 'Sistemas', responsable: 'Ana Lopez', estado: 'Excelente' },
        { id: 3, codigo: 'MUN-003', nombre: 'Escritorio Madera', categoria: 'Mobiliario', departamento: 'Administración', responsable: 'Pedro Soto', estado: 'Regular' },
        { id: 4, codigo: 'MUN-004', nombre: 'Impresora HP', categoria: 'Computo', departamento: 'Finanzas', responsable: 'Maria Garcia', estado: 'Bueno' },
    ];

    return (
        <div className="space-y-6 animate-fade-in">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-white">Inventario Patrimonial</h1>
                    <p className="text-slate-500">Gestión completa de los activos municipales</p>
                </div>
                <div className="flex gap-3">
                    <button className="px-4 py-2 bg-slate-800 hover:bg-slate-700 rounded-xl flex items-center gap-2 transition-all font-medium text-sm">
                        <Download size={18} />
                        Excel
                    </button>
                    <Link to="/inventario/nuevo" className="px-4 py-2 bg-primary-600 hover:bg-primary-500 rounded-xl flex items-center gap-2 transition-all font-bold text-sm shadow-lg shadow-primary-600/20">
                        <Plus size={18} />
                        Agregar Activo
                    </Link>
                </div>
            </div>

            {/* Filters */}
            <div className="glass p-4 rounded-2xl flex flex-col md:flex-row gap-4 items-center">
                <div className="relative flex-1 w-full">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
                    <input 
                        type="text" 
                        placeholder="Buscar por nombre, código o responsable..."
                        className="w-full bg-slate-900/50 border border-slate-700/50 rounded-xl py-2 pl-10 pr-4 text-sm focus:outline-none focus:border-primary-500 transition-all"
                    />
                </div>
                <div className="flex gap-2 w-full md:w-auto">
                    <button className="flex-1 md:flex-none px-4 py-2 bg-slate-800/50 border border-slate-700/50 rounded-xl flex items-center justify-center gap-2 text-sm hover:bg-slate-800 transition-all">
                        <Filter size={18} />
                        Filtros
                    </button>
                    <select className="flex-1 md:flex-none bg-slate-800/50 border border-slate-700/50 rounded-xl px-4 py-2 text-sm focus:outline-none">
                        <option>Categoría: Todas</option>
                        <option>Mobiliario</option>
                        <option>Computo</option>
                        <option>Vehículos</option>
                    </select>
                </div>
            </div>

            {/* Table */}
            <div className="glass rounded-3xl overflow-hidden border border-slate-800/50">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-slate-900 uppercase text-[10px] font-bold tracking-widest text-slate-500 border-b border-slate-800">
                                <th className="px-6 py-4">Código</th>
                                <th className="px-6 py-4">Nombre / Descripción</th>
                                <th className="px-6 py-4">Categoría</th>
                                <th className="px-6 py-4">Ubicación</th>
                                <th className="px-6 py-4">Responsable</th>
                                <th className="px-6 py-4 text-center">Acciones</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-800/50">
                            {assets.map((asset) => (
                                <tr key={asset.id} className="hover:bg-white/[0.02] transition-colors group">
                                    <td className="px-6 py-4">
                                        <span className="text-primary-400 font-mono font-bold text-sm truncate max-w-[100px] block">
                                            {asset.codigo}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="font-bold text-slate-200">{asset.nombre}</div>
                                        <div className="text-xs text-slate-500">{asset.estado}</div>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-slate-400">{asset.categoria}</td>
                                    <td className="px-6 py-4 text-sm text-slate-400">{asset.departamento}</td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-2">
                                            <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-[10px] font-bold border border-slate-700">
                                                {asset.responsable.split(' ').map(n => n[0]).join('')}
                                            </div>
                                            <span className="text-sm text-slate-300 font-medium">{asset.responsable}</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex justify-center items-center gap-2">
                                            <button className="p-2 hover:bg-slate-800 rounded-lg text-slate-400 hover:text-white transition-all" title="Ver Detalle">
                                                <Eye size={18} />
                                            </button>
                                            <button className="p-2 hover:bg-slate-800 rounded-lg text-slate-400 hover:text-white transition-all" title="Ver QR">
                                                <QrCode size={18} />
                                            </button>
                                            <button className="p-2 hover:bg-slate-800 rounded-lg text-slate-400 hover:text-white transition-all" title="Editar">
                                                <Edit size={18} />
                                            </button>
                                            <button className="p-2 hover:bg-rose-500/10 rounded-lg text-slate-400 hover:text-rose-500 transition-all" title="Eliminar">
                                                <Trash2 size={18} />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Pagination */}
                <div className="p-6 bg-slate-900/50 flex justify-between items-center text-sm">
                    <p className="text-slate-500">Mostrando <span className="text-white font-bold">1-4</span> de <span className="text-white font-bold">2,543</span> activos</p>
                    <div className="flex gap-2">
                        <button className="px-4 py-2 bg-slate-800 rounded-lg hover:bg-slate-700 transition-all disabled:opacity-50" disabled>Anterior</button>
                        <button className="px-4 py-2 bg-slate-800 rounded-lg hover:bg-slate-700 transition-all">Siguiente</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InventoryList;
