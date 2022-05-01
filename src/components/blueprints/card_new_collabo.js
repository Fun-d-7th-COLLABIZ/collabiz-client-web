function CardNewCollabo(props) {
  return (
    <div className="pd-x-30 pd-y-30 mg-t-25"
      style={Object.assign({backgroundColor: "white", width: "380px !important", height: "296px", borderRadius: "8px", flex: "0 0 31.7%"}, ((props.idx + 1) % 3 === 0) ? {} : {marginRight: "16px"})}>
      <div className="d-flex">
        <img className="rounded-circle size-60" alt="new_collabo_member" src={`${process.env.PUBLIC_URL}/images/test_image.png`}/>
        <div className="d-flex justify-content-between align-items-center">
          <div className="flex-column mg-l-20">
            <div className="fw-700" style={{fontSize: "15px", color: "#6D6D6D"}}>{props.newCollabo.companyName}</div>
            <div className="color-838383 fnt-size-5">{props.newCollabo.location}</div>
          </div>
          <div className="d-flex">
            <div className="flex-column">
              <img className="" alt="heart_grey"
                src={`${process.env.PUBLIC_URL}/images/heart_grey.png`}
                style={{width: "20px", height: "18px"}}
              />
              <div className="text-center color-838383 fnt-size-5">{props.newCollabo.likeCount}</div>
            </div>
            <div className="flex-column mg-l-14">
              <img className="" alt="view"
                src={`${process.env.PUBLIC_URL}/images/view.png`}
                style={{width: "28px", height: "18px"}}
              />
              <div className="text-center color-838383 fnt-size-5">{props.newCollabo.viewCount}</div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-3 color-primary fw-700" style={{fontSize: "17px"}}>{props.newCollabo.title}</div>
      <div className="mt-3 d-flex justify-content-center flex-wrap">
        {props.newCollabo.tags.map((v, i, a) => (
          <div key={i}
            className="pd-x-10 me-2 flex-shrink-0 fnt-size-5 fw-500"
            style={{color: "#939393", wordBreak: "break-all", maxWidth: `${100}%`, border: "1px solid #939393", borderRadius: `${15}px`}}
          >
            {`# ${v}`}
          </div>
        ))}
      </div>
      <div className="mt-4 color-838383 fnt-size-6">
        {props.newCollabo.content}
      </div>
      <div className="mt-4 d-flex justify-content-between align-items-center">
        <div>
          <button className="btn py-1 px-3 btn-primary fw-500"
            style={{fontSize: "13px", borderRadius: "5px"}}
          >
            상세보기</button>
        </div>
        <div className="color-838383 fnt-size-5 fw-500">모집 마감일: {props.newCollabo.endDate}</div>
      </div>
    </div>
  );
}

export default CardNewCollabo;