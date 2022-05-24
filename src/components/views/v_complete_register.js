function VCompleteRegister(props) {
  return (
    <div className="mg-t-20" style={{width: "686px", height: "258px"}}>
      <div className="d-flex pe-4 justify-content-end">
        <button className="btn p-0 size-18" onClick={props.onClose}>
          <img alt="close_btn" src={`${process.env.PUBLIC_URL}/images/close_btn.png`}/>
        </button>
      </div>
      <div className="mt-2 fw-700 fnt-size-17">회원가입을 환영합니다!</div>
      <div className="fnt-size-10" style={{color: "#606060"}}>
        <div className="mg-t-20">반갑습니다. {props.companyName}님</div>
        <div>콜라비즈 가입을 환영합니다!</div>
        <div>다양한 업체들과 함께 콜라보레이션을 진행해 보세요.</div>
      </div>
    </div>
  );
}

export default VCompleteRegister;