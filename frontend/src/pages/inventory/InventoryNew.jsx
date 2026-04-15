import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
    Save, 
    X, 
    Image as ImageIcon, 
    FileText, 
    Package, 
    Tag, 
    User, 
    MapPin, 
    Calendar,
    ArrowLeft
} from 'lucide-react';

const InventoryNew = () => {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
            navigate('/inventario');
        }, 1500);
    };

    return (
        <div className="max-w-4xl mx-auto space-y-6 animate-fade-in pb-12">
            <button 
                onClick={() => navigate(-1)} 
                className="flex items-center gap-2 text-slate-500 hover:text-white transition-colors group mb-4"
            >
                <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                Volver al listado
            </button>

            <div className="flex justify-between items-end mb-8">
                <div>
                    <h1 className="text-3xl font-bold text-white">Nuevo Activo</h1>
                    <p className="text-slate-500">Registre un nuevo bien en el patrimonio municipal</p>
                </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
                {/* General Info */}
                <div className="glass p-8 rounded-3xl border-l-4 border-primary-600">
                    <div className="flex items-center gap-2 mb-6 text-primary-400">
                        <Package size={20} />
                        <h2 className="font-bold uppercase tracking-widest text-sm">Información General</h2>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-slate-400">Nombre del Activo</label>
                            <input 
                                type="text" 
                                required
                                className="w-full bg-slate-900/50 border border-slate-700/50 rounded-xl py-3 px-4 text-white focus:outline-none focus:border-primary-500 transition-all"
                                placeholder="Eje: Laptop Dell Latitude, Escritorio de Madera..."
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-slate-400">Código Patrimonial</label>
                            <input 
                                type="text" 
                                className="w-full bg-slate-900/50 border border-slate-700/50 rounded-xl py-3 px-4 text-white focus:outline-none focus:border-primary-500 transition-all font-mono"
                                placeholder="MUN-PAT-2026-X"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-slate-400">Categoría</label>
                            <select className="w-full bg-slate-900/50 border border-slate-700/50 rounded-xl py-3 px-4 text-white focus:outline-none focus:border-primary-500 transition-all">
                                <option>Seleccionar categoría...</option>
                                <option>Equipo de Cómputo</option>
                                <option>Mobiliario y Oficina</option>
                                <option>Vehículos</option>
                                <option>Herramientas</option>
                            </select>
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-slate-400">Estado de Conservación</label>
                            <select className="w-full bg-slate-900/50 border border-slate-700/50 rounded-xl py-3 px-4 text-white focus:outline-none focus:border-primary-500 transition-all">
                                <option>Nuevo</option>
                                <option>Excelente</option>
                                <option>Bueno</option>
                                <option>Regular</option>
                                <option>Malo / Para Baja</option>
                            </select>
                        </div>
                    </div>
                </div>

                {/* Assignment Info */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="glass p-8 rounded-3xl border-l-4 border-purple-600">
                        <div className="flex items-center gap-2 mb-6 text-purple-400">
                            <User size={20} />
                            <h2 className="font-bold uppercase tracking-widest text-sm">Resguardo y Ubicación</h2>
                        </div>
                        <div className="space-y-4">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-400">Responsable</label>
                                <input type="text" className="w-full bg-slate-900/50 border border-slate-700/50 rounded-xl py-3 px-4 text-white" placeholder="Buscar personal..." />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-400">Departamento</label>
                                <input type="text" className="w-full bg-slate-900/50 border border-slate-700/50 rounded-xl py-3 px-4 text-white" placeholder="Seleccionar depto..." />
                            </div>
                        </div>
                    </div>

                    <div className="glass p-8 rounded-3xl border-l-4 border-emerald-600">
                        <div className="flex items-center gap-2 mb-6 text-emerald-400">
                            <Calendar size={20} />
                            <h2 className="font-bold uppercase tracking-widest text-sm">Adquisición</h2>
                        </div>
                        <div className="space-y-4">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-400">Fecha de Adquisición</label>
                                <input type="date" className="w-full bg-slate-900/50 border border-slate-700/50 rounded-xl py-3 px-4 text-white" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-400">Valor Estimado ($)</label>
                                <input type="number" className="w-full bg-slate-900/50 border border-slate-700/50 rounded-xl py-3 px-4 text-white" placeholder="0.00" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Files */}
                <div className="glass p-8 rounded-3xl border-l-4 border-amber-600">
                    <div className="flex items-center gap-2 mb-6 text-amber-400">
                        <ImageIcon size={20} />
                        <h2 className="font-bold uppercase tracking-widest text-sm">Multimedia y Documentos</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="border-2 border-dashed border-slate-700 rounded-2xl p-8 text-center hover:border-primary-500/50 transition-colors cursor-pointer group">
                            <ImageIcon className="mx-auto text-slate-600 mb-2 group-hover:text-primary-500" size={32} />
                            <p className="text-sm text-slate-500 font-medium">Subir Imagen del Activo</p>
                            <p className="text-[10px] text-slate-600 mt-1">Formatos: JPG, PNG • Máx 5MB</p>
                        </div>
                        <div className="border-2 border-dashed border-slate-700 rounded-2xl p-8 text-center hover:border-primary-500/50 transition-colors cursor-pointer group">
                            <FileText className="mx-auto text-slate-600 mb-2 group-hover:text-primary-500" size={32} />
                            <p className="text-sm text-slate-500 font-medium">Cargar Factura / Resguardo</p>
                            <p className="text-[10px] text-slate-600 mt-1">Formatos: PDF • Máx 10MB</p>
                        </div>
                    </div>
                </div>

                {/* Footer Actions */}
                <div className="flex justify-end gap-3 pt-4">
                    <button 
                        type="button"
                        onClick={() => navigate('/inventario')}
                        className="px-6 py-3 bg-slate-800 hover:bg-slate-700 rounded-xl font-bold transition-all"
                    >
                        Cancelar
                    </button>
                    <button 
                        type="submit"
                        disabled={isLoading}
                        className="px-10 py-3 bg-primary-600 hover:bg-primary-500 rounded-xl font-bold transition-all shadow-xl shadow-primary-600/30 flex items-center gap-2"
                    >
                        {isLoading ? <span className="animate-spin border-2 border-white/30 border-t-white w-4 h-4 rounded-full"></span> : <Save size={20} />}
                        Guardar Activo
                    </button>
                </div>
            </form>
        </div>
    );
};

export default InventoryNew;
