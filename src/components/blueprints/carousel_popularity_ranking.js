import { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown as fasChevronDown, faChevronUp as fasChevronUp } from '@fortawesome/free-solid-svg-icons';
import Slider from 'react-slick';

function CarouselPopularityRanking(props) {
  const sliderRef = useRef(null);

  function makeSlides() {
    var popularityRanking = props.data;
    var slides = popularityRanking.map((p, i) =>
      <div className={"d-flex py-3 ps-4 align-items-center shadow bg-ffffff " + (i === 0 ? "bg-primary color-secondary" : "")} key={i}
        style={{width: "577px", height: "28%", borderRadius: "12px", overflow: "hidden"}}
      >
        <div className="fnt-size-9 fw-700">{i + 1}위</div>
        <div className="d-flex align-items-center justify-content-center">
          <div style={{marginLeft: "23px"}}>
            <img className="rounded-circle size-40" alt="popularity_ranking_member" src={`${process.env.PUBLIC_URL}/images/test_image.png`}/>
            <div className={"fnt-size-7 fw-700 " + (i === 0 ? "color-ffffff" : "")} style={{color: "#8E8E8E"}}>{popularityRanking.companyName ?? '콜라비즈'}</div>
          </div>
          <div style={{marginLeft: "16px"}}>
            <div className={"fw-700 " + (i === 0 ? "color-ffffff" : "")} style={{color: "#8E8E8E"}}>비서직군 파견 가능한 업체 찾습니다.</div>
            <div className={"fnt-size-7 " + (i === 0 ? "color-ffffff" : "")} style={{color: "#8E8E8E"}}>중국어 가능한 비서직군 파견 가능한 업체 있을까요?</div>
          </div>
          <div className="d-flex flex-column justify-content-between align-items-end" style={{marginLeft: "100px"}}>
            <div className="d-flex py-1">
              <img className="" alt="heart_grey"
                src={i === 0 ? `${process.env.PUBLIC_URL}/images/heart_grey.png` : `${process.env.PUBLIC_URL}/images/heart_grey.png`}
                style={{width: "14px", height: "12px"}}
              />
              <div className="text-center color-838383 fnt-size-5" style={{marginLeft: "10px"}}>{216}</div>
            </div>
            <div className="d-flex py-1">
              <img className="" alt="view"
                src={i === 0 ? `${process.env.PUBLIC_URL}/images/primary_view.png` : `${process.env.PUBLIC_URL}/images/view.png`}
                style={{width: "16px", height: "12px"}}
              />
              <div className="text-center color-838383 fnt-size-5" style={{marginLeft: "10px"}}>{235}</div>
            </div>
            <div className="d-flex pt-1">
              <img className="" alt="view"
                src={i === 0 ? `${process.env.PUBLIC_URL}/images/primary_share.png` : `${process.env.PUBLIC_URL}/images/share.png`}
                style={{width: "16px", height: "14px"}}
              />
              <div className="text-center color-838383 fnt-size-5" style={{marginLeft: "10px"}}>{161}</div>
            </div>
          </div>
        </div>
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
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    vertical: true,
    verticalSwiping: true,
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
      <Slider ref={sliderRef} {...settings}>
        {makeSlides()}
      </Slider>
      <div className="d-none-block position-absolute"
        style={{bottom: '-50px', left: "40%", width: `${3}em`, height: `${3}em`, zIndex: 999, opacity: 1.0}}
      >
        <button type="button" className="btn shadow w-100 h-100 p-0 d-flex-center rounded-circle text-hover-primary" onClick={() => sliderRef?.current?.slickPrev()}>
          <FontAwesomeIcon icon={fasChevronUp}/>
        </button>
      </div>
      <div className="d-none-block position-absolute"
        style={{bottom: '-50px', right: "40%", width: `${3}em`, height: `${3}em`, zIndex: 999}}
      >
        <button type="button" className="btn shadow w-100 h-100 p-0 d-flex-center rounded-circle text-hover-primary" onClick={() => sliderRef?.current?.slickNext()}>
          <FontAwesomeIcon icon={fasChevronDown}/>
        </button>
      </div>
    </div>
  );
}

export default CarouselPopularityRanking;