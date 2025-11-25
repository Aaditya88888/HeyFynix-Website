// "use client";

// import React, { useEffect, useRef, useState } from "react";

// const allVideos = [
//   { id: "1", src: "/videos/video.mp4", poster: "/videos/vedio1Poster.png", title: "Kyun Dhundhe", artist: "Vilen" },
//   { id: "2", src: "/videos/video.mp4", poster: "/videos/video2Poster.png", title: "Sanson ki Mala pe", artist: "Sozz Band" },
//   { id: "3", src: "/videos/video.mp4", poster: "/videos/video3Poster.png", title: "Humsafar", artist: "Vylom" },
//   { id: "4", src: "/videos/video.mp4", poster: "/videos/video4Poster.png", title: "Tum Mere", artist: "Fukra Insaan" },
//   { id: "5", src: "/videos/video.mp4", poster: "/videos/video5Poster.png", title: "Munde Farrar", artist: "Sahib" },
//   { id: "6", src: "/videos/video.mp4", poster: "/videos/video7Poster.png", title: "Adios Amigo", artist: "Knav" },
//   { id: "7", src: "/videos/video.mp4", poster: "/videos/video6Poster.png", title: "Parchai", artist: "Sejal" },
//   { id: "8", src: "/videos/video.mp4", poster: "/videos/video8Poster.png", title: "Kaare Hathiyar", artist: "Vilen feat Maya" },
//   { id: "9", src: "/videos/video.mp4", poster: "/videos/video9Poster.png", title: "Zero Skill", artist: "Knav" },
//   { id: "10", src: "/videos/video.mp4", poster: "/videos/video10Poster.png", title: "Haunted", artist: "Arunima" },
//   { id: "11", src: "/videos/video.mp4", poster: "/videos/video11Poster.png", title: "Apna Time Aaaega", artist: "All India Permit" },
//   { id: "12", src: "/videos/video.mp4", poster: "/videos/video12Poster.png", title: "Behaal", artist: "Joy Rocks" },
//   { id: "13", src: "/videos/video.mp4", poster: "/videos/video13Poster.png", title: "All India Permit", artist: "All India Permit" },
// ];

// const VideoCard = ({ video, index }) => {
//   const videoRef = useRef(null);
//   const [isPlaying, setIsPlaying] = useState(false);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       videoRef.current?.play().catch(() => {});
//       setIsPlaying(true);
//     }, 1000 + index * 400);
//     return () => clearTimeout(timer);
//   }, [index]);

//   return (
//     <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: "1rem" }}>
//       {/* Video / Poster */}
//       <div
//         style={{
//           position: "relative",
//           width: "100%",
//           aspectRatio: "16/9",
//           borderRadius: "16px",
//           overflow: "hidden",
//           boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.6)",
//           transition: "transform 0.5s ease",
//         }}
//         onMouseEnter={() => videoRef.current?.play()}
//         onMouseLeave={() => {
//           if (videoRef.current) {
//             videoRef.current.pause();
//             videoRef.current.currentTime = 0;
//           }
//         }}
//       >
//         {!isPlaying && (
//           <img
//             src={video.poster}
//             alt={video.title}
//             style={{ width: "100%", height: "100%", objectFit: "cover" }}
//             loading="lazy"
//           />
//         )}
//         <video
//           ref={videoRef}
//           src={video.src}
//           loop
//           muted
//           playsInline
//           onClick={() => window.open('/videos/video.mp4', '_blank')}
//           style={{
//             width: "100%",
//             height: "100%",
//             objectFit: "cover",
//             display: isPlaying ? "block" : "none",
//             cursor:'pointer'
//           }}
//         />
//       </div>

//       {/* Text BELOW the video */}
//       <div style={{ padding: "0 0.5rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
//   <h3
//     style={{
//       color: "white",
//       fontWeight: 700,
//       fontSize: "1.125rem",
//       margin: 0,
//       whiteSpace: "nowrap",
//       overflow: "hidden",
//       textOverflow: "ellipsis",
//       flex: 1,
//       minWidth: 0, // Important for ellipsis to work in flex
//     }}
//   >
//     {video.title}
//   </h3>

//   <p
//     style={{
//       color: "#a1a1aa",
//       fontSize: "0.875rem",
//       margin: 0,
//       marginLeft: "1rem",
//       whiteSpace: "nowrap",
//       flexShrink: 0,
//     }}
//   >
//     {video.artist}
//   </p>
// </div>
//     </div>
//   );
// };

// // MAIN COMPONENT WITH DEFAULT EXPORT
// export default function VideoGallerySection() {
//   const [showMore, setShowMore] = useState(false);

//   const gridStyle = {
//     display: "grid",
//     gap: "2.5rem",
//     width: "100%",
//     maxWidth: "1400px",
//     margin: "0 auto",
//     padding: "0 2rem",
//   };

//   const row2Cols = { ...gridStyle, gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))" };
//   const row3Cols = { ...gridStyle, gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))" };

