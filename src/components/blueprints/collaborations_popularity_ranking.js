import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function CollaborationsPopularityRanking(props) {

  const barChart = (data, i) => (
    <BarChart key={i} width={515} height={260} data={data}>
      <YAxis />
      <XAxis className="mg-t-10" dataKey="item"/>
      <Bar dataKey="points" barSize={44} radius={59} fill="#691B9A"/>
    </BarChart>
  );

  return (
    <div className="d-flex">
      <div className="mg-t-20 position-relative" style={{width: "50%"}}>
        {barChart(props.data[0])}
      </div>
      <div className="bg-primary color-ffffff"
        style={{borderRadius: "12px", width: "50%", height: "265px", padding: "30px 44px"}}
      >
        <div>
          <div className="d-flex justify-content-between">
            <div className="fw-700">1위&nbsp;&nbsp;&nbsp;{props.data[0][0].name}</div>
            <div className="fnt-size-6">2022. 06. 02. 기준</div>
          </div>
          <div className="d-flex align-items-center justify-content-center" style={{marginTop: "26px"}}>
            <div>
              <img style={{width: "206", height: "145"}} alt="popular_member_img" src={`${process.env.PUBLIC_URL}/images/popular_member.png`}/>
            </div>
            <div style={{marginLeft: "25px"}}>
              <div className="fw-700" style={{fontSize: "15px"}}>비서직군 파견 가능한 업체 찾습니다.</div>
              <div className="mg-t-16 fnt-size-7">3개월간 중국 출장가는데, 중국어 가능한 비서직군 파견 가능한 업체 있을까요? 업무용 스마트폰 10대 제공해드립니다. </div>
              <div className="d-flex justify-content-between pd-t-20">
                <div className="d-flex">
                  <div className="d-flex align-items-center">
                    <img className="" alt="heart_grey"
                      src={`${process.env.PUBLIC_URL}/images/heart_grey.png`}
                      style={{width: "10px", height: "11px"}}
                    />
                    <div className="text-center color-838383 fnt-size-5" style={{marginLeft: "6px"}}>{216}</div>
                  </div>
                  <div className="d-flex align-items-center mg-l-10">
                    <img className="" alt="view"
                      src={`${process.env.PUBLIC_URL}/images/primary_view.png`}
                      style={{width: "16px", height: "8px"}}
                    />
                    <div className="text-center color-838383 fnt-size-5" style={{marginLeft: "6px"}}>{235}</div>
                  </div>
                  <div className="d-flex align-items-center mg-l-10">
                    <img className="" alt="view"
                      src={`${process.env.PUBLIC_URL}/images/primary_share.png`}
                      style={{width: "11px", height: "11px"}}
                    />
                    <div className="text-center color-838383 fnt-size-5" style={{marginLeft: "6px"}}>{161}</div>
                  </div>
                </div>
                <button className="btn p-0 fw-500 fnt-size-6 color-ffffff">자세히 보기</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CollaborationsPopularityRanking;