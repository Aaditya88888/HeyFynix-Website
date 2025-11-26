// // app/bts/page.jsx   (or any component file)
// import Image from 'next/image';

// export default function BTSGallery() {
//   // Add your videos with posters - each item has poster and video path
//   const videos = [
//     { poster: "/images/work/BTS1.png", video: "/videos/video.mp4" },
//     { poster: "/images/work/BTS2.png", video: "/videos/video.mp4" },
//     { poster: "/images/work/BTS3.png", video: "/videos/video.mp4" },
//     { poster: "/images/work/BTS4.png", video: "/videos/video.mp4" },
//     { poster: "/images/work/BTS5.png", video: "/videos/video.mp4" },
//     { poster: "/images/work/BTS6.png", video: "/videos/video.mp4" },
//     { poster: "/images/work/BTS7.png", video: "/videos/video.mp4" },
//     { poster: "/images/work/BTS8.png", video: "/videos/video.mp4" },
//     { poster: "/images/work/BTS9.png", video: "/videos/video.mp4" },
//     { poster: "/images/work/BTS10.png", video: "/videos/video.mp4" },
//     { poster: "/images/work/BTS11.png", video: "/videos/video.mp4" },
//     { poster: "/images/work/BTS12.png", video: "/videos/video.mp4" },
//     { poster: "/images/work/BTS13.png", video: "/videos/video.mp4" },
//     { poster: "/images/work/BTS14.png", video: "/videos/video.mp4" },
//     { poster: "/images/work/BTS15.png", video: "/videos/video.mp4" },
//     { poster: "/images/work/BTS16.png", video: "/videos/video.mp4" },
//   ];

//   return (
//     <div style={{ minHeight: '100vh', padding: '40px 20px', fontFamily: 'Arial, sans-serif' }}>
//       {/* Title */}
//       <div style={{ textAlign: 'left', marginBottom: '-20px' }}>
//         <h1 style={{ marginLeft:'60px',fontSize: '128px', fontWeight: '800', color: '#fff', margin: 0, letterSpacing: '-3px' }}>
//           BTS
//         </h1>
//       </div>
//       <div style={{ textAlign: 'right', marginBottom: '20px' }}>
//         <p style={{ marginRight:'40px',fontSize: '22px', fontWeight: 'extrabold', color: '#fff', margin: 0, letterSpacing: '-1px' }}>
//           (Behind the Scenes)
//         </p>
//       </div>

//       {/* Image Grid */}
//       <div style={{
//         display: 'grid',
//         gridTemplateColumns: 'repeat(8, 1fr)',
//         gridTemplateRows: 'auto auto auto',
//         gap: '12px',
//         maxWidth: '1400px',
//         margin: '0 auto',
//       }}>
//         {/* Row 1 */}
//         <div ><Vid poster={videos[0].poster} video={videos[0].video}/></div>
//         <div><Vid poster={videos[1].poster} video={videos[1].video} /></div>
//         <div><Vid poster={videos[2].poster} video={videos[2].video} /></div>
//         <div><Vid poster={videos[3].poster} video={videos[3].video} /></div>
//         <div><Vid poster={videos[4].poster} video={videos[4].video} /></div>
//         <div><Vid poster={videos[5].poster} video={videos[5].video} /></div>
//         <div><Vid poster={videos[6].poster} video={videos[6].video} /></div>
//         <div><Vid poster={videos[7].poster} video={videos[7].video} /></div>

//         {/* Row 2 */}
        
//         <div><Vid poster={videos[8].poster} video={videos[8].video} /></div>
//         <div><Vid poster={videos[9].poster} video={videos[9].video} /></div>
//         <div><Vid poster={videos[10].poster} video={videos[10].video} /></div>
//         <div><Vid poster={videos[11].poster} video={videos[11].video} /></div>
//            <div><Vid poster={videos[12].poster} video={videos[12].video} /></div>
//         <div><Vid poster={videos[13].poster} video={videos[13].video} /></div>
//         <div><Vid poster={videos[14].poster} video={videos[14].video} /></div>
//         <div><Vid poster={videos[15].poster} video={videos[15].video} /></div>
//  </div>

