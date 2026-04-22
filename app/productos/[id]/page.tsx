'use client';
import { useParams } from 'next/navigation';
import Link from 'next/link';

export default function DetalleProducto() {
  const params = useParams();
  const id = params.id;

  // Lista completa para que coincida con la Home
  const productos = [
    { id: "cocinita", n: "COCINITA CLÁSICA", p: "AR$ 150.000", img: "/producto-cocina.jpg", desc: "Nuestra pieza estrella. Una cocinita artesanal fabricada íntegramente en madera de pino de primera calidad. Incluye detalles reales como perillas giratorias, bacha de acero y estantes para organizar todos los accesorios. Pintada con tintas al agua no tóxicas." },
    { id: "cafeteria", n: "SET CAFETERÍA", p: "AR$ 130.000", img: "/producto-set-cafeteria.jpg", desc: "El set ideal para los pequeños baristas. Incluye la máquina de café de madera, dos tazas, platitos y granos de café decorativos. Estimula la motricidad fina y el juego simbólico." },
    { id: "pizzeria", n: "SET PIZZERÍA", p: "AR$ 120.000", img: "/producto-set-pizzeria.jpg", desc: "¡Maestro pizzero en acción! Este set incluye la pala de madera, una pizza dividida en porciones con abrojo y diferentes ingredientes para combinar. Todo fabricado en madera suave al tacto." },
    { id: "patisserie", n: "SET PATISSERIE", p: "AR$ 140.000", img: "/producto-set-patisserie.jpg", desc: "Para las tardes de té más elegantes. Incluye una selección de pasteles, tortas y macarons de madera pintados a mano. Una delicia visual para jugar y decorar." }
  ];

  const producto = productos.find(p => p.id === id);

  // Si el usuario entra a un ID que no existe, le damos un botón para volver
  if (!producto) {
    return (
      <div className="min-h-screen bg-[#F9F4F0] flex items-center justify-center p-8">
        <div className="text-center">
          <h2 className="text-2xl mb-4">Ups! No encontramos ese producto.</h2>
          <Link href="/" className="text-[#C17967] font-bold underline">Volver al inicio</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cover bg-fixed flex justify-center items-center p-4 md:p-10" style={{ backgroundImage: 'url("/fondo-madera.jpg")' }}>
      
      <div className="w-full max-w-[1100px] bg-[#F9F4F0] shadow-2xl rounded-2xl overflow-hidden flex flex-col md:flex-row min-h-[600px] font-serif">
        
        {/* IMAGEN DEL PRODUCTO */}
        <div className="flex-1 bg-white flex items-center justify-center overflow-hidden">
          <img 
            src={producto.img} 
            alt={producto.n} 
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" 
          />
        </div>

        {/* INFO DEL PRODUCTO */}
        <div className="flex-1 p-8 md:p-16 flex flex-col justify-center">
          <Link href="/" className="text-[10px] font-bold text-gray-400 mb-6 tracking-[3px] no-underline hover:text-black transition-colors">
            ← VOLVER AL CATÁLOGO
          </Link>
          
          <h1 className="text-4xl md:text-5xl text-[#C17967] leading-none mb-4 font-normal uppercase tracking-tighter">
            {producto.n}
          </h1>
          
          <p className="text-2xl font-bold text-[#333] mb-8">
            {producto.p}
          </p>
          
          <div className="w-12 h-[2px] bg-[#E5DED5] mb-8"></div>
          
          <p className="text-gray-600 leading-relaxed text-sm md:text-base mb-10 italic">
            "{producto.desc}"
          </p>
          
          <a 
            href={`https://wa.me/5491100000000?text=Hola! Me gustaría consultar por el producto: ${producto.n}`}
            target="_blank"
            className="bg-[#C17967] text-white text-center py-5 rounded-full font-bold uppercase text-[10px] tracking-[4px] shadow-lg hover:bg-[#A66858] transition-all no-underline"
          >
            Consultar por WhatsApp
          </a>
          
          <p className="text-[9px] text-center text-gray-400 mt-6 tracking-widest uppercase">
            Hecho a mano en Pilar, Buenos Aires
          </p>
        </div>
      </div>
    </div>
  );
}