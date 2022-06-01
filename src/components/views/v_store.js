import { MainContainer } from "../blueprints";

function VStore() {
  return (
    <MainContainer className="w-100 bg-f0f0f0" style={{height: `${100}vh`}}>
      <div className="w-100 mx-auto pd-t-180 d-flex flex-column align-items-center justify-content-center">
        <div className="d-flex flex-column align-items-center justify-content-center" style={{width: `${686}px`, height: "300px", backgroundColor: "white"}}>
          <div className="text-center fnt-size-10 fw-700 color-606060">준비중인 서비스입니다.</div>
        </div>
      </div>
      <div className="pd-b-180"></div>
    </MainContainer>
  );
}

export default VStore;