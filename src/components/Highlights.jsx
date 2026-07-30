import { useRef } from "react";
import AnimateOnScroll from "./AnimateOnScroll";


const VIDEOS = [
  {
    src: `${import.meta.env.BASE_URL}assets/videos/vid.mp4`,
    title: "Fan Experience.",
    description: "We don't just play football we have fun too...",
  },
  {
    src: `${import.meta.env.BASE_URL}assets/videos/vid3.mp4`,
    title: "Beyond Training, Building Tomorrow's Legends",
    description:
      "We are back in session. Training from U7 to U17 every Saturday and Sunday from 2PM at Wendani Astro Turf. SFA home of future champions",
  },
  {
    src: `${import.meta.env.BASE_URL}assets/videos/vid2.mp4`,
    title: "Creating Lasting Memories",
    description:
      "4 categories, 4 trophies. Stars game ni Moto... highlights of the concluded Rising Stars Football Tournament",
  },
];

export default function Highlights() {
  const videoRefs = useRef([]);

  const handleClick = (index) => {
    const video = videoRefs.current[index];

    if (!video) return;

    // Unmute the clicked video
    video.muted = false;

    // Play if paused
    if (video.paused) {
      video.play();
    }
  };

  return (
    <>
      <style>{`
        .highlights-section{
          padding:5rem 1rem;
          color:#fff;
        }

        .container{
          width:min(1200px,90%);
          margin:auto;
        }

        .section-title{
          text-align:center;
          margin-bottom:2rem;
          font-size:2.3rem;
        }

        .highlights-grid{
          display:grid;
          gap:1.5rem;
        }

        .highlight-card{
          background:#161b22;
          border-radius:18px;
          overflow:hidden;
          box-shadow:0 10px 25px rgba(0,0,0,.35);
        }

        .video-container{
          width:100%;
          aspect-ratio:16/9;
          overflow:hidden;
          background:#000;
          cursor:pointer;
        }

        .video-container video{
          width:100%;
          height:100%;
          object-fit:cover;
          display:block;
        }

        .highlight-info{
          padding:1rem 1.2rem;
        }

        .highlight-info h3{
          margin-bottom:.5rem;
        }

        .highlight-info p{
          color:#bdbdbd;
          line-height:1.6;
        }

        @media (min-width:992px){
          .highlights-grid{
            grid-template-columns:repeat(2,1fr);
          }

          .card-3{
            grid-column:1 / -1;
          }
        }

        @media (max-width:991px){
          .highlights-grid{
            grid-template-columns:1fr;
          }
        }
      `}</style>

      <section id="highlights" className="highlights-section">
        <div className="container">
          <AnimateOnScroll as="h2" className="section-title">
            Academy Highlights
          </AnimateOnScroll>

          <div className="highlights-grid">
            {VIDEOS.map((video, index) => (
              <AnimateOnScroll
                key={video.title}
                as="div"
                className={`highlight-card card-${index + 1}`}
              >
                <div
                  className="video-container"
                  onClick={() => handleClick(index)}
                >
                  <video
                    ref={(el) => (videoRefs.current[index] = el)}
                    autoPlay
                    muted
                    loop
                    playsInline
                  >
                    <source src={video.src} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>

                <div className="highlight-info">
                  <h3>{video.title}</h3>
                  <p>{video.description}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}