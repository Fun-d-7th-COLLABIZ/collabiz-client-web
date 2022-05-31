import { MainContainer } from "../blueprints";
import { LeftSidebarGuide } from "../fragments";

function VNotice() {
  return (
    <div className="bg-f0f0f0 w-100">
      <MainContainer>
        <div className="pd-t-100 d-flex " style={{height: `${100}%`, paddingBottom: "170px"}}>
          <LeftSidebarGuide />
          <div className="ms-5 bg-ffffff" style={{padding: "36px 60px", width: "875px"}}>
            <div className="mg-t-30 ps-1 fnt-size-12 fw-700" style={{color: "#6D6D6D"}}>공지사항</div>
            <hr className="mg-t-30" style={{height: `${2}px`, width: `${752}px`, opacity: 1, color: "#6D6D6D"}}/>
            <div className="d-flex text-center fw-500 fnt-size-9" style={{color: "#6D6D6D"}}>
              <div style={{width: "10%"}}>번호</div>
              <div style={{width: "15%"}}>분류</div>
              <div style={{width: "60%"}}>제목</div>
              <div style={{width: "10%"}}>작성일</div>
            </div>
            <hr className="mg-t-16" style={{height: `${1}px`, width: `${752}px`, opacity: 1, color: "#6D6D6D"}}/>
            {/* for test */}
            <div className="d-flex text-center fw-500 fnt-size-7" style={{color: "#6D6D6D"}}>
              <div style={{width: "10%"}}>2</div>
              <div style={{width: "15%"}}>업데이트</div>
              <div style={{width: "60%"}}>[공지] 아래 업데이트를 위해 공지 드립니다.</div>
              <div style={{width: "10%"}}>2022.04.22</div>
            </div>
            <div className="mt-1 d-flex text-center fw-500 fnt-size-7" style={{color: "#6D6D6D"}}>
              <div style={{width: "10%"}}>1</div>
              <div style={{width: "15%"}}>업데이트</div>
              <div style={{width: "60%"}}>[공지] 회원분들을 위해 앞으로 진행할 작업물에 대한 공지 드립니다.</div>
              <div style={{width: "10%"}}>2022.03.25</div>
            </div>
          </div>
        </div>
      </MainContainer>
    </div>
  );
}

export default VNotice;