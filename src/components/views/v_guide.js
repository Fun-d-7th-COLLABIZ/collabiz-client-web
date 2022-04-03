import { MainContainer } from "../blueprints";
import { LeftSidebarGuide } from "../fragments";

function VGuide() {
  return (
    <MainContainer>
      <div className="mg-t-30 ps-1 fnt-size-10 fw-500">이용방법</div>
      <LeftSidebarGuide />
    </MainContainer>
  );
}

export default VGuide;