'use client';

import { useState, useEffect } from 'react';
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
  ArrowUp,
  X,
  Trash2
} from 'lucide-react';

export default function Home() {
  const [favoritos, setFavoritos] = useState<string[]>([]);
  const [mostrarBotonSubir, setMostrarBotonSubir] = useState(false);
  
  // ESTADOS PARA EL CARRITO
  const [carritoAbierto, setCarritoAbierto] = useState(false);
  const [itemsCarrito, setItemsCarrito] = useState<any[]>([]);

  useEffect(() => {
    const manejarScroll = () => {
      setMostrarBotonSubir(window.scrollY > 400);
    };
    window.addEventListener('scroll', manejarScroll);
    return () => window.removeEventListener('scroll', manejarScroll);
  }, []);

  const agregarAlCarrito = (producto: any) => {
    setItemsCarrito(prev => [...prev, producto]);
    setCarritoAbierto(true);
  };

  const quitarDelCarrito = (index: number) => {
    setItemsCarrito(prev => prev.filter((_, i) => i !== index));
  };

  // FUNCIÓN CORAZÓN: FAVORITOS + CARRITO
  const manejarClickCorazon = (producto: any) => {
    if (favoritos.includes(producto.id)) {
      setFavoritos(favoritos.filter(favId => favId !== producto.id));
    } else {
      setFavoritos([...favoritos, producto.id]);
      agregarAlCarrito(producto);
    }
  };

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
        ::-webkit-scrollbar { width: 8px; }
        ::-webkit-scrollbar-track { background: #F9F4F0; }
        ::-webkit-scrollbar-thumb { 
          background: #C17967; 
          border-radius: 10px;
          border: 2px solid #F9F4F0;
        }
        ::-webkit-scrollbar-thumb:hover { background: #A66858; }
        body { overflow: ${carritoAbierto ? 'hidden' : 'auto'}; }
      `}</style>

      {/* OVERLAY DEL CARRITO */}
      <div 
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-[100] transition-opacity duration-500 ${carritoAbierto ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} 
        onClick={() => setCarritoAbierto(false)} 
      />
      
      {/* PANEL DEL CARRITO (SIDEBAR) */}
      <div className={`fixed top-0 right-0 h-full w-full max-w-md bg-white z-[110] shadow-2xl transform transition-transform duration-500 ease-out p-8 flex flex-col ${carritoAbierto ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex justify-between items-center border-b border-[#E5DED5] pb-6">
          <h2 className="text-xl font-bold tracking-[4px] uppercase">Tu Selección</h2>
          <button onClick={() => setCarritoAbierto(false)} className="p-2 hover:bg-gray-100 rounded-full transition-colors"><X size={20} /></button>
        </div>
        
        <div className="flex-1 overflow-y-auto py-6 space-y-4">
          {itemsCarrito.length === 0 ? (
            <div className="text-center py-20">
              <ShoppingCart size={40} className="mx-auto text-gray-200 mb-4" />
              <p className="text-gray-400 italic">Tu carrito está esperando ser llenado.</p>
            </div>
          ) : (
            itemsCarrito.map((item, index) => (
              <div key={index} className="flex gap-4 bg-[#F9F4F0]/50 p-3 rounded-xl items-center border border-[#E5DED5]/30">
                <div className="w-16 h-16 bg-gray-200 rounded-lg overflow-hidden flex-shrink-0">
                  <img src={item.img} className="w-full h-full object-cover" alt={item.n} />
                </div>
                <div className="flex-1">
                  <h4 className="text-[11px] font-bold uppercase">{item.n}</h4>
                  <p className="text-[#C17967] font-bold text-sm">{item.p}</p>
                </div>
                <button onClick={() => quitarDelCarrito(index)} className="text-gray-300 hover:text-red-400 transition-colors"><Trash2 size={16} /></button>
              </div>
            ))
          )}
        </div>

        <div className="border-t border-[#E5DED5] pt-6">
          <div className="flex justify-between mb-6 text-sm font-bold uppercase tracking-widest">
            <span>Total estimado</span>
            <span>AR$ {itemsCarrito.reduce((acc, curr) => acc + parseInt(curr.p.replace('AR$ ','').replace('.','')), 0).toLocaleString('es-AR')}</span>
          </div>
          <button className="w-full bg-[#333] text-white py-5 rounded-full font-bold text-[11px] tracking-[3px] uppercase hover:bg-[#C17967] transition-all active:scale-95 shadow-lg">
            Iniciar Pedido
          </button>
        </div>
      </div>

      {/* BOTONES FLOTANTES */}
      <button 
        onClick={subirInicio}
        className={`fixed bottom-6 left-6 z-50 bg-white/80 backdrop-blur-sm text-[#333] p-4 rounded-full shadow-lg border border-[#E5DED5] transition-all duration-300 hover:bg-[#C17967] hover:text-white active:scale-90 ${mostrarBotonSubir ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}
      >
        <ArrowUp size={24} />
      </button>

      <a 
        href="https://wa.me/5491112345678" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all flex items-center justify-center"
      >
        <MessageCircle size={28} fill="currentColor" />
      </a>

      <div className="w-full max-w-[1200px] bg-[#F9F4F0] text-[#333] shadow-2xl flex flex-col min-h-screen md:rounded-lg overflow-hidden font-serif">
        
        {/* HEADER */}
        <div id="inicio" className="sticky top-0 z-40 bg-[#F9F4F0]/70 backdrop-blur-md flex justify-center md:justify-end gap-8 px-8 py-4 text-[10px] font-bold uppercase tracking-widest border-b border-[#E5DED5]/30">
          <button 
            onClick={() => setCarritoAbierto(true)}
            className="flex items-center gap-2 hover:text-[#C17967] transition-colors active:scale-95 uppercase font-bold"
          >
            <ShoppingCart size={14} strokeWidth={2.5} />
            CARRITO ({itemsCarrito.length})
          </button>
          <Link href="/cuenta" className="flex items-center gap-2 hover:text-[#C17967] no-underline text-inherit transition-colors active:scale-95">
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
          <Link href="/" className="hover:text-[#C17967] no-underline text-inherit transition-colors active:scale-95">Inicio</Link>
          <Link href="#novedades" className="hover:text-[#C17967] no-underline text-inherit transition-colors active:scale-95">Novedades</Link>
          <Link href="#productos" className="hover:text-[#C17967] no-underline text-inherit transition-colors active:scale-95">Productos</Link>
          <Link href="/a-medida" className="bg-white border border-[#C17967] text-[#C17967] px-4 py-1.5 rounded-full hover:bg-[#C17967] hover:text-white transition-all no-underline active:scale-95 shadow-sm">
            A Medida
          </Link>
          <Link href="#nosotros" className="hover:text-[#C17967] no-underline text-inherit transition-colors active:scale-95">Nosotros</Link>
          <Link href="#preguntas" className="hover:text-[#C17967] no-underline text-inherit transition-colors active:scale-95">Preguntas</Link>
          <Link href="#contacto" className="hover:text-[#C17967] no-underline text-inherit transition-colors active:scale-95">Contacto</Link>
        </nav>

        {/* BANNER */}
        <section className="relative w-full h-[400px] md:h-[550px] flex items-center justify-center md:justify-end overflow-hidden">
          <img src="/banner-principal.jpg" alt="Banner" className="absolute inset-0 w-full h-full object-cover z-0" />
          <div className="relative z-10 bg-white/95 p-8 md:p-12 w-[85%] max-w-[400px] md:mr-20 text-center shadow-lg transform transition-all duration-1000 animate-in fade-in slide-in-from-bottom-8">
            <h2 className="text-xl md:text-2xl font-normal mb-6 leading-tight uppercase tracking-wider">Artesanía que Inspira</h2>
            <Link href="/catalogo" className="block bg-[#C17967] text-white py-4 font-bold text-[10px] tracking-widest no-underline hover:bg-[#a66352] transition-all active:scale-95">
              VER COLECCIÓN COMPLETA
            </Link>
          </div>
        </section>

        {/* NOVEDADES */}
        <section id="novedades" className="py-16 px-6 bg-[#E5DED5]/30">
          <div className="max-w-[1100px] mx-auto">
            <h2 className="text-[12px] tracking-[6px] font-bold uppercase mb-10 text-center flex items-center justify-center gap-3">
              <Sparkles size={16} /> Lo Último en el Taller
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {novedades.map((item) => (
                <div key={item.id} className="bg-white flex items-center p-4 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all hover:-translate-y-1">
                  <img src={item.img} alt={item.n} className="w-32 h-32 object-cover rounded-lg mr-6" />
                  <div className="flex flex-col">
                    <span className="text-[9px] font-bold text-[#C17967] tracking-widest mb-1 uppercase">¡Recién Llegado!</span>
                    <h3 className="text-sm font-bold mb-1">{item.n}</h3>
                    <p className="text-sm text-gray-500 font-bold mb-4">{item.p}</p>
                    <button onClick={() => agregarAlCarrito(item)} className="text-[10px] font-bold underline decoration-[#C17967] decoration-2 underline-offset-4 uppercase active:scale-95 text-left">
                      Sumar al carrito
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* RECOMENDADOS */}
        <section id="recomendados" className="py-20 px-6 bg-white">
          <div className="max-w-[1000px] mx-auto">
            <h2 className="text-center text-xl tracking-[4px] uppercase font-light mb-12 flex items-center justify-center gap-4">
               <Star size={18} fill="#C17967" color="#C17967" /> Favoritos de la Casa
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              {destacados.map((item) => (
                <div key={item.id} className="group relative">
                  <div className="overflow-hidden rounded-2xl mb-6 aspect-[4/5] bg-[#F9F4F0] relative shadow-sm">
                    <img src={item.img} alt={item.n} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    <button 
                      onClick={() => manejarClickCorazon(item)}
                      className="absolute top-6 right-6 p-3 bg-white/90 rounded-full shadow-lg transition-all duration-300 active:scale-75"
                    >
                      <Heart size={20} fill={favoritos.includes(item.id) ? "#C17967" : "none"} color={favoritos.includes(item.id) ? "#C17967" : "#333"} />
                    </button>
                  </div>
                  <h3 className="text-lg font-bold tracking-widest mb-2 uppercase">{item.n}</h3>
                  <p className="text-gray-500 text-sm italic mb-4 leading-relaxed">{item.desc}</p>
                  <div className="flex items-center justify-between border-t border-gray-100 pt-4">
                    <span className="text-[#C17967] font-bold">{item.p}</span>
                    <button onClick={() => agregarAlCarrito(item)} className="text-[10px] font-bold tracking-widest uppercase border-b-2 border-[#C17967] pb-1 hover:text-[#C17967] transition-colors active:scale-95">Comprar</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* GRILLA PRODUCTOS */}
        <section id="productos" className="w-full max-w-[1100px] mx-auto py-20 px-6 border-t border-[#E5DED5]">
          <h2 className="text-center text-lg tracking-[4px] mb-16 uppercase font-light">Explora la Colección</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
            {productos.map((item) => (
              <div key={item.id} className="flex flex-col items-center text-center group">
                <div className="bg-white w-full aspect-square rounded-xl mb-4 overflow-hidden border border-gray-100 shadow-sm relative transition-all group-hover:shadow-md">
                  <img src={item.img} alt={item.n} className="w-full h-full object-cover group-hover:opacity-80 transition-opacity" />
                  <button 
                    onClick={() => manejarClickCorazon(item)}
                    className="absolute top-3 right-3 p-2 bg-white/90 rounded-full shadow-sm active:scale-75"
                  >
                    <Heart size={14} fill={favoritos.includes(item.id) ? "#C17967" : "none"} color={favoritos.includes(item.id) ? "#C17967" : "#333"} />
                  </button>
                </div>
                <h3 className="text-[11px] font-bold mb-1 tracking-wider uppercase h-8 flex items-center">{item.n}</h3>
                <p className="text-[13px] text-[#C17967] font-bold mb-4">{item.p}</p>
                <button 
                  onClick={() => agregarAlCarrito(item)}
                  className="text-[9px] font-bold uppercase tracking-widest text-gray-400 hover:text-black transition-all border border-gray-200 px-4 py-2 rounded-full active:scale-95"
                >
                  Agregar
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* SECCIÓN INTERMEDIA: A MEDIDA */}
        <section className="py-12 px-6 bg-white">
          <div className="max-w-[1100px] mx-auto">
            <div className="bg-[#F9F4F0] rounded-[40px] p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10 border border-[#E5DED5] transition-all hover:shadow-inner">
              <div className="text-center md:text-left md:max-w-[500px]">
                <h2 className="text-[12px] tracking-[5px] font-bold uppercase mb-4 text-[#C17967]">Personalización</h2>
                <h3 className="text-3xl md:text-4xl font-normal mb-6 leading-tight uppercase tracking-tighter">¿Tenés una idea especial en mente?</h3>
                <p className="text-gray-600 italic text-lg leading-relaxed">
                  "Desde medidas específicas hasta diseños totalmente nuevos, hacemos realidad el mueble o juguete que soñaste."
                </p>
              </div>
              <Link href="/a-medida" className="bg-[#333] text-white px-10 py-5 rounded-full font-bold text-[11px] tracking-[3px] uppercase hover:bg-[#C17967] transition-all shadow-xl hover:scale-105 active:scale-95 no-underline">
                Solicitar Presupuesto
              </Link>
            </div>
          </div>
        </section>

        {/* CÓMO TRABAJAMOS */}
        <section className="py-20 px-6 bg-[#FDFCFB] border-t border-[#E5DED5]">
          <div className="max-w-[1100px] mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-normal mb-4 uppercase tracking-tighter text-[#333]">Cómo trabajamos</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-16">
              {[
                { n: "1", t: "Nos contás lo que necesitás" },
                { n: "2", t: "Definimos medidas, material y herrajes" },
                { n: "3", t: "Te enviamos presupuesto sin costo" },
                { n: "4", t: "Fabricamos y coordinamos la entrega" }
              ].map((paso) => (
                <div key={paso.n} className="flex flex-col items-center group">
                  <div className="w-12 h-12 bg-[#C17967] text-white rounded-full flex items-center justify-center font-bold mb-6 shadow-lg group-hover:scale-110 transition-transform">{paso.n}</div>
                  <p className="text-[13px] font-bold uppercase tracking-widest leading-relaxed px-4">{paso.t}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* NOSOTROS */}
        <section id="nosotros" className="py-24 px-6 bg-[#E5DED5]/20 border-t border-[#E5DED5]">
          <div className="max-w-[800px] mx-auto text-center">
            <h2 className="text-[12px] tracking-[6px] font-bold uppercase mb-8 text-[#C17967]">Nuestra Esencia</h2>
            <p className="text-lg md:text-xl leading-relaxed text-gray-700 italic font-light">
              "En nuestro taller de Pilar, cada juguete nace de la convicción de que el juego es el lenguaje más puro de la infancia. 
              Diseñamos piezas duraderas, libres de plásticos y llenas de imaginación, pensadas para pasar de generación en generación."
            </p>
          </div>
        </section>

        {/* PREGUNTAS FRECUENTES (RESTABLECIDO) */}
        <section id="preguntas" className="py-20 px-6 bg-white border-t border-[#E5DED5]">
          <div className="max-w-[800px] mx-auto">
            <h2 className="text-3xl md:text-4xl font-normal mb-12 uppercase tracking-tighter text-center">Preguntas frecuentes</h2>
            <div className="space-y-10">
              {[
                { q: "¿Hacen solo muebles para niños?", a: "Sí. Nos especializamos en cocinas y muebles infantiles y juveniles, siempre con medidas y terminaciones acordes." },
                { q: "¿Qué materiales utilizan?", a: "Trabajamos con melamina MDF de calidad, enchapados y laqueados, con herrajes adecuados al uso diario." },
                { q: "¿Las cotizaciones tienen costo?", a: "No. Son sin costo. Coordinamos visita para medir y armar el presupuesto con vos." },
                { q: "¿Cómo pido un presupuesto?", a: "Por WhatsApp, email o el formulario de 'A medida'. Te asesoramos en cada paso." }
              ].map((faq, index) => (
                <div key={index} className="hover:pl-2 transition-all duration-300 border-l-0 hover:border-l-2 hover:border-[#C17967]">
                  <h4 className="text-[11px] font-bold uppercase tracking-[3px] text-[#C17967] mb-3">{faq.q}</h4>
                  <p className="text-gray-600 text-sm italic leading-relaxed">"{faq.a}"</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer id="contacto" className="bg-[#527184] text-white pt-16 pb-8 px-6 mt-auto">
          <div className="max-w-[1100px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16 text-center border-b border-white/10 pb-16">
              <div className="flex flex-col items-center group cursor-default">
                <Trees size={32} className="mb-4 text-[#A9B9C7] group-hover:scale-110 transition-transform" />
                <h4 className="text-[10px] font-bold uppercase tracking-[3px] mb-2">Madera Sustentable</h4>
              </div>
              <div className="flex flex-col items-center group cursor-default">
                <Palette size={32} className="mb-4 text-[#A9B9C7] group-hover:scale-110 transition-transform" />
                <h4 className="text-[10px] font-bold uppercase tracking-[3px] mb-2">Pinturas al Agua</h4>
              </div>
              <div className="flex flex-col items-center group cursor-default">
                <MapPin size={32} className="mb-4 text-[#A9B9C7] group-hover:scale-110 transition-transform" />
                <h4 className="text-[10px] font-bold uppercase tracking-[3px] mb-2">Industria Local</h4>
              </div>
            </div>
            <p className="text-center text-[9px] tracking-[2px] text-white/40">© {new Date().getFullYear()} Bolonia Kids.</p>
          </div>
        </footer>
      </div>
    </div>
  );
}