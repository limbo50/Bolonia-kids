'use client';

import { useEffect, useState } from 'react';

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const colors = {
    bg: '#F9F4F0',
    primary: '#C17967',
    secondary: '#527184',
    footer: '#A9B9C7',
    text: '#333333'
  };

  return (
    <div style={{ 
      backgroundImage: 'url("/fondo-madera.jpg")', 
      backgroundSize: 'cover',
      backgroundAttachment: 'fixed',
      minHeight: '100vh',
      padding: isMobile ? '10px 0' : '40px 0',
      margin: 0,
      display: 'flex',
      justifyContent: 'center'
    }}>
      
      <div style={{ 
        backgroundColor: colors.bg, 
        color: colors.text, 
        fontFamily: 'serif', 
        width: '100%',
        maxWidth: '1200px', 
        margin: '0 auto', 
        boxShadow: '0 25px 60px rgba(0,0,0,0.3)', 
        minHeight: '100vh',
        borderRadius: isMobile ? '0' : '4px',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column'
      }}>
        
        {/* HEADER */}
        <div id="inicio" style={{ 
          display: 'flex', 
          justifyContent: isMobile ? 'center' : 'flex-end', 
          gap: '20px', 
          padding: '15px clamp(20px, 5vw, 50px)', 
          fontSize: '0.7rem', 
          fontWeight: 'bold', 
          textTransform: 'uppercase'
        }}>
          <span>🛒 CARRITO</span>
          <span>👤 CUENTA</span>
        </div>

        {/* LOGO */}
        <div style={{ textAlign: 'center', padding: '20px 0' }}>
          <img src="/osito.png" alt="Logo" style={{ height: '80px', width: 'auto', marginBottom: '10px' }} />
          <h1 style={{ fontSize: '2.5rem', fontWeight: 'normal', letterSpacing: '8px', color: colors.primary, margin: 0 }}>BOLONIA</h1>
          <div style={{ fontSize: '0.9rem', letterSpacing: '10px', marginTop: '-5px', fontWeight: 'bold' }}>KIDS</div>
        </div>

        {/* NAVEGACIÓN */}
        <nav style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          flexWrap: 'wrap', 
          gap: isMobile ? '15px' : '30px', 
          padding: '20px 10px', 
          borderTop: '1px solid #E5DED5', 
          borderBottom: '1px solid #E5DED5',
          fontSize: '0.75rem', 
          fontWeight: 'bold', 
          textTransform: 'uppercase'
        }}>
          <a href="#inicio" style={{ textDecoration: 'none', color: 'inherit' }}>Inicio</a>
          <a href="#productos" style={{ textDecoration: 'none', color: 'inherit' }}>Cocinitas</a>
          <a href="#productos" style={{ textDecoration: 'none', color: 'inherit' }}>Juguetes de Rol</a>
          <a href="#sobre-nosotros" style={{ textDecoration: 'none', color: 'inherit' }}>Nosotros</a>
          <a href="#contacto" style={{ textDecoration: 'none', color: 'inherit' }}>Contacto</a>
        </nav>

        {/* BANNER */}
        <section style={{ 
          margin: '30px auto', 
          height: isMobile ? '450px' : '550px', 
          display: 'flex', 
          alignItems: isMobile ? 'center' : 'center', 
          justifyContent: isMobile ? 'center' : 'flex-end',
          position: 'relative', 
          width: '100%'
        }}>
          <img 
            src="/banner-principal.jpg" 
            alt="Banner"
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 1 }} 
          />
          
          <div style={{ 
            backgroundColor: 'rgba(255,255,255,0.95)', 
            padding: '40px', 
            width: isMobile ? '85%' : '380px', 
            marginRight: isMobile ? '0' : '80px', 
            textAlign: 'center', 
            zIndex: 2,
            boxShadow: '0 15px 35px rgba(0,0,0,0.1)'
          }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 'normal', marginBottom: '25px' }}>DESCUBRE LA MAGIA DEL JUEGO ARTESANAL</h2>
            <a href="#productos" style={{ 
              display: 'block', textDecoration: 'none', 
              backgroundColor: colors.primary, color: 'white', 
              padding: '15px 30px', fontWeight: 'bold', fontSize: '0.8rem'
            }}>EXPLORAR CATÁLOGO</a>
          </div>
        </section>

        {/* PRODUCTOS (HORIZONTAL EN DESKTOP) */}
        <section id="productos" style={{ maxWidth: '1100px', margin: '60px auto', padding: '0 20px' }}>
          <h2 style={{ textAlign: 'center', fontSize: '1.4rem', marginBottom: '40px', letterSpacing: '2px' }}>PRODUCTOS DESTACADOS</h2>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
            gap: '30px' 
          }}>
            {[
              { n: "COCINITA CLÁSICA 'BOLONIA'", p: "AR$ 150.000", img: "/producto-cocina.jpg" },
              { n: "SET CAFETERÍA DE MADERA", p: "AR$ 130.000", img: "/producto-set-cafeteria.jpg" },
              { n: "SET PIZZERÍA ARTESANAL", p: "AR$ 120.000", img: "/producto-set-pizzeria.jpg" },
              { n: "SET PATISSERIE FRANCESA", p: "AR$ 140.000", img: "/producto-set-patisserie.jpg" }
            ].map((item, i) => (
              <div key={i} style={{ textAlign: 'center' }}>
                <div style={{ 
                  backgroundColor: '#FFF', height: '280px', borderRadius: '15px', 
                  marginBottom: '20px', overflow: 'hidden', border: '1px solid #EEE'
                }}>
                  <img src={item.img} alt={item.n} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <h3 style={{ fontSize: '0.8rem', fontWeight: 'bold' }}>{item.n}</h3>
                <p style={{ fontSize: '0.9rem', color: colors.primary, fontWeight: 'bold' }}>{item.p}</p>
                <button style={{ backgroundColor: colors.secondary, color: 'white', border: 'none', padding: '10px 20px', borderRadius: '25px', fontSize: '0.7rem', marginTop: '10px' }}>AGREGAR</button>
              </div>
            ))}
          </div>
        </section>

        {/* FOOTER */}
        <footer id="contacto" style={{ backgroundColor: colors.footer, color: 'white', padding: '40px 20px', marginTop: 'auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: '30px', fontSize: '0.8rem', textAlign: 'center' }}>
            <div>
              <h4 style={{ borderBottom: '1px solid white' }}>CONTACTO</h4>
              <p>Pilar, Buenos Aires</p>
            </div>
            <div>
              <h4 style={{ borderBottom: '1px solid white' }}>EMAIL</h4>
              <p>hola@boloniakids.com</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}