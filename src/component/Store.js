import { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
const PTF = [
  {
    id: 1,
    content: "더파티 시청점",
    description: "부산광역시 연제구 중앙대로 1000 국민연금부산회관 B1F/2F",
    tee: "051-668-7777",
    link: "/",
  },

  {
    id: 2,
    content: "더파티 센텀점",
    description: "  부산광역시 해운대구 센텀중앙로 79 센텀사이언스파크 B1F",
    tee: "051-711-7770",
    link: "/",
  },

  {
    id: 3,
    content: "해운대 프리미엄점",
    description: "부산광역시 해운대구 해운대해변로 298번길 24 팔레드시즈 B1F",
    tee: "051-744-7711",
    link: "/",
  },
  {
    id: 4,
    content: "더파티 시청점",
    description: "부산광역시 연제구 중앙대로 1000 국민연금부산회관 B1F/2F",
    tee: "051-668-7777",
    link: "/",
  },
  {
    id: 5,
    content: "더파티 센텀점",
    description: "  부산광역시 해운대구 센텀중앙로 79 센텀사이언스파크 B1F",
    tee: "051-711-7770",
    link: "/",
  },
  {
    id: 6,
    content: "해운대 프리미엄점",
    description: "부산광역시 해운대구 해운대해변로 298번길 24 팔레드시즈 B1F",
    tee: "051-744-7711",
    link: "/",
  },
  {
    id: 7,
    content: "더파티 시청점",
    description: "부산광역시 연제구 중앙대로 1000 국민연금부산회관 B1F/2F",
    tee: "051-668-7777",
    link: "/",
  },
  {
    id: 8,
    content: "더파티 센텀점",
    description: "  부산광역시 해운대구 센텀중앙로 79 센텀사이언스파크 B1F",
    tee: "051-711-7770",
    link: "/",
  },
  {
    id: 9,
    content: "해운대 프리미엄점",
    description: "부산광역시 해운대구 해운대해변로 298번길 24 팔레드시즈 B1F",
    tee: "051-744-7711",
    link: "/",
  },
];
const Store = () => {
  const LS = useRef();
  const RS = useRef();

  const [LSS, setLSS] = useState();
  const [RSS, setRSS] = useState();
  const [slideNum, setSlideNum] = useState(0);
  useEffect(() => {
    setLSS(LS.current);
    setRSS(RS.current);
  }, []);
  return (
    <>
      <section className="store">
        <div className="inner">
          <div className="left">
            <div className="slide">
              <Slider fade={true} ref={LS} asNavFor={RSS} arrows={false}>
                {PTF.map((building, idx) => {
                  return (
                    <figure
                      key={building.id}
                      className={
                        "itm0" + building.id + (idx === LSS ? " on" : "")
                      }
                    ></figure>
                  );
                })}
              </Slider>
            </div>
          </div>
          <div className="box">
            <div className="content">
              <div className="tit">{PTF[slideNum].content}</div>
              <p>{PTF[slideNum].description}</p>
              <span className="tel">{PTF[slideNum].tee}</span>
              <a href={PTF[slideNum].link} className="cbtn">
                자세히보기
              </a>
              <div className="num">
                0{slideNum + 1} <span>/ 0{PTF.length}</span>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="slide">
              <Slider
                fade={true}
                ref={LS}
                asNavFor={RSS}
                arrows={false}
                afterChange={(index) => setSlideNum(index)}
              >
                {PTF.map((building, idx) => {
                  return (
                    <figure
                      key={building.id}
                      className={
                        "itm0" + building.id + (idx === LSS ? " on" : "")
                      }
                    ></figure>
                  );
                })}
              </Slider>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Store;
