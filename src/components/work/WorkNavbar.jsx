import React from 'react'

const WorkNavbar = () => {
  return (
    <div style={{color:'white',backgroundColor:'black',height:'50px',marginBottom:'290px',marginTop:'-100px'}}>
      {/* Top navigation with buttons: left, center, right */}
      <nav style={{
        position: 'absolute',
        top: '140px',
        left: 0,
        right: 0,
        zIndex: 20,
        display: 'flex',
        gap:'20px',
        width: '100%',
        padding: '1.5rem 1rem'
      }}>
        <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-start' }}>
          <button style={{
            color: 'white',
            fontSize: '1.25rem',
            lineHeight: '1.75rem',
            fontWeight: 'bold',
            cursor: 'pointer',
            borderRadius:'24px',
            padding:'5px 20px',
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
            fontSize: '1.25rem',
            lineHeight: '1.75rem',
            fontWeight: 'bold',
            cursor: 'pointer',
             borderRadius:'24px',
            padding:'5px 20px',
            backgroundColor:'black',
             border:'2px solid white',
          }}>
            Film-making
          </button>
        </div>
        <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
          <button style={{
            color: 'white',
            fontSize: '1.25rem',
            lineHeight: '1.75rem',
            fontWeight: 'bold',
            cursor: 'pointer',
             borderRadius:'24px',
            padding:'5px 20px',
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