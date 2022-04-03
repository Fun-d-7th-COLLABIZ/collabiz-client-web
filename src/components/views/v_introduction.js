import { MainContainer } from "../blueprints";
import { LeftSidebarGuide } from "../fragments";

function VIntroduction() {
  return (
    <MainContainer>
      <div className="mg-t-30 ps-1 fnt-size-10 fw-500">콜라비즈 소개</div>
      <LeftSidebarGuide />
    </MainContainer>
  );
}

export default VIntroduction;