import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight as fasChevronRight, faChevronLeft as fasChevronLeft } from '@fortawesome/free-solid-svg-icons';
import Slider from 'react-slick';
import { CardCompletedCollabo } from '../blueprints';

function CarouselCompletedCollabo(props) {
  const [sliderRef, setSliderRef] = useState(null);

  function makeSlides() {
    var collabos = props.completedCollabos;
    var slides = collabos.map((c, i) =>
      <div className="px-2" key={i}>
        <CardCompletedCollabo completedCollabos={c}/>
      </div>
    );
    return slides;
  }


  function PrevArrow(props) {
    const { /* className, style, */ onClick } = props;
    return (
      <div className="d-none-block position-absolute"
        style={{top: `calc(${50}% - ${30}px - ${1.5}em)`, left: `calc(${-1.5}em + ${16}px)`, width: `${3}em`, height: `${3}em`, zIndex: 999, opacity: 1.0}}
      >
        <button type="button" className="btn shadow w-100 h-100 p-0 d-flex-center rounded-circle text-hover-primary" onClick={onClick}>
          <FontAwesomeIcon icon={fasChevronLeft}/>
        </button>
      </div>
    );
  }
   
  function NextArrow(props) {
    const { /* className, style, */ onClick } = props;
    return (
      <div className="d-none-block position-absolute"
        style={{top: `calc(${50}% - ${30}px - ${1.5}em)`, right: `calc(${-1.5}em + ${16}px)`, width: `${3}em`, height: `${3}em`, zIndex: 999}}
      >
        <button type="button" className="btn shadow w-100 h-100 p-0 d-flex-center rounded-circle text-hover-primary" onClick={onClick}>
          <FontAwesomeIcon icon={fasChevronRight}/>
        </button>
      </div>
    );
  }

  var settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    // autoplay: true,
    arrows: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    // prevArrow: <PrevArrow />,
    // nextArrow: <NextArrow />,
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
    <div className="mg-t-20">
      <Slider ref={sliderRef} {...settings}>
        {makeSlides()}
      </Slider>
    </div>
  );
}

export default CarouselCompletedCollabo;