// // import Image from 'next/image'
// // import React from 'react'

// // const Government = () => {
// //   return (
// //     <div>
// //       {/* Astronaut Image Section */}
// //       <div className="flex items-center justify-center min-h-screen relative">
// //         <div className="relative z-20">
// //           <Image src="/images/work/astranaut.png" alt="Government" width={500} height={500} className="drop-shadow-2xl" />
// //         </div>
// //       </div>
      
// //       {/* Event Video Background Section */}
// //       <div className="relative min-h-96 flex items-center justify-center -mt-52 z-10">
// //         <Image
// //           src="/images/work/eventVideoBackground.png"
// //           alt="Event Video Background"
// //           fill
// //           className="object-cover opacity-80"
// //         />
// //         <div className="absolute inset-0 bg-opacity-80"></div>
        
// //         {/* Text Overlay */}
// //         <div className="relative z-10 text-center px-4">
// //           <h1 className="text-4xl md:text-6xl  lg:text-8xl font-bold text-white mb-4">
// //           Government & NGO Videos
// //           </h1>
// //           <p className="text-xl md:text-2xl text-white max-w-2xl mx-auto">
// // When purpose meets creativity. We produce impactful films that not only inform but inspire collective change.          </p>
// //         </div>
// //       </div>
// //     </div>
// //   )
// // }

// // export default Government




// import Image from 'next/image'
// import React from 'react'

// const Government = () => {
//   return (
//     <>
//       {/* Hero Section - Full Screen Astronaut */}
//       <section className="relative flex items-center justify-center min-h-screen bg-black">
//         <Image
//           src="/images/work/astranaut.png"
//           alt="Astronaut"
//           width={500}
//           height={500}
//           className="drop-shadow-2xl z-20"
//           priority
//         />
//       </section>

//       {/* Government & NGO Videos Section - With Background Image ONLY Here */}
//      {/* Government & NGO Videos Section - With Background Image and Text Overlay */}
// <section className="relative flex items-center justify-center bg-gray-900 overflow-hidden">
//   {/* Background Image */}
//   <div className="absolute inset-0">
//     <Image
//       src="/images/work/eventVideoBackground.png"
//       alt="Event Video Background"
//       height={600}
//       width={1400}
//       className="object-cover"
//       quality={90}
//     />
//   </div>

//   {/* Dark overlay for text readability */}
//   <div className="absolute inset-0 bg-black bg-opacity-60" />

//   {/* Content */}
//   <div className="relative z-50 text-center px-6 max-w-5xl mx-auto">
//     <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
//       Government & NGO Videos
//     </h1>
//     <p className="text-xl md:text-2xl lg:text-3xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
//       When purpose meets creativity. We produce impactful films that not only inform but inspire collective change.
//     </p>
//   </div>
// </section>
//     </>
//   )
// }

// export default Government




// Example: sections/MusicVideoSection.jsx
// export default function Government() {
//   return (
//     <div style={{
//       height: '80vh',
//       width: '100vw',
//       backgroundImage: 'url(/images/work/eventVideoBackground.png)',
//       backgroundSize: 'cover',
//       backgroundPosition: 'center',
//       position: 'relative',
//       display: 'flex',
//       alignItems: 'center',
//       justifyContent: 'center',
//     }}>
//       {/* Your astronaut text */}
      
//        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.8))' }} />
//       <div style={{
//         position: 'absolute',
//         top: '50%',
//         left: '50%',
//         transform: 'translate(-50%, -50%)',
//         textAlign: 'center',
//         color: 'white',
      
       
//         whiteSpace:'nowrap'
//       }}>
//         <h1 style={{ fontSize: 'clamp(4rem, 6vw, 8rem)', fontWeight: 900, margin: '1rem 0', textShadow: '0 4px 40px rgba(0,0,0,0.9)' ,lineHeight:'0.6'}}>
//         Government & NGO Videos
//         </h1>
//         <div style={{
//           display: 'flex',
//           justifyContent: 'flex-end',
//           width: '100%',
//           maxWidth: '1200px'
//         }}>
//           <p style={{ fontSize: 'clamp(1.2rem, 2vw, 2rem)', margin: 0 }}>
//        When purpose meets creativity. We produce impactful films that not only inform but inspire collective change.
//           </p>
         
//         </div>
//       </div>
//     </div>
//   );
// }



import Image from 'next/image';

export default function Government() {
  return (
    <>
      {/* ==== UPPER SECTION – ASTRONAUT WITH OVERFLOW ==== */}
      <div className="relative h-screen w-full overflow-hidden bg-black">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative">
            <Image
              src="/images/work/astranaut.png"
              alt="Astronaut"
              width={600}
              height={600}
              priority
              className="drop-shadow-2xl max-w-none"
              style={{
                transform: 'translateY(-20%)',
                marginLeft:'400px',
                marginRight:'400px'
              }}
            />
          </div>
        </div>
      </div>

      {/* ==== LOWER SECTION – OVERLAP + TEXT AT BOTTOM ==== */}
      <div 
        className="relative w-full min-h-screen"
        style={{
          backgroundImage: 'url(/images/work/eventVideoBackground.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center bottom',
          marginTop: '-40vh', 
          height:'80vh',
          width:'100vw',// Creates the overlap with astronaut hands
        }}
      >
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/60 to-black/90" />

        {/* Content container - aligned to bottom */}
        <div className="absolute inset-0 flex flex-col justify-end pb-16 md:pb-24 lg:pb-32">
          <div className="text-center text-white px-6 max-w-7xl mx-auto">
            <h1
              className="font-black tracking-tighter text-white"
              style={{
                fontSize: 'clamp(4rem, 7vw, 11rem)',
                lineHeight: '5.8',
                textShadow: '0 4px 40px rgba(0,0,0,0.9)',
                color:'white',
                marginTop:'90px',
                marginLeft:'40px',
                marginBottom:'-240px',
                fontStyle:'italic'
              }}
            >
              Government & NGO Videos
            </h1>

            <p
              className=" font-light max-w-2xl mx-auto text-white"
              style={{
                fontSize: 'clamp(1.2rem, 2vw, 2.8rem)',
           lineHeight:'1.2',
           maxWidth:'900px',
                color:'white',
               textAlign:'center',
               marginLeft:'150px'
              }}
            >
              When purpose meets creativity. We produce impactful films that not only inform but inspire collective change.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}