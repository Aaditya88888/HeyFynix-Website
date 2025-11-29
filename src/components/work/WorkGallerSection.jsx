// // 'use client';

// // import Image from 'next/image';

// // const galleries = [
// //   {
// //     id: 1,
// //     heading: 'EVENT VIDEO',
// //     text:'An event video captures the highlights, emotions, and key moments of a special occasion, preserving memories and sharing the experience with a wider audience.',
// //     images: [
// //       { src: '/images/work/E2.png', alt: 'Branding 1' ,leftText:'Sunburn',rightText:'Sunburn'},
// //       { src: '/images/work/E3.png', alt: 'Branding 2' ,leftText:'Bismil Intro Video',rightText:'Bismil'},
// //       { src: '/images/work/E5.png', alt: 'Branding 3' ,leftText:'Hip Hop Event',rightText:'Elements.ind'},
// //       { src: '/images/work/E4.png', alt: 'Branding 4' ,leftText:'Skybags',rightText:'Sunburn'},
// //       { src: '/images/work/E1.png', alt: 'Branding 5' ,leftText:'Rendezvous',rightText:'IIT Delhi'},
     
     
// //     ],
   
// //   },
// //   {
// //     id: 2,
// //     heading: 'BRAND FILMS',
// //     text:'We craft films that amplify Brands heartbeat',
// //     images: [
// //       { src: '/images/work/Film-making1.png', alt: 'Film 1',leftText:'3D Ultrasound Device',rightText:'Samsung' },
// //       { src: '/images/work/Film-making2.png', alt: 'Film 2',leftText:'Shake It to Make It',rightText:'Zomato' },
// //       { src: '/images/work/Film-making3.png', alt: 'Film 3',leftText:'Mascot Tour',rightText:'Hush Puppies' },
// //       { src: '/images/work/Film-making4.png', alt: 'Film 4',leftText:'Jewellery Commercial',rightText:'Sawaria Jewellers' },
// //       { src: '/images/work/Film-making5.png', alt: 'Film 5',leftText:'Cricket ',rightText:'DPPL' },
   
// //     ],
// //   },
// //   {
// //     id: 3,
// //     heading: 'B-ROLLS',
// //     text:'We make the in-between of B-rolls that matter',
// //     images: [
// //       { src: '/images/work/BRoll1.png', alt: 'Web 1',leftText:'Setup',rightText:'Ritik' },
// //       { src: '/images/work/BRoll2.png', alt: 'Web 2',leftText:'Tattoo',rightText:'Mascot Tattos' },
// //       { src: '/images/work/BRoll3.png', alt: 'Web 3',leftText:'Website',rightText:'Ritik' },
// //       { src: '/images/work/BRoll4.png', alt: 'Web 4',leftText:'Saloon Commercial',rightText:'Spacetech Interiors' },
// //       { src: '/images/work/BRoll5.png', alt: 'Web 5',leftText:'Cricket',rightText:'DPPL' },
// //       { src: '/images/work/BRoll6.png', alt: 'Web 6',leftText:'Sunburn',rightText:'Sunburn' },
     
// //     ],
// //   },
// //   {
// //     id: 4,
// //     heading: 'CORPORATE VIDEOS',
// //     text:'We transform Corporate Videos and Events into engaging, trust-building stories',
// //     images: [
// //       { src: '/images/work/coorporate1.png', alt: 'Music 1' },
// //       { src: '/images/work/coorporate2.png', alt: 'Music 2' },
// //       { src: '/images/work/coorporate3.png', alt: 'Music 3' },
// //       { src: '/images/work/coorporate4.png', alt: 'Music 4' },
// //       { src: '/images/work/coorporate5.png', alt: 'Music 5' },
// //        { src: '/images/work/coorporate6.png', alt: 'Music 6' },
// //     ],
// //   },
// // ];

// // export default function GalleriesPage() {
// //   return (
// //     <section style={{backgroundColor: 'black', padding: '5rem 0'}}>
// //       {galleries.map((gallery) => (
// //         <div key={gallery.id} style={{marginBottom: '8rem'}}>

// //           {/* ==== HERO FOR FIRST GALLERY (Event Video) ==== */}
// //           {gallery.id === 1 && (
// //             <div style={{position: 'relative', height: '100vh'}}>
// //               <Image
// //                 src="/images/work/eventVideoBackground.png"
// //                 alt="Event Video Background"
// //                height={400}
// //                width={1400}
// //                 style={{width: '100%', height: '100%', objectFit: 'cover'}}
// //                 priority
// //               />
// //               <div style={{position: 'absolute', top: '0', left: '0', right: '0', bottom: '0', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '0 1.5rem', textAlign: 'center', zIndex: 10, backgroundColor: 'rgba(0, 0, 0, 0.4)'}}>
// //                 <h1 style={{fontSize: 'clamp(4rem, 8vw, 9rem)', fontWeight: '900', color: 'white', letterSpacing: '-0.05em', marginBottom: '2rem'}}>
// //                   {gallery.heading}
// //                 </h1>
// //                 <p style={{fontSize: 'clamp(1.3rem, 2vw, 2rem)', color: 'white', maxWidth: '64rem', lineHeight: '0.9',marginTop:'-25px'}}>
// //                   {gallery.text}
// //                 </p>
// //               </div>
// //             </div>
// //           )}

// //           {/* ==== HEADING FOR ALL OTHER GALLERIES ==== */}
// //           {gallery.id !== 1 && (
// //             <div className="text-center mb-16 px-6">
// //               <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-white tracking-tighter mb-6" style={{color:'white',fontSize:'4.2rem',lineHeight:'1.2',marginBottom:'-20px',textAlign:'center'}}>
// //                 {gallery.heading}
// //               </h1>
// //               <p className="text-lg md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed" style={{color:'white',fontSize:'1.8rem',textAlign:'center'}}>
// //                 {gallery.text}
// //               </p>
// //             </div>
// //           )}