//   return (
//     <section style={{ backgroundColor: "#000", padding: "8rem 0" }}>
//       <div style={{ maxWidth: "1600px", margin: "0 auto" }}>
//         {/* Row 1 – 2 Videos */}
//         <div style={row2Cols}>
//           {allVideos.slice(0, 2).map((v, i) => (
//             <VideoCard key={v.id} video={v} index={i} />
//           ))}
//         </div>

//         {/* Row 2 – 3 Videos */}
//         <div style={{ ...row3Cols, margin: "5rem 0" }}>
//           {allVideos.slice(2, 5).map((v, i) => (
//             <VideoCard key={v.id} video={v} index={i + 2} />
//           ))}
//         </div>

//         {/* Show More */}
//         {showMore && (
//           <>
//             <div style={{ ...row3Cols, margin: "5rem 0" }}>
//               {allVideos.slice(5, 8).map((v, i) => (
//                 <VideoCard key={v.id} video={v} index={i + 5} />
//               ))}
//             </div>
//             <div style={row2Cols}>
//               {allVideos.slice(8, 10).map((v, i) => (
//                 <VideoCard key={v.id} video={v} index={i + 8} />
//               ))}
//             </div>
//             <div style={{ ...row3Cols, margin: "5rem 0" }}>
//               {allVideos.slice(10, 13).map((v, i) => (
//                 <VideoCard key={v.id} video={v} index={i + 10} />
//               ))}
//             </div>
//           </>
//         )}

//         {/* View More Button */}
//         {!showMore && (
//           <div style={{ 
//           textAlign: "center", 
//           marginTop: "4rem",
//           position: "relative",
//           zIndex: 10,
//           pointerEvents: "auto"
//         }}>
//             <button
//               onClick={() => setShowMore(true)}
//               style={{
//                 padding: "1rem 3rem",
//                 fontSize: "1.25rem",
//                 fontWeight: 600,
//                 color: "white",
//                 background: "transparent",
//                 border: "2px solid white",
//                 borderRadius: "9999px",
//                 cursor: "pointer",
//                 transition: "all 0.4s ease",
//               }}
//               onMouseEnter={(e) => {
//                 e.target.style.background = "white";
//                 e.target.style.color = "black";
//               }}
//               onMouseLeave={(e) => {
//                 e.target.style.background = "transparent";
//                 e.target.style.color = "white";
//               }}
//             >
//               View More →
//             </button>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// }



"use client";

import React, { useEffect, useRef, useState } from "react";


// Your VideoCard component (unchanged – perfect)
const VideoCard = ({ video, index }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      videoRef.current?.play().catch(() => {});
      setIsPlaying(true);
    }, 1000 + index * 400);
    return () => clearTimeout(timer);
  }, [index]);

  return (
    <div style={{ width: "90%", display: "flex", flexDirection: "column", gap: "0.2rem" ,marginLeft:'30px'}}>
      <div
        style={{
          position: "relative",
          width: "100%",
          aspectRatio: "16/9",
          borderRadius: "16px",
          overflow: "hidden",
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.6)",
          transition: "transform 0.5s ease",
        }}
        onMouseEnter={() => videoRef.current?.play()}
        onMouseLeave={() => {
          if (videoRef.current) {
            videoRef.current.pause();
            videoRef.current.currentTime = 0;
          }
        }}
      >
        {!isPlaying && (
          <img
            src={video.poster}
            alt={video.title}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            loading="lazy"
          />
        )}
        <video
          ref={videoRef}
          src={video.src}
          loop
          muted
          playsInline
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: isPlaying ? "block" : "none",
            cursor: "pointer",
          }}
        />
      </div>

      <div style={{ padding: "0 0.5rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h3 style={{ color: "white", fontWeight: 700, fontSize: "1.025rem", margin: 0, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", flex: 1 }}>
          {video.title}
        </h3>
        <p style={{ color: "#a1a1aa", fontSize: "0.875rem", margin: 0, marginLeft: "1rem" }}>{video.artist}</p>
      </div>
    </div>
  );
};

