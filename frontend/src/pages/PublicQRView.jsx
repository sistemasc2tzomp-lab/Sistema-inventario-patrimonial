import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Shield, CheckCircle2, AlertCircle, MapPin, User, Calendar, Tag, Loader2 } from 'lucide-react';

const PublicQRView = () => {
    const { qr } = useParams();
    const [loading, setLoading] = useState(true);
    const [activo, setActivo] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Simulación de carga de datos desde el backend
        setTimeout(() => {
            if (qr === 'ERROR') {
                setError('Activo no encontrado o código inválido.');
            } else {
                setActivo({
                    nombre: 'Computadora de Escritorio Dell OptiPlex',
                    codigo_patrimonial: 'MUN-PAT-2023-0042',
                    responsable: 'Lic. Martha Rodriguez',
                    departamento: 'Secretaría del Ayuntamiento',
                    estatus: 'Asignado',
                    fecha_resguardo: '2023-05-15',
                    vigencia_resguardo: '2025-05-15',
                    descripcion: 'Equipo de cómputo de alto rendimiento, 16GB RAM, 512GB SSD.'
                });
            }
            setLoading(false);
        }, 1500);
    }, [qr]);

    if (loading) {
        return (
            <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center p-6">
                <Loader2 className="animate-spin text-primary-500 mb-4" size={48} />
                <p className="text-slate-400 font-medium">Verificando activo patrimonial...</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-950 text-white font-sans p-6 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-[300px] bg-gradient-to-b from-primary-600/20 to-transparent"></div>
            
            <div className="max-w-2xl mx-auto relative z-10">
                <div className="text-center mb-10">
                    <div className="w-16 h-16 bg-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl shadow-primary-600/20">
                        <Shield size={32} />
                    </div>
                    <h1 className="text-3xl font-extrabold mb-2">Consulta Pública de Activos</h1>
                    <p className="text-slate-400">Sistema Municipal de Transparencia Patrimonial</p>
                </div>

                {error ? (
                    <div className="glass p-8 rounded-3xl border-rose-500/20 text-center animate-fade-in">
                        <AlertCircle className="text-rose-500 mx-auto mb-4" size={48} />
                        <h2 className="text-xl font-bold text-rose-200 mb-2">Error de Verificación</h2>
                        <p className="text-slate-400 mb-8">{error}</p>
                        <Link to="/" className="inline-block px-6 py-3 bg-slate-800 hover:bg-slate-700 rounded-xl transition-all font-bold">
                            Volver al Inicio
                        </Link>
                    </div>
                ) : (
                    <div className="animate-fade-in group">
                        <div className="glass p-8 rounded-3xl mb-6 relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-4">
                                <span className={`flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold ${activo.estatus === 'Asignado' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-amber-500/20 text-amber-400'}`}>
                                    <CheckCircle2 size={14} />
                                    {activo.estatus}
                                </span>
                            </div>

                            <p className="text-sm font-bold text-primary-400 mb-2 uppercase tracking-widest">{activo.codigo_patrimonial}</p>
                            <h2 className="text-2xl md:text-3xl font-bold mb-6">{activo.nombre}</h2>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <InfoItem icon={User} label="Responsable" value={activo.responsable} />
                                <InfoItem icon={MapPin} label="Departamento" value={activo.departamento} />
                                <InfoItem icon={Calendar} label="Fecha de Resguardo" value={activo.fecha_resguardo} />
                                <InfoItem icon={Calendar} label="Vigencia" value={activo.vigencia_resguardo} />
                            </div>

                            <div className="mt-10 p-4 bg-slate-800/50 rounded-2xl border border-slate-700/50">
                                <div className="flex gap-3">
                                    <Tag className="text-slate-500 shrink-0" size={20} />
                                    <p className="text-sm text-slate-400 italic">"{activo.descripcion}"</p>
                                </div>
                            </div>
                        </div>

                        <div className="text-center p-6">
                            <p className="text-xs text-slate-500 mb-4 inline-flex items-center gap-2">
                                <Shield size={12} />
                                Esta información es pública bajo el artículo 70 de la Ley General de Transparencia.
                            </p>
                            <div className="flex justify-center gap-4">
                                <Link to="/" className="text-sm font-bold text-slate-400 hover:text-white transition-colors">SIPM SaaS</Link>
                                <span className="text-slate-700">•</span>
                                <a href="#" className="text-sm font-bold text-slate-400 hover:text-white transition-colors">Municipio de Tzompantepec</a>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

const InfoItem = ({ icon: Icon, label, value }) => (
    <div className="flex gap-4">
        <div className="w-10 h-10 bg-slate-800 rounded-xl flex items-center justify-center shrink-0 text-slate-400 group-hover:text-primary-400 transition-colors">
            <Icon size={20} />
        </div>
        <div>
            <p className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-1">{label}</p>
            <p className="text-slate-200 font-semibold">{value}</p>
        </div>
    </div>
);

export default PublicQRView;