// //           {/* ==== HORIZONTAL SCROLL GALLERY ==== */}
// //           <div style={{overflowX: 'auto', padding: '0 1.5rem', scrollbarWidth: 'none', msOverflowStyle: 'none'}}>
// //             <div style={{display: 'flex', gap: '1.1rem', padding: '2rem 0', minWidth: 'max-content', alignItems: 'flex-start'}}>
// //               {gallery.images.map((img, idx) => (
// //                 <div
// //                   key={idx}
// //                   style={{position: 'relative', flex: 'none', width: '420px', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)', transition: 'all 0.5s'}}
// //                   // onMouseEnter={(e) => {
// //                   //   e.currentTarget.style.boxShadow = '0 25px 50px -12px rgba(0, 0, 0, 0.5)';
// //                   //   // e.currentTarget.style.transform = 'translateY(-8px)';
                   
// //                   // }}
// //                   // onMouseLeave={(e) => {
// //                   //   e.currentTarget.style.boxShadow = '0 25px 50px -12px rgba(0, 0, 0, 0.25)';
// //                   //   // e.currentTarget.style.transform = 'translateY(0)';
// //                   // }}
// //                 >
// //                   <Image
// //                     src={img.src}
// //                     alt={img.alt}
// //                     width={500}
// //                     height={281}
// //                     style={{width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.7s'}}
// //                   />

// //                   {/* Left & Right Text (only if they exist) */}
// //                   {(img.leftText || img.rightText) && (
// //                     <div style={{padding: '0.78rem 0'}}>
// //                       <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
// //                         {img.leftText && (
// //                           <span style={{color: 'white', fontSize: 'clamp(0.875rem, 1.25vw, 1.25rem)', fontWeight: '600'}}>
// //                             {img.leftText}
// //                           </span>
// //                         )}
// //                         {img.rightText && (
// //                           <span style={{color: 'rgba(255,255,255,0.7)', fontSize: 'clamp(0.75rem, 1vw, 0.875rem)'}}>
// //                             {img.rightText}
// //                           </span>
// //                         )}
// //                       </div>
// //                     </div>
// //                   )}
// //                 </div>
// //               ))}
// //             </div>
// //           </div>
// //         </div>
// //       ))}
// //     </section>
// //   );
// // }



// // // 'use client';

// // // import Image from 'next/image';
// // // import { useRef, useState, useEffect } from 'react';

// // // const CircularHorizontalGallery = ({ images }) => {
// // //   const scrollRef = useRef(null);
// // //   const animRef = useRef(null);
// // //   const firstSetRef = useRef(null);

// // //   // Initialize scroll to avoid sticking at exact boundary
// // //   useEffect(() => {
// // //     if (scrollRef.current) {
// // //       const c = scrollRef.current;
// // //       // Nudge a bit to allow leftward wrap logic to work
// // //       c.scrollLeft = 1;
// // //       c.scrollRight=1;
// // //     }
// // //   }, []);

// // //   const scroll = (direction) => {
// // //     if (!scrollRef.current) return;
// // //     const container = scrollRef.current;
// // //     const speed = direction === 'left' ? -4 : 4;

// // //     const step = () => {
// // //       container.scrollLeft += speed;

// // //       // Seamless infinite loop (both directions)
// // //       const half = container.scrollWidth / 2;
// // //       if (container.scrollLeft < 1) {
// // //         container.scrollLeft += half;
// // //       } else if (container.scrollLeft >= half) {
// // //         container.scrollLeft -= half;
// // //       }

// // //       animRef.current = requestAnimationFrame(step);
// // //     };

// // //     animRef.current = requestAnimationFrame(step);
// // //   };

// // //   const stop = () => {
// // //     if (animRef.current) cancelAnimationFrame(animRef.current);
// // //   };

// // //   return (
// // //     <div style={{ position: 'relative', width: '100%', padding: '8rem 0', backgroundColor: 'black' }}>
// // //       <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', padding: '0 5%' }}>
// // //         {/* Left Button */}
// // //         <div
// // //           onMouseEnter={() => scroll('left')}
// // //           onMouseLeave={stop}
// // //           style={{
// // //             flexShrink: 0,
// // //             fontSize: '40px',
// // //             fontWeight: '700',
// // //             color: 'white',
// // //             cursor: 'pointer',
// // //             userSelect: 'none',
// // //             opacity: 0.7,
// // //             transition: 'opacity 0.3s',
// // //           }}
// // //           onMouseOver={(e) => (e.currentTarget.style.opacity = '1')}
// // //           onMouseOut={(e) => (e.currentTarget.style.opacity = '0.7')}
// // //         >
// // //           〈
// // //         </div>

// // //         {/* Scroll Area (images move between buttons) */}
// // //         <div
// // //           ref={scrollRef}
// // //           style={{
// // //             flex: 1,
// // //             overflow: 'hidden',
// // //             whiteSpace: 'nowrap',
// // //           }}
// // //         >
// // //           <div style={{ display: 'inline-flex', gap: '1.2rem', alignItems: 'center' }}>
// // //             {images.map((img, i) => (
// // //               <CircleItem key={i} img={img} />
// // //             ))}
// // //             {images.map((img, i) => (
// // //               <CircleItem key={`dup-${i}`} img={img} />
// // //             ))}
// // //           </div>
// // //         </div>

