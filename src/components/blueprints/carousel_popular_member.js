import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight as fasChevronRight, faChevronLeft as fasChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { CardPopularMember } from '../blueprints';
import Slider from 'react-slick';

function CarouselPopularMember(props) {
  function makeSlides() {
    var members = props.popularMembers;
    var slides = members.map((t, i) =>
      <div className="pd-x-8-16" key={i}>
        <CardPopularMember popularMembers={t}/>
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
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          dots: false,
          infinite: true,
          speed: 500,
          slidesToShow: 3,
          slidesToScroll: 3,
          swipeToSlide: false,
        }
      },
    ],
  };

  return (
    <div className="mg-t-60">
      <Slider {...settings}>
        {makeSlides()}
      </Slider>
    </div>
  );
}

export default CarouselPopularMember;