import React, { useEffect, useRef } from "react";

const images = [
  { id: 0, src: "./stars/pic.jpg", alt: "Star Pic" },
  { id: 1, src: "./stars/pic1.jpg", alt: "Star Pic 1" },
  { id: 2, src: "./stars/pic2.jpg", alt: "Star Pic 2" },
  { id: 3, src: "./stars/pic3.jpg", alt: "Star Pic 3" },
  { id: 4, src: "./stars/pic4.jpg", alt: "Star Pic 4" },
  { id: 5, src: "./stars/pic5.jpg", alt: "Star Pic 5" },
  { id: 6, src: "./stars/pic6.jpg", alt: "Star Pic 6" },
  { id: 7, src: "./stars/pic7.jpg", alt: "Star Pic 7" },
  { id: 8, src: "./stars/pic8.jpg", alt: "Star Pic 8" },
  { id: 9, src: "./stars/pic9.jpg", alt: "Star Pic 9" },
  { id: 10, src: "./stars/pic10.jpg", alt: "Star Pic 10" },
  { id: 11, src: "./stars/pic11.webp", alt: "Star Pic 11" }
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