// // //         {/* Right Button */}
// // //         <div
// // //           onMouseEnter={() => scroll('right')}
// // //           onMouseLeave={stop}
// // //           style={{
// // //             flexShrink: 0,
// // //             fontSize: '40px',
// // //             fontWeight: '700',
// // //             color: 'white',
// // //             cursor: 'pointer',
// // //             userSelect: 'none',
// // //             opacity: 0.7,
// // //             transition: 'opacity 0.3s',
// // //           }}
// // //           onMouseOver={(e) => (e.currentTarget.style.opacity = '1')}
// // //           onMouseOut={(e) => (e.currentTarget.style.opacity = '0.7')}
// // //         >
// // //           〉
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // // Single circular image + text
// // // const CircleItem = ({ img }) => {
// // //   const [dimmed, setDimmed] = useState(false);
// // //   return (
// // //     <div style={{ flex: 'none', textAlign: 'center' }}>
// // //       <div
// // //         onMouseEnter={() => setDimmed(true)}
// // //         onMouseLeave={() => setDimmed(false)}
// // //         style={{
// // //           position: 'relative',
// // //           width: '180px',
// // //           height: '180px',
// // //           borderRadius: '50%',
// // //           border: '1px solid white',
// // //           overflow: 'hidden',
// // //           boxShadow: '0 30px 60px rgba(0,0,0,0.6)',
// // //           transition: 'all 0.6s ease',
// // //           cursor: 'pointer',
// // //         }}
// // //       >
// // //         <Image
// // //           src={img.src}
// // //           alt={img.alt || ''}
// // //           width={380}
// // //           height={380}
// // //           style={{
// // //             width: '100%',
// // //             height: '100%',
// // //             objectFit: 'cover',
// // //             transition: 'transform 0.8s ease',
// // //           }}
// // //         />
// // //         <div
// // //           style={{
// // //             position: 'absolute',
// // //             top: 0,
// // //             left: 0,
// // //             right: 0,
// // //             bottom: 0,
// // //             background: 'rgba(248, 243, 243, 0.61)',
// // //             opacity: dimmed ? 1 : 0,
// // //             transition: 'opacity 0.3s ease',
// // //             pointerEvents: 'none',
// // //           }}
// // //         />
// // //       </div>

// // //       {/* Text below */}
// // //       {/* {(img.leftText || img.rightText) && (
// // //         <div style={{ marginTop: '2rem' }}>
// // //           <div style={{ display: 'flex', justifyContent: 'center', gap: '1.2rem', alignItems: 'center' }}>
// // //             {img.leftText && (
// // //               <span style={{ color: 'white', fontSize: '1.5rem', fontWeight: '600' }}>
// // //                 {img.leftText}
// // //               </span>
// // //             )}
// // //             {img.rightText && (
// // //               <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1.2rem' }}>
// // //                 {img.rightText}
// // //               </span>
// // //             )}
// // //           </div>
// // //         </div>
// // //       )} */}
// // //     </div>
// // //   );
// // // };

// // // // Your full page
// // // export default function GalleriesPage() {
// // //   const galleries = [
// // //     {
// // //       id: 1,
// // //       heading: 'EVENT VIDEO',
// // //       text: 'An event video captures the highlights, emotions, and key moments of a special occasion, preserving memories and sharing the experience with a wider audience.',
// // //       images: [
// // //         { src: '/images/work/E2.png', leftText: 'Sunburn', rightText: 'Sunburn' },
// // //         { src: '/images/work/E3.png', leftText: 'Bismil Intro Video', rightText: 'Bismil' },
// // //         { src: '/images/work/E5.png', leftText: 'Hip Hop Event', rightText: 'Elements.ind' },
// // //         { src: '/images/work/E4.png', leftText: 'Skybags', rightText: 'Sunburn' },
// // //         { src: '/images/work/E1.png', leftText: 'Rendezvous', rightText: 'IIT Delhi' },
// // //         // Add more if you want
// // //       ],
// // //     },
// // //     {
// // //     id: 2,
// // //     heading: 'BRAND FILMS',
// // //     text:'We craft films that amplify Brands heartbeat',
// // //     images: [
// // //       { src: '/images/work/Film-making1.png', alt: 'Film 1',leftText:'3D Ultrasound Device',rightText:'Samsung' },
// // //       { src: '/images/work/Film-making2.png', alt: 'Film 2',leftText:'Shake It to Make It',rightText:'Zomato' },
// // //       { src: '/images/work/Film-making3.png', alt: 'Film 3',leftText:'Mascot Tour',rightText:'Hush Puppies' },
// // //       { src: '/images/work/Film-making4.png', alt: 'Film 4',leftText:'Jewellery Commercial',rightText:'Sawaria Jewellers' },
// // //       { src: '/images/work/Film-making5.png', alt: 'Film 5',leftText:'Cricket ',rightText:'DPPL' },
   
// // //     ],
// // //   },
// // //   {
// // //     id: 3,
// // //     heading: 'B-ROLLS',
// // //     text:'We make the in-between of B-rolls that matter',
// // //     images: [
// // //       { src: '/images/work/BRoll1.png', alt: 'Web 1',leftText:'Setup',rightText:'Ritik' },
// // //       { src: '/images/work/BRoll2.png', alt: 'Web 2',leftText:'Tattoo',rightText:'Mascot Tattos' },
// // //       { src: '/images/work/BRoll3.png', alt: 'Web 3',leftText:'Website',rightText:'Ritik' },
// // //       { src: '/images/work/BRoll4.png', alt: 'Web 4',leftText:'Saloon Commercial',rightText:'Spacetech Interiors' },
// // //       { src: '/images/work/BRoll5.png', alt: 'Web 5',leftText:'Cricket',rightText:'DPPL' },
// // //       { src: '/images/work/BRoll6.png', alt: 'Web 6',leftText:'Sunburn',rightText:'Sunburn' },
     
