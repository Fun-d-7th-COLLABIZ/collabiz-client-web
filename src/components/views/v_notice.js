import { MainContainer } from "../blueprints";
import { LeftSidebarGuide } from "../fragments";

function VNotice() {
  return (
    <MainContainer>
      <div className="mg-t-30 ps-1 fnt-size-10 fw-500">공지사항</div>
      <LeftSidebarGuide />
    </MainContainer>
  );
}

export default VNotice;