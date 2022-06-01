function CardOngoingCollabo(props) {
  return (
    <div className="d-flex mg-t-30" style={{border: "1px solid #DEDEDE", width: "795px", height: "148px", borderTopColor: "#691B9A", padding: "24px 12px 24px 24px"}}>
      <div className="d-flex" style={{width: "80%"}}>
        <div>
          <img className="rounded-circle size-100" alt="completed_member_1" src={props.data.image !== void 0 ? `${process.env.PUBLIC_URL}/images/${props.data.image}` : `${process.env.PUBLIC_URL}/images/test_image.png`}/>
        </div>
        <div className="mg-l-16" style={{width: "80%"}}>
          <div className="fw-700 fnt-size-10">{props.data.title}</div>
          <div className="d-flex mg-t-20 justify-content-between">
            <div className="d-flex" style={{width: "50%"}}>
              <div style={{width: "110px"}}>제안 업체</div>
              <div style={{color: "#606060"}}>{props.data.suggestedCompanyName}</div>
            </div>
            <div className="d-flex" style={{width: "50%"}}>
              <div style={{width: "110px"}}>협력 업체</div>
              <div style={{color: "#606060"}}>{props.data.appliedCompanyName}</div>
            </div>
          </div>
          <div className="d-flex mt-1 justify-content-between">
            <div className="d-flex" style={{width: "50%"}}>
              <div style={{width: "110px"}}>콜라보 체결일</div>
              <div style={{color: "#606060"}}>{props.data.completedDate}</div>
            </div>
            <div className="d-flex" style={{width: "50%"}}>
              <div style={{width: "110px"}}>콜라보레이션</div>
              <div style={{color: "#606060"}}>{props.data.days}일째</div>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex flex-column justify-content-center">
        <div>
          <button className="btn btn-outline2-primary" style={{padding: "10px 38px"}}>1:1 대화</button>
        </div>
        <div className="" style={{paddingTop: "12px"}}>
          <button className="btn btn-outline-979797" style={{padding: "10px 27px"}}>콜라보 종료</button>
        </div>
      </div>
    </div>
  );
}

export default CardOngoingCollabo;