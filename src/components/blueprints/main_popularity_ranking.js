import { CarouselPopulartityRanking, MainContainer } from '../blueprints';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function MainPopularityRanking(props) {
  const barChart = (
    <BarChart width={515} height={260} data={props.data}>
      <Bar dataKey="total" barSize={44} radius={59} fill="#691B9A"/>
    </BarChart>
  );

  return (
    <MainContainer>
      <div className="d-flex justify-content-between align-item-center">
        <div className="fnt-size-12 fw-700" style={{color: "#6D6D6D"}}>콜라보 인기순위</div>
        <div className="">
          <button className="btn py-1 px-4 fnt-size-8 fw-700" style={{color: "#562C62", border: "1px solid #8D7A92", borderRadius: "26px"}}>더보기</button>
        </div>
      </div>
      <div className="d-flex w-100 justify-content-around align-items-between">
        <div className="" style={{borderRadius: "59px", width: "50%"}}>
          {barChart}
        </div>
        <div style={{width: "50%"}}>
          <CarouselPopulartityRanking data={props.data}/>
        </div>
      </div>
    </MainContainer>
  );
}

export default MainPopularityRanking;