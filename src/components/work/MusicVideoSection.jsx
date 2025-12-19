

// "use client";

// const titleText = "MUSIC VIDEOS";

// export default function MusicVideoSection() {
//   return (
//     <div
//       style={{
//         position: "relative",
//         height: "120vh", // Full viewport height
//         width: "100vw",
//         overflow: "hidden",
//       }}
//     >
//       {/* Full Background Image */}
//       <div
//         style={{
//           position: "absolute",
//           top: 0,
//           left: 0,
//           right: 0,
//           bottom: 0,

//           backgroundImage: "url(/images/work/background.png)",
//           backgroundSize: "100% auto", // Full width, auto height → touches left & right edges
//           backgroundPosition: "center", // Centers it vertically and horizontally
//           backgroundRepeat: "no-repeat",
//         }}
//       />

//       {/* Dark Gradient Overlay */}
//       <div
//         style={{
//           position: "absolute",
//           inset: 0,
//           background:
//             "linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.8))",
//           zIndex: 1,
//         }}
//       />

//       {/* Text Content - Centered vertically, same layout as before */}
//       <div
//         style={{
//           position: "relative",
//           zIndex: 2,
//           height: "100%",
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//         }}
//       >
//         <div
//           style={{
//             textAlign: "center",
//             color: "white",
//             width: "100%",
//             maxWidth: "1600px",
//             padding: "0 2rem",
//           }}
//         >
//           {/* "We Create" */}
//           <p
//             style={{
//               fontSize: "clamp(1.2rem, 4vw, 4.5rem)",
//               fontWeight: 700,
//               margin: 0,
//               textAlign: "left",
//               letterSpacing: "-0.02em",
//               marginBottom: "-3rem",
//               marginLeft: "9rem",
//               marginTop: "5rem",
//             }}
//           >
//             We Create
//           </p>

//           {/* Main Title "MUSIC VIDEOS" */}
//           <h1
//             style={{
//               fontSize: "clamp(6.5rem, 12vw, 11rem)",
//               fontWeight: 900,
//               margin: "0.6rem 0 -0.4rem 0",
//               lineHeight: "1",
//               letterSpacing: "-0.04em",
//               textShadow: "0 10px 60px rgba(0,0,0,0.9)",
//               fontStyle: "italic",
//               marginBottom: "-2rem",
//             }}
//           >
//             {titleText.split("").map((letter, i) => (
//               <span key={i} style={{ display: "inline-block" }}>
//                 {letter === " " ? "\u00A0" : letter}
//               </span>
//             ))}
//           </h1>

//           {/* "in sync with every beat" */}
//           <p
//             style={{
//               fontSize: "clamp(0.4rem, 2vw, 4rem)",
//               fontWeight: 600,
//               margin: "0.4rem 0 0 0",
//               textAlign: "right",
//               letterSpacing: "-0.02em",
//               marginRight: "7rem",
//             }}
//           >
//             in sync with every beat
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }
"use client";

const titleText = "MUSIC VIDEOS";

export default function MusicVideoSection() {
  return (
    <div
      style={{
        position: "relative",
        height: "120vh",
        width: "100vw",
        overflow: "hidden",
      }}
    >
      {/* Full Background Image */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "url(/images/work/background.png)",
          backgroundSize: "cover",           // Best for responsive: fills container, crops smartly
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Dark Gradient Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.8))",
          zIndex: 1,
        }}
      />

      {/* Text Content */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "0 1.5rem",
        }}
      >
        <div
          style={{
            textAlign: "center",
            color: "white",
            width: "100%",
            maxWidth: "1600px",
          }}
        >
          {/* "We Create" - Left-aligned only on large screens */}
          <p
            style={{
              fontSize: "clamp(1.2rem, 3.5vw, 5rem)",
              fontWeight: 700,
              margin: 0,
              letterSpacing: "-0.02em",
              textAlign: window.innerWidth<768  ? "left" : "left",
            marginBottom: window.innerWidth<768  ? "0.3rem" : "0.8rem",
              paddingLeft: window.innerWidth<768  ? "1rem" : "10rem",
              transition: "all 0.3s ease",
            }}
          >
            We Create
          </p>

          {/* Main Title "MUSIC VIDEOS" */}
          <h1
            style={{
              fontSize: window.innerWidth<768 ?"clamp(3.1rem, 7vw, 12rem)":"clamp(5.5rem, 12vw, 12rem)", // Much better range for mobile
              fontWeight: 900,
              margin: "0.4rem 0",
              lineHeight: "0.39",
              letterSpacing: "-0.05em",
              textShadow: "0 10px 60px rgba(0,0,0,0.9)",
              fontStyle: "italic",
              textAlign: "center",
            }}
          >
            {titleText.split("").map((letter, i) => (
              <span
                key={i}
                style={{
                  display: "inline-block",
                  transform: window.innerWidth < 768 ? "translateY(0)" : undefined,
                }}
              >
                {letter === " " ? "\u00A0" : letter}
              </span>
            ))}
          </h1>

          {/* "in sync with every beat" - Right-aligned only on large screens */}
          <p
            style={{
               fontSize: "clamp(0.4rem, 3vw, 4rem)",
              fontWeight: 600,
              margin: "1rem 0 0 0",
              letterSpacing: "-0.02em",
              textAlign: window.innerWidth <768 ? "right" : "right",
              paddingRight: window.innerWidth<768 ? "1rem" : "8rem",
              transition: "all 0.3s ease",
            }}
          >
            in sync with every beat
          </p>
        </div>
      </div>
    </div>
  );
}