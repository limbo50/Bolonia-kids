'use client';

import Link from 'next/link';
import { ChevronLeft, LogIn, Mail } from 'lucide-react';

export default function CuentaLogin() {
  return (
    <div className="min-h-screen bg-[#F9F4F0] font-serif text-[#333]">
      {/* NAVEGACIÓN */}
      <nav className="p-6 flex items-center justify-between max-w-[1100px] mx-auto">
        <Link href="/" className="flex items-center gap-2 text-[11px] font-bold tracking-widest uppercase hover:text-[#C17967] transition-colors">
          <ChevronLeft size={16} /> Volver al Inicio
        </Link>
        <div className="text-[14px] tracking-[6px] font-bold text-[#C17967]">BOLONIA KIDS</div>
      </nav>

      <div className="max-w-[450px] mx-auto px-6 mt-20 text-center">
        <h1 className="text-4xl font-normal mb-4 uppercase tracking-tight">Mi Cuenta</h1>
        <p className="text-gray-500 italic mb-12">Bienvenido a nuestra comunidad artesanal.</p>

        <div className="bg-white p-10 rounded-3xl shadow-xl border border-[#E5DED5] space-y-6">
          <p className="text-[11px] font-bold uppercase tracking-[2px] text-gray-400 mb-2">Ingresá con</p>
          
          {/* BOTÓN DE GOOGLE (Estilo Bolonia) */}
          <button className="w-full border-2 border-[#E5DED5] py-4 rounded-full flex items-center justify-center gap-3 hover:bg-[#F9F4F0] transition-all font-bold text-[11px] tracking-[2px] uppercase">
            <img src="https://www.google.com/favicon.ico" className="w-4 h-4" alt="Google" />
            Continuar con Google
          </button>

          <div className="flex items-center gap-4 py-2">
            <div className="h-[1px] bg-[#E5DED5] flex-1"></div>
            <span className="text-[10px] text-gray-300 font-bold uppercase tracking-widest">o</span>
            <div className="h-[1px] bg-[#E5DED5] flex-1"></div>
          </div>

          {/* BOTÓN DE EMAIL */}
          <button className="w-full bg-[#333] text-white py-4 rounded-full flex items-center justify-center gap-3 hover:bg-[#C17967] transition-all font-bold text-[11px] tracking-[2px] uppercase shadow-md">
            <Mail size={16} /> Ingresar con Email
          </button>

          <p className="text-[10px] text-gray-400 mt-6 leading-relaxed">
            Al ingresar, aceptás nuestros términos de privacidad y cuidado de datos.
          </p>
        </div>

        <Link href="/contacto" className="inline-block mt-10 text-[10px] font-bold text-[#C17967] uppercase tracking-[3px] border-b border-[#C17967] pb-1">
          ¿Necesitás ayuda con tu cuenta?
        </Link>
      </div>
    </div>
  );
}