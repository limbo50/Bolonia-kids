'use client';
import Link from 'next/link';

export default function Cuenta() {
  return (
    <div className="min-h-screen bg-[#F9F4F0] font-serif flex items-center justify-center p-6">
      <div className="max-w-[450px] w-full bg-white p-10 rounded-2xl shadow-xl text-center">
        <h1 className="text-3xl text-[#C17967] mb-6 tracking-widest uppercase">Mi Cuenta</h1>
        <p className="text-gray-500 mb-8 text-sm leading-relaxed">
          Estamos trabajando para que pronto puedas seguir tus pedidos y guardar tus juguetes favoritos.
        </p>
        <div className="space-y-4">
          <button className="w-full py-4 border border-[#E5DED5] text-[10px] font-bold uppercase tracking-[2px] text-gray-400 cursor-not-allowed">
            Iniciar Sesión (Próximamente)
          </button>
          <Link href="/" className="block w-full py-4 bg-[#C17967] text-white text-[10px] font-bold uppercase tracking-[2px] no-underline">
            Volver a la Tienda
          </Link>
        </div>
      </div>
    </div>
  );
}