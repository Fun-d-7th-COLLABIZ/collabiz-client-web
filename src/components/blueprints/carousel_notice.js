import { useRef, useState } from 'react';
import Slider from 'react-slick';

function CarouselNotice(props) {
  const sliderRef = useRef(null);
  // TODO: change idx
  const [idx, setIdx] = useState(0);

  function makeSlides() {
    var notices = props.notices;
    var slides = notices.map((n, i) =>
      <div key={i}
        className={"ps-4 py-3 flex-column " + (i === 1 ? "bg-primary" : "")}
        
      >
        <div className={"fw-700 fnt-size-8 " + (i === 1 ? "color-secondary" : "color-717171")}>
          {n.title}
        </div>
        <div className={"mt-1 fnt-size-7 " + (i === 1 ? "fw-500" : "")}
          style={i === 1 ? {color: "white"} : {color: "#ababab"}}
        >
          {n.content}
        </div>
      </div>
    );
    return slides;
  }

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    // autoplay: true,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 3,
    vertical: true,
    verticalSwiping: true,
    initialSlide: 0,
    appendDots: dots => (
      <div
        className="position-absolute"
        style={{
          bottom: "-100px",
          borderRadius: "10px",
          padding: "10px"
        }}
      >
        <ul style={{ margin: "0px" }}>{dots}</ul>
      </div>
    ),
    customPaging: i => (
      <div
        className="position-absolute size-20 fw-700 fnt-size-6"
        style={idx !== i
          ? {
            position: "absolute",
            left: "-190px",
            width: "18px",
            color: "#CECBCE",
            border: "1px solid #F0EFF0"
          }
          : {
            position: "absolute",
            left: "-190px",
            width: "18px",
            color: "white",
            backgroundColor: "#8A479C",
            border: "1px solid #8A479C"
          }
        }
      >
        {i + 1}
      </div>
    ),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          dots: false,
          infinite: true,
          speed: 500,
          slidesToShow: 2,
          slidesToScroll: 2,
          swipeToSlide: false,
        }
      },
    ],
  };

  return (
    <div className="mg-t-20 position-relative">
      <Slider ref={sliderRef} {...settings} className="position-relative">
        {makeSlides()}
      </Slider>
    </div>
  );
}

export default CarouselNotice;