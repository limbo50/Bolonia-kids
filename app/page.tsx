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
      padding: '20px 10px', // Reducido para móviles
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
        
        {/* HEADER SUPERIOR: Ahora se centra en móviles */}
        <div id="inicio" style={{ 
          display: 'flex', 
          justifyContent: 'center', // Centrado para que no se pegue a los bordes
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
        <div style={{ textAlign: 'center', padding: '20px 0', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <img src="/osito.png" alt="Osito Bolonia Kids" style={{ height: '80px', width: 'auto', marginBottom: '10px' }} />
          <h1 style={{ fontSize: '2rem', fontWeight: 'normal', letterSpacing: '8px', color: colors.primary, margin: 0 }}>BOLONIA</h1>
          <div style={{ fontSize: '0.8rem', letterSpacing: '10px', marginTop: '-5px', fontWeight: 'bold' }}>KIDS</div>
        </div>

        {/* NAVEGACIÓN: La clave es flexWrap para que bajen los links si no entran */}
        <nav style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          flexWrap: 'wrap', // PERMITE QUE LOS LINKS BAJEN
          gap: '15px', 
          padding: '15px 10px', 
          borderTop: '1px solid #E5DED5', 
          borderBottom: '1px solid #E5DED5',
          fontSize: '0.7rem', 
          fontWeight: 'bold', 
          textTransform: 'uppercase', 
          textAlign: 'center'
        }}>
          <a href="#inicio" style={{ textDecoration: 'none', color: 'inherit' }}>Inicio</a>
          <a href="#productos" style={{ textDecoration: 'none', color: 'inherit' }}>Cocinitas</a>
          <a href="#productos" style={{ textDecoration: 'none', color: 'inherit' }}>Juguetes de Rol</a>
          <a href="#sobre-nosotros" style={{ textDecoration: 'none', color: 'inherit' }}>Nosotros</a>
          <a href="#contacto" style={{ textDecoration: 'none', color: 'inherit' }}>Contacto</a>
        </nav>

        {/* BANNER: Eliminamos el height fijo de 500px para que sea fluido */}
        <section style={{ 
          maxWidth: '1200px', 
          margin: '30px auto', 
          minHeight: '400px', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', // Centra la caja blanca en móviles
          backgroundColor: '#E5DED5', 
          position: 'relative', 
          overflow: 'hidden',
          padding: '40px 20px'
        }}>
          <img 
            src="/banner-principal.jpg" 
            alt="Banner Principal"
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 1 }} 
          />
          
          {/* CAJA BLANCA: Ahora el ancho es dinámico (max-width) */}
          <div style={{ 
            backgroundColor: 'rgba(255,255,255,0.92)', 
            padding: '30px', 
            width: '100%', 
            maxWidth: '350px', // No se pasa de este ancho
            textAlign: 'center', 
            zIndex: 2,
            boxShadow: '0 15px 35px rgba(0,0,0,0.05)',
            borderRadius: '8px'
          }}>
            <h2 style={{ fontSize: '1.4rem', fontWeight: 'normal', lineHeight: '1.2', marginBottom: '20px' }}>DESCUBRE LA MAGIA DEL JUEGO ARTESANAL</h2>
            <a href="#productos" style={{ 
              display: 'inline-block', textDecoration: 'none', 
              backgroundColor: colors.primary, color: 'white', 
              padding: '12px 25px', fontWeight: 'bold', fontSize: '0.8rem'
            }}>EXPLORAR CATÁLOGO</a>
          </div>
        </section>

        {/* PRODUCTOS: Grid automático */}
        <section id="productos" style={{ maxWidth: '1200px', margin: '40px auto', padding: '0 20px' }}>
          <h2 style={{ textAlign: 'center', fontSize: '1.2rem', marginBottom: '30px', letterSpacing: '2px' }}>PRODUCTOS DESTACADOS</h2>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
            gap: '20px' 
          }}>
            {[
              { n: "COCINITA CLÁSICA", p: "AR$ 150,00", img: "/producto-cocina.jpg" },
              { n: "SET CAFETERÍA", p: "AR$ 130,00", img: "/producto-set-cafeteria.jpg" },
              { n: "SET PIZZERÍA", p: "AR$ 120,00", img: "/producto-set-pizzeria.jpg" },
              { n: "SET PATISSERIE", p: "AR$ 140,00", img: "/producto-set-patisserie.jpg" }
            ].map((item, i) => (
              <div key={i} style={{ textAlign: 'center', marginBottom: '30px' }}>
                <div style={{ 
                  backgroundColor: '#FFF', height: '250px', borderRadius: '15px', 
                  marginBottom: '15px', overflow: 'hidden', border: '1px solid #EEE'
                }}>
                  <img src={item.img} alt={item.n} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <h3 style={{ fontSize: '0.8rem', fontWeight: 'bold' }}>{item.n}</h3>
                <p style={{ fontSize: '0.85rem' }}>{item.p}</p>
                <button style={{ backgroundColor: colors.secondary, color: 'white', border: 'none', padding: '8px 20px', borderRadius: '20px', fontSize: '0.7rem' }}>CARRITO</button>
              </div>
            ))}
          </div>
        </section>

        {/* FOOTER: Grid responsivo */}
        <footer id="contacto" style={{ backgroundColor: colors.footer, color: 'white', padding: '40px 20px', marginTop: 'auto' }}>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
            gap: '30px', 
            fontSize: '0.8rem',
            textAlign: 'center'
          }}>
            <div>
              <h4 style={{ borderBottom: '1px solid rgba(255,255,255,0.3)', paddingBottom: '5px' }}>CONTACTO</h4>
              <p>Pilar, Buenos Aires</p>
            </div>
            <div>
              <h4 style={{ borderBottom: '1px solid rgba(255,255,255,0.3)', paddingBottom: '5px' }}>REDES</h4>
              <p>@boloniakids</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}