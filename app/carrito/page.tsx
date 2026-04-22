'use client';
import Link from 'next/link';

export default function Carrito() {
  return (
    <div className="min-h-screen bg-[#F9F4F0] font-serif p-8">
      <div className="max-w-[800px] mx-auto text-center py-20">
        <h1 className="text-4xl text-[#C17967] mb-4 tracking-widest uppercase">Tu Carrito</h1>
        <div className="h-[1px] bg-[#E5DED5] w-20 mx-auto mb-10"></div>
        <p className="text-gray-600 mb-12 italic">Tu carrito está vacío actualmente.</p>
        <Link href="/" className="inline-block px-12 py-4 bg-[#527184] text-white text-[10px] font-bold uppercase tracking-[3px] no-underline rounded-full shadow-lg">
          Empezar a comprar
        </Link>
      </div>
    </div>
  );
}