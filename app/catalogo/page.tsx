'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function Catalogo() {
  const [categoria, setCategoria] = useState('todos');

  const productos = [
    { id: "cocinita", n: "COCINITA CLÁSICA", p: "AR$ 150.000", img: "/producto-cocina.jpg", cat: "cocinitas" },
    { id: "cafeteria", n: "SET CAFETERÍA", p: "AR$ 130.000", img: "/producto-set-cafeteria.jpg", cat: "rol" },
    { id: "pizzeria", n: "SET PIZZERÍA", p: "AR$ 120.000", img: "/producto-set-pizzeria.jpg", cat: "rol" },
    { id: "patisserie", n: "SET PATISSERIE", p: "AR$ 140.000", img: "/producto-set-patisserie.jpg", cat: "rol" },
  ];

  const filtrados = categoria === 'todos' 
    ? productos 
    : productos.filter(p => p.cat === categoria);

  return (
    <div className="min-h-screen bg-[#F9F4F0] font-serif p-6 md:p-12">
      <div className="max-w-[1200px] mx-auto">
        
        {/* TÍTULO */}
        <div className="text-center mb-12">
          <Link href="/" className="text-[10px] font-bold text-gray-400 tracking-[3px] uppercase no-underline hover:text-black transition-colors">← Volver al Inicio</Link>
          <h1 className="text-5xl text-[#C17967] mt-6 tracking-widest uppercase">Catálogo</h1>
          <div className="h-[1px] bg-[#E5DED5] w-20 mx-auto mt-4"></div>
        </div>

        {/* FILTROS (SECCIONES) */}
        <div className="flex justify-center gap-4 md:gap-8 mb-16 flex-wrap">
          {['todos', 'cocinitas', 'rol', 'accesorios'].map((cat) => (
            <button
              key={cat}
              onClick={() => setCategoria(cat)}
              className={`text-[10px] font-bold uppercase tracking-[3px] pb-2 border-b-2 transition-all ${
                categoria === cat ? 'border-[#C17967] text-[#C17967]' : 'border-transparent text-gray-400 hover:text-gray-600'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* GRILLA DE PRODUCTOS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {filtrados.map((item) => (
            <div key={item.id} className="group">
              <div className="bg-white aspect-square rounded-2xl overflow-hidden mb-6 shadow-sm border border-gray-100">
                <img src={item.img} alt={item.n} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <h3 className="text-sm font-bold tracking-widest mb-2 uppercase">{item.n}</h3>
              <p className="text-[#C17967] font-bold mb-6">{item.p}</p>
              <Link 
                href={`/productos/${item.id}`} 
                className="inline-block border border-[#C17967] text-[#C17967] px-10 py-3 rounded-full text-[9px] font-bold uppercase tracking-widest hover:bg-[#C17967] hover:text-white transition-all no-underline"
              >
                Explorar
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}