// // //     ],
// // //   },
// // //   {
// // //     id: 4,
// // //     heading: 'CORPORATE VIDEOS',
// // //     text:'We transform Corporate Videos and Events into engaging, trust-building stories',
// // //     images: [
// // //       { src: '/images/work/coorporate1.png', alt: 'Music 1' },
// // //       { src: '/images/work/coorporate2.png', alt: 'Music 2' },
// // //       { src: '/images/work/coorporate3.png', alt: 'Music 3' },
// // //       { src: '/images/work/coorporate4.png', alt: 'Music 4' },
// // //       { src: '/images/work/coorporate5.png', alt: 'Music 5' },
// // //        { src: '/images/work/coorporate6.png', alt: 'Music 6' },
// // //     ],
// // //   },
// // //    // Add other categories the same way...
// // //   ];

// // //   return (
// // //     <section style={{ backgroundColor: 'black', color: 'white' }}>
// // //       {galleries.map((gallery) => (
// // //         <div key={gallery.id}>
// // //           {/* Your heading/hero code here (keep as before) */}
// // //           {gallery.id === 1 && (
// // //             <div style={{ position: 'relative', height: '100vh' }}>
// // //               <Image src="/images/work/eventVideoBackground.png" fill style={{ objectFit: 'cover' }} priority />
// // //               <div style={{
// // //                 position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.4)',
// // //                 lineHeight:'1.2',display: 'flex',flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center'
// // //               }}>
// // //                 <h1 style={{ fontSize: 'clamp(4rem, 8vw, 9rem)', fontWeight: 900 ,marginBottom:'-2rem'}}>{gallery.heading}</h1>
// // //                 <p style={{ fontSize: '1.6rem', maxWidth: '90%' }}>{gallery.text}</p>
// // //               </div>
// // //             </div>
// // //           )}
// // //           {gallery.id !== 1 && (
// // //   <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
// // //     <h1 style={{ lineHeight:'0.9',color: 'white', fontSize: 'clamp(2.5rem, 6vw, 5rem)', fontWeight: 900, marginBottom: '0.5rem' }}>
// // //       {gallery.heading}
// // //     </h1>
// // //     <p style={{ marginBottom:'-2rem',color: 'rgba(255,255,255,0.85)', fontSize: '1.25rem', maxWidth: '60ch', margin: '0 auto' }}>
// // //       {gallery.text}
// // //     </p>
// // //   </div>
// // // )}

// // //           <CircularHorizontalGallery images={gallery.images} />
// // //         </div>
// // //       ))}
// // //     </section>
// // //   );
// // // }












// // 'use client';

// // import Image from 'next/image';
// // import { useRef, useEffect } from 'react';

// // const galleries = [
// //   {
// //     id: 1,
// //     heading: 'EVENT VIDEO',
// //     text: 'An event video captures the highlights, emotions, and key moments of a special occasion, preserving memories and sharing the experience with a wider audience.',
// //     images: [
// //       { src: '/images/work/E2.png', alt: 'Branding 1', leftText: 'Sunburn', rightText: 'Sunburn' },
// //       { src: '/images/work/E3.png', alt: 'Branding 2', leftText: 'Bismil Intro Video', rightText: 'Bismil' },
// //       { src: '/images/work/E5.png', alt: 'Branding 3', leftText: 'Hip Hop Event', rightText: 'Elements.ind' },
// //       { src: '/images/work/E4.png', alt: 'Branding 4', leftText: 'Skybags', rightText: 'Sunburn' },
// //       { src: '/images/work/E1.png', alt: 'Branding 5', leftText: 'Rendezvous', rightText: 'IIT Delhi' },
// //     ],
// //   },
// //   {
// //     id: 2,
// //     heading: 'BRAND FILMS',
// //     text: 'We craft films that amplify Brands heartbeat',
// //     images: [
// //       { src: '/images/work/Film-making1.png', alt: 'Film 1', leftText: '3D Ultrasound Device', rightText: 'Samsung' },
// //       { src: '/images/work/Film-making2.png', alt: 'Film 2', leftText: 'Shake It to Make It', rightText: 'Zomato' },
// //       { src: '/images/work/Film-making3.png', alt: 'Film 3', leftText: 'Mascot Tour', rightText: 'Hush Puppies' },
// //       { src: '/images/work/Film-making4.png', alt: 'Film 4', leftText: 'Jewellery Commercial', rightText: 'Sawaria Jewellers' },
// //       { src: '/images/work/Film-making5.png', alt: 'Film 5', leftText: 'Cricket ', rightText: 'DPPL' },
// //     ],
// //   },
// //   {
// //     id: 3,
// //     heading: 'B-ROLLS',
// //     text: 'We make the in-between of B-rolls that matter',
// //     images: [
// //       { src: '/images/work/BRoll1.png', alt: 'Web 1', leftText: 'Setup', rightText: 'Ritik' },
// //       { src: '/images/work/BRoll2.png', alt: 'Web 2', leftText: 'Tattoo', rightText: 'Mascot Tattos' },
// //       { src: '/images/work/BRoll3.png', alt: 'Web 3', leftText: 'Website', rightText: 'Ritik' },
// //       { src: '/images/work/BRoll4.png', alt: 'Web 4', leftText: 'Saloon Commercial', rightText: 'Spacetech Interiors' },
// //       { src: '/images/work/BRoll5.png', alt: 'Web 5', leftText: 'Cricket', rightText: 'DPPL' },
// //       { src: '/images/work/BRoll6.png', alt: 'Web 6', leftText: 'Sunburn', rightText: 'Sunburn' },
// //     ],
// //   },
// //   {
// //     id: 4,
// //     heading: 'CORPORATE VIDEOS',
// //     text: 'We transform Corporate Videos and Events into engaging, trust-building stories',
// //     images: [
// //       { src: '/images/work/coorporate1.png', alt: 'Music 1' },
// //       { src: '/images/work/coorporate2.png', alt: 'Music 2' },
// //       { src: '/images/work/coorporate3.png', alt: 'Music 3' },
// //       { src: '/images/work/coorporate4.png', alt: 'Music 4' },
// //       { src: '/images/work/coorporate5.png', alt: 'Music 5' },
// //       { src: '/images/work/coorporate6.png', alt: 'Music 6' },
// //     ],
// //   },
// // ];

