import React from "react";

const MissionSection = () => {
  const videoSrc = `${import.meta.env.BASE_URL}assets/videos/background.mp4`;

  return (
    <>
      <style>{`
        *{
          box-sizing:border-box;
        }

        .mission-section{
          width:100%;
          padding:90px 8%;
          background:linear-gradient(135deg,#0f172a,#111827,#1e293b);
          color:white;
          overflow:hidden;
        }

        .mission-container{
          max-width:1300px;
          margin:auto;
          display:grid;
          grid-template-columns:1.1fr 1fr;
          gap:60px;
          align-items:center;
        }

        .mission-tag{
          display:inline-block;
          padding:8px 18px;
          border-radius:30px;
          background:rgba(59,130,246,.15);
          color:#60a5fa;
          font-weight:600;
          letter-spacing:1px;
          margin-bottom:20px;
        }

        .mission-title{
          font-size:3rem;
          line-height:1.2;
          margin-bottom:20px;
          font-weight:700;
        }

        .mission-title span{
          color:#38bdf8;
        }

        .mission-text{
          color:#cbd5e1;
          line-height:1.9;
          font-size:1.05rem;
          margin-bottom:35px;
        }

        .mission-grid{
          display:grid;
          gap:20px;
        }

        .mission-card{
          display:flex;
          gap:18px;
          padding:22px;
          border-radius:18px;
          background:rgba(255,255,255,.05);
          backdrop-filter:blur(10px);
          transition:.35s;
          border:1px solid rgba(255,255,255,.08);
        }

        .mission-card:hover{
          transform:translateY(-6px);
          background:rgba(59,130,246,.12);
          border-color:#3b82f6;
        }

        .icon{
          min-width:60px;
          height:60px;
          border-radius:15px;
          display:flex;
          justify-content:center;
          align-items:center;
          font-size:28px;
          background:#3b82f6;
        }

        .mission-card h3{
          margin:0 0 8px;
          font-size:1.15rem;
        }

        .mission-card p{
          margin:0;
          color:#cbd5e1;
          line-height:1.7;
        }

        .video-box{
          position:relative;
        
            .video-container{
                width:60%;
                aspect-ratio: 4 / 5;   /* 60 : 100 */
                margin:auto;
                overflow:hidden;
                border-radius:25px;
                box-shadow:0 25px 60px rgba(0,0,0,.35);
                border:2px solid rgba(255,255,255,.08);
                }
        }
            .video-container video{
                width:100%;
                height:100%;
                object-fit:cover;
                display:block;
            }

        .video-description{
          margin-top:25px;
          padding:22px;
          border-radius:18px;
          background:rgba(255,255,255,.05);
          border:1px solid rgba(255,255,255,.08);
        }

        .video-description h3{
          color:#38bdf8;
          margin-bottom:15px;
          font-size:1.4rem;
        }

        .video-description p{
          color:#d1d5db;
          line-height:1.8;
        }

        @media(max-width:992px){

          .mission-container{
            grid-template-columns:1fr;
            gap:45px;
          }

          .mission-title{
            font-size:2.5rem;
          }
        }

        @media(max-width:768px){

          .mission-section{
            padding:70px 25px;
          }

          .mission-title{
            font-size:2rem;
          }

          .mission-card{
            flex-direction:column;
            align-items:center;
            text-align:center;
          }

          .video-description{
            text-align:center;
          }
        }

        @media(max-width:480px){

          .mission-title{
            font-size:1.7rem;
          }

          .mission-text{
            font-size:.95rem;
          }

          .mission-card{
            padding:18px;
          }

          .icon{
            width:55px;
            height:55px;
            font-size:24px;
          }
        }
      `}</style>

      <section className="mission-section">
        <div className="mission-container">

          <div>

            <div className="mission-tag">
              OUR MISSION
            </div>

            <h2 className="mission-title">
              Why We Created <span>Our Team</span>
            </h2>

            <p className="mission-text">
              Our team was founded with a shared passion for innovation,
              collaboration, and continuous learning. We believe that combining
              different talents and ideas leads to stronger solutions and
              greater achievements. Every project is an opportunity to grow,
              inspire others, and create meaningful impact through teamwork.
            </p>

            <div className="mission-grid">

              <div className="mission-card">
                <div className="icon">🚀</div>
                <div>
                  <h3>Innovation</h3>
                  <p>
                    We transform creative ideas into real-world solutions using
                    modern technologies and collaborative thinking.
                  </p>
                </div>
              </div>

              <div className="mission-card">
                <div className="icon">🤝</div>
                <div>
                  <h3>Collaboration</h3>
                  <p>
                    Every member contributes unique skills, creating an
                    environment where everyone learns, grows, and succeeds
                    together.
                  </p>
                </div>
              </div>

              <div className="mission-card">
                <div className="icon">📈</div>
                <div>
                  <h3>Continuous Growth</h3>
                  <p>
                    We constantly improve our technical knowledge, leadership,
                    communication, and problem-solving abilities.
                  </p>
                </div>
              </div>

            </div>

          </div>

          <div className="video-box">

            <div className="video-container">
              <video
                src={videoSrc}
                autoPlay
                muted
                loop
                playsInline
                controls
              />
            </div>

            <div className="video-description">
              <h3>How Our Team Works</h3>

              <p>
                This video highlights our workflow—from brainstorming and
                planning to collaboration, development, testing, and delivering
                successful projects. It reflects our commitment to teamwork,
                communication, and innovation in everything we build.
              </p>
            </div>

          </div>

        </div>
      </section>
    </>
  );
};

export default MissionSection;