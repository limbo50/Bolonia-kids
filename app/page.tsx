'use client';

import Link from 'next/link';
import { 
  ShoppingCart, 
  User, 
  Instagram, 
  MessageCircle, 
  Trees, 
  Palette, 
  MapPin, 
  Heart,
  Star
} from 'lucide-react';

export default function Home() {
  const destacados = [
    { id: "cocinita", n: "COCINITA CLÁSICA", p: "AR$ 150.000", img: "/producto-cocina.jpg", desc: "Nuestra pieza insignia, diseñada para durar generaciones." },
    { id: "patisserie", n: "SET PATISSERIE", p: "AR$ 140.000", img: "/producto-set-patisserie.jpg", desc: "Fomenta la creatividad con nuestro set de pastelería artesanal." },
  ];

  const productos = [
    { id: "cafeteria", n: "SET CAFETERÍA", p: "AR$ 130.000", img: "/producto-set-cafeteria.jpg" },
    { id: "pizzeria", n: "SET PIZZERÍA", p: "AR$ 120.000", img: "/producto-set-pizzeria.jpg" },
    { id: "set-limpieza", n: "SET LIMPIEZA", p: "AR$ 95.000", img: "/producto-limpieza.jpg" },
    { id: "tostadora", n: "TOSTADORA DE MADERA", p: "AR$ 45.000", img: "/producto-tostadora.jpg" },
  ];

  return (
    <div className="min-h-screen bg-cover bg-fixed flex justify-center md:py-10" style={{ backgroundImage: 'url("/fondo-madera.jpg")' }}>
      
      <style jsx global>{`
        html { scroll-behavior: smooth; }
      `}</style>

      <div className="w-full max-w-[1200px] bg-[#F9F4F0] text-[#333] shadow-2xl flex flex-col min-h-screen md:rounded-lg overflow-hidden font-serif">
        
        {/* HEADER */}
        <div id="inicio" className="flex justify-center md:justify-end gap-8 px-8 py-4 text-[10px] font-bold uppercase tracking-widest border-b md:border-none border-[#E5DED5]">
          <Link href="/carrito" className="flex items-center gap-2 hover:text-[#C17967] no-underline text-inherit transition-colors">
            <ShoppingCart size={14} strokeWidth={2.5} />
            CARRITO
          </Link>
          <Link href="/cuenta" className="flex items-center gap-2 hover:text-[#C17967] no-underline text-inherit transition-colors">
            <User size={14} strokeWidth={2.5} />
            CUENTA
          </Link>
        </div>

        {/* LOGO */}
        <div className="flex flex-col items-center text-center py-8">
          <img src="/osito.png" alt="Logo" className="h-20 w-auto mb-3" />
          <h1 className="text-4xl md:text-5xl font-normal tracking-[12px] text-[#C17967] leading-none">BOLONIA</h1>
          <div className="text-[11px] tracking-[10px] font-bold mt-2">KIDS</div>
        </div>

        {/* NAVEGACIÓN */}
        <nav className="flex justify-center flex-wrap gap-x-6 gap-y-3 md:gap-10 py-5 border-y border-[#E5DED5] text-[11px] font-bold uppercase px-4 text-center">
          <Link href="/" className="hover:text-[#C17967] no-underline text-inherit">Inicio</Link>
          <a href="#recomendados" className="hover:text-[#C17967] no-underline text-inherit">Recomendados</a>
          <a href="#productos" className="hover:text-[#C17967] no-underline text-inherit">Productos</a>
          <a href="#sobre-nosotros" className="hover:text-[#C17967] no-underline text-inherit">Nosotros</a>
          <a href="#contacto" className="hover:text-[#C17967] no-underline text-inherit">Contacto</a>
        </nav>

        {/* BANNER */}
        <section className="relative w-full h-[400px] md:h-[550px] flex items-center justify-center md:justify-end overflow-hidden">
          <img src="/banner-principal.jpg" alt="Banner" className="absolute inset-0 w-full h-full object-cover z-0" />
          <div className="relative z-10 bg-white/95 p-8 md:p-12 w-[85%] max-w-[400px] md:mr-20 text-center shadow-lg">
            <h2 className="text-xl md:text-2xl font-normal mb-6 leading-tight">DESCUBRE LA MAGIA DEL JUEGO ARTESANAL</h2>
            <Link href="/catalogo" className="block bg-[#C17967] text-white py-4 font-bold text-[10px] tracking-widest no-underline hover:bg-[#a66352] transition-colors">
              EXPLORAR CATÁLOGO
            </Link>
          </div>
        </section>

        {/* SECCIÓN: NUESTROS RECOMENDADOS (DISEÑO DESTACADO) */}
        <section id="recomendados" className="py-20 px-6 bg-white">
          <div className="max-w-[1000px] mx-auto">
            <div className="flex items-center justify-center gap-4 mb-12">
              <div className="h-[1px] bg-[#E5DED5] w-12"></div>
              <h2 className="text-center text-xl tracking-[4px] uppercase font-light flex items-center gap-3">
                <Star size={18} fill="#C17967" color="#C17967" /> Nuestros Recomendados
              </h2>
              <div className="h-[1px] bg-[#E5DED5] w-12"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              {destacados.map((item) => (
                <div key={item.id} className="group cursor-pointer">
                  <div className="overflow-hidden rounded-2xl mb-6 aspect-[4/5] bg-[#F9F4F0]">
                    <img src={item.img} alt={item.n} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  </div>
                  <h3 className="text-lg font-bold tracking-widest mb-2">{item.n}</h3>
                  <p className="text-gray-500 text-sm italic mb-4 leading-relaxed">{item.desc}</p>
                  <div className="flex items-center justify-between border-t border-gray-100 pt-4">
                    <span className="text-[#C17967] font-bold">{item.p}</span>
                    <Link href={`/productos/${item.id}`} className="text-[10px] font-bold tracking-widest uppercase border-b-2 border-[#C17967] pb-1 hover:text-[#C17967]">Ver más</Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECCIÓN: PRODUCTOS (GRILLA GENERAL) */}
        <section id="productos" className="w-full max-w-[1100px] mx-auto py-20 px-6 border-t border-[#E5DED5]">
          <h2 className="text-center text-lg tracking-[4px] mb-16 uppercase font-light">Explora la Colección</h2>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
            {productos.map((item) => (
              <div key={item.id} className="flex flex-col items-center text-center group">
                <div className="bg-white w-full aspect-square rounded-xl mb-4 overflow-hidden border border-gray-100 shadow-sm relative">
                  <img src={item.img} alt={item.n} className="w-full h-full object-cover group-hover:opacity-80 transition-opacity" />
                  <button className="absolute top-3 right-3 p-2 bg-white/90 rounded-full text-[#C17967] md:opacity-0 group-hover:opacity-100 transition-opacity shadow-sm">
                    <Heart size={14} />
                  </button>
                </div>
                <h3 className="text-[11px] font-bold mb-1 tracking-wider uppercase h-8 flex items-center">{item.n}</h3>
                <p className="text-[13px] text-[#C17967] font-bold mb-4">{item.p}</p>
                <Link href={`/productos/${item.id}`} className="text-[9px] font-bold uppercase tracking-widest text-gray-400 hover:text-black transition-colors border border-gray-200 px-4 py-2 rounded-full">
                  Detalles
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* SOBRE NOSOTROS */}
        <section id="sobre-nosotros" className="py-24 px-8 bg-[#FDFBF9] text-center border-t border-[#E5DED5]">
          <div className="max-w-[700px] mx-auto">
            <h2 className="text-2xl tracking-[5px] mb-8 uppercase font-light text-[#C17967]">Nuestra Historia</h2>
            <p className="text-gray-600 leading-relaxed italic text-sm md:text-base">
              "En Bolonia Kids creamos juguetes que invitan a soñar. Cada pieza es diseñada y fabricada a mano en nuestro taller de Pilar..."
            </p>
          </div>
        </section>

        {/* FOOTER */}
        <footer id="contacto" className="bg-[#527184] text-white pt-16 pb-8 px-6 mt-auto">
          <div className="max-w-[1100px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16 text-center border-b border-white/10 pb-16">
              <div className="flex flex-col items-center"><Trees size={32} strokeWidth={1.5} className="mb-4 text-[#A9B9C7]" /><h4 className="text-[10px] font-bold uppercase tracking-[3px] mb-2">Madera Sustentable</h4><p className="text-[11px] text-white/60">Pino seleccionado para máxima durabilidad.</p></div>
              <div className="flex flex-col items-center"><Palette size={32} strokeWidth={1.5} className="mb-4 text-[#A9B9C7]" /><h4 className="text-[10px] font-bold uppercase tracking-[3px] mb-2">Pinturas al Agua</h4><p className="text-[11px] text-white/60">Tintas no tóxicas, seguras para jugar.</p></div>
              <div className="flex flex-col items-center"><MapPin size={32} strokeWidth={1.5} className="mb-4 text-[#A9B9C7]" /><h4 className="text-[10px] font-bold uppercase tracking-[3px] mb-2">Industria Local</h4><p className="text-[11px] text-white/60">Fabricado artesanalmente en Pilar.</p></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left mb-12">
              <div><h4 className="text-[12px] font-bold tracking-[4px] uppercase mb-6">Bolonia Kids</h4><p className="text-[11px] text-white/70 uppercase">Fomentando la imaginación desde Pilar.</p></div>
              <div className="flex flex-col items-center"><h4 className="text-[12px] font-bold tracking-[4px] uppercase mb-6">Seguinos</h4><div className="flex gap-8"><a href="#" className="hover:text-[#A9B9C7] transition-colors"><Instagram size={20} /></a><a href="#" className="hover:text-[#A9B9C7] transition-colors"><MessageCircle size={20} /></a></div></div>
              <div className="md:text-right text-[11px] space-y-4"><h4 className="text-[12px] font-bold tracking-[4px] uppercase mb-6">Contacto</h4><p className="tracking-widest">HOLA@BOLONIAKIDS.COM</p><p className="text-[#A9B9C7] font-bold">Pilar, Buenos Aires</p></div>
            </div>
            <div className="text-center pt-8 border-t border-white/5"><p className="text-[9px] tracking-[2px] text-white/40">© {new Date().getFullYear()} Bolonia Kids.</p></div>
          </div>
        </footer>
      </div>
    </div>
  );
}