// // // Reusable Horizontal Scroll Gallery with Arrows
// // const HorizontalGallery = ({ images }) => {
// //   const scrollContainerRef = useRef(null);
// //   const animationRef = useRef(null);

// //   // Duplicate images for seamless infinite scroll
// //   const duplicatedImages = [...images, ...images];

// //   const startScrolling = (direction) => {
// //     if (!scrollContainerRef.current) return;

// //     const container = scrollContainerRef.current;
// //     const scrollAmount = direction === 'left' ? -8 : 8; // Speed

// //     const step = () => {
// //       container.scrollLeft += scrollAmount;

// //       // Infinite loop logic
// //       if (container.scrollLeft <= 0) {
// //         container.scrollLeft = container.scrollWidth / 2;
// //       } else if (container.scrollLeft >= container.scrollWidth / 2) {
// //         container.scrollLeft = 0;
// //       }

// //       animationRef.current = requestAnimationFrame(step);
// //     };

// //     animationRef.current = requestAnimationFrame(step);
// //   };

// //   const stopScrolling = () => {
// //     if (animationRef.current) {
// //       cancelAnimationFrame(animationRef.current);
// //     }
// //   };

// //   // Initial nudge to enable left-wrap
// //   useEffect(() => {
// //     if (scrollContainerRef.current) {
// //       scrollContainerRef.current.scrollLeft = 1;
// //     }
// //   }, []);

// //   return (
// //     <div style={{ position: 'relative', padding: '2rem 0' }}>
// //       {/* Left Arrow */}
// //       <div
// //         onMouseEnter={() => startScrolling('left')}
// //         onMouseLeave={stopScrolling}
// //         style={{
// //           position: 'absolute',
// //           left: '20px',
// //           top: '50%',
// //           transform: 'translateY(-50%)',
// //           width: '40px',
// //           height: '40px',
// //           background: 'rgba(255,255,255,0.15)',
// //           backdropFilter: 'blur(10px)',
// //           borderRadius: '50%',
// //           display: 'flex',
// //           alignItems: 'center',
// //           justifyContent: 'center',
// //           cursor: 'pointer',
// //           zIndex: 20,
// //           fontSize: '18px',
// //           fontWeight: 'bold',
// //           color: 'white',
// //           opacity: 0.7,
// //           transition: 'all 0.3s',
// //         }}
// //         onMouseOver={(e) => (e.currentTarget.style.opacity = '1')}
// //         onMouseOut={(e) => (e.currentTarget.style.opacity = '0.7')}
// //       >
// //         〈
// //       </div>

// //       {/* Right Arrow */}
// //       <div
// //         onMouseEnter={() => startScrolling('right')}
// //         onMouseLeave={stopScrolling}
// //         style={{
// //           position: 'absolute',
// //           right: '20px',
// //           top: '50%',
// //           transform: 'translateY(-50%)',
// //           width: '40px',
// //           height: '40px',
// //           background: 'rgba(255,255,255,0.15)',
// //           backdropFilter: 'blur(10px)',
// //           borderRadius: '50%',
// //           display: 'flex',
// //           alignItems: 'center',
// //           justifyContent: 'center',
// //           cursor: 'pointer',
// //           zIndex: 20,
// //           fontSize: '18px',
// //           fontWeight: 'bold',
// //           color: 'white',
// //           opacity: 0.7,
// //           transition: 'all 0.3s',
// //         }}
       
// //       >
// //         〉
// //       </div>

// //       {/* Scrollable Container */}
// //       <div
// //         ref={scrollContainerRef}
// //         style={{
// //           overflowX: 'auto',
// //           padding: '0 20px', // Space for arrows
// //           scrollbarWidth: 'none',
// //           msOverflowStyle: 'none',
// //         }}
// //         className="hide-scrollbar"
// //       >
// //         <div
// //           style={{
// //             display: 'flex',
// //             gap: '1.1rem',
// //             padding: '2rem 0',
// //             minWidth: 'max-content',
// //             alignItems: 'center',
// //           }}
// //         >
// //           {duplicatedImages.map((img, idx) => (
// //             <div
// //               key={idx}
// //               style={{
// //                 position: 'relative',
// //                 flex: 'none',
// //                 width: '420px',
// //                 boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.35)',
              
// //                 overflow: 'hidden',
// //                 transition: 'all 0.5s ease',
// //               }}
             
// //             >
// //               <Image
// //                 src={img.src}
// //                 alt={img.alt || ''}
// //                 width={500}
// //                 height={281}
// //                 style={{ width: '100%', height: 'auto', display: 'block' }}
// //               />

// //               {(img.leftText || img.rightText) && (
// //                 <div style={{ padding: '1rem 1.2rem 1.2rem' }}>
// //                   <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
// //                     {img.leftText && (
// //                       <span style={{ color: 'white', fontSize: '1.1rem', fontWeight: '600' }}>
// //                         {img.leftText}
// //                       </span>
// //                     )}
// //                     {img.rightText && (
// //                       <span style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.95rem' }}>
// //                         {img.rightText}
// //                       </span>
// //                     )}
// //                   </div>
// //                 </div>
// //               )}
// //             </div>
// //           ))}
// //         </div>
// //       </div>

