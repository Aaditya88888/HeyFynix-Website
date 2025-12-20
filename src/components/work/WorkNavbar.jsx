import React from 'react'

const WorkNavbar = () => {
  return (
    <div style={{color:'white',backgroundColor:'black',height:'50px',marginBottom:window.innerWidth<768?'0px':'150px',marginTop:'100px'}}>
      {/* Top navigation with buttons: left, center, right */}
      <nav style={{
        position: 'absolute',
      
        left: 0,
        right: 0,
        zIndex: 20,
        display: 'flex',
        gap:window.innerWidth<768?'4px':'20px',
        width: '100%',
        padding: window.innerWidth<768?'0.1rem':'1.5rem 1rem'
      }}>
        <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-start' }}>
          <button style={{
            color: 'white',
            fontSize:window.innerWidth<768?'0.8rem':'1.25rem',
            lineHeight: '1.75rem',
            fontWeight: 'bold',
            cursor: 'pointer',
            borderRadius:'24px',
            padding:window.innerWidth<768?'2px 10px':'5px 20px',
            backgroundColor:'black',
             border:'2px solid white',
             marginLeft:'30%'
          }}>
            Branding
          </button>
        </div>
        <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
          <button style={{
            color: 'white',
            fontSize:window.innerWidth<768?'0.8rem':'1.25rem',
            lineHeight: '1.75rem',
            fontWeight: 'bold',
            cursor: 'pointer',
             borderRadius:'24px',
            padding:window.innerWidth<768?'2px 10px':'5px 20px',
            backgroundColor:'black',
             border:'2px solid white',
          }}>
            Film-making
          </button>
        </div>
        <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
          <button style={{
            color: 'white',
            fontSize:window.innerWidth<768?'0.8rem':'1.25rem',
            lineHeight: '1.75rem',
            fontWeight: 'bold',
            cursor: 'pointer',
             borderRadius:'24px',
            padding:window.innerWidth<768?'2px 10px':'5px 20px',
            backgroundColor:'black',
             border:'2px solid white',
             marginRight:'30%'
          }}>
            Websites
          </button>
        </div>
      </nav>
    </div>
  )
}

export default WorkNavbar