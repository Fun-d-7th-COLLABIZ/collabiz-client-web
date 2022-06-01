import { MainContainer } from "../blueprints";
import { LeftSidebarMypage } from "../fragments";

function VMyPage() {
  return (
    <div className="bg-f0f0f0 w-100">
      <MainContainer>
        <div className="pd-t-80 d-flex flex-column " style={{height: `${100}%`, paddingBottom: "170px"}}>
          <div className="fw-700 fnt-size-14">마이페이지</div>
          <LeftSidebarMypage />
        </div>
      </MainContainer>
    </div>
  );
}

export default VMyPage;