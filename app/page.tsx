'use client';

import { useState, useEffect } from 'react'; // Agregamos useEffect
import Link from 'next/link';
import { 
  ShoppingCart, 
  User,   
  MessageCircle, 
  Trees, 
  Palette, 
  MapPin, 
  Heart,
  Star,
  Sparkles,
  ArrowUp // Agregamos el icono de flecha
} from 'lucide-react';

export default function Home() {
  const [favoritos, setFavoritos] = useState<string[]>([]);
  const [mostrarBotonSubir, setMostrarBotonSubir] = useState(false); // Estado para la visibilidad

  // Lógica para mostrar/ocultar el botón según el scroll
  useEffect(() => {
    const manejarScroll = () => {
      if (window.scrollY > 400) {
        setMostrarBotonSubir(true);
      } else {
        setMostrarBotonSubir(false);
      }
    };

    window.addEventListener('scroll', manejarScroll);
    return () => window.removeEventListener('scroll', manejarScroll);
  }, []);

  const toggleFavorito = (id: string) => {
    if (favoritos.includes(id)) {
      setFavoritos(favoritos.filter(favId => favId !== id));
    } else {
      setFavoritos([...favoritos, id]);
    }
  };

  // Función para subir suavemente
  const subirInicio = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const novedades = [
    { id: "bloques", n: "BLOQUES NÓRDICOS", p: "AR$ 65.000", img: "/producto-bloques.jpg" },
    { id: "rompecabezas", n: "PUZZLE ANIMALES", p: "AR$ 38.000", img: "/producto-puzzle.jpg" },
  ];

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

      {/* BOTÓN VOLVER ARRIBA (Izquierda) */}
      <button 
        onClick={subirInicio}
        className={`fixed bottom-6 left-6 z-50 bg-white/80 backdrop-blur-sm text-[#333] p-4 rounded-full shadow-lg border border-[#E5DED5] transition-all duration-300 hover:bg-[#C17967] hover:text-white ${mostrarBotonSubir ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}
      >
        <ArrowUp size={24} />
      </button>

      {/* BOTÓN FLOTANTE DE WHATSAPP (Derecha) */}
      <a 
        href="https://wa.me/5491112345678" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center"
      >
        <MessageCircle size={28} fill="currentColor" />
      </a>

      <div className="w-full max-w-[1200px] bg-[#F9F4F0] text-[#333] shadow-2xl flex flex-col min-h-screen md:rounded-lg overflow-hidden font-serif">
        
        {/* HEADER */}
        <div id="inicio" className="flex justify-center md:justify-end gap-8 px-8 py-4 text-[10px] font-bold uppercase tracking-widest border-b md:border-none border-[#E5DED5]">
          <Link href="/carrito" className="flex items-center gap-2 hover:text-[#C17967] no-underline text-inherit transition-colors">
            <ShoppingCart size={14} strokeWidth={2.5} />
            CARRITO
          </Link>
          <Link href="/cuenta" className="flex items-center gap-2 hover:text-[#C17967] no-underline text-inherit transition-colors">
            <User size={14} strokeWidth={2.5} />
            CUENTA ({favoritos.length})
          </Link>
        </div>

        {/* LOGO */}
        <div className="flex flex-col items-center text-center py-8">
          <img src="/osito.png" alt="Logo" className="h-20 w-auto mb-3" />
          <h1 className="text-4xl md:text-5xl font-normal tracking-[12px] text-[#C17967] leading-none">BOLONIA</h1>
          <div className="text-[11px] tracking-[10px] font-bold mt-2">KIDS</div>
        </div>

        {/* NAVEGACIÓN */}
        <nav className="flex justify-center items-center flex-wrap gap-x-6 gap-y-3 md:gap-10 py-5 border-y border-[#E5DED5] text-[11px] font-bold uppercase px-4 text-center">
          <Link href="/" className="hover:text-[#C17967] no-underline text-inherit">Inicio</Link>
          <Link href="#novedades" className="hover:text-[#C17967] no-underline text-inherit">Novedades</Link>
          <Link href="#productos" className="hover:text-[#C17967] no-underline text-inherit">Productos</Link>
          
          <Link href="/a-medida" className="bg-white border border-[#C17967] text-[#C17967] px-4 py-1.5 rounded-full hover:bg-[#C17967] hover:text-white transition-all no-underline">
            A Medida
          </Link>

          <Link href="#nosotros" className="hover:text-[#C17967] no-underline text-inherit">Nosotros</Link>
          <Link href="#preguntas" className="hover:text-[#C17967] no-underline text-inherit">Preguntas</Link>
          <Link href="#contacto" className="hover:text-[#C17967] no-underline text-inherit">Contacto</Link>
        </nav>

        {/* BANNER */}
        <section className="relative w-full h-[400px] md:h-[550px] flex items-center justify-center md:justify-end overflow-hidden">
          <img src="/banner-principal.jpg" alt="Banner" className="absolute inset-0 w-full h-full object-cover z-0" />
          <div className="relative z-10 bg-white/95 p-8 md:p-12 w-[85%] max-w-[400px] md:mr-20 text-center shadow-lg">
            <h2 className="text-xl md:text-2xl font-normal mb-6 leading-tight uppercase tracking-wider">Artesanía que Inspira</h2>
            <Link href="/catalogo" className="block bg-[#C17967] text-white py-4 font-bold text-[10px] tracking-widest no-underline hover:bg-[#a66352] transition-colors">
              VER COLECCIÓN COMPLETA
            </Link>
          </div>
        </section>

        {/* ... (SECCIONES DE NOVEDADES, RECOMENDADOS Y PRODUCTOS SE MANTIENEN IGUAL) ... */}
        
        {/* GRILLA PRODUCTOS (Resumen para brevedad, mantené tu código original aquí) */}
        <section id="productos" className="w-full max-w-[1100px] mx-auto py-20 px-6 border-t border-[#E5DED5]">
          <h2 className="text-center text-lg tracking-[4px] mb-16 uppercase font-light">Explora la Colección</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
            {productos.map((item) => (
              <div key={item.id} className="flex flex-col items-center text-center group">
                <div className="bg-white w-full aspect-square rounded-xl mb-4 overflow-hidden border border-gray-100 shadow-sm relative">
                  <img src={item.img} alt={item.n} className="w-full h-full object-cover group-hover:opacity-80 transition-opacity" />
                  <button onClick={() => toggleFavorito(item.id)} className="absolute top-3 right-3 p-2 bg-white/90 rounded-full shadow-sm opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
                    <Heart size={14} fill={favoritos.includes(item.id) ? "#C17967" : "none"} color={favoritos.includes(item.id) ? "#C17967" : "#333"} />
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

        {/* ... (SECCIONES INTERMEDIAS SE MANTIENEN IGUAL) ... */}

        {/* SECCIÓN: PREGUNTAS FRECUENTES */}
        <section id="preguntas" className="py-20 px-6 bg-white border-t border-[#E5DED5]">
          <div className="max-w-[800px] mx-auto">
            <h2 className="text-3xl md:text-4xl font-normal mb-12 uppercase tracking-tighter text-center">Preguntas frecuentes</h2>
            <div className="space-y-10">
              {[
                { q: "¿Hacen solo muebles para niños?", a: "Sí. Nos especializamos en cocinas y muebles infantiles y juveniles." },
                { q: "¿Qué materiales utilizan?", a: "Trabajamos con melamina MDF de calidad, enchapados y laqueados." },
                { q: "¿Las cotizaciones tienen costo?", a: "No. Son sin costo." },
                { q: "¿Cómo pido un presupuesto?", a: "Por WhatsApp, email o el formulario de 'A medida'." }
              ].map((faq, index) => (
                <div key={index}>
                  <h4 className="text-[11px] font-bold uppercase tracking-[3px] text-[#C17967] mb-3">{faq.q}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed italic">"{faq.a}"</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACTO / FOOTER */}
        <footer id="contacto" className="bg-[#527184] text-white pt-16 pb-8 px-6 mt-auto">
          <div className="max-w-[1100px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16 text-center border-b border-white/10 pb-16">
              <div className="flex flex-col items-center"><Trees size={32} className="mb-4 text-[#A9B9C7]" /><h4 className="text-[10px] font-bold uppercase tracking-[3px] mb-2">Madera Sustentable</h4></div>
              <div className="flex flex-col items-center"><Palette size={32} className="mb-4 text-[#A9B9C7]" /><h4 className="text-[10px] font-bold uppercase tracking-[3px] mb-2">Pinturas al Agua</h4></div>
              <div className="flex flex-col items-center"><MapPin size={32} className="mb-4 text-[#A9B9C7]" /><h4 className="text-[10px] font-bold uppercase tracking-[3px] mb-2">Industria Local</h4></div>
            </div>
            <div className="text-center pt-8 border-t border-white/5"><p className="text-[9px] tracking-[2px] text-white/40">© {new Date().getFullYear()} Bolonia Kids.</p></div>
          </div>
        </footer>
      </div>
    </div>
  );
}