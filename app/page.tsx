'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-cover bg-fixed flex justify-center md:py-10" style={{ backgroundImage: 'url("/fondo-madera.jpg")' }}>
      
      <div className="w-full max-w-[1200px] bg-[#F9F4F0] text-[#333] shadow-2xl flex flex-col min-h-screen md:rounded-lg overflow-hidden font-serif">
        
        {/* HEADER */}
        <div id="inicio" className="flex justify-center md:justify-end gap-6 px-8 py-4 text-[10px] font-bold uppercase tracking-widest border-b md:border-none border-[#E5DED5]">
          <span>🛒 CARRITO</span>
          <span>👤 CUENTA</span>
        </div>

        {/* LOGO */}
        <div className="flex flex-col items-center text-center py-8">
          <img src="/osito.png" alt="Logo" className="h-20 w-auto mb-3" />
          <h1 className="text-4xl md:text-5xl font-normal tracking-[12px] text-[#C17967] leading-none">BOLONIA</h1>
          <div className="text-[11px] tracking-[10px] font-bold mt-2">KIDS</div>
        </div>

        {/* NAVEGACIÓN */}
        <nav className="flex justify-center flex-wrap gap-x-6 gap-y-3 md:gap-10 py-5 border-y border-[#E5DED5] text-[11px] font-bold uppercase px-4 text-center">
          <a href="#inicio" className="hover:text-[#C17967] whitespace-nowrap">Inicio</a>
          <a href="#productos" className="hover:text-[#C17967] whitespace-nowrap">Cocinitas</a>
          <a href="#productos" className="hover:text-[#C17967] whitespace-nowrap">Juguetes de Rol</a>
          <a href="#sobre-nosotros" className="hover:text-[#C17967] whitespace-nowrap">Nosotros</a>
          <a href="#contacto" className="hover:text-[#C17967] whitespace-nowrap">Contacto</a>
        </nav>

        {/* BANNER */}
        <section className="relative w-full h-[400px] md:h-[550px] flex items-center justify-center md:justify-end overflow-hidden">
          <img src="/banner-principal.jpg" alt="Banner" className="absolute inset-0 w-full h-full object-cover z-0" />
          
          <div className="relative z-10 bg-white/95 p-8 md:p-12 w-[85%] max-w-[400px] md:mr-20 text-center shadow-lg">
            <h2 className="text-xl md:text-2xl font-normal mb-6 leading-tight">DESCUBRE LA MAGIA DEL JUEGO ARTESANAL</h2>
            <a href="#productos" className="block bg-[#C17967] text-white py-4 font-bold text-[10px] tracking-widest no-underline">
              EXPLORAR CATÁLOGO
            </a>
          </div>
        </section>

        {/* PRODUCTOS: Con enlaces a las nuevas carpetas */}
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
                <div className="bg-white w-full aspect-square md:h-[280px] rounded-xl mb-4 overflow-hidden border border-gray-100 shadow-sm">
                  <img src={item.img} alt={item.n} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                </div>
                <h3 className="text-[12px] font-bold mb-1 h-8 flex items-center">{item.n}</h3>
                <p className="text-[14px] text-[#C17967] font-bold mb-4">{item.p}</p>
                
                {/* CAMBIO CLAVE: Ahora es un Link que usa el ID del producto */}
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

        {/* FOOTER */}
        <footer id="contacto" className="bg-[#A9B9C7] text-white py-12 px-6 mt-auto">
          <div className="max-w-[800px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 text-center text-[11px] tracking-[2px]">
            <div>
              <h4 className="border-b border-white/30 pb-2 mb-4 font-bold">INFO</h4>
              <p>Pilar, Buenos Aires</p>
            </div>
            <div>
              <h4 className="border-b border-white/30 pb-2 mb-4 font-bold">CONTACTO</h4>
              <p>hola@boloniakids.com</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}