import { MainContainer } from '../blueprints';
import { Header } from '../fragments';

function VMain() {

  return (
    <div style={{minHeight: `${100}vh`}}>
      <MainContainer className="w-100-full px-0 d-flex flex-column">
        <Header />
        <div className="mg-t-100 d-flex flex-column justify-content-center align-items-center">
          <div className="mg-t-20 fnt-size-10">로그인 후 서비스를 이용해 주세요! :)</div>
        </div>
      </MainContainer>
    </div>
  );
}

export default VMain;