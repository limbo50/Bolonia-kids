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
      padding: '40px 20px',
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
        scrollBehavior: 'smooth'
      }}>
        
        <div id="inicio" style={{ display: 'flex', justifyContent: 'flex-end', gap: '20px', padding: '15px 50px', fontSize: '0.7rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px' }}>
          <span>🛒 CARRITO</span>
          <span>👤 CUENTA</span>
        </div>

        <div style={{ 
          textAlign: 'center', 
          padding: '20px 0 40px 0', 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center' 
        }}>
          <img 
            src="/osito.png" 
            alt="Osito Bolonia Kids"
            style={{ height: '100px', width: 'auto', marginBottom: '15px', display: 'block' }} 
          />
          <div style={{ textAlign: 'center' }}>
            <h1 style={{ fontSize: '2.5rem', fontWeight: 'normal', letterSpacing: '8px', color: colors.primary, margin: 0 }}>BOLONIA</h1>
            <div style={{ fontSize: '0.9rem', letterSpacing: '10px', marginTop: '-5px', fontWeight: 'bold' }}>KIDS</div>
          </div>
        </div>

        <nav style={{ 
          display: 'flex', justifyContent: 'center', gap: '30px', 
          padding: '15px 0', borderTop: '1px solid #E5DED5', borderBottom: '1px solid #E5DED5',
          fontSize: '0.75rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px' 
        }}>
          <a href="#inicio" style={{ textDecoration: 'none', color: 'inherit', borderBottom: `2px solid ${colors.primary}`, paddingBottom: '2px' }}>Inicio</a>
          <a href="#productos" style={{ textDecoration: 'none', color: 'inherit' }}>Cocinitas de Madera</a>
          <a href="#productos" style={{ textDecoration: 'none', color: 'inherit' }}>Juguetes de Rol</a>
          <a href="#sobre-nosotros" style={{ textDecoration: 'none', color: 'inherit' }}>Sobre Nosotros</a>
          <a href="#contacto" style={{ textDecoration: 'none', color: 'inherit' }}>Contacto</a>
        </nav>

        <section style={{ 
          maxWidth: '1200px', margin: '30px auto', height: '500px', 
          display: 'flex', alignItems: 'center', justifyContent: 'flex-end',
          backgroundColor: '#E5DED5', 
          position: 'relative', overflow: 'hidden'
        }}>
          <img 
            src="/banner-principal.jpg" 
            alt="Banner Principal"
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 1 }} 
          />
          
          <div style={{ 
            backgroundColor: 'rgba(255,255,255,0.95)', padding: '50px', 
            marginRight: '80px', width: '380px', textAlign: 'center', zIndex: 2,
            boxShadow: '0 15px 35px rgba(0,0,0,0.05)'
          }}>
            <h2 style={{ fontSize: '1.8rem', fontWeight: 'normal', lineHeight: '1.2', marginBottom: '25px' }}>DESCUBRE LA MAGIA DEL JUEGO ARTESANAL</h2>
            <a href="#productos" style={{ 
              display: 'block', textDecoration: 'none', textAlign: 'center',
              backgroundColor: colors.primary, color: 'white', border: 'none', 
              padding: '15px 30px', fontWeight: 'bold', fontSize: '0.8rem', letterSpacing: '1px'
            }}>EXPLORAR CATÁLOGO</a>
          </div>
        </section>

        <section id="productos" style={{ maxWidth: '1200px', margin: '60px auto', padding: '0 20px' }}>
          <h2 style={{ textAlign: 'center', fontSize: '1.4rem', marginBottom: '40px', fontWeight: 'normal', letterSpacing: '2px' }}>PRODUCTOS DESTACADOS</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px' }}>
            {[
              { n: "COCINITA CLÁSICA 'BOLONIA'", p: "AR$ 150,00", img: "/producto-cocina.jpg" },
              { n: "SET CAFETERÍA DE MADERA", p: "AR$ 130,00", img: "/producto-set-cafeteria.jpg" },
              { n: "SET PIZZERÍA ARTESANAL", p: "AR$ 120,00", img: "/producto-set-pizzeria.jpg" },
              { n: "SET PATISSERIE FRANCESA", p: "AR$ 140,00", img: "/producto-set-patisserie.jpg" }
            ].map((item, i) => (
              <div key={i} style={{ textAlign: 'center' }}>
                <div style={{ 
                  backgroundColor: '#FFF', height: '320px', borderRadius: '15px', 
                  marginBottom: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  boxShadow: '0 5px 15px rgba(0,0,0,0.03)', border: '1px solid #EEE',
                  overflow: 'hidden'
                }}>
                  <img src={item.img} alt={item.n} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <h3 style={{ fontSize: '0.85rem', fontWeight: 'bold', margin: '5px 0' }}>{item.n}</h3>
                <p style={{ fontSize: '0.9rem', margin: '5px 0 15px 0' }}>{item.p}</p>
                <button style={{ backgroundColor: colors.secondary, color: 'white', border: 'none', padding: '10px 25px', borderRadius: '25px', fontSize: '0.75rem', fontWeight: 'bold' }}>AGREGAR AL CARRITO</button>
              </div>
            ))}
          </div>
        </section>

        <section id="sobre-nosotros" style={{ padding: '80px 20px', textAlign: 'center', backgroundColor: '#FFF', borderTop: '1px solid #EEE' }}>
          <h2 style={{ fontSize: '1.4rem', letterSpacing: '2px', fontWeight: 'normal' }}>SOBRE NOSOTROS</h2>
          <p style={{ maxWidth: '600px', margin: '20px auto', lineHeight: '1.6', color: '#666' }}>
            En Bolonia Kids creamos juguetes que inspiran historias. Cada pieza de madera es cortada y pintada a mano en nuestro taller, pensando en la durabilidad y la magia del juego tradicional.
          </p>
        </section>

        <footer id="contacto" style={{ backgroundColor: colors.footer, color: 'white', padding: '60px 20px', marginTop: '80px' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '40px', fontSize: '0.8rem' }}>
            <div>
              <h4 style={{ borderBottom: '1px solid rgba(255,255,255,0.3)', paddingBottom: '10px' }}>INFO DE CONTACTO</h4>
              <p>Pilar, Buenos Aires</p>
              <p>hola@boloniakids.com</p>
            </div>
            <div>
              <h4 style={{ borderBottom: '1px solid rgba(255,255,255,0.3)', paddingBottom: '10px' }}>ENVÍOS</h4>
              <p>Políticas de envío</p>
              <p>Seguimiento de pedido</p>
            </div>
            <div>
              <h4 style={{ borderBottom: '1px solid rgba(255,255,255,0.3)', paddingBottom: '10px' }}>NEWSLETTER</h4>
              <div style={{ display: 'flex', marginTop: '10px' }}>
                <input type="text" placeholder="Tu email" style={{ padding: '10px', border: 'none', width: '100%' }} />
                <button style={{ backgroundColor: colors.primary, color: 'white', border: 'none', padding: '0 15px' }}>→</button>
              </div>
            </div>
          </div>
          <div style={{ textAlign: 'center', marginTop: '50px', fontSize: '0.7rem', opacity: 0.8 }}>
            © 2026 Bolonia Kids. Todos los derechos reservados.
          </div>
        </footer>
      </div>
    </div>
  );
}