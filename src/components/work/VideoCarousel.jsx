// // components/LisaCamboursExactHero.jsx
// import { useState, useEffect } from 'react';

// const items = [
//   { id: "pK6Cit3BoRQ", title: "KAASH" },
//   { id: "zlp0sRBsjcU", title: "FARRAR" },
//   { id: "C9tgjIwy3vQ", title: "BEHAAL" },
//   { id: "WOqE9IESeGE", title: "KYUN BHIUNDE" },
//   { id: "V76pclQk3Wg", title: "HUMRAFOR" },
//   { id: "h8fzscvOuz8", title: "STARHIGH" },
//   { id: "tnN9rPya6DI", title: "HUMSAFAR" },
//   { id: "OIPW2_OQE_4", title: "COUPLE" },
//   // add more → loops forever
// ];

// export default function LisaCamboursExactHero() {
//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     const timer = setInterval(() => setIndex(i => (i + 1) % items.length), 5000);
//     return () => clearInterval(timer);
//   }, []);

//   const get = (offset) => items[(index + offset + items.length) % items.length];

//   const next = () => setIndex(i => (i + 1) % items.length);
//   const prev = () => setIndex(i => (i - 1 + items.length) % items.length);
// const topSizes = ['275px', '102px', '102px', '275px'];
//   const topOffsets = [-3, -2, -1, 0];   // which video goes where
//   return (
//     <div style={{position:'relative', width:'100%', height:'100vh', background:'#000', overflow:'hidden', display:'flex', alignItems:'center', justifyContent:'center'}}>



// {/* Top Row – Corner images lower than center ones */}
//       <div style={{position:'absolute', top:'10%', left:'50%', transform:'translateX(-50%)', display:'flex', gap:'18px', zIndex:0, alignItems:'flex-end'}}>
        
//         {/* Far Left – Bigger & Lower */}
//         <div style={{transition:'all 1.1s cubic-bezier(0.22,1,0.36,1)', marginBottom:'-48px'}}>
//           <img src={`https://i.ytimg.com/vi/${get(-3).id}/maxresdefault.jpg`} 
//                style={{width:'198px', height:'auto', opacity:0.68}} />
//         </div>

//         {/* Left Center – Small & Higher */}
//         <div style={{transition:'all 1.1s cubic-bezier(0.22,1,0.36,1)', marginBottom:'4px'}}>
//           <img src={`https://i.ytimg.com/vi/${get(-2).id}/maxresdefault.jpg`} 
//                style={{width:'124px', height:'auto',  opacity:0.28}} />
//         </div>

//         {/* Right Center – Small & Higher */}
//         <div style={{transition:'all 1.1s cubic-bezier(0.22,1,0.36,1)', marginBottom:'4px'}}>
//           <img src={`https://i.ytimg.com/vi/${get(-1).id}/maxresdefault.jpg`} 
//                style={{width:'124px', height:'auto', opacity:0.28}} />
//         </div>

//         {/* Far Right – Bigger & Lower */}
//         <div style={{transition:'all 1.1s cubic-bezier(0.22,1,0.36,1)', marginBottom:'-48px'}}>
//           <img src={`https://i.ytimg.com/vi/${get(0).id}/maxresdefault.jpg`} 
//                style={{width:'198px', height:'auto', opacity:0.68}} />
//         </div>

//       </div>

//       {/* Main Large 3 Thumbnails – Exact overlap & scale */}
//       <div style={{display:'flex', alignItems:'center', justifyContent:'center', position:'relative', width:'100%', height:'100%'}}>

//         {/* Left Large */}
//         <a href={`https://www.youtube.com/watch?v=${get(-1).id}`} target="_blank" rel="noopener noreferrer"
//            style={{position:'absolute', left:'13%', top:'34%', transform:'translateY(-50%) scale(0.88)', zIndex:10, cursor:'pointer', transition:'all 1.1s cubic-bezier(0.22,1,0.36,1)'}}
//            onClick={(e)=>{e.preventDefault(); prev();}}>
//           <img src={`https://i.ytimg.com/vi/${get(-1).id}/maxresdefault.jpg`} 
//                style={{width:'420px', maxWidth:'90vw'}} />
//         </a>

//         {/* Center Large – Biggest */}
//         <a href={`https://www.youtube.com/watch?v=${get(0).id}`} target="_blank" rel="noopener noreferrer"
//            style={{position:'absolute', left:'35%', top:'40%', transform:'translateY(-50%) scale(0.88)', zIndex:30, transition:'all 1.1s cubic-bezier(0.22,1,0.36,1)'}}>
//           <img src={`https://i.ytimg.com/vi/${get(0).id}/maxresdefault.jpg`} 
//                style={{width:'480px', maxWidth:'90vw'}} />
        