// //       {/* Hide scrollbar */}
// //       <style jsx>{`
// //         .hide-scrollbar::-webkit-scrollbar {
// //           display: none;
// //         }
// //       `}</style>
// //     </div>
// //   );
// // };

// // export default function WorkGallerSection() {
// //   return (
// //     <section style={{ backgroundColor: 'black', padding: '5rem 0' }}>
// //       {galleries.map((gallery) => (
// //         <div key={gallery.id} style={{ marginBottom: '10rem' }}>
// //           {/* Hero Section - Only for first gallery */}
// //           {gallery.id === 1 && (
// //             <div style={{ position: 'relative', height: '100vh' }}>
// //               <Image
// //                 src="/images/work/eventVideoBackground.png"
// //                 alt="Event Video Background"
// //                 fill
// //                 style={{ objectFit: 'cover' }}
// //                 priority
// //               />
// //               <div
// //                 style={{
// //                   position: 'absolute',
// //                   inset: 0,
// //                   backgroundColor: 'rgba(0,0,0,0.45)',
// //                   display: 'flex',
// //                   flexDirection: 'column',
// //                   alignItems: 'center',
// //                   justifyContent: 'center',
// //                   textAlign: 'center',
// //                   padding: '0 2rem',
// //                 }}
// //               >
// //                 <h1
// //                   style={{
// //                     fontSize: 'clamp(4rem, 8vw, 9rem)',
// //                     fontWeight: '900',
// //                     color: 'white',
// //                     letterSpacing: '-0.05em',
// //                     marginBottom: '1.5rem',
// //                   }}
// //                 >
// //                   {gallery.heading}
// //                 </h1>
// //                 <p
// //                   style={{
// //                     fontSize: 'clamp(1.4rem, 2.2vw, 2rem)',
// //                     color: 'white',
// //                     maxWidth: '70rem',
// //                     lineHeight: '1.4',
// //                   }}
// //                 >
// //                   {gallery.text}
// //                 </p>
// //               </div>
// //             </div>
// //           )}

// //           {/* Heading for all other galleries */}
// //           {gallery.id !== 1 && (
// //             <div style={{ textAlign: 'center', padding: '0 1.5rem', marginBottom: '4rem' }}>
// //               <h1
// //                 style={{
// //                   fontSize: 'clamp(3.5rem, 7vw, 6.5rem)',
// //                   fontWeight: '900',
// //                   color: 'white',
// //                   letterSpacing: '-0.03em',
// //                   lineHeight: '1',
// //                 }}
// //               >
// //                 {gallery.heading}
// //               </h1>
// //               <p
// //                 style={{
// //                   fontSize: '1.6rem',
// //                   color: 'rgba(255,255,255,0.9)',
// //                   maxWidth: '800px',
// //                   margin: '1.5rem auto 0',
// //                   lineHeight: '1.5',
// //                 }}
// //               >
// //                 {gallery.text}
// //               </p>
// //             </div>
// //           )}

// //           {/* Horizontal Gallery */}
// //           <HorizontalGallery images={gallery.images} />
// //         </div>
// //       ))}
// //     </section>
// //   );
// // }








'use client';

import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { SplitText } from 'gsap/SplitText';
import { Parallax } from 'react-scroll-parallax';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(SplitText,ScrollTrigger);


const galleries = [
  {
    id: 1,
    heading: 'EVENT VIDEO',
    text: 'An event video captures the highlights, emotions, and key moments of a special occasion, preserving memories and sharing the experience with a wider audience.',
    images: [
      { src: '/images/work/E2.png', alt: 'Branding 1', leftText: 'Sunburn', rightText: 'Sunburn' },
      { src: '/images/work/E3.png', alt: 'Branding 2', leftText: 'Bismil Intro Video', rightText: 'Bismil' },
      { src: '/images/work/E5.png', alt: 'Branding 3', leftText: 'Hip Hop Event', rightText: 'Elements.ind' },
      { src: '/images/work/E4.png', alt: 'Branding 4', leftText: 'Skybags', rightText: 'Sunburn' },
      { src: '/images/work/E1.png', alt: 'Branding 5', leftText: 'Rendezvous', rightText: 'IIT Delhi' },
    ],
  },
  {
    id: 2,
    heading: 'BRAND FILMS',
    text: 'We craft films that amplify Brands heartbeat',
    images: [
      { src: '/images/work/Film-making1.png', alt: 'Film 1', leftText: '3D Ultrasound Device', rightText: 'Samsung' },
      { src: '/images/work/Film-making2.png', alt: 'Film 2', leftText: 'Shake It to Make It', rightText: 'Zomato' },
      { src: '/images/work/Film-making3.png', alt: 'Film 3', leftText: 'Mascot Tour', rightText: 'Hush Puppies' },
      { src: '/images/work/Film-making4.png', alt: 'Film 4', leftText: 'Jewellery Commercial', rightText: 'Sawaria Jewellers' },
      { src: '/images/work/Film-making5.png', alt: 'Film 5', leftText: 'Cricket ', rightText: 'DPPL' },
    ],
  },
  {
    id: 3,
    heading: 'B-ROLLS',
    text: 'We make the in-between of B-rolls that matter',
    images: [
      { src: '/images/work/BRoll1.png', alt: 'Web 1', leftText: 'Setup', rightText: 'Ritik' },
      { src: '/images/work/BRoll2.png', alt: 'Web 2', leftText: 'Tattoo', rightText: 'Mascot Tattos' },
      { src: '/images/work/BRoll3.png', alt: 'Web 3', leftText: 'Website', rightText: 'Ritik' },
      { src: '/images/work/BRoll4.png', alt: 'Web 4', leftText: 'Saloon Commercial', rightText: 'Spacetech Interiors' },
      { src: '/images/work/BRoll5.png', alt: 'Web 5', leftText: 'Cricket', rightText: 'DPPL' },
      { src: '/images/work/BRoll6.png', alt: 'Web 6', leftText: 'Sunburn', rightText: 'Sunburn' },
    ],
  },
  {
    id: 4,
    heading: 'CORPORATE VIDEOS',
    text: 'We transform Corporate Videos and Events into engaging, trust-building stories',
    images: [
      { src: '/images/work/coorporate1.png', alt: 'Music 1' },
      { src: '/images/work/coorporate2.png', alt: 'Music 2' },
      { src: '/images/work/coorporate3.png', alt: 'Music 3' },
      { src: '/images/work/coorporate4.png', alt: 'Music 4' },
      { src: '/images/work/coorporate5.png', alt: 'Music 5' },
      { src: '/images/work/coorporate6.png', alt: 'Music 6' },
    ],
  },
];