//       {/* Global styles (optional - ensures body is black and full height) */}
//       <style jsx global>{`
//         body {

//           margin: 0;
//           padding: 0;
//         }
//       `}</style>
//     </div>
//   );
// }

// // Reusable video component with poster
// function Vid({ poster, video }) {
//   return (
//     <div style={{
//       position: 'relative',
//       width: '100%',
//       height: '290px', // fixed height for precise control
//       overflow: 'hidden',
//       boxShadow: '0 4px 15px rgba(0,0,0,0.6)',
//     }}>
//       <video
//         poster={poster}
//         muted
//         loop
//         playsInline
//         style={{
//           width: '100%',
//           height: '100%',
//           objectFit: 'cover',
//           cursor:'pointer'
//         }}
//         onClick={() => window.open(video, '_blank')}
//       >
//         <source src={video} type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>
//     </div>
//   );
// }
"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const BTSGallery = () => {
  const sectionRef = useRef(null);
  const itemsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate when section enters viewport
            gsap.to(itemsRef.current, {
              y: 0,
              opacity: 1,
              duration: 1.2,
              ease: "power3.out",
              stagger: { each: 0.1, from: "start" },
            });
            observer.unobserve(entry.target); // Run only once
          }
        });
      },
    { threshold: 0.3, rootMargin: "-10% 0px -15% 0px" }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const videos = [
    { poster: "/images/work/BTS1.png", video: "/videos/bts1.mp4" },
    { poster: "/images/work/BTS2.png", video: "/videos/bts2.mp4" },
    { poster: "/images/work/BTS3.png", video: "/videos/bts3.mp4" },
    { poster: "/images/work/BTS4.png", video: "/videos/bts4.mp4" },
    { poster: "/images/work/BTS5.png", video: "/videos/bts5.mp4" },
    { poster: "/images/work/BTS6.png", video: "/videos/bts6.mp4" },
    { poster: "/images/work/BTS7.png", video: "/videos/bts7.mp4" },
    { poster: "/images/work/BTS8.png", video: "/videos/bts8.mp4" },
    { poster: "/images/work/BTS9.png", video: "/videos/bts9.mp4" },
    { poster: "/images/work/BTS10.png", video: "/videos/bts10.mp4" },
    { poster: "/images/work/BTS11.png", video: "/videos/bts11.mp4" },
    { poster: "/images/work/BTS12.png", video: "/videos/bts12.mp4" },
    { poster: "/images/work/BTS13.png", video: "/videos/bts13.mp4" },
    { poster: "/images/work/BTS14.png", video: "/videos/bts14.mp4" },
    { poster: "/images/work/BTS15.png", video: "/videos/bts15.mp4" },
    { poster: "/images/work/BTS16.png", video: "/videos/bts16.mp4" },
  ];

  return (
    <section
      ref={sectionRef}
      className="min-h-screen py-32 px-6 bg-black text-white"
    >
      {/* Title */}
      <div className="max-w-7xl mx-auto mb-20 flex flex-col ">
        <h1 className="text-[80px] md:text-[120px] lg:text-[180px] font-black tracking-tighter leading-none">
          BTS
        </h1>
        
        <p className="text-right text-2xl md:text-3xl font-bold -mt-16 md:-mt-12 -md:mb-6 -mb-16 pr-8 md:pr-16">
          (Behind the Scenes)
        </p>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-6 lg:grid-cols-8 gap-4 md:gap-3">
        {videos.map((item, i) => (
          <div
            key={i}
            ref={(el) => (itemsRef.current[i] = el)}
            style={{ opacity: 0, y: 100 }}
            className="group relative overflow-hidden rounded-xl shadow-2xl cursor-pointer bg-black/40 backdrop-blur-md border border-white/10"
            onClick={() => window.open(item.video, "_blank")}
          >
            <video
              poster={item.poster}
              src={item.video}
              muted
              loop
              playsInline
              preload="metadata"
              className="w-full h-48 md:h-74 object-cover transition-transform duration-700 group-hover:scale-110"
              onMouseEnter={(e) => e.currentTarget.play()}
              onMouseLeave={(e) => {
                e.currentTarget.currentTime = 0;
                e.currentTarget.pause();
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default BTSGallery;