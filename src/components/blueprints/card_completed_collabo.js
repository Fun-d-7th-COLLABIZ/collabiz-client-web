function CardCompletedCollabo(props) {
  return (
    <div className="completed-collabo-card bg-ffffff" style={{width: `${100}%`}}>
      <div className="pd-t-34 text-center color-primary fw-700 fnt-size-7">{props.completedCollabos.title}</div>
      <div className="text-center color-838383 fw-500 fnt-size-5">성사일 : {props.completedCollabos.completedDate}</div>
      <div className="pd-t-20 d-flex align-items-center justify-content-center">
        <div>
          <img className="rounded-circle size-60" alt="completed_member_1" src={`${process.env.PUBLIC_URL}/images/test_image.png`}/>
          <div className="text-center color-959595 fw-500 fnt-size-6">{props.completedCollabos.member1.memberName}</div>
        </div>
        <img className="mx-3 mb-1 size-22" alt="collabo_x" src={`${process.env.PUBLIC_URL}/images/collabo_x.png`}/>
        <div>
          <img className="rounded-circle size-60" alt="completed_member_2" src={`${process.env.PUBLIC_URL}/images/test_image.png`}/>
          <div className="text-center color-959595 fw-500 fnt-size-6">{props.completedCollabos.member2.memberName}</div>
        </div>
      </div>
    </div>
  );
}

export default CardCompletedCollabo;