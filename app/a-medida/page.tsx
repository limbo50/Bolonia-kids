'use client';

import Link from 'next/link';
import { ChevronLeft, Send, Camera } from 'lucide-react';

export default function AMedida() {
  return (
    <div className="min-h-screen bg-[#F9F4F0] font-serif text-[#333] pb-20">
      {/* HEADER DE NAVEGACIÓN RÁPIDA */}
      <nav className="p-6 flex items-center justify-between max-w-[1100px] mx-auto">
        <Link href="/" className="flex items-center gap-2 text-[11px] font-bold tracking-widest uppercase hover:text-[#C17967] transition-colors">
          <ChevronLeft size={16} /> Volver al Inicio
        </Link>
        <div className="text-[14px] tracking-[6px] font-bold text-[#C17967]">BOLONIA KIDS</div>
      </nav>

      <div className="max-w-[1000px] mx-auto px-6 mt-10">
        <h1 className="text-4xl md:text-5xl font-normal mb-6 leading-tight uppercase tracking-tight text-center">Muebles a medida</h1>
        <p className="text-center text-gray-600 mb-12 italic text-lg max-w-[600px] mx-auto">
          Contanos qué necesitás y te enviamos un presupuesto sin costo. Personalizamos cada detalle para tu espacio.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* COLUMNA IZQUIERDA: TRABAJOS REALIZADOS */}
          <div className="lg:col-span-1 space-y-6">
            <h2 className="text-[12px] tracking-[3px] font-bold uppercase mb-4 opacity-50 text-center lg:text-left">Algunos trabajos realizados</h2>
            <div className="rounded-xl overflow-hidden shadow-sm border border-white">
              <img src="/trabajo-1.jpg" alt="Cocina a medida" className="w-full h-48 object-cover" />
              <div className="p-4 bg-white text-[11px] font-bold uppercase tracking-widest">Cocina Infantil a medida</div>
            </div>
            <div className="rounded-xl overflow-hidden shadow-sm border border-white">
              <img src="/trabajo-2.jpg" alt="Mueble almacenaje" className="w-full h-48 object-cover" />
              <div className="p-4 bg-white text-[11px] font-bold uppercase tracking-widest">Almacenaje para niños</div>
            </div>
          </div>

          {/* COLUMNA DERECHA: EL FORMULARIO COMPLETO */}
          <div className="lg:col-span-2 bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-[#E5DED5]">
            <form className="space-y-6">
              
              {/* DATOS PERSONALES */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="text-[10px] font-bold uppercase tracking-widest ml-1">Nombre y Apellido *</label>
                  <input type="text" className="w-full mt-2 p-4 bg-[#F9F4F0] border-none rounded-xl focus:ring-2 focus:ring-[#C17967] outline-none transition-all" />
                </div>
                <div>
                  <label className="text-[10px] font-bold uppercase tracking-widest ml-1">Teléfono *</label>
                  <input type="text" className="w-full mt-2 p-4 bg-[#F9F4F0] border-none rounded-xl focus:ring-2 focus:ring-[#C17967] outline-none" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="text-[10px] font-bold uppercase tracking-widest ml-1">Email *</label>
                  <input type="email" className="w-full mt-2 p-4 bg-[#F9F4F0] border-none rounded-xl focus:ring-2 focus:ring-[#C17967] outline-none" />
                </div>
                <div>
                  <label className="text-[10px] font-bold uppercase tracking-widest ml-1">Ciudad / Localidad *</label>
                  <input type="text" placeholder="Ej: Pilar" className="w-full mt-2 p-4 bg-[#F9F4F0] border-none rounded-xl focus:ring-2 focus:ring-[#C17967] outline-none" />
                </div>
              </div>

              {/* DETALLES DEL MUEBLE */}
              <div className="pt-4 border-t border-gray-100">
                <h3 className="text-[11px] font-bold tracking-[3px] uppercase mb-6 text-[#C17967]">Detalles del Proyecto</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-[10px] font-bold uppercase tracking-widest ml-1">Tipo de Mueble</label>
                    <input type="text" placeholder="Ej: Placard, Escritorio" className="w-full mt-2 p-4 bg-[#F9F4F0] border-none rounded-xl outline-none" />
                  </div>
                  <div>
                    <label className="text-[10px] font-bold uppercase tracking-widest ml-1">Ambiente</label>
                    <input type="text" placeholder="Ej: Dormitorio infantil" className="w-full mt-2 p-4 bg-[#F9F4F0] border-none rounded-xl outline-none" />
                  </div>
                </div>
              </div>

              {/* MEDIDAS TRIPLES */}
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label className="text-[10px] font-bold uppercase tracking-widest ml-1">Ancho (cm)</label>
                  <input type="number" placeholder="0" className="w-full mt-2 p-4 bg-[#F9F4F0] border-none rounded-xl outline-none" />
                </div>
                <div>
                  <label className="text-[10px] font-bold uppercase tracking-widest ml-1">Alto (cm)</label>
                  <input type="number" placeholder="0" className="w-full mt-2 p-4 bg-[#F9F4F0] border-none rounded-xl outline-none" />
                </div>
                <div>
                  <label className="text-[10px] font-bold uppercase tracking-widest ml-1">Profund.</label>
                  <input type="number" placeholder="0" className="w-full mt-2 p-4 bg-[#F9F4F0] border-none rounded-xl outline-none" />
                </div>
              </div>

              {/* MATERIAL Y COLOR */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="text-[10px] font-bold uppercase tracking-widest ml-1">Material Deseado</label>
                  <select className="w-full mt-2 p-4 bg-[#F9F4F0] border-none rounded-xl outline-none appearance-none">
                    <option>Melamina MDF</option>
                    <option>Madera Maciza (Pino)</option>
                    <option>Enchapado</option>
                    <option>Laqueado</option>
                  </select>
                </div>
                <div>
                  <label className="text-[10px] font-bold uppercase tracking-widest ml-1">Color / Terminación</label>
                  <input type="text" placeholder="Ej: Blanco mate, Roble" className="w-full mt-2 p-4 bg-[#F9F4F0] border-none rounded-xl outline-none" />
                </div>
              </div>

              {/* PRESUPUESTO Y FECHA */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="text-[10px] font-bold uppercase tracking-widest ml-1">Presupuesto Estimado</label>
                  <input type="text" placeholder="Ej: AR$ 200.000" className="w-full mt-2 p-4 bg-[#F9F4F0] border-none rounded-xl outline-none" />
                </div>
                <div>
                  <label className="text-[10px] font-bold uppercase tracking-widest ml-1">Fecha Deseada</label>
                  <input type="date" className="w-full mt-2 p-4 bg-[#F9F4F0] border-none rounded-xl outline-none text-gray-400" />
                </div>
              </div>

              <div>
                <label className="text-[10px] font-bold uppercase tracking-widest ml-1">Descripción o Comentarios *</label>
                <textarea rows={4} placeholder="Contanos más detalles, si hay cajas de luz, obstáculos, o preferencias especiales..." className="w-full mt-2 p-4 bg-[#F9F4F0] border-none rounded-xl outline-none focus:ring-2 focus:ring-[#C17967] transition-all"></textarea>
              </div>

              {/* CHECKBOX VISITA */}
              <div className="flex items-center gap-3 ml-1">
                <input type="checkbox" id="visita" className="w-4 h-4 accent-[#C17967]" />
                <label htmlFor="visita" className="text-[11px] font-bold uppercase tracking-widest text-gray-500 cursor-pointer">Solicito visita/medición a domicilio</label>
              </div>

              <div className="border-2 border-dashed border-[#E5DED5] p-8 rounded-2xl text-center hover:bg-[#F9F4F0] transition-colors cursor-pointer group">
                <Camera className="mx-auto mb-2 text-gray-400 group-hover:text-[#C17967] transition-colors" />
                <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Subir imágenes de referencia o del espacio</p>
              </div>

              <button type="submit" className="w-full bg-[#333] text-white py-5 rounded-full font-bold text-[11px] tracking-[4px] uppercase hover:bg-[#C17967] transition-all flex items-center justify-center gap-3 shadow-lg">
                Enviar Solicitud <Send size={14} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}