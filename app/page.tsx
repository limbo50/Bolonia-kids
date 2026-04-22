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
      padding: 'clamp(10px, 4vw, 40px) clamp(5px, 2vw, 20px)', 
      margin: 0
    }}>
      
      <div style={{ 
        backgroundColor: colors.bg, 
        color: colors.text, 
        fontFamily: 'serif', 
        maxWidth: '1200px', 
        margin: '0 auto', 
        boxShadow: '0 25px 60px rgba(0,0,0,0.3)', 
        minHeight: '100vh',
        borderRadius: '4px',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column'
      }}>
        
        {/* HEADER */}
        <div id="inicio" style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          flexWrap: 'wrap', 
          gap: '20px', 
          padding: '15px 20px', 
          fontSize: '0.7rem', 
          fontWeight: 'bold', 
          textTransform: 'uppercase', 
          letterSpacing: '1px' 
        }}>
          <span>🛒 CARRITO</span>
          <span>👤 CUENTA</span>
        </div>

        {/* LOGO */}
        <div style={{ textAlign: 'center', padding: '20px 10px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <img src="/osito.png" alt="Osito Bolonia Kids" style={{ height: 'clamp(60px, 10vw, 100px)', width: 'auto', marginBottom: '15px' }} />
          <h1 style={{ fontSize: 'clamp(1.5rem, 5vw, 2.5rem)', fontWeight: 'normal', letterSpacing: '8px', color: colors.primary, margin: 0 }}>BOLONIA</h1>
          <div style={{ fontSize: 'clamp(0.7rem, 2vw, 0.9rem)', letterSpacing: '10px', marginTop: '-5px', fontWeight: 'bold' }}>KIDS</div>
        </div>

        {/* NAVEGACIÓN */}
        <nav style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          flexWrap: 'wrap', 
          gap: 'clamp(10px, 3vw, 30px)', 
          padding: '15px 10px', 
          borderTop: '1px solid #E5DED5', 
          borderBottom: '1px solid #E5DED5',
          fontSize: '0.7rem', 
          fontWeight: 'bold', 
          textTransform: 'uppercase'
        }}>
          <a href="#inicio" style={{ textDecoration: 'none', color: 'inherit' }}>Inicio</a>
          <a href="#productos" style={{ textDecoration: 'none', color: 'inherit' }}>Cocinitas</a>
          <a href="#productos" style={{ textDecoration: 'none', color: 'inherit' }}>Juguetes de Rol</a>
          <a href="#sobre-nosotros" style={{ textDecoration: 'none', color: 'inherit' }}>Nosotros</a>
          <a href="#contacto" style={{ textDecoration: 'none', color: 'inherit' }}>Contacto</a>
        </nav>

        {/* BANNER FLUIDO */}
        <section style={{ 
          margin: '30px auto', 
          minHeight: 'clamp(300px, 50vh, 500px)', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
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
            backgroundColor: 'rgba(255,255,255,0.92)', 
            padding: 'clamp(20px, 5vw, 50px)', 
            width: '90%', 
            maxWidth: '420px', 
            textAlign: 'center', 
            zIndex: 2,
            boxShadow: '0 15px 35px rgba(0,0,0,0.05)',
            borderRadius: '8px'
          }}>
            <h2 style={{ fontSize: 'clamp(1.1rem, 4vw, 1.8rem)', fontWeight: 'normal', lineHeight: '1.2', marginBottom: '20px' }}>DESCUBRE LA MAGIA DEL JUEGO ARTESANAL</h2>
            <a href="#productos" style={{ 
              display: 'inline-block', textDecoration: 'none', 
              backgroundColor: colors.primary, color: 'white', 
              padding: '12px 25px', fontWeight: 'bold', fontSize: '0.8rem'
            }}>EXPLORAR CATÁLOGO</a>
          </div>
        </section>

        {/* PRODUCTOS CON PRECIOS ACTUALIZADOS */}
        <section id="productos" style={{ maxWidth: '1200px', margin: '40px auto', padding: '0 20px' }}>
          <h2 style={{ textAlign: 'center', fontSize: '1.2rem', marginBottom: '30px', letterSpacing: '2px' }}>PRODUCTOS DESTACADOS</h2>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
            gap: '30px' 
          }}>
            {[
              { n: "COCINITA CLÁSICA 'BOLONIA'", p: "AR$ 1.500,00", img: "/producto-cocina.jpg" },
              { n: "SET CAFETERÍA DE MADERA", p: "AR$ 1.300,00", img: "/producto-set-cafeteria.jpg" },
              { n: "SET PIZZERÍA ARTESANAL", p: "AR$ 1.200,00", img: "/producto-set-pizzeria.jpg" },
              { n: "SET PATISSERIE FRANCESA", p: "AR$ 1.400,00", img: "/producto-set-patisserie.jpg" }
            ].map((item, i) => (
              <div key={i} style={{ textAlign: 'center' }}>
                <div style={{ 
                  backgroundColor: '#FFF', height: '300px', borderRadius: '15px', 
                  marginBottom: '15px', overflow: 'hidden', border: '1px solid #EEE'
                }}>
                  <img src={item.img} alt={item.n} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <h3 style={{ fontSize: '0.85rem', fontWeight: 'bold' }}>{item.n}</h3>
                <p style={{ fontSize: '0.9rem' }}>{item.p}</p>
                <button style={{ backgroundColor: colors.secondary, color: 'white', border: 'none', padding: '10px 25px', borderRadius: '25px', fontSize: '0.75rem' }}>AGREGAR AL CARRITO</button>
              </div>
            ))}
          </div>
        </section>

        {/* SOBRE NOSOTROS */}
        <section id="sobre-nosotros" style={{ padding: '60px 20px', textAlign: 'center', backgroundColor: '#FFF' }}>
          <h2 style={{ fontSize: '1.2rem', fontWeight: 'normal' }}>SOBRE NOSOTROS</h2>
          <p style={{ maxWidth: '600px', margin: '20px auto', lineHeight: '1.6', color: '#666', fontSize: '0.95rem' }}>
            En Bolonia Kids creamos juguetes que inspiran historias. Cada pieza de madera es cortada y pintada a mano en nuestro taller.
          </p>
        </section>

        {/* FOOTER */}
        <footer id="contacto" style={{ backgroundColor: colors.footer, color: 'white', padding: '40px 20px', marginTop: 'auto' }}>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
            gap: '30px', 
            fontSize: '0.8rem',
            textAlign: 'center'
          }}>
            <div>
              <h4 style={{ borderBottom: '1px solid rgba(255,255,255,0.3)', paddingBottom: '10px' }}>INFO</h4>
              <p>Pilar, Buenos Aires</p>
            </div>
            <div>
              <h4 style={{ borderBottom: '1px solid rgba(255,255,255,0.3)', paddingBottom: '10px' }}>CONTACTO</h4>
              <p>hola@boloniakids.com</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}