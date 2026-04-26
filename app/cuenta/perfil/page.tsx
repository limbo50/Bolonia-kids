'use client';

import Link from 'next/link';
import { ChevronLeft, Package, User, Heart, LogOut, ExternalLink } from 'lucide-react';

export default function PanelPerfil() {
  // Simulación de datos del usuario
  const usuario = {
    nombre: "Tomi",
    email: "tomi@ejemplo.com",
    ciudad: "Pilar"
  };

  return (
    <div className="min-h-screen bg-[#F9F4F0] font-serif text-[#333] pb-20">
      {/* NAVEGACIÓN */}
      <nav className="p-6 flex items-center justify-between max-w-[1100px] mx-auto">
        <Link href="/" className="flex items-center gap-2 text-[11px] font-bold tracking-widest uppercase hover:text-[#C17967] transition-colors">
          <ChevronLeft size={16} /> Volver al Inicio
        </Link>
        <div className="text-[14px] tracking-[6px] font-bold text-[#C17967]">BOLONIA KIDS</div>
      </nav>

      <div className="max-w-[900px] mx-auto px-6 mt-10">
        <header className="mb-12">
          <h1 className="text-4xl font-normal uppercase tracking-tight mb-2">Hola, {usuario.nombre}</h1>
          <p className="text-gray-500 italic">Bienvenido a tu espacio personal.</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* MENÚ LATERAL */}
          <div className="space-y-2">
            <button className="w-full flex items-center gap-3 p-4 bg-white rounded-2xl shadow-sm border border-[#E5DED5] text-[11px] font-bold uppercase tracking-widest text-[#C17967]">
              <User size={18} /> Mis Datos
            </button>
            <button className="w-full flex items-center gap-3 p-4 hover:bg-white rounded-2xl transition-all text-[11px] font-bold uppercase tracking-widest text-gray-400 hover:text-[#333]">
              <Package size={18} /> Mis Presupuestos
            </button>
            <button className="w-full flex items-center gap-3 p-4 hover:bg-white rounded-2xl transition-all text-[11px] font-bold uppercase tracking-widest text-gray-400 hover:text-[#333]">
              <Heart size={18} /> Favoritos
            </button>
            <button className="w-full flex items-center gap-3 p-4 mt-10 hover:bg-red-50 rounded-2xl transition-all text-[11px] font-bold uppercase tracking-widest text-red-400">
              <LogOut size={18} /> Cerrar Sesión
            </button>
          </div>

          {/* CONTENIDO PRINCIPAL (Mis Datos por defecto) */}
          <div className="md:col-span-2 space-y-6">
            <div className="bg-white p-8 rounded-3xl shadow-xl border border-[#E5DED5]">
              <h2 className="text-[12px] tracking-[3px] font-bold uppercase mb-8 opacity-50">Información Personal</h2>
              
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4 border-b border-[#F9F4F0] pb-4">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Nombre completo</span>
                  <span className="text-sm font-medium text-right">{usuario.nombre}</span>
                </div>
                <div className="grid grid-cols-2 gap-4 border-b border-[#F9F4F0] pb-4">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Email</span>
                  <span className="text-sm font-medium text-right">{usuario.email}</span>
                </div>
                <div className="grid grid-cols-2 gap-4 border-b border-[#F9F4F0] pb-4">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Ubicación</span>
                  <span className="text-sm font-medium text-right">{usuario.ciudad}, Buenos Aires</span>
                </div>
              </div>

              <button className="mt-8 text-[10px] font-bold text-[#C17967] uppercase tracking-[2px] border border-[#C17967] px-6 py-2 rounded-full hover:bg-[#C17967] hover:text-white transition-all">
                Editar Perfil
              </button>
            </div>

            {/* TARJETA DE ÚLTIMO PRESUPUESTO (Vista rápida) */}
            <div className="bg-[#333] p-8 rounded-3xl shadow-xl text-white">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-[11px] font-bold uppercase tracking-[3px]">Último presupuesto enviado</h3>
                <span className="bg-[#C17967] text-[9px] px-3 py-1 rounded-full">EN REVISIÓN</span>
              </div>
              <p className="text-xl mb-6 font-light italic">"Mueble de guardado estilo nórdico..."</p>
              <Link href="#" className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[2px] opacity-70 hover:opacity-100 transition-opacity">
                Ver detalle completo <ExternalLink size={12} />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}