//         </a>

//         {/* Right Large */}
//         <a href={`https://www.youtube.com/watch?v=${get(1).id}`} target="_blank" rel="noopener noreferrer"
//            style={{position:'absolute', right:'11%', top:'34%', transform:'translateY(-50%) scale(0.88)', zIndex:10, cursor:'pointer', transition:'all 1.1s cubic-bezier(0.22,1,0.36,1)'}}
//            onClick={(e)=>{e.preventDefault(); next();}}>
//           <img src={`https://i.ytimg.com/vi/${get(1).id}/maxresdefault.jpg`} 
//                style={{width:'420px', maxWidth:'90vw'}} />
//         </a>

//       </div>

     
   

//     </div>
//   );
// }





// components/LisaCamboursExactHero.jsx
import { useState, useEffect } from 'react';

// Update the items array to use local images
const items = [
  { 
    id: "video6", 
    title: "RENDEZVOUS", 
    image: "/videos/video6Poster.png" 
  },
  { 
    id: "video7", 
    title: "SUNBURN", 
    image: "/videos/video7Poster.png" 
  },
  { 
    id: "video8", 
    title: "BISMIL", 
    image: "/videos/video8Poster.png" 
  },
  { 
    id: "video9", 
    title: "SKYBAGS", 
     image: "/videos/video9Poster.png" 
  },
  { 
    id: "video10", 
    title: "HIP HOP", 
    image: "/videos/video10Poster.png" 
  },
  { 
    id: "video11", 
    title: "3D ULTRASOUND", 
    image: "/videos/video11Poster.png" 
  },
  { 
    id: "video12", 
    title: "SHAKE IT", 
  image: "/videos/video12Poster.png" 
  },
  { 
    id: "video13", 
    title: "MASCOT TOUR", 
   image: "/videos/video13Poster.png" 
  }
];

