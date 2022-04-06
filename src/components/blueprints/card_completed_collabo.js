import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes as fasTimes } from '@fortawesome/free-solid-svg-icons';

function CardCompletedCollabo(props) {
  return (
    <div className="completed-collabo-card bg-ffffff" style={{width: `${100}%`}}>
      <div className="pd-t-34 text-center color-primary fw-700 fnt-size-7">{props.completedCollabos.title}</div>
      <div className="text-center color-838383 fw-500 fnt-size-5">성사일 : {props.completedCollabos.completedDate}</div>
      <div className="pd-t-20 d-flex align-items-center justify-content-center">
        <div>
          <img className="size-60" alt="logo" src={`${process.env.PUBLIC_URL}/images/test_image.png`}/>
          <div className="text-center color-959595 fw-500 fnt-size-6">{props.completedCollabos.member1.memberName}</div>
        </div>
        <FontAwesomeIcon icon={fasTimes} className="px-2"/>
        <div>
          <img className="size-60" alt="logo" src={`${process.env.PUBLIC_URL}/images/test_image.png`}/>
          <div className="text-center color-959595 fw-500 fnt-size-6">{props.completedCollabos.member2.memberName}</div>
        </div>
      </div>
    </div>
  );
}

export default CardCompletedCollabo;