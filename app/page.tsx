'use client';

export default function Home() {
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
      padding: 'clamp(10px, 4vw, 40px) 0', // Eliminamos padding lateral aquí para maximizar espacio
      margin: 0,
      display: 'flex',
      justifyContent: 'center'
    }}>
      
      <div style={{ 
        backgroundColor: colors.bg, 
        color: colors.text, 
        fontFamily: 'serif', 
        width: '100%',
        maxWidth: '1200px', // Límite de ancho en Desktop
        margin: '0 auto', 
        boxShadow: '0 25px 60px rgba(0,0,0,0.3)', 
        minHeight: '100vh',
        borderRadius: '4px',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column'
      }}>
        
        {/* HEADER: En Desktop se verá a la derecha, en Mobile centrado */}
        <div id="inicio" style={{ 
          display: 'flex', 
          justifyContent: 'flex-end', 
          flexWrap: 'wrap', 
          gap: '20px', 
          padding: '15px clamp(20px, 5vw, 50px)', 
          fontSize: '0.7rem', 
          fontWeight: 'bold', 
          textTransform: 'uppercase', 
          letterSpacing: '1px' 
        }}>
          <span>🛒 CARRITO</span>
          <span>👤 CUENTA</span>
        </div>

        {/* LOGO */}
        <div style={{ textAlign: 'center', padding: '20px 0', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <img src="/osito.png" alt="Osito Bolonia Kids" style={{ height: 'clamp(70px, 8vw, 100px)', width: 'auto', marginBottom: '10px' }} />
          <h1 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: 'normal', letterSpacing: '8px', color: colors.primary, margin: 0 }}>BOLONIA</h1>
          <div style={{ fontSize: 'clamp(0.75rem, 1.5vw, 0.9rem)', letterSpacing: '10px', marginTop: '-5px', fontWeight: 'bold' }}>KIDS</div>
        </div>

        {/* NAVEGACIÓN */}
        <nav style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          flexWrap: 'wrap', 
          gap: 'clamp(15px, 3vw, 40px)', 
          padding: '20px 10px', 
          borderTop: '1px solid #E5DED5', 
          borderBottom: '1px solid #E5DED5',
          fontSize: '0.75rem', 
          fontWeight: 'bold', 
          textTransform: 'uppercase'
        }}>
          <a href="#inicio" style={{ textDecoration: 'none', color: 'inherit' }}>Inicio</a>
          <a href="#productos" style={{ textDecoration: 'none', color: 'inherit' }}>Cocinitas de Madera</a>
          <a href="#productos" style={{ textDecoration: 'none', color: 'inherit' }}>Juguetes de Rol</a>
          <a href="#sobre-nosotros" style={{ textDecoration: 'none', color: 'inherit' }}>Sobre Nosotros</a>
          <a href="#contacto" style={{ textDecoration: 'none', color: 'inherit' }}>Contacto</a>
        </nav>

        {/* BANNER: Mejorado para Desktop */}
        <section style={{ 
          margin: '30px auto', 
          height: 'clamp(400px, 60vh, 550px)', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'flex-end', // En desktop la caja va a la derecha como en tu foto
          backgroundColor: '#E5DED5', 
          position: 'relative', 
          overflow: 'hidden',
          width: '100%'
        }}>
          <img 
            src="/banner-principal.jpg" 
            alt="Banner Principal"
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 1 }} 
          />
          
          <div style={{ 
            backgroundColor: 'rgba(255,255,255,0.95)', 
            padding: 'clamp(30px, 5vw, 60px)', 
            width: '90%', 
            maxWidth: '400px', 
            marginRight: 'clamp(20px, 8vw, 80px)', // Margen dinámico para Desktop
            textAlign: 'center', 
            zIndex: 2,
            boxShadow: '0 15px 35px rgba(0,0,0,0.05)'
          }}>
            <h2 style={{ fontSize: 'clamp(1.2rem, 3vw, 1.8rem)', fontWeight: 'normal', lineHeight: '1.2', marginBottom: '25px' }}>DESCUBRE LA MAGIA DEL JUEGO ARTESANAL</h2>
            <a href="#productos" style={{ 
              display: 'block', textDecoration: 'none', 
              backgroundColor: colors.primary, color: 'white', 
              padding: '15px 30px', fontWeight: 'bold', fontSize: '0.8rem'
            }}>EXPLORAR CATÁLOGO</a>
          </div>
        </section>

        {/* PRODUCTOS: Grid que se expande en Desktop (4 columnas) */}
        <section id="productos" style={{ maxWidth: '1100px', margin: '60px auto', padding: '0 20px' }}>
          <h2 style={{ textAlign: 'center', fontSize: '1.4rem', marginBottom: '40px', fontWeight: 'normal', letterSpacing: '2px' }}>PRODUCTOS DESTACADOS</h2>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', // Se ajusta solo: 1 en celu, 4 en compu
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
                  backgroundColor: '#FFF', height: '320px', borderRadius: '15px', 
                  marginBottom: '20px', overflow: 'hidden', border: '1px solid #EEE',
                  boxShadow: '0 5px 15px rgba(0,0,0,0.03)'
                }}>
                  <img src={item.img} alt={item.n} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <h3 style={{ fontSize: '0.85rem', fontWeight: 'bold', margin: '5px 0' }}>{item.n}</h3>
                <p style={{ fontSize: '0.95rem', margin: '5px 0 15px 0' }}>{item.p}</p>
                <button style={{ backgroundColor: colors.secondary, color: 'white', border: 'none', padding: '10px 25px', borderRadius: '25px', fontSize: '0.75rem', fontWeight: 'bold' }}>AGREGAR AL CARRITO</button>
              </div>
            ))}
          </div>
        </section>

        {/* FOOTER */}
        <footer id="contacto" style={{ backgroundColor: colors.footer, color: 'white', padding: '60px 20px', marginTop: 'auto' }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '40px', fontSize: '0.8rem' }}>
            <div>
              <h4 style={{ borderBottom: '1px solid rgba(255,255,255,0.3)', paddingBottom: '10px' }}>INFO DE CONTACTO</h4>
              <p>Pilar, Buenos Aires</p>
              <p>hola@boloniakids.com</p>
            </div>
            <div>
              <h4 style={{ borderBottom: '1px solid rgba(255,255,255,0.3)', paddingBottom: '10px' }}>INFO</h4>
              <p>Políticas de envío</p>
              <p>Seguimiento de pedido</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}