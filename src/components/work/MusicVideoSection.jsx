// Example: sections/MusicVideoSection.jsx
export default function MusicVideoSection() {
  return (
    <div style={{
      height: '100vh',
      width: '100vw',
      backgroundImage: 'url(/images/work/background.png)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop:'100px'
    }}>
      {/* Your astronaut text */}
      
       <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.8))' }} />
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        textAlign: 'center',
        color: 'white',
      
       
        whiteSpace:'nowrap'
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
          maxWidth: '1200px'
        }}>
          <p style={{ fontSize: 'clamp(3.2rem, 5vw, 2rem)',fontWeight: 600, margin: 0, textAlign: 'left' }}>
          We Create
          </p>
         
        </div>
        <h1 style={{ fontSize: 'clamp(8rem, 12vw, 10rem)', fontWeight: 900, margin: '1rem 0', textShadow: '0 4px 40px rgba(0,0,0,0.9)' ,lineHeight:'0.6'}}>
        MUSIC VIDEOS
        </h1>
        <div style={{
          display: 'flex',
          justifyContent: 'flex-end',
          width: '100%',
          maxWidth: '1200px'
        }}>
          <p style={{ fontSize: 'clamp(2.2rem, 5vw, 2rem)', margin: 0, textAlign: 'right' }}>
          in sync with every beat
          </p>
         
        </div>
      </div>
    </div>
  );
}
