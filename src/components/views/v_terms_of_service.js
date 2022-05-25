import { MainContainer } from "../blueprints";
import { LeftSidebarGuide } from "../fragments";

function VTermsOfService() {
  return (
    <div className="bg-f0f0f0 w-100">
      <MainContainer>
        <div className="pd-t-100 d-flex " style={{height: `${100}%`, paddingBottom: "170px"}}>
          <LeftSidebarGuide />
          <div className="ms-5 bg-ffffff" style={{padding: "36px 60px", width: "875px"}}>
            <div className="mg-t-30 ps-1 fnt-size-12 fw-700" style={{color: "#6D6D6D"}}>이용약관</div>
          </div>
        </div>
      </MainContainer>
    </div>
  );
}

export default VTermsOfService;