const HorizontalGallery = ({ images }) => {
  const scrollContainerRef = useRef(null);
  const itemRefs = useRef([]);
  const animationRef = useRef(null);
  const [centerIndex, setCenterIndex] = useState(0);

  const duplicatedImages = [...images, ...images, ...images];
  const totalItems = duplicatedImages.length;
  const SCROLL_SPEED = 3;

  const updateCenterImage = () => {
    if (!scrollContainerRef.current || itemRefs.current.length === 0) return;

    const container = scrollContainerRef.current;
    const containerRect = container.getBoundingClientRect();
    const containerCenter = containerRect.left + containerRect.width / 2;

    let closestIndex = 0;
    let minDistance = Infinity;

    itemRefs.current.forEach((el, idx) => {
      if (el) {
        const rect = el.getBoundingClientRect();
        const itemCenter = rect.left + rect.width / 2;
        const distance = Math.abs(itemCenter - containerCenter);
        if (distance < minDistance) {
          minDistance = distance;
          closestIndex = idx;
        }
      }
    });

    const realIndex = closestIndex % images.length;
    setCenterIndex(realIndex);
  };

  const startScrolling = (direction) => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const speed = direction === 'left' ? -SCROLL_SPEED : SCROLL_SPEED;

    const step = () => {
      container.scrollLeft += speed;
      updateCenterImage();

      const maxScroll = container.scrollWidth / 3;
      if (container.scrollLeft <= 0) container.scrollLeft += maxScroll;
      else if (container.scrollLeft >= maxScroll * 2) container.scrollLeft -= maxScroll;

      animationRef.current = requestAnimationFrame(step);
    };

    animationRef.current = requestAnimationFrame(step);
  };

  const stopScrolling = () => {
    if (animationRef.current) cancelAnimationFrame(animationRef.current);
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    container.scrollLeft = container.scrollWidth / 3;

    const handleScroll = () => {
      updateCenterImage();
      const maxScroll = container.scrollWidth / 3;
      if (container.scrollLeft <= 100) container.scrollLeft += maxScroll;
      else if (container.scrollLeft >= maxScroll * 2 - 100) container.scrollLeft -= maxScroll;
    };

    container.addEventListener('scroll', handleScroll);
    updateCenterImage();

    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div style={{ position: 'relative', padding: '3rem 80px',margin:'-2rem', overflow: 'hidden' }}>
      {/* Left Arrow */}
      <div
        onMouseEnter={() => startScrolling('left')}
        onMouseLeave={stopScrolling}
        style={{
          position: 'absolute',
          left: '45px',
          top: '50%',
          transform: 'translateY(-50%)',
          width: '30px',
          height: '30px',
          background: 'rgba(255,255,255,0.15)',
          backdropFilter: 'blur(20px)',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          zIndex: 100,
          fontSize: '14px',
          color: 'white',
          boxShadow: '0 10px 30px rgba(0,0,0,0.4)',
          border: '2px solid rgba(255,255,255,0.2)',
          paddingRight: '10px',
        }}
      >
        〈
      </div>

      {/* Right Arrow */}
      <div
        onMouseEnter={() => startScrolling('right')}
        onMouseLeave={stopScrolling}
        style={{
          position: 'absolute',
          right: '40px',
          top: '50%',
          transform: 'translateY(-50%)',
          width: '30px',
          height: '30px',
          background: 'rgba(255,255,255,0.15)',
          backdropFilter: 'blur(20px)',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          paddingLeft: '10px',
          cursor: 'pointer',
          zIndex: 100,
          fontSize: '14px',
          color: 'white',
          boxShadow: '0 10px 30px rgba(0,0,0,0.4)',
          border: '2px solid rgba(255,255,255,0.2)',
        }}
      >
        〉
      </div>

      <div
        ref={scrollContainerRef}
        style={{ overflowX: 'hidden', scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        className="hide-scrollbar"
      >
        <div style={{ display: 'flex', gap: '0.5rem', padding: '1rem 0', alignItems: 'center' }}>
          {duplicatedImages.map((img, idx) => {
            const originalIndex = idx % images.length;
            const isCenter = originalIndex === centerIndex;

            return (
              <div
                key={idx}
                ref={(el) => (itemRefs.current[idx] = el)}
                style={{
                  flex: 'none',
                  transition: 'all 0.7s cubic-bezier(0.4, 0, 0.2, 1)',
                  transform: isCenter
                    ? 'scale(1.05) translateY(5px)'
                    : 'scale(0.92) translateY(10px)',
                  zIndex: isCenter ? 50 : 10,
                  filter: isCenter ? 'brightness(0.85)' : 'brightness(0.95)',
                }}
              >
                <div
                  style={{
                    width: '408px',
                    height: '280px',
                    overflow: 'hidden',
                    position: 'relative',
                    borderRadius: '12px',
                  }}
                >
                  <Image
                    src={img.src}
                    alt={img.alt || `Image ${originalIndex + 1}`}
                    width={600}
                    height={500}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'filter 0.7s cubic-bezier(0.4, 0, 0.2, 1)',
                      filter: isCenter
                        ? 'grayscale(50%) brightness(0.65) contrast(1.1)'
                        : 'brightness(1.1) saturate(1.1)',
                    }}
                    priority={isCenter}
                  />
                  {isCenter && (
                    <div
                      style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'rgba(0, 0, 0, 0.25)',
                        pointerEvents: 'none',
                      }}
                    />
                  )}
                </div>

                {(img.leftText || img.rightText) && (
                  <div
                    style={{
                      marginTop: isCenter ? '-0.2rem' : '0.3rem',
                      textAlign: 'center',
                      opacity: isCenter ? 1 : 0.8,
                      transition: 'all 0.5s',
                    }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        padding: '0 2rem',
                        fontSize: isCenter ? '1.1rem' : '0.95rem',
                      }}
                    >
                      {img.leftText && (
                        <span style={{ fontWeight: isCenter ? '700' : '500', color: 'white', marginLeft: '-25px' }}>
                          {img.leftText}
                        </span>
                      )}
                      {img.rightText && (
                        <span style={{ color: 'rgba(255,255,255,0.7)', marginRight: '-20px' }}>
                          {img.rightText}
                        </span>
                      )}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

/* Simplified Hero – no text animation */
const EventVideoHero = () => {
  return (
    <Parallax y={[-60, 60]} easing="easeOutQuad">
      <div style={{ position: 'relative', height: '699px',  marginBottom: '-5rem' }}>
        <Image
          src="/images/work/eventVideoBackground.png"
          alt="Event Video Hero"
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
        <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.5)' }} />

        <div
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            padding: '0 2rem',
          }}
        >
          <h1
            style={{
              fontSize: 'clamp(4.5rem, 9vw, 10rem)',
              fontWeight: '900',
              color: 'white',
              letterSpacing: '-0.06em',
              margin: 0,
              lineHeight: '0.9',
              marginTop: '15.2rem',
              fontStyle: 'italic',
              marginBottom: '1rem',
            }}
          >
            EVENT VIDEO
          </h1>

          <p
            style={{
              fontSize: 'clamp(1.1rem, 1.8vw, 2.2rem)',
              color: 'white',
              maxWidth: '90rem',
              lineHeight: '1.2',
              marginBottom: '2rem',
            }}
          >
            An event video captures the highlights, emotions, and key moments of a special occasion, preserving memories and sharing the experience with a wider audience.
          </p>
        </div>
      </div>
    </Parallax>
  );
};
const AnimatedTextSection = ({ heading, text }) => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);

  useEffect(() => {
    let headingSplit = null;
    let paragraphSplit = null;

    const animate = () => {
      if (!headingRef.current || !paragraphRef.current) return;

      // Only split once when in view
      headingSplit = new SplitText(headingRef.current, { type: "chars,words" });
      paragraphSplit = new SplitText(paragraphRef.current, { type: "words,lines" });

      // Set initial state ON THE SPLIT ELEMENTS (not parent)
      gsap.set(headingSplit.chars, { y: 50, opacity: 0, rotationX: -30 });
      gsap.set(paragraphSplit.words, { y: 30, opacity: 0 });

      // Animate
      gsap.to(headingSplit.chars, {
        y: 0,
        opacity: 1,
        rotationX: 0,
        duration: 1.3,
        stagger: 0.03,
        ease: "back.out(1.2)",
      });

      gsap.to(paragraphSplit.words, {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.03,
        ease: "power3.out",
        delay: 0.5,
      });
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animate();
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -100px 0px" }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      observer.disconnect();
      headingSplit?.revert();
      paragraphSplit?.revert();
    };
  }, [heading, text]);

  return (
    <div
      ref={sectionRef}
      style={{
        textAlign: 'center',
        padding: '0 2rem',
        marginBottom: '-3rem',
        overflow: 'hidden', // Critical for smooth reveal
      }}
    >
      {/* Heading - no opacity:0 on parent! */}
      <h1
        ref={headingRef}
        style={{
          fontSize: 'clamp(4rem, 8vw, 7rem)',
          fontWeight: 900,
          color: 'white',
          letterSpacing: '-0.04em',
          lineHeight: '1.1',
          margin: '0 0 1rem',
          fontStyle: 'italic',
          marginBottom:'-4rem',
        }}
      >
        {heading}
      </h1>

      {/* Paragraph */}
      <p
        ref={paragraphRef}
        style={{
          fontSize: '1.4rem',
          color: 'rgba(255,255,255,0.9)',
          maxWidth: '900px',
          margin: '3rem auto 2rem',
          lineHeight: '1.1',
          marginBottom:'0rem'
          // Remove opacity: 0 from here too!
        }}
      >
        {text}
      </p>
    </div>
  );
};
export default function GalleriesPage() {
  return (
    <section style={{ padding: '2rem 0' }}>
      {galleries.map((gallery) => (
        <div key={gallery.id} style={{ marginBottom: '6rem' }}>
          {gallery.id === 1 && <EventVideoHero />}
          {gallery.id !== 1 && <AnimatedTextSection heading={gallery.heading} text={gallery.text} />}
          <HorizontalGallery images={gallery.images} />
        </div>
      ))}
    </section>
  );
}