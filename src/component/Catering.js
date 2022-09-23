import React from "react";
const CATERING = [
  {
    id: 1,
    num: "01",
    content: "행사계획 확정",
    description:
      "* 날짜,시간,초대인원 확정\n* 뷔페,칵테일,다과,도시락, \n바비큐 등 행사성격 구분",
  },
  {
    id: 2,
    num: "02",
    content: " 예약문의 및 견적요청",
    description: "* 대표전화 : 1522-6090",
  },
  {
    id: 3,
    num: "03",
    content: " 방문상담",
    description: "* 방문상담 또는 전화상담으로\n 행사장 답사 및 배치확장",
  },
  {
    id: 4,
    num: "04",
    content: " 예약신청 및 확인",
    description:
      "* 행사 1일전 예약확정 \n* 예약사항 최종 확인전화 \n* 주최측 준비사항 체크\n(행사 3일전까지 예약변경 가능)",
  },
  {
    id: 5,
    num: "05",
    content: " 행사진행",
    description: "* 출장서비스 담당자 확인전화 \n* 출장서비스 제공",
  },
];
const Catering = () => {
  return (
    <section className="catering">
      <div className="inner">
        <div className="design">
          <div className="left">
            <h2>THE PARTY</h2>
            <p>CATERING</p>
            <strong>
              더파티 푸드박스 &amp; 열두달 제사음식은 고객님이 요청하신 시간에
              맞춰 별도로 조리됩니다.
            </strong>
            <span> 출장뷔페 쇼핑몰 바로가기</span>
          </div>
          <div className="leftBasic"></div>
        </div>

        <div className="right">
          {CATERING.map((content) => {
            return (
              <div className="order" key={content.id}>
                <div className="num">{content.num}</div>
                <div className="tit">{content.content}</div>
                <div className="dec">{content.description}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Catering;
