import React, { useEffect, useRef } from "react";

const images = [
  { id: 0, src: "./stars/pic (1).webp", alt: "Star Pic" },
  { id: 1, src: "./stars/pic (1).jpg", alt: "Star Pic 1" },
  { id: 2, src: "./stars/pic (2).jpg", alt: "Star Pic 2" },
  { id: 3, src: "./stars/pic (3).jpg", alt: "Star Pic 3" },
  { id: 4, src: "./stars/pic (4).jpg", alt: "Star Pic 4" },
  { id: 5, src: "./stars/pic (5).jpg", alt: "Star Pic 5" },
  { id: 6, src: "./stars/pic (6).jpg", alt: "Star Pic 6" },
  { id: 7, src: "./stars/pic (7).jpg", alt: "Star Pic 7" },
  { id: 8, src: "./stars/pic (8).jpg", alt: "Star Pic 8" },
  { id: 9, src: "./stars/pic (9).jpg", alt: "Star Pic 9" },
  { id: 10, src: "./stars/pic (10).jpg", alt: "Star Pic 10" },
  { id: 11, src: "./stars/pic (1).webp", alt: "Star Pic 11" },
  { id: 12, src: "./stars/pic (12).jpg", alt: "Star Pic 12" },
  { id: 13, src: "./stars/pic (13).jpg", alt: "Star Pic 13" },
  { id: 14, src: "./stars/pic (14).jpg", alt: "Star Pic 14" },
  { id: 15, src: "./stars/pic (15).jpg", alt: "Star Pic 15" },
  { id: 16, src: "./stars/pic (16).jpg", alt: "Star Pic 16" },
  { id: 17, src: "./stars/pic (17).jpg", alt: "Star Pic 17" },
  { id: 18, src: "./stars/pic (18).jpg", alt: "Star Pic 18" },
  { id: 19, src: "./stars/pic (19).jpg", alt: "Star Pic 19" },
  { id: 20, src: "./stars/pic (20).jpg", alt: "Star Pic 20" },

  { id: 21, src: "./stars/pic (21).jpg", alt: "Star Pic 21" },
  { id: 22, src: "./stars/pic (22).jpg", alt: "Star Pic 22" },
  { id: 23, src: "./stars/pic (23).jpg", alt: "Star Pic 23" },
  { id: 24, src: "./stars/pic (24).jpg", alt: "Star Pic 24" },
  { id: 25, src: "./stars/pic (25).jpg", alt: "Star Pic 25" },
  { id: 26, src: "./stars/pic (26).jpg", alt: "Star Pic 26" },
  { id: 27, src: "./stars/pic (27).jpg", alt: "Star Pic 27" },
  { id: 28, src: "./stars/pic (28).jpg", alt: "Star Pic 28" },
  { id: 29, src: "./stars/pic (29).jpg", alt: "Star Pic 29" },
  { id: 30, src: "./stars/pic (30).jpg", alt: "Star Pic 30" },
  { id: 31, src: "./stars/pic (31).jpg", alt: "Star Pic 31" },
  { id: 32, src: "./stars/pic (32).jpg", alt: "Star Pic 32" },
  { id: 33, src: "./stars/pic (33).jpg", alt: "Star Pic 33" },
  { id: 34, src: "./stars/pic (34).jpg", alt: "Star Pic 34" },
  { id: 35, src: "./stars/pic (35).jpg", alt: "Star Pic 35" },
  { id: 36, src: "./stars/pic (36).jpg", alt: "Star Pic 36" },
  { id: 37, src: "./stars/pic (37).jpg", alt: "Star Pic 37" },
  { id: 38, src: "./stars/pic (38).jpg", alt: "Star Pic 38" },
  { id: 39, src: "./stars/pic (39).jpg", alt: "Star Pic 39" },
  { id: 40, src: "./stars/pic (40).jpg", alt: "Star Pic 40" },
  { id: 41, src: "./stars/pic (41).jpg", alt: "Star Pic 41" },
  { id: 42, src: "./stars/pic (42).jpg", alt: "Star Pic 42" },
  { id: 43, src: "./stars/pic (43).jpg", alt: "Star Pic 43" },
  { id: 44, src: "./stars/pic (44).jpg", alt: "Star Pic 44" },
  { id: 45, src: "./stars/pic (45).jpg", alt: "Star Pic 45" },
  { id: 46, src: "./stars/pic (46).jpg", alt: "Star Pic 46" },
  { id: 47, src: "./stars/pic (47).jpg", alt: "Star Pic 47" },
  { id: 48, src: "./stars/pic (48).jpg", alt: "Star Pic 48" },
  { id: 49, src: "./stars/pic (49).jpg", alt: "Star Pic 49" },
];

export default function StarCarousel() {
  const carouselRef = useRef(null);

  useEffect(() => {
    const carousel = carouselRef.current;

    const interval = setInterval(() => {
      if (!carousel) return;

      const maxScroll =
        carousel.scrollWidth - carousel.clientWidth;

      if (carousel.scrollLeft >= maxScroll - 5) {
        carousel.scrollTo({
          left: 0,
          behavior: "smooth",
        });
      } else {
        carousel.scrollBy({
          left: 320,
          behavior: "smooth",
        });
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const scroll = (direction) => {
    carouselRef.current.scrollBy({
      left: direction === "left" ? -320 : 320,
      behavior: "smooth",
    });
  };

  return (
    <>
      <style>{`
        *{
          box-sizing:border-box;
        }

        .carousel-wrapper{
          position:relative;
          width:100%;
          padding:30px 0;
        }

        .carousel{
          display:flex;
          gap:20px;
          overflow-x:auto;
          scroll-behavior:smooth;
          scroll-snap-type:x mandatory;
          padding:10px 60px;

          scrollbar-width:none;
          -ms-overflow-style:none;
        }

        .carousel::-webkit-scrollbar{
          display:none;
        }

        .card{
          flex:0 0 280px;
          scroll-snap-align:center;
          border-radius:18px;
          overflow:hidden;
          background:#111;
          box-shadow:0 8px 20px rgba(0,0,0,.2);
        }

        .card img{
          width:100%;
          height:400px;
          object-fit:cover;
          display:block;
          user-select:none;
          -webkit-user-drag:none;
          pointer-events:none;
        }

        .nav-btn{
          position:absolute;
          top:50%;
          transform:translateY(-50%);
          width:48px;
          height:48px;
          border:none;
          border-radius:50%;
          background:rgba(0,0,0,.75);
          color:white;
          font-size:22px;
          cursor:pointer;
          transition:.3s;
          z-index:10;
        }

        .nav-btn:hover{
          background:#000;
          transform:translateY(-50%) scale(1.08);
        }

        .left{
          left:10px;
        }

        .right{
          right:10px;
        }

        @media(max-width:768px){

          .nav-btn{
            display:none;
          }

          .carousel{
            padding:10px 15px;
            gap:15px;
          }

          .card{
            flex:0 0 80%;
          }

          .card img{
            height:320px;
          }
        }
      `}</style>

      <div className="carousel-wrapper">
        <button
          className="nav-btn left"
          onClick={() => scroll("left")}
        >
          ❮
        </button>

        <div className="carousel" ref={carouselRef}>
          {images.map((image) => (
            <div className="card" key={image.id}>
              <img src={image.src} alt={image.alt} />
            </div>
          ))}
        </div>

        <button
          className="nav-btn right"
          onClick={() => scroll("right")}
        >
          ❯
        </button>
      </div>
    </>
  );
}