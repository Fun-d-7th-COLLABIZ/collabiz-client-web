function CardFinishedCollabo(props) {
  return (
    <div className="d-flex mg-t-30" style={{border: "1px solid #DEDEDE", width: "795px", height: "148px", borderTopColor: "#691B9A", padding: "24px 12px 24px 24px"}}>
      <div className="d-flex" style={{width: "100%"}}>
        <div>
          <img className="rounded-circle size-100" alt="completed_member_1" src={props.data.image !== void 0 ? `${process.env.PUBLIC_URL}/images/${props.data.image}` : `${process.env.PUBLIC_URL}/images/test_image.png`}/>
        </div>
        <div className="mg-l-16" style={{width: "80%"}}>
          <div className="fw-700 fnt-size-10">{props.data.title}</div>
          <div className="d-flex mg-t-16 justify-content-between">
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
              <div style={{width: "110px"}}>등록 일시</div>
              <div style={{color: "#606060"}}>{props.data.postedDate}</div>
            </div>
            <div className="d-flex" style={{width: "50%"}}>
              <div style={{width: "110px"}}>지원 마감 일시</div>
              <div style={{color: "#606060"}}>{props.data.closeDate}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardFinishedCollabo;