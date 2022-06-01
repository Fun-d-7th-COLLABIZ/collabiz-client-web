function CardSuggestedCollabo(props) {
  return (
    <div className="d-flex mg-t-30" style={{border: "1px solid #DEDEDE", width: "795px", height: "148px", borderTopColor: "#691B9A", padding: "15px 24px"}}>
      <div style={{width: "80%"}}>
        <div className="fw-700 fnt-size-10">{props.data.title}</div>
        <div className="d-flex mt-2">
          <div style={{width: "110px"}}>업체명</div>
          <div style={{color: "#606060"}}>{props.data.companyName}</div>
        </div>
        <div className="d-flex mt-1">
          <div style={{width: "110px"}}>제안 제목</div>
          <div style={{color: "#606060"}}>{props.data.suggestedTitle}</div>
        </div>
        <div className="d-flex mt-1 justify-content-between">
          <div className="d-flex" style={{width: "50%"}}>
            <div style={{width: "110px"}}>제안 일시</div>
            <div style={{color: "#606060"}}>{props.data.suggestedDate}</div>
          </div>
          <div className="d-flex" style={{width: "50%"}}>
            <div style={{width: "110px"}}>지원 마감 일시</div>
            <div style={{color: "#606060"}}>{props.data.closeDate}</div>
          </div>
          </div>
      </div>
      <div className="d-flex flex-column justify-content-center">
        <div>
          <button className="btn btn-outline2-primary" style={{padding: "10px 34px"}}>내용 수정</button>
        </div>
        <div className="" style={{paddingTop: "12px"}}>
          <button className="btn btn-outline-979797" style={{padding: "10px 34px"}}>제안 취소</button>
        </div>
      </div>
    </div>
  );
}

export default CardSuggestedCollabo;