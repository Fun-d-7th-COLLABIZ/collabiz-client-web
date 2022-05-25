import { MainContainer } from "../blueprints";
import { LeftSidebarGuide } from "../fragments";

function VQna() {
  return (
    <div className="bg-f0f0f0 w-100">
      <MainContainer>
        <div className="pd-t-100 d-flex " style={{height: `${100}%`, paddingBottom: "170px"}}>
          <LeftSidebarGuide />
          <div className="ms-5 bg-ffffff" style={{padding: "36px 60px", width: "875px"}}>
            <div className="mg-t-30 ps-1 fnt-size-12 fw-700" style={{color: "#6D6D6D"}}>문의사항</div>
            <hr className="mg-t-30" style={{height: `${2}px`, width: `${752}px`, opacity: 1, color: "#6D6D6D"}}/>
            <div className="d-flex text-center fw-500 fnt-size-9" style={{color: "#6D6D6D"}}>
              <div style={{width: "10%"}}>번호</div>
              <div style={{width: "55%"}}>제목</div>
              <div style={{width: "15%"}}>작성일</div>
              <div style={{width: "20%"}}>상태</div>
            </div>
            <hr className="mg-t-16" style={{height: `${1}px`, width: `${752}px`, opacity: 1, color: "#6D6D6D"}}/>
            {/* for test */}
            <div className="d-flex text-center fw-500 fnt-size-7" style={{color: "#6D6D6D"}}>
              <div style={{width: "10%"}}>2</div>
              <div style={{width: "55%"}}>문의사항입니다.</div>
              <div style={{width: "25%"}}>2022.04.28</div>
              <div style={{width: "20%"}}>미답변</div>
            </div>
            <div className="mt-1 d-flex text-center fw-500 fnt-size-7" style={{color: "#6D6D6D"}}>
              <div style={{width: "10%"}}>1</div>
              <div style={{width: "55%"}}>새로운 문의사항입니다.</div>
              <div style={{width: "25%"}}>2022.04.10</div>
              <div style={{width: "20%"}}>답변완료</div>
            </div>
            <hr className="mg-t-20" style={{height: `${2}px`, width: `${752}px`, opacity: 1, color: "#6D6D6D"}}/>
            <div className="d-flex justify-content-end">
              <button className="btn btn-primary px-4 py-2 fw-500">문의하기</button>
            </div>
          </div>
        </div>
      </MainContainer>
    </div>
  );
}

export default VQna;