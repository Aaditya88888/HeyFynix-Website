'use client';

import React from 'react';
import Image from 'next/image';

export default function GovernmentVideoGallery() {
  const videos = [
    { id: 1, title: "Beti Bachao Beti Padhao",          poster: "/videos/video1.png", url: "/videos/video.mp4" },
    { id: 2, title: "Swachh Bharat Mission",            poster: "/videos/video2.png", url: "/videos/video.mp4" },
    { id: 3, title: "Women Empowerment Speech",         poster: "/videos/video3.png", url: "/videos/video.mp4" },
    { id: 4, title: "Digital India Campaign 2024",         poster: "/videos/video4.png", url: "/videos/video.mp4" },
    { id: 5, title: "181 Women Helpline Impact",        poster: "/videos/video5.png", url: "/videos/video.mp4" },
    { id: 6, title: "Rural Health Camp",                poster: "/videos/video6.png", url: "/videos/video.mp4" },
    { id: 7, title: "School Enrollment Drive",          poster: "/videos/video7.png", url: "/videos/video.mp4" },
  ];

  return (
    <section style={{ padding: '100px 20px', minHeight: '100vh' ,marginTop:'-100px'}}>
      <div style={{ maxWidth: '1600px', margin: '0 auto', position: 'relative' }}>

        {/* Heading */}
        {/* <h2 style={{
          fontSize: '5.5rem',
          fontWeight: 900,
          color: 'white',
          textAlign: 'center',
          marginBottom: '100px',
          letterSpacing: '-4px',
          textShadow: '0 10px 40px rgba(0,0,0,0.6)'
        }}>
          Government & NGO Videos
        </h2> */}

        <div style={{ position: 'relative', minHeight: '1800px' }}>

          {/* Video 1 - Left Big */}
          <div style={{
            position: 'absolute',
            left: '2%',
            top: '10%',
            overflow: 'hidden',
            
          }}
           >
            <Image src={videos[0].poster} width={600} height={1000} alt="" style={{ width: '100%', height: '100%' }} />
            <a href={videos[0].url} target="_blank" rel="noopener noreferrer"
               style={{ position: 'absolute', inset: 0, zIndex: 10 }} />
           
          </div>

          {/* Video 2 - Top Center */}
          <div style={{
            position: 'absolute',
            left: '47%',
            top: '10%',
            width: '396px',
            marginLeft: '-150px',
           
            overflow: 'hidden',
           
          }}
           >
            <Image src={videos[1].poster} width={600} height={600} alt="" style={{ width: '100%', height: '100%' }} />
            <a href={videos[1].url} target="_blank" rel="noopener noreferrer"
               style={{ position: 'absolute', inset: 0, zIndex: 10 }} />
           
          </div>

          {/* Video 3 - Right Top */}
          <div style={{
            position: 'absolute',
            right: '3%',
            top: '10%',
            width: '380px',
          
            overflow: 'hidden',
          
          }}
          >
            <Image src={videos[2].poster} width={600} height={500} alt="" style={{ width: '100%', height: '100%' }} />
            <a href={videos[2].url} target="_blank" rel="noopener noreferrer"
               style={{ position: 'absolute', inset: 0, zIndex: 10 }} />
         
          </div>

          {/* Video 4 - Bottom Left */}
          <div style={{
            position: 'absolute',
            left: '35%',
            top: '24%',
            width:'190px',
            height:'490px',
            overflow: 'hidden',
        
          }}
          >
            <Image src={videos[3].poster} width={200} height={700} alt="" style={{ width: '100%', height: '100%' }} />
            <a href={videos[3].url} target="_blank" rel="noopener noreferrer"
               style={{ position: 'absolute', inset: 0, zIndex: 10 }} />
            
          </div>

          {/* Video 5 - Bottom Center Left */}
          <div style={{
            position: 'absolute',
            left: '51%',
            top: '24%',
              width:'190px',
            height:'490px',
            overflow: 'hidden',
          
          }}
          >
            <Image src={videos[4].poster} width={200} height={700} alt="" style={{ width: '100%', height: '100%' }} />
            <a href={videos[4].url} target="_blank" rel="noopener noreferrer"
               style={{ position: 'absolute', inset: 0, zIndex: 10 }} />
          
          </div>

          {/* Video 6 - Bottom Center Right */}
          <div style={{
            position: 'absolute',
           left: '67%',
            top: '24%',
              width:'190px',
            height:'490px',
           
            overflow: 'hidden',
           
          }}
          >
            <Image src={videos[5].poster} width={200} height={700} alt="" style={{ width: '100%', height: '100%' }} />
            <a href={videos[5].url} target="_blank" rel="noopener noreferrer"
               style={{ position: 'absolute', inset: 0, zIndex: 10 }} />
           
          </div>

          {/* Video 7 - Far Right Bottom */}
          <div style={{
            position: 'absolute',
            right: '2%',
           top:'24%',
              width:'190px',
            height:'490px',
            overflow: 'hidden',
            
          }}
           >
            <Image src={videos[6].poster} width={200} height={700} alt="" style={{ width: '100%', height: '100%' }} />
            <a href={videos[6].url} target="_blank" rel="noopener noreferrer"
               style={{ position: 'absolute', inset: 0, zIndex: 10 }} />
           
          </div>

        </div>
      </div>
    </section>
  );
}