// YOUR EXACT LISA CAMBOURS CAROUSEL (using local posters)
const LisaCamboursCarousel = () => {
  const items = [
    { id: "video6", title: "RENDEZVOUS", image: "/videos/video6Poster.png" },
    { id: "video7", title: "SUNBURN", image: "/videos/video7Poster.png" },
    { id: "video8", title: "BISMIL", image: "/videos/video8Poster.png" },
    { id: "video9", title: "SKYBAGS", image: "/videos/video9Poster.png" },
    { id: "video10", title: "HIP HOP", image: "/videos/video10Poster.png" },
    { id: "video11", title: "3D ULTRASOUND", image: "/videos/video11Poster.png" },
    { id: "video12", title: "SHAKE IT", image: "/videos/video12Poster.png" },
    { id: "video13", title: "MASCOT TOUR", image: "/videos/video13Poster.png" }
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setIndex(i => (i + 1) % items.length), 1000);
    return () => clearInterval(timer);
  }, []);

  const get = (offset) => items[(index + offset + items.length) % items.length];
  const next = () => setIndex(i => (i + 1) % items.length);
  const prev = () => setIndex(i => (i - 1 + items.length) % items.length);

  return (
    <div style={{ position: 'relative', width: '100%', height: '100vh', background: '#000', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>

      {/* Top Row */}
      <div style={{ position: 'absolute', top: '7%', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: '2px', zIndex: 0, alignItems: 'flex-end' }}>
        <div style={{ marginBottom: '-30px' }}>
          <img src={get(-3).image} alt="" style={{ width: '258px', opacity: 0.68, }} />
        </div>
        <div style={{ marginBottom: '70px' }}>
          <img src={get(-2).image} alt="" style={{ width: '124px', opacity: 0.28}} />
        </div>
        <div style={{ marginBottom: '70px' }}>
          <img src={get(-1).image} alt="" style={{ width: '124px', opacity: 0.28,}} />
        </div>
        <div style={{ marginBottom: '-30px' }}>
          <img src={get(0).image} alt="" style={{ width: '258px', opacity: 0.68,}} />
        </div>
      </div>

      {/* Main 3 Large */}
      <div style={{ position: 'relative', width: '100%', height: '100%' }}>
        <a href="#" onClick={(e) => { e.preventDefault(); prev(); }} style={{ position: 'absolute', left: '13%', top: '34%', transform: 'translateY(-50%) scale(0.88)', zIndex: 10, cursor: 'pointer' }}>
          <img src={get(1).image} alt="" style={{ width: '420px', maxWidth: '90vw',  }} />
        </a>

        <div style={{ position: 'absolute', left: '50%', top: '43%', transform: 'translate(-50%, -50%) scale(1.06)', zIndex: 30 }}>
          <img src={get(2).image} alt="" style={{ width: '450px', maxWidth: '90vw',  }} />
          <div style={{ position: 'absolute', bottom: '-120px', left: '50%', transform: 'translateX(-50%)', textAlign: 'center', color: '#fff' }}>
         </div>
        </div>

        <a href="#" onClick={(e) => { e.preventDefault(); next(); }} style={{ position: 'absolute', right: '13%', top: '34%', transform: 'translateY(-50%) scale(0.88)', zIndex: 10, cursor: 'pointer' }}>
          <img src={get(3).image} alt="" style={{ width: '420px', maxWidth: '90vw',  }} />
        </a>
      </div>
    </div>
  );
};

// MAIN SECTION – Now with View More → Carousel
export default function VideoGallerySection() {
  const [showCarousel, setShowCarousel] = useState(false);

  const allVideos = [
    { id: "1", src: "/videos/video.mp4", poster: "/videos/vedio1Poster.png", title: "Kyun Dhundhe", artist: "Vilen" },
    { id: "2", src: "/videos/video.mp4", poster: "/videos/video2Poster.png", title: "Sanson ki Mala pe", artist: "Sozz Band" },
    { id: "3", src: "/videos/video.mp4", poster: "/videos/video3Poster.png", title: "Humsafar", artist: "Vylom" },
    { id: "4", src: "/videos/video.mp4", poster: "/videos/video4Poster.png", title: "Tum Mere", artist: "Fukra Insaan" },
    { id: "5", src: "/videos/video.mp4", poster: "/videos/video5Poster.png", title: "Munde Farrar", artist: "Sahib" },
    // ... rest of your videos
  ];

  return (
    <>
      <section style={{  padding: "8rem 0" }}>
        
        <div style={{ maxWidth: "1600px", margin: "0 auto" }}>
          {/* Your existing grid */}
          <div style={{ display: "grid", gap: "0.1rem", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", padding: "0 2rem" }}>
            {allVideos.slice(0, 2).map((v, i) => <VideoCard key={v.id} video={v} index={i} />)}
          </div>
          <div style={{ display: "grid", gap: "0.1rem", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", padding: "0 2rem", margin: "5rem 0" }}>
            {allVideos.slice(2, 5).map((v, i) => <VideoCard key={v.id} video={v} index={i + 2} />)}
          </div>

          {/* View More Button */}
       {/* View More Button - Only show when carousel is not visible */}
{!showCarousel && (
  <div style={{ textAlign: "center", marginTop: "6rem" }}>
    <button
      onClick={() => setShowCarousel(true)}
      style={{
        padding: "0.3rem 1rem",
        fontSize: "1.1rem",
        fontWeight: 700,
        color: "white",
        background: "transparent",
        border: "3px solid white",
        borderRadius: "9999px",
        cursor: "pointer",
        transition: "all 0.4s ease",
      }}
      onMouseEnter={(e) => { e.target.style.background = "white"; e.target.style.color = "black"; }}
      onMouseLeave={(e) => { e.target.style.background = "transparent"; e.target.style.color = "white"; }}
    >
      View More →
    </button>
  </div>
)}
        </div>
      </section>

      {/* LISA CAMBOURS CAROUSEL ON CLICK */}
      {showCarousel && <LisaCamboursCarousel />}
    </>
  );
}