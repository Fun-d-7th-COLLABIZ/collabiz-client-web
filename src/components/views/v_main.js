import { CarouselCompletedCollabo, CarouselPopularMember, MainContainer } from '../blueprints';

function VMain() {
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

  

  return (
    <div className="w-100-full" style={{minHeight: `${100}vh`}}>
      <div className="d-flex flex-column">
        <div className="position-relative">
          <img src={`${process.env.PUBLIC_URL}/images/main_background_top.png`} alt="main_background_top"
            style={{backgroundColor: "#704C79", backgroundBlendMode: "multiply"}}
          />
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