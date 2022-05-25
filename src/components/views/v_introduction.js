import { MainContainer } from "../blueprints";
import { LeftSidebarGuide } from "../fragments";

function VIntroduction() {
  return (
    <div className="bg-f0f0f0 w-100">
      <MainContainer>
        <div className="pd-t-100 d-flex " style={{height: `${100}%`, paddingBottom: "170px"}}>
          <LeftSidebarGuide />
          <div className="ms-5 bg-ffffff" style={{padding: "36px 60px", width: "875px"}}>
            <div className="mg-t-30 ps-1 fnt-size-12 fw-700" style={{color: "#6D6D6D"}}>콜라비즈 소개</div>
            <div style={{marginTop: "47px"}}>
              <img style={{width: "753px", height: "350px"}} alt="notice_meeting" src={`${process.env.PUBLIC_URL}/images/notice_meeting.png`}/>
            </div>
            <div className="mg-t-30 ps-1 fnt-size-8 fw-700" style={{color: "#717171"}}>콜라비즈의 시작</div>
            <div className="ps-1 fnt-size-7" style={{color: "#ABABAB", lineHeight: "20px"}}>
              스타트업, 개인사업자, 소상공인 등 다양한 형태의 사업자들이 협업하거나 제휴하고 새로운 서비스까지 만들어낼 수 있는 플랫폼인
              콜라비즈는 2022년 Fun.D의 사이드 프로젝트를 통해 시작되었습니다.
            </div>
            <div style={{marginTop: "66px"}}>
              <img style={{width: "753px", height: "350px"}} alt="notice_meeting" src={`${process.env.PUBLIC_URL}/images/notice_meeting.png`}/>
            </div>
            <div className="mg-t-30 ps-1 text-center fnt-size-8 fw-700" style={{color: "#717171", marginTop: "53px"}}>저희는 한 업체가 다른 업체를 만났을 때의 시너지를 기대하고 응원합니다.</div>
            <div className="pd-b-100"></div>
          </div>
        </div>
      </MainContainer>
    </div>
  );
}

export default VIntroduction;