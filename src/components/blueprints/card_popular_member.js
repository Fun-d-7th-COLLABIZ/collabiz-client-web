function CardPopularMember(props) {
  return (
    <div className="popular-member-card ms-4" style={{width: `${100}%`}}>
      <div>
        {/* <img alt={props.url} src={props.src}/> */}
        <img alt="logo" src={`${process.env.PUBLIC_URL}/images/logo.png`}/>
      </div>
      <div className="mg-t-20">
        <div className="fnt-size-7 fw-700" style={{color: "#535353"}}>{props.popularMembers.name}</div>
        <div className="color-838383 fnt-size-6 fw-500">
          <div>기업명 : {props.popularMembers.name} / 매출액 : {props.popularMembers.sales}</div>
          <div>기업 분류 : {props.popularMembers.memberCategory}</div>
          <div>성공 콜라보 : {props.popularMembers.completedCollaboCount}건</div>
        </div>
      </div>
    </div>
  );
}

export default CardPopularMember;