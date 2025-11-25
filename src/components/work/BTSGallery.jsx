// app/bts/page.jsx   (or any component file)
import Image from 'next/image';

export default function BTSGallery() {
  // Add your videos with posters - each item has poster and video path
  const videos = [
    { poster: "/images/work/BTS1.png", video: "/videos/video.mp4" },
    { poster: "/images/work/BTS2.png", video: "/videos/video.mp4" },
    { poster: "/images/work/BTS3.png", video: "/videos/video.mp4" },
    { poster: "/images/work/BTS4.png", video: "/videos/video.mp4" },
    { poster: "/images/work/BTS5.png", video: "/videos/video.mp4" },
    { poster: "/images/work/BTS6.png", video: "/videos/video.mp4" },
    { poster: "/images/work/BTS7.png", video: "/videos/video.mp4" },
    { poster: "/images/work/BTS8.png", video: "/videos/video.mp4" },
    { poster: "/images/work/BTS9.png", video: "/videos/video.mp4" },
    { poster: "/images/work/BTS10.png", video: "/videos/video.mp4" },
    { poster: "/images/work/BTS11.png", video: "/videos/video.mp4" },
    { poster: "/images/work/BTS12.png", video: "/videos/video.mp4" },
    { poster: "/images/work/BTS13.png", video: "/videos/video.mp4" },
    { poster: "/images/work/BTS14.png", video: "/videos/video.mp4" },
    { poster: "/images/work/BTS15.png", video: "/videos/video.mp4" },
    { poster: "/images/work/BTS16.png", video: "/videos/video.mp4" },
  ];

  return (
    <div style={{ minHeight: '100vh', padding: '40px 20px', fontFamily: 'Arial, sans-serif' }}>
      {/* Title */}
      <div style={{ textAlign: 'left', marginBottom: '-20px' }}>
        <h1 style={{ marginLeft:'60px',fontSize: '128px', fontWeight: '800', color: '#fff', margin: 0, letterSpacing: '-3px' }}>
          BTS
        </h1>
      </div>
      <div style={{ textAlign: 'right', marginBottom: '20px' }}>
        <p style={{ marginRight:'40px',fontSize: '22px', fontWeight: 'extrabold', color: '#fff', margin: 0, letterSpacing: '-1px' }}>
          (Behind the Scenes)
        </p>
      </div>

      {/* Image Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(8, 1fr)',
        gridTemplateRows: 'auto auto auto',
        gap: '12px',
        maxWidth: '1400px',
        margin: '0 auto',
      }}>
        {/* Row 1 */}
        <div ><Vid poster={videos[0].poster} video={videos[0].video}/></div>
        <div><Vid poster={videos[1].poster} video={videos[1].video} /></div>
        <div><Vid poster={videos[2].poster} video={videos[2].video} /></div>
        <div><Vid poster={videos[3].poster} video={videos[3].video} /></div>
        <div><Vid poster={videos[4].poster} video={videos[4].video} /></div>
        <div><Vid poster={videos[5].poster} video={videos[5].video} /></div>
        <div><Vid poster={videos[6].poster} video={videos[6].video} /></div>
        <div><Vid poster={videos[7].poster} video={videos[7].video} /></div>

        {/* Row 2 */}
        
        <div><Vid poster={videos[8].poster} video={videos[8].video} /></div>
        <div><Vid poster={videos[9].poster} video={videos[9].video} /></div>
        <div><Vid poster={videos[10].poster} video={videos[10].video} /></div>
        <div><Vid poster={videos[11].poster} video={videos[11].video} /></div>
           <div><Vid poster={videos[12].poster} video={videos[12].video} /></div>
        <div><Vid poster={videos[13].poster} video={videos[13].video} /></div>
        <div><Vid poster={videos[14].poster} video={videos[14].video} /></div>
        <div><Vid poster={videos[15].poster} video={videos[15].video} /></div>
 </div>

      {/* Global styles (optional - ensures body is black and full height) */}
      <style jsx global>{`
        body {
          background: #000;
          margin: 0;
          padding: 0;
        }
      `}</style>
    </div>
  );
}

// Reusable video component with poster
function Vid({ poster, video }) {
  return (
    <div style={{
      position: 'relative',
      width: '100%',
      height: '290px', // fixed height for precise control
      overflow: 'hidden',
      boxShadow: '0 4px 15px rgba(0,0,0,0.6)',
    }}>
      <video
        poster={poster}
        muted
        loop
        playsInline
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          cursor:'pointer'
        }}
        onClick={() => window.open(video, '_blank')}
      >
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}