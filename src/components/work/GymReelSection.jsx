// app/reels-section/page.js   (or any .js file / component)
import Image from 'next/image';

export default function GymReelsSection() {
  return (
    <div style={{ backgroundColor: '#000', color: '#fff', minHeight: '100vh', padding: '40px 0' ,marginTop:'-800px'}}>
      {/* Top Navigation */}
      <div style={{ textAlign: 'center', marginBottom: '30px', padding: '0 20px' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '40px', fontSize: '20px', fontWeight: '500' }}>
          <span>Gym</span>
          <span style={{ color: '#fff', position: 'relative' }}>
            Gym
            <div style={{
              position: 'absolute',
              bottom: '-8px',
              left: '0',
              width: '100%',
              height: '2px',
              backgroundColor: '#fd6001'
            }}></div>
          </span>
          <span>Gym</span>
          <span>Gym</span>
        </div>
        <div style={{
          height: '1.5px',
          backgroundColor: '#FFFFFF',
          marginTop: '38px',
          marginBottom:'58px',
          width:'90vw',
          marginLeft:'35px'
        }}></div>
      </div>

      {/* Reels Gallery */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '20px',
        flexWrap: 'nowrap',
        padding: '0 40px',
        overflowX: 'hidden',
        overflowY:'hidden',
        scrollbarWidth: 'none'
      }}>
        {/* Reel 1 */}
        <div style={{ position: 'relative', flexShrink: 0 }}>
          <video
            poster="/images/work/reel1.png"
            muted
            loop
            playsInline
            onClick={() => window.open('/videos/video.mp4', '_blank')}
            style={{
              width: '220px',
              height: '400px',
              objectFit: 'cover',
              borderRadius: '16px',
              boxShadow: '0 10px 30px rgba(0,0,0,0.6)',
              cursor: 'pointer'
            }}
          >
            <source src="/videos/video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        
        </div>

        {/* Reel 2 */}
        <div style={{ position: 'relative', flexShrink: 0 }}>
          <video
            poster="/images/work/reel2.png"
            muted
            loop
            playsInline
            onClick={() => window.open('/videos/video.mp4', '_blank')}
            style={{
              width: '220px',
              height: '400px',
              objectFit: 'cover',
              borderRadius: '16px',
              boxShadow: '0 10px 30px rgba(0,0,0,0.6)',
              cursor: 'pointer'
            }}
          >
            <source src="/videos/video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
         
        </div>

        {/* Reel 3 - Center (bigger) */}
       <div style={{ position: 'relative', flexShrink: 0 }}>
          <video
            poster="/images/work/reel3.png"
            muted
            loop
            playsInline
            onClick={() => window.open('/videos/video.mp4', '_blank')}
            style={{
              width: '240px',
              height: '480px',
              objectFit: 'cover',
              borderRadius: '16px',
              boxShadow: '0 10px 30px rgba(0,0,0,0.6)',
              cursor: 'pointer'
            }}
          >
            <source src="/videos/video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
         
        </div>

        {/* Reel 4 */}
        <div style={{ position: 'relative', flexShrink: 0 }}>
          <video
            poster="/images/work/reel4.png"
            muted
            loop
            playsInline
            onClick={() => window.open('/videos/video.mp4', '_blank')}
            style={{
              width: '220px',
              height: '400px',
              objectFit: 'cover',
              borderRadius: '16px',
              boxShadow: '0 10px 30px rgba(0,0,0,0.6)',
              cursor: 'pointer'
            }}
          >
            <source src="/videos/video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Reel 5 */}
        <div style={{ position: 'relative', flexShrink: 0 }}>
          <video
            poster="/images/work/reel5.png"
            muted
            loop
            playsInline
            onClick={() => window.open('/videos/video.mp4', '_blank')}
            style={{
              width: '220px',
              height: '400px',
              objectFit: 'cover',
              borderRadius: '16px',
              boxShadow: '0 10px 30px rgba(0,0,0,0.6)',
              cursor: 'pointer'
            }}
          >
            <source src="/videos/video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      {/* Hide scrollbar (works in Chrome/Edge/Safari) */}
      <style jsx>{`
        div::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}