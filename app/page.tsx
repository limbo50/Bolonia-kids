'use client';

import Link from 'next/link';
// IMPORTAMOS LOS ICONOS DE LUCIDE
import { 
  ShoppingCart, 
  User, 
  Instagram, 
  MessageCircle, 
  Trees, 
  Palette, 
  MapPin, 
  Heart 
} from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-cover bg-fixed flex justify-center md:py-10" style={{ backgroundImage: 'url("/fondo-madera.jpg")' }}>
      
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
      `}</style>

      <div className="w-full max-w-[1200px] bg-[#F9F4F0] text-[#333] shadow-2xl flex flex-col min-h-screen md:rounded-lg overflow-hidden font-serif">
        
        {/* HEADER CON ICONOS */}
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
          <Link href="/" className="hover:text-[#C17967] whitespace-nowrap no-underline text-inherit">Inicio</Link>
          <a href="#productos" className="hover:text-[#C17967] whitespace-nowrap no-underline text-inherit">Cocinitas</a>
          <a href="#productos" className="hover:text-[#C17967] whitespace-nowrap no-underline text-inherit">Juguetes de Rol</a>
          <a href="#sobre-nosotros" className="hover:text-[#C17967] whitespace-nowrap no-underline text-inherit">Nosotros</a>
          <a href="#contacto" className="hover:text-[#C17967] whitespace-nowrap no-underline text-inherit">Contacto</a>
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

        {/* PRODUCTOS */}
        <section id="productos" className="w-full max-w-[1100px] mx-auto py-16 px-6">
          <h2 className="text-center text-lg tracking-[4px] mb-12 uppercase font-light">Productos Destacados</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6">
            {[
              { id: "cocinita", n: "COCINITA CLÁSICA", p: "AR$ 150.000", img: "/producto-cocina.jpg" },
              { id: "cafeteria", n: "SET CAFETERÍA", p: "AR$ 130.000", img: "/producto-set-cafeteria.jpg" },
              { id: "pizzeria", n: "SET PIZZERÍA", p: "AR$ 120.000", img: "/producto-set-pizzeria.jpg" },
              { id: "patisserie", n: "SET PATISSERIE", p: "AR$ 140.000", img: "/producto-set-patisserie.jpg" }
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center text-center group">
                <div className="bg-white w-full aspect-square md:h-[280px] rounded-xl mb-4 overflow-hidden border border-gray-100 shadow-sm relative">
                  <img src={item.img} alt={item.n} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <button className="absolute top-4 right-4 p-2 bg-white/80 rounded-full text-[#C17967] opacity-0 group-hover:opacity-100 transition-opacity">
                    <Heart size={16} />
                  </button>
                </div>
                <h3 className="text-[12px] font-bold mb-1 h-8 flex items-center">{item.n}</h3>
                <p className="text-[14px] text-[#C17967] font-bold mb-4">{item.p}</p>
                
                <Link 
                  href={`/productos/${item.id}`} 
                  className="bg-[#527184] text-white px-8 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-[#A9B9C7] transition-colors no-underline"
                >
                  Ver Detalle
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* SECCIÓN SOBRE NOSOTROS */}
        <section id="sobre-nosotros" className="py-20 px-8 bg-white text-center border-t border-[#E5DED5]">
          <div className="max-w-[700px] mx-auto">
            <h2 className="text-2xl tracking-[5px] mb-8 uppercase font-light text-[#C17967]">Nuestra Historia</h2>
            <p className="text-gray-600 leading-relaxed italic text-sm md:text-base">
              "En Bolonia Kids creamos juguetes que invitan a soñar. Cada pieza es diseñada y fabricada a mano en nuestro taller de Pilar, cuidando cada detalle y utilizando materiales nobles para que duren generaciones."
            </p>
          </div>
        </section>

        {/* FOOTER CON ICONOS DE LUCIDE */}
        <footer id="contacto" className="bg-[#527184] text-white pt-16 pb-8 px-6 mt-auto">
          <div className="max-w-[1100px] mx-auto">
            
            {/* DIFERENCIALES */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16 text-center border-b border-white/10 pb-16">
              <div className="flex flex-col items-center">
                <Trees size={32} strokeWidth={1.5} className="mb-4 text-[#A9B9C7]" />
                <h4 className="text-[10px] font-bold tracking-[3px] uppercase mb-2">Madera Sustentable</h4>
                <p className="text-[11px] text-white/60 leading-relaxed">Pino seleccionado y curado para máxima durabilidad.</p>
              </div>
              <div className="flex flex-col items-center">
                <Palette size={32} strokeWidth={1.5} className="mb-4 text-[#A9B9C7]" />
                <h4 className="text-[10px] font-bold tracking-[3px] uppercase mb-2">Pinturas al Agua</h4>
                <p className="text-[11px] text-white/60 leading-relaxed">Tintas no tóxicas, seguras para los más chiquitos.</p>
              </div>
              <div className="flex flex-col items-center">
                <MapPin size={32} strokeWidth={1.5} className="mb-4 text-[#A9B9C7]" />
                <h4 className="text-[10px] font-bold tracking-[3px] uppercase mb-2">Industria Local</h4>
                <p className="text-[11px] text-white/60 leading-relaxed">Diseñado y fabricado artesanalmente en Pilar.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left mb-12">
              <div>
                <h4 className="text-[12px] font-bold tracking-[4px] uppercase mb-6">Bolonia Kids</h4>
                <p className="text-[11px] text-white/70 leading-loose uppercase tracking-[1px]">
                  Creamos mundos de madera para fomentar la imaginación y el juego libre desde nuestro taller en Buenos Aires.
                </p>
              </div>
              
              <div className="flex flex-col items-center">
                <h4 className="text-[12px] font-bold tracking-[4px] uppercase mb-6">Seguinos</h4>
                <div className="flex gap-8">
                  <a href="#" className="hover:text-[#A9B9C7] transition-colors"><Instagram size={20} /></a>
                  <a href="#" className="hover:text-[#A9B9C7] transition-colors"><MessageCircle size={20} /></a>
                </div>
              </div>

              <div className="md:text-right text-[11px] space-y-4">
                <h4 className="text-[12px] font-bold tracking-[4px] uppercase mb-6">Contacto</h4>
                <p className="tracking-widest uppercase">HOLA@BOLONIAKIDS.COM</p>
                <p className="tracking-widest uppercase">Pilar, Buenos Aires</p>
                <p className="text-[#A9B9C7] font-bold tracking-[1px]">SHOWROOM CON CITA PREVIA</p>
              </div>
            </div>

            <div className="text-center pt-8 border-t border-white/5">
              <p className="text-[9px] tracking-[2px] text-white/40 uppercase">
                © {new Date().getFullYear()} Bolonia Kids. Todos los derechos reservados.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}