import { MainContainer } from "../blueprints";
import { LeftSidebarMypage } from "../fragments";

function VMyProfile() {
  return (
    <div className="bg-f0f0f0 w-100">
      <MainContainer>
        <div className="d-flex " style={{height: `${100}%`, paddingBottom: "170px"}}>
          <LeftSidebarMypage />
        </div>
      </MainContainer>
    </div>
  );
}

export default VMyProfile;