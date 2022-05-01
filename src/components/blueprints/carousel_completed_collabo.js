import { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight as fasChevronRight, faChevronLeft as fasChevronLeft } from '@fortawesome/free-solid-svg-icons';
import Slider from 'react-slick';
import { CardCompletedCollabo } from '../blueprints';

function CarouselCompletedCollabo(props) {
  const sliderRef = useRef(null);

  function makeSlides() {
    var collabos = props.completedCollabos;
    var slides = collabos.map((c, i) =>
      <div className="px-2" key={i}>
        <CardCompletedCollabo completedCollabos={c}/>
      </div>
    );
    return slides;
  }

  var settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    // autoplay: true,
    arrows: false,
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
    <div className="mg-t-20 position-relative">
      <button className="btn p-0 size-22 position-absolute" onClick={() => sliderRef?.current?.slickPrev()}
        style={{
          top: `${-54}px`, right: `${34}px`,
          zIndex: 999, border: "1px solid white"}}
      >
        <FontAwesomeIcon className="position-absolute" icon={fasChevronLeft} style={{color: "white", top: `${2}px`, right: `${5}px`}}/>
      </button>
      <button className="btn p-0 size-22 position-absolute" onClick={() => sliderRef?.current?.slickNext()}
        style={{
          top: `${-54}px`, right: `${12}px`,
          zIndex: 999, border: "1px solid white"}}
      >
        <FontAwesomeIcon className="position-absolute" icon={fasChevronRight} style={{color: "white", top: `${2}px`, right: `${5}px`}}/>
      </button>
      <Slider ref={sliderRef} {...settings}>
        {makeSlides()}
        <span></span>
      </Slider>
    </div>
  );
}

export default CarouselCompletedCollabo;