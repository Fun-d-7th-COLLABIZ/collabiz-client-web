function CardPostedCollabo(props) {
  return (
    <div className="d-flex mg-t-30" style={{border: "1px solid #DEDEDE", width: "795px", height: "148px", borderTopColor: "#691B9A", padding: "16px 12px 16px 24px"}}>
      <div style={{width: "80%", margin: "14px 0px"}}>
        <div className="d-flex align-items-center justify-content-between">
          <div className="fw-700 fnt-size-10">{props.data.title}</div>
          <div className="d-flex">
            <div className="d-flex align-items-center" style={{width: "50%"}}>
              <img alt="like_collabo_btn" src={`${process.env.PUBLIC_URL}/images/person.png`} style={{width: "16px", height: "16px"}}/>
              <div className="ms-1 fnt-size-7" style={{color: "#606060"}}>{props.data.applyCount}</div>
            </div>
            <div className="d-flex align-items-center ms-2 me-4" style={{width: "50%"}}>
              <img alt="like_collabo_btn" src={props.idx === 1 ? `${process.env.PUBLIC_URL}/images/heart_blank.png` : `${process.env.PUBLIC_URL}/images/heart_red.png`} style={{width: "20px", height: "18.35px", marginTop: "2px"}}/>
              <div className="ms-1 fnt-size-7" style={{color: "#606060"}}>{props.data.likeCount}</div>
            </div>
          </div>
        </div>
        <div className="d-flex mt-4 justify-content-between">
          <div className="d-flex" style={{width: "50%"}}>
            <div style={{width: "110px"}}>등록 일시</div>
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
          <button className="btn btn-outline-979797" style={{padding: "10px 34px"}}>등록 취소</button>
        </div>
      </div>
    </div>
  );
}

export default CardPostedCollabo;