export default function VideoCarousel() {
  const [index, setIndex] = useState(0);
  const [rotate, setRotate] = useState(0); // New state for rotation

  useEffect(() => {
  const timer = setInterval(() => {
    setRotate(0); // Match the manual rotation amount
    setTimeout(() => {
      setIndex(i => (i + 1) % items.length);
      setRotate(0);
    }, 100);
  }, 3000); // Auto-rotate every 3 seconds
  return () => clearInterval(timer);
}, []);

  const get = (offset) => items[(index + offset + items.length) % items.length];

  const next = () => {
    setRotate(0); // Rotate right on next
    setTimeout(() => {
   
    setIndex(i => (i + 1) % items.length);
     setRotate(0);
  }, 100); 
  };

  const prev = () => {
    setRotate(0); // Rotate left on prev
  setTimeout(() => {
    
    setIndex(i => (i - 1 + items.length) % items.length);
    setRotate(0);
  }, 100); 
  };

  // Add transform style for rotation
  const rotationStyle = {
    transform: `rotate(${rotate}deg)`,
    transition: 'transform 0.3s ease-in-out',
    transformOrigin: 'center center'
  };

  return (
    <div style={{ 
      position: 'relative', 
      width: '100%', 
      height: '100vh', 
      background: '#000', 
      overflow: 'hidden', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center'
    }}>

      {/* Top Row – Corner images lower than center ones */}
      <div style={{
        position: 'absolute', 
        top: '10%', 
        left: '50%', 
        transform: 'translateX(-50%)', 
        display: 'flex', 
        gap: '18px', 
        zIndex: 0, 
        alignItems: 'flex-end'
      }}>
        {/* Far Left – Bigger & Lower */}
        <div style={{
          transition: 'all 1.1s cubic-bezier(0.22,1,0.36,1)', 
          marginBottom: '-48px',
         
          transition: 'all 0.3s ease-in-out'
        }}>
          <img 
            src={get(-3).image} 
            style={{width:'198px', height:'auto', opacity:0.68}} 
            alt={get(-3).title}
          />
        </div>

        {/* Left Center – Small & Higher */}
        <div style={{
          transition: 'all 1.1s cubic-bezier(0.22,1,0.36,1)', 
          marginBottom: '4px',
          transform: `rotate(${rotate * 0.2}deg)`,
          transition: 'all 0.3s ease-in-out'
        }}>
          <img 
            src={get(-2).image} 
            style={{width:'124px', height:'auto', opacity:0.28}} 
            alt={get(-2).title}
          />
        </div>

        {/* Right Center – Small & Higher */}
        <div style={{
          transition: 'all 1.1s cubic-bezier(0.22,1,0.36,1)', 
          marginBottom: '4px',
          transform: `rotate(${rotate * -0.2}deg)`,
          transition: 'all 0.3s ease-in-out'
        }}>
          <img 
            src={get(-1).image} 
            style={{width:'124px', height:'auto', opacity:0.28}} 
            alt={get(-1).title}
          />
        </div>

        {/* Far Right – Bigger & Lower */}
        <div style={{
          transition: 'all 1.1s cubic-bezier(0.22,1,0.36,1)', 
          marginBottom: '-48px',
        
          transition: 'all 0.3s ease-in-out'
        }}>
          <img 
            src={get(0).image} 
            style={{width:'198px', height:'auto', opacity:0.68}} 
            alt={get(0).title}
          />
        </div>
      </div>

      {/* Main Large 3 Thumbnails */}
      <div style={{
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        position: 'relative', 
        width: '100%', 
        height: '100%'
      }}>

        {/* Left Large */}
        <a 
          href={`https://www.youtube.com/watch?v=${get(-1).id}`} 
          target="_blank" 
          rel="noopener noreferrer"
          style={{
            position: 'absolute', 
            left: '13%', 
            top: '34%', 
            transform: `translateY(-50%) scale(0.88) `, 
            zIndex: 10, 
            cursor: 'pointer', 
            transition: 'all 0.5s cubic-bezier(0.22,1,0.36,1)',
            filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.5))'
          }}
          onClick={(e) => { e.preventDefault(); prev(); }}
        >
          <img 
            src={get(1).image} 
            style={{
              width: '420px', 
              maxWidth: '90vw',
             
              transform: 'rotate(0deg)',
              transition: 'all 0.5s ease-in-out'
            }} 
            alt={get(-1).title}
          />
        </a>

        {/* Center Large – Biggest */}
        <a 
            src={get(2).image} 
          target="_blank" 
          rel="noopener noreferrer"
          style={{
            position: 'absolute', 
            left: '35%', 
            top: '24%', 
            transform: `translateY(-50%) scale(1.1) )`, 
            zIndex: 30, 
            transition: 'all 0.5s cubic-bezier(0.22,1,0.36,1)',
          }}
        >
          <img 
            src={get(3).image} 
            style={{
              width: '440px', 
              maxWidth: '90vw',
              transform: 'rotate(0deg)',
              transition: 'all 0.5s ease-in-out'
            }}
            alt={get(0).title}
          />
        </a>

        {/* Right Large */}
        <a 
          href={`https://www.youtube.com/watch?v=${get(1).id}`} 
          target="_blank" 
          rel="noopener noreferrer"
          style={{
            position: 'absolute', 
            right: '11%', 
            top: '34%', 
            transform: `translateY(-50%) scale(0.88)`, 
            zIndex: 10, 
            cursor: 'pointer', 
            transition: 'all 0.5s cubic-bezier(0.22,1,0.36,1)',
            filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.5))'
          }}
          onClick={(e) => { e.preventDefault(); next(); }}
        >
          <img 
            src={get(-1).image} 
            style={{
              width: '420px', 
              maxWidth: '90vw',
            
              transform: 'rotate(0deg)',
              transition: 'all 0.5s ease-in-out'
            }} 
            alt={get(1).title}
          />
        </a>

      </div>
    </div>
  );
}

// components/HeroVideoCarousel.jsx   (100% working – copy-paste)
// import { useState, useEffect } from 'react';

// const allVideos = [
//   { id: "pK6Cit3BoRQ", title: "KAASH",      thumb: "https://i.ytimg.com/vi/pK6Cit3BoRQ/maxresdefault.jpg" },
//   { id: "zlp0sRBsjcU", title: "FARRAR",     thumb: "https://i.ytimg.com/vi/zlp0sRBsjcU/maxresdefault.jpg" },
//   { id: "C9tgjIwy3vQ", title: "BEHAAL",     thumb: "https://i.ytimg.com/vi/C9tgjIwy3vQ/maxresdefault.jpg" },
//   { id: "WOqE9IESeGE", title: "KYUN BHIUNDE", thumb: "https://i.ytimg.com/vi/WOqE9IESeGE/maxresdefault.jpg" },
//   { id: "V76pclQk3Wg", title: "HUMRAFOR",   thumb: "https://i.ytimg.com/vi/V76pclQk3Wg/maxresdefault.jpg" },
//   { id: "h8fzscvOuz8", title: "EXTRA",      thumb: "https://i.ytimg.com/vi/h8fzscvOuz8/maxresdefault.jpg" },
//   { id: "tnN9rPya6DI", title: "HUMSAFAR",   thumb: "https://i.ytimg.com/vi/tnN9rPya6DI/maxresdefault.jpg" },
//   { id: "OIPW2_OQE_4", title: "COUPLE",     thumb: "https://i.ytimg.com/vi/OIPW2_OQE_4/maxresdefault.jpg" },
//   // Add more if you want – it will loop infinitely
// ];

