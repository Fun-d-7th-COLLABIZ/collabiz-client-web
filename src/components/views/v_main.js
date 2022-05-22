import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { CardNewCollabo, CarouselCompletedCollabo, CarouselNotice, CarouselPopularMember, MainContainer, MainSearchAndCollaboBox } from '../blueprints';
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

  var testNotices = [
    {
      title: '공지사항 제목입니다.1',
      content: '이번 업데이트의 어떤 소식입니다.'
    },
    {
      title: '공지사항 제목입니다.2',
      content: '이번 업데이트의 어떤 소식입니다.'
    },
    {
      title: '공지사항 제목입니다.3',
      content: '이번 업데이트의 어떤 소식입니다.'
    },
    {
      title: '공지사항 제목입니다.4',
      content: '이번 업데이트의 어떤 소식입니다.'
    },
    {
      title: '공지사항 제목입니다.5',
      content: '이번 업데이트의 어떤 소식입니다.'
    },
  ];
  
  const limit = 6;
  var newCollaboCards = [];
  for (var i = 0; i < limit; i++) {
    newCollaboCards.push(<CardNewCollabo key={i} idx={i} newCollabo={testNewCollabos[i]}/>);
  }

  const testPopularData = [
    {
      name: 'company 1',
      collaboTitle: 'title 1',
      collaboDescription: 'description 1',
      views: 10,
      hearts: 10,
      shared: 10,
      total: 30
    },
    {
      name: 'company 2',
      collaboTitle: 'title 2',
      collaboDescription: 'description 2',
      views: 20,
      hearts: 20,
      shared: 20,
      total: 60
    },
    {
      name: 'company 3',
      collaboTitle: 'title 3',
      collaboDescription: 'description 3',
      views: 30,
      hearts: 30,
      shared: 30,
      total: 90
    },
    {
      name: 'company 4',
      collaboTitle: 'title 4',
      collaboDescription: 'description 4',
      views: 40,
      hearts: 40,
      shared: 40,
      total: 120
    },
    {
      name: 'company 5',
      collaboTitle: 'title 5',
      collaboDescription: 'description 5',
      views: 50,
      hearts: 50,
      shared: 50,
      total: 150
    },
  ];
  const barChart = (
    <BarChart width={515} height={260} data={testPopularData}>
      <Bar dataKey="total" barSize={44} radius={59} fill="#691B9A"/>
    </BarChart>
  );

  return (
    <div className="w-100-full" style={{minHeight: `${100}vh`}}>
      <div className="d-flex flex-column">
        <div className="position-relative">
          <img src={`${process.env.PUBLIC_URL}/images/main_background_top.png`} alt="main_background_top"
            style={{backgroundColor: "#704C79", backgroundBlendMode: "multiply"}}
          />
        </div>
        <MainContainer>
          <MainSearchAndCollaboBox/>
        </MainContainer>

        <div className="pd-t-100">
          <MainContainer>
            <div className="d-flex">
              <div className="position-relative flex-column">
                <div className="color-primary fnt-size-12 fw-700">콜라비즈 소식</div>
                <div style={{width: "451px", height: "243px", zIndex: "999"}}>
                  <CarouselNotice notices={testNotices}/>
                </div>
              </div>
              <div
                className="position-relative"
                style={{right: "32px", zIndex: "-1"}}
              >
                <img style={{width: "753px", height: "350px"}} alt="notice_meeting" src={`${process.env.PUBLIC_URL}/images/notice_meeting.png`}/>
              </div>
            </div>
          </MainContainer>
        </div>
        
        <MainContainer className="mg-t-70">
          <div className="">
            <img style={{width: "1172px", height: "135px"}} alt="banner_01" src={`${process.env.PUBLIC_URL}/images/banners/banner_01.png`}/>
          </div>
        </MainContainer>

        <div className="pd-t-80"
          style={{height: `${400}px`}}
        >
          <MainContainer>
            <div className="d-flex justify-content-between align-item-center">
              <div className="fnt-size-12 fw-700" style={{color: "#6D6D6D"}}>콜라보 인기순위</div>
              <div className="d-flex" style={{borderRadius: "59px"}}>
                {barChart}
              </div>
              <div className="">
                <button className="btn py-1 px-4 fnt-size-8 fw-700" style={{color: "#562C62", border: "1px solid #8D7A92", borderRadius: "26px"}}>더보기</button>
              </div>
            </div>
          </MainContainer>
        </div>

        <div className="pd-t-40" style={{height: `${793}px`, backgroundColor: "#F7F5F7"}}>
          <MainContainer>
            <div className="d-flex justify-content-between align-item-center">
              <div className="fnt-size-12 fw-700" style={{color: "#6D6D6D"}}>신규 콜라보</div>
              <div className="" style={{border: "1px solid #8D7A92", borderRadius: "26px"}}>
                <button className="btn py-1 px-4 fnt-size-8 fw-700" style={{color: "#562C62"}}>더보기</button>
              </div>
            </div>
            <div className="d-flex flex-wrap" style={{width: "100%", height: "100%"}}>
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