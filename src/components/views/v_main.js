import { CardNewCollabo, CarouselCompletedCollabo, CarouselPopularMember, MainContainer, MainSearchAndCollaboBox } from '../blueprints';
function VMain() {
  var testNewCollabos = [
    {
      companyName: 'A',
      location: '서울 강남',
      likeCount: 59,
      viewCount: 10,
      title: '개발인력 콜라보 원합니다.',
      tags: ['프론트엔드', '개발자', '웹기획', '파이썬'],
      content: '저희는 현재 이러이러한  회사입니다. 현재 프로젝트를 개발하기 위해서 프론트엔드 개발을 같이 할 기업이 있을까요?',
      endDate: '22.03.15'
    },
    {
      companyName: 'B',
      location: '서울 강남',
      likeCount: 69,
      viewCount: 20,
      title: '개발인력 콜라보 원합니다.',
      tags: ['프론트엔드', '개발자', '웹기획', '파이썬'],
      content: '저희는 현재 이러이러한  회사입니다. 현재 프로젝트를 개발하기 위해서 프론트엔드 개발을 같이 할 기업이 있을까요?',
      endDate: '22.03.15'
    },
    {
      companyName: 'C',
      location: '서울 강남',
      likeCount: 79,
      viewCount: 30,
      title: '개발인력 콜라보 원합니다.',
      tags: ['프론트엔드', '개발자', '웹기획', '파이썬'],
      content: '저희는 현재 이러이러한  회사입니다. 현재 프로젝트를 개발하기 위해서 프론트엔드 개발을 같이 할 기업이 있을까요?',
      endDate: '22.03.15'
    },
    {
      companyName: 'D',
      location: '서울 강남',
      likeCount: 89,
      viewCount: 40,
      title: '개발인력 콜라보 원합니다.',
      tags: ['프론트엔드', '개발자', '웹기획', '파이썬'],
      content: '저희는 현재 이러이러한  회사입니다. 현재 프로젝트를 개발하기 위해서 프론트엔드 개발을 같이 할 기업이 있을까요?',
      endDate: '22.03.15'
    },
    {
      companyName: 'D',
      location: '서울 강남',
      likeCount: 99,
      viewCount: 40,
      title: '개발인력 콜라보 원합니다.',
      tags: ['프론트엔드', '개발자', '웹기획', '파이썬'],
      content: '저희는 현재 이러이러한  회사입니다. 현재 프로젝트를 개발하기 위해서 프론트엔드 개발을 같이 할 기업이 있을까요?',
      endDate: '22.03.15'
    },
    {
      companyName: 'D',
      location: '서울 강남',
      likeCount: 109,
      viewCount: 40,
      title: '개발인력 콜라보 원합니다.',
      tags: ['프론트엔드', '개발자', '웹기획', '파이썬'],
      content: '저희는 현재 이러이러한  회사입니다. 현재 프로젝트를 개발하기 위해서 프론트엔드 개발을 같이 할 기업이 있을까요?',
      endDate: '22.03.15'
    },
    {
      companyName: 'D',
      location: '서울 강남',
      likeCount: 119,
      viewCount: 40,
      title: '개발인력 콜라보 원합니다.',
      tags: ['프론트엔드', '개발자', '웹기획', '파이썬'],
      content: '저희는 현재 이러이러한  회사입니다. 현재 프로젝트를 개발하기 위해서 프론트엔드 개발을 같이 할 기업이 있을까요?',
      endDate: '22.03.15'
    },
  ];

  var testPopularMembers = [
    {
      name: 'A',
      sales: 100,
      memberCategory: '제조1',
      completedCollaboCount: 10,
    },
    {
      name: 'B',
      sales: 200,
      memberCategory: '제조2',
      completedCollaboCount: 20,
    },
    {
      name: 'C',
      sales: 300,
      memberCategory: '제조3',
      completedCollaboCount: 30,
    },
    {
      name: 'D',
      sales: 400,
      memberCategory: '제조4',
      completedCollaboCount: 40,
    },
    {
      name: 'D',
      sales: 500,
      memberCategory: '제조4',
      completedCollaboCount: 40,
    },
    {
      name: 'D',
      sales: 600,
      memberCategory: '제조4',
      completedCollaboCount: 40,
    },
    {
      name: 'D',
      sales: 700,
      memberCategory: '제조4',
      completedCollaboCount: 40,
    },
  ];

  var testCompletedCollabos = [
    {
      title: 'title 1',
      completedDate: '22.03.15',
      member1: {
        profileImg: 'image1',
        memberName: 'SAMSUNG'
      },
      member2: {
        profileImg: 'image2',
        memberName: 'APPLE'
      }
    },
    {
      title: 'title 2',
      completedDate: '22.03.16',
      member1: {
        profileImg: 'image1',
        memberName: 'SAMSUNG'
      },
      member2: {
        profileImg: 'image2',
        memberName: 'APPLE'
      }
    },
    {
      title: 'title 3',
      completedDate: '22.03.17',
      member1: {
        profileImg: 'image1',
        memberName: 'SAMSUNG'
      },
      member2: {
        profileImg: 'image2',
        memberName: 'APPLE'
      }
    },
    {
      title: 'title 4',
      completedDate: '22.03.18',
      member1: {
        profileImg: 'image1',
        memberName: 'SAMSUNG'
      },
      member2: {
        profileImg: 'image2',
        memberName: 'APPLE'
      }
    },

  ];

  
  const _limit = 6;
  var newCollaboCards = [];
  for (var i = 0; i < _limit; i++) {
    newCollaboCards.push(<CardNewCollabo key={i} idx={i} newCollabo={testNewCollabos[i]}/>);
  }

  return (
    <div className="w-100-full" style={{minHeight: `${100}vh`}}>
      <div className="d-flex flex-column">
        <div className="position-relative">
          <img src={`${process.env.PUBLIC_URL}/images/main_background_top.png`} alt="main_background_top"
            style={{backgroundColor: "#704C79", backgroundBlendMode: "multiply"}}
          />
        </div>
        <div className="pd-t-40" style={{height: `${793}px`, backgroundColor: "#F7F5F7"}}>
          <MainContainer>
            <div className="d-flex justify-content-between align-item-center">
              <div className="fnt-size-12 fw-700" style={{color: "#6D6D6D"}}>신규 콜라보</div>
              <div className="" style={{border: "1px solid #8D7A92", borderRadius: "26px"}}>
                <button className="btn py-1 px-4 fnt-size-8 fw-700" style={{color: "#562C62"}}>더보기</button>
              </div>
            </div>
            <div className="d-flex flex-wrap">
              {/* {testNewCollabos.map((c, i) => 
                <CardNewCollabo key={i} idx={i} newCollabo={c}/>
              )} */}
              {newCollaboCards}
            </div>
          </MainContainer>
        </div>

        <div style={{height: `${409}px`, backgroundImage: "url(/images/main_background_mid.png)", backgroundColor: "#704C79"}}>
          <MainContainer>
            <div className="mg-t-50 color-ffffff fnt-size-12 fw-700">성사된 콜라보</div>
            <CarouselCompletedCollabo completedCollabos={testCompletedCollabos}/>
          </MainContainer>
        </div>

        <MainContainer className="mg-t-165 pd-b-100">
          <div className="fnt-size-12 fw-700" style={{color: "#6d6d6d"}}>인기업체</div>
          <CarouselPopularMember popularMembers={testPopularMembers}/>
        </MainContainer>
        
      </div>
    </div>
  );
}

export default VMain;