// export default function HeroVideoCarousel() {
//   const [centerIndex, setCenterIndex] = useState(0); // which video is in the big center position

//   // Auto rotate every 5 seconds
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCenterIndex(prev => (prev + 1) % allVideos.length);
//     }, 5000);
//     return () => clearInterval(timer);
//   }, []);

//   const goNext = () => setCenterIndex(prev => (prev + 1) % allVideos.length);
//   const goPrev = () => setCenterIndex(prev => (prev - 1 + allVideos.length) % allVideos.length);

//   // Get video at position relative to center (-3 to +3)
//   const getVideo = (offset) => {
//     return allVideos[(centerIndex + offset + allVideos.length) % allVideos.length];
//   };

//   return (
//     <div style={{ position: 'relative', width: '100%', height: '100vh', background: '#000', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>

//       {/* Top Row – 4 small background thumbnails */}
//       <div style={{ position: 'absolute', top: '60px', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: '20px', zIndex: 10 }}>
//         {[ -2, -1, 0, 1 ].map(offset => {
//           const vid = getVideo(offset - 2); // maps to far left → right
//           return (
//             <a key={offset} href={`https://www.youtube.com/watch?v=${vid.id}`} target="_blank" rel="noopener noreferrer"
//                style={{ display: 'block', width: '160px', transition: 'all 1s cubic-bezier(0.25,0.8,0.25,1)' }}
//                onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.15)'}
//                onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}>
//               <img src={vid.thumb} alt={vid.title}
//                    style={{ width: '100%', height: 'auto', borderRadius: '14px', boxShadow: '0 15px 35px rgba(0,0,0,0.7)', opacity: 0.9 }} />
//               <p style={{ color: '#fff', fontSize: '13px', textAlign: 'center', marginTop: '8px', fontWeight: '600' }}>
//                 {vid.title}
//               </p>
//             </a>
//           );
//         })}
//       </div>

//       {/* Main 3 Large Thumbnails – clickable */}
//       <div style={{ display: 'flex', alignItems: 'center', gap: '40px', zIndex: 20 }}>
//         {[-1, 0, 1].map(offset => {
//           const vid = getVideo(offset);
//           const isCenter = offset === 0;

//           return (
//             <a key={offset}
//                href={`https://www.youtube.com/watch?v=${vid.id}`}
//                target="_blank"
//                rel="noopener noreferrer"
//                style={{
//                  display: 'block',
//                  cursor: 'pointer',
//                  transform: isCenter ? 'scale(1.22)' : 'scale(0.88)',
//                  opacity: isCenter ? 1 : 0.72,
//                  marginLeft: offset === 1 ? '-80px' : '0',
//                  marginRight: offset === -1 ? '-80px' : '0',
//                  transition: 'all 1.1s cubic-bezier(0.25, 0.8, 0.25, 1)',
//                  zIndex: isCenter ? 40 : 20,
//                }}
//                onClick={(e) => {
//                  e.preventDefault();
//                  if (offset === 1) goNext();
//                  if (offset === -1) goPrev();
//                }}
//             >
//               <img src={vid.thumb} alt={vid.title}
//                    style={{
//                      width: '440px',
//                      maxWidth: '95vw',
//                      height: 'auto',
//                      borderRadius: '28px',
//                      boxShadow: isCenter ? '0 50px 120px rgba(0,0,0,0.95)' : '0 20px 60px rgba(0,0,0,0.7)',
//                      border: isCenter ? '6px solid rgba(255,255,255,0.18)' : '3px solid rgba(255,255,255,0.06)',
//                    }} />
//               {isCenter && (
//                 <div style={{ textAlign: 'center', marginTop: '36px', color: '#fff' }}>
//                   <h2 style={{ fontSize: '56px', fontWeight: '900', margin: 0, letterSpacing: '2px' }}>{vid.title}</h2>
//                   <p style={{ fontSize: '24px', opacity: 0.9, marginTop: '10px' }}>Official Music Video</p>
//                 </div>
//               )}
//             </a>
//           );
//         })}
//       </div>

//       {/* Bottom Dots */}
//       <div style={{ position: 'absolute', bottom: '60px', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: '20px', zIndex: 50 }}>
//         {[0,1,2,3,4,5,6].map(i => (
//           <button key={i}
//             onClick={() => setCenterIndex(i)}
//             style={{
//               width: centerIndex === i ? '50px' : '15px',
//               height: '15px',
//               borderRadius: '50px',
//               background: centerIndex === i ? '#fff' : 'rgba(255,255,255,0.3)',
//               border: 'none',
//               cursor: 'pointer',
//               transition: 'all 0.5s ease',
//             }}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }