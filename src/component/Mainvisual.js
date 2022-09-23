import { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
const SLIDE = [
  {
    id: 1,
    link: "https://my.matterport.com/show/?m=yEdf9FWaNav",
  },
  {
    id: 2,
    link: "https://my.matterport.com/show/?m=yEdf9FWaNav",
  },
  {
    id: 3,
    link: "https://my.matterport.com/show/?m=yEdf9FWaNav",
  },
  {
    id: 4,
    link: "https://my.matterport.com/show/?m=yEdf9FWaNav",
  },
  {
    id: 5,
    link: "https://my.matterport.com/show/?m=yEdf9FWaNav",
  },
];

const Mainvisual = () => {
  const [IDX, setIDX] = useState();
  useEffect(() => {
    setIDX(0);
  }, []);
  const mainSlide = useRef(null);
  const setting = {
    arrows: false,
    afterChange: (index) => setIDX(index),
    autoplay: true,
    autoplaySpeed: 5000,
  };
  return (
    <section className="Mainvisual">
      <Slider {...setting} ref={mainSlide}>
        {SLIDE.map((slide, idx) => {
          return (
            <figure
              key={slide.id}
              className={"itm0" + slide.id + (idx === IDX ? " on" : "")}
            ></figure>
          );
        })}
      </Slider>

      <ul className="slideTab">
        {SLIDE.map((dots, idx) => {
          return (
            <li
              key={dots.id}
              className={idx === IDX ? " on" : ""}
              onClick={() => mainSlide.current.slickGoTo(idx)}
            >
              {dots.title}
            </li>
          );
        })}

        <div className="slideNum">
          0{IDX + 1}
          <span> / 0{SLIDE.length}</span>
        </div>
      </ul>

      <div className="slideArrows">
        <button onClick={() => mainSlide.current.slickPrev()}>
          <i className="xi-arrow-left"></i>
        </button>
        <button onClick={() => mainSlide.current.slickNext()}>
          <i className="xi-arrow-right"></i>
        </button>
      </div>
    </section>
  );
};

export default Mainvisual;
