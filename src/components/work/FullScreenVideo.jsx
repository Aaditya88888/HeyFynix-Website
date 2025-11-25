// // app/video-section/page.js   (or any component file)
// import Image from 'next/image';

// export default function FullScreenVideo() {
//   return (
//     <section style={{ position: 'relative', width: '100vw', height: '100vh', overflow: 'hidden',marginTop:'100px' }}>
//       {/* Full-screen background video */}
//       <video
//         autoPlay
//         muted
//         loop
//         playsInline
//         style={{
//           position: 'absolute',
//           top: '50%',
//           left: '50%',
//           width: '70%',
//           height: '100%',
//           objectFit: 'cover',
//           transform: 'translate(-50%, -50%)',
//           zIndex: 1,
//         }}
//       >
//         {/* Replace with your own video file or URL */}
//         <source src="/videos/video.mp4" type="video/mp4" />
//         {/* <source src="/videos/your-background-video.webm" type="video/webm" /> */}
//         Your browser does not support the video tag.
//       </video>

//       {/* Image stuck to the bottom center of the section */}
//       <div
//         style={{
//           position: 'absolute',
//           bottom: '-12px',       // adjust distance from bottom
//           left: '50%',
//           transform: 'translateX(-50%)',
//           zIndex: 10,
//           pointerEvents: 'none', // optional: let clicks pass through the image
//         }}
//       >
//         <Image
//           src="/images/work/chair.png"   // ← put your image in public/images/
//           alt="Bottom overlay image"
//           width={1800}   // adjust size as needed
//           height={500}
//           style={{ maxWidth: '100vw', height: 'auto'}}
//         />
//       </div>

//       {/* Global styles for this page/component only */}
//       <style jsx global>{`
//         html,
//         body,
//         #__next {
//           margin: 0;
//           padding: 0;
//           height: 100%;
//           overflow: hidden;
//         }
//       `}</style>
//     </section>
//   );
// }





// app/video-section/page.js (or any component)
import Image from 'next/image';

export default function FullScreenVideo() {
  return (
    <section
      style={{
        position: 'relative',
        width: '100vw',
        height: '100vh',
        overflow: 'hidden',
        marginTop: '90px',
      }}
    >
      {/* Full-screen background video with poster */}
      <video
        // autoPlay
        muted
        loop
        playsInline
        poster="/videos/fullScreenPoster.png"   /* ← Add your poster image here */
        onClick={() => window.open('/videos/video.mp4', '_blank')}
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          width: '1159px',
          height: '518px',
          objectFit: 'cover',
          transform: 'translate(-50%, -50%)',
          zIndex: 1,
          background: '#000', // fallback color while poster loads
          cursor: 'pointer', // show pointer cursor on hover
        }}
      >
        <source src="/videos/video.mp4" type="video/mp4" />
      </video>

      {/* Image stuck to the bottom center */}
      <div
        style={{
          position: 'absolute',
          bottom: '-180px',           // tweak as needed
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 10,
          pointerEvents: 'none',
        }}
      >
        <div style={{ position: 'relative', maxWidth: '100vw', height: '60vh' }}>
          <Image
            src="/images/work/chair.png"
            alt="Bottom overlay image"
            width={1800}
            height={700}
          style={{ maxWidth: '100vw', height: '60vh' }}
            priority // optional: load this important image early
          />
          <div
            style={{
              position: 'absolute',
              top: 65,
              left: 0,
              right: 0,
              bottom: -80,
              background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.52), rgba(0, 0, 89, 0.34))',
              pointerEvents: 'none',
            }}
          />
        </div>
      </div>

      {/* Ensure full height and no scroll on the page */}
      <style jsx global>{`
        html,
        body,
        #__next {
          margin: 0;
          padding: 0;
          height: 100%;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
}