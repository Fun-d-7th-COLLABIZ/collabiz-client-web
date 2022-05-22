import { MainContainer } from '../blueprints';
import Map from '../../api/map';

function VProfileRegistration() {
  
  return (
    <MainContainer className="w-100 bg-f0f0f0" style={{height: `${100}%`}}>
      <div className="w-100 mx-auto d-flex flex-column align-items-center"
        style={{marginLeft: "100px", marginRight: "100px"}}
      >
        <div className="mg-t-80 text-center fnt-size-17 fw-700">프로필 생성</div>
        <div
          className="mg-t-25 bg-ffffff"
          style={{padding: "40px 100px"}}
        >
          <div className=""
            style={{width: "774px", height: "1779px"}}
          >
            <div>

            </div>
            <div className=''>
              <div className="text-center">
                <div className="position-relative">
                  <img alt="profile_sample_image"
                    className="rounded-circle"
                    src={`${process.env.PUBLIC_URL}/images/profile_sample.png`}
                    style={{width: "145px", height: "145px"}}
                  />
                  <button className="btn p-0 position-absolute" style={{bottom: "0px", right: "40%"}}>
                    <img alt="camera_button"
                      src={`${process.env.PUBLIC_URL}/images/profile_camera_btn.png`}
                      style={{width: "42px", height: "42px"}}
                    />
                  </button>
                </div>
              </div>
              <div className="mg-t-30 fnt-size-9">배너이미지</div>
              <div className="mt-2">
                <button className="btn p-0">
                <img alt="profile_banner_background"
                  src={`${process.env.PUBLIC_URL}/images/profile_banner_background.png`}
                  style={{width: "774px", height: "140px"}}
                />
                </button>
              </div>
              <div className="mg-t-20">
                <input className="py-2"
                  style={{padding: "0 20px", width: "100%", color: "#606060"}}
                  placeholder="클릭 시, 이동할 URL 주소를 입력해주세요."
                />
              </div>
            </div>

            <div className="mg-t-70 d-flex justify-content-between">
              <div className="fnt-size-9">회사명</div>
              <div>
                <input placeholder="" style={{padding: "14px 20px", width: "578px"}}/>
              </div>
            </div>

            <div className="mg-t-30 d-flex justify-content-between">
              <div className="fnt-size-9">사업자등록번호</div>
              <div>
                <input placeholder=""
                  style={{padding: "14px 20px", width: "578px"}}
                />
              </div>
            </div>

            <div className="mg-t-30 d-flex justify-content-between">
              <div className="fnt-size-9">주소</div>
              <div className="d-flex">
                <div className="d-flex flex-column">
                  <input placeholder="주소를 검색해주세요." style={{padding: "14px 20px", width: "370px"}}/>
                  <input placeholder="상세주소를 입력해주세요." className="mg-t-10" style={{padding: "14px 20px", width: "370px"}}/>
                </div>
                <div style={{marginLeft: "20px"}}>
                  <Map width={188} height={118}/>
                </div>
              </div>
            </div>

            <div className="mg-t-30 d-flex justify-content-between">
              <div className="fnt-size-9">담당자 연락처</div>
              <div>
                <input placeholder="연락처를 입력해주세요." style={{padding: "14px 20px", width: "578px"}}/>
              </div>
            </div>

            <div className="mg-t-30 d-flex justify-content-between">
              <div className="fnt-size-9">이메일</div>
              <div>
                <input placeholder="" style={{padding: "14px 20px", width: "578px"}}/>
              </div>
            </div>

            <div className="mg-t-30 d-flex justify-content-between">
              <div className="fnt-size-9">Fax</div>
              <div>
                <input placeholder="Fax 번호를 입력해주세요." style={{padding: "14px 20px", width: "578px"}}/>
              </div>
            </div>

            <div className="mg-t-30 d-flex justify-content-between">
              <div className="fnt-size-9">회사 소개</div>
              <div className="d-flex flex-column">
                <input placeholder="회사 소개를 간략히 입력해주세요." style={{padding: "14px 20px", width: "578px"}}/>
                <textarea
                  className="mg-t-10"
                  rows="12"
                  style={{padding: "14px 20px", width: "578px"}}
                  placeholder="회사 소개를 입력해주세요. (1000자 내외)"
                >

                </textarea>
              </div>
            </div>

            <div className="mg-t-20 d-flex justify-content-between">
              <div className="fnt-size-9">첨부파일 1</div>
              <div class="filebox position-relative">
                <input class="upload-name"
                  style={{padding: "8px 20px", width: "578px"}}
                  value="파일을 첨부해주세요."
                  disabled="disabled"
                />
                <label className="position-absolute" style={{right: "0", bottom: "2px"}} for="ex_filename">
                  <img alt="file_button" src={`${process.env.PUBLIC_URL}/images/add_file.png`}/>
                </label>
                <input type="file" id="ex_filename" class="upload-hidden"/>
              </div>
            </div>

            <div className="mg-t-10 d-flex justify-content-between">
              <div className="fnt-size-9">첨부파일 2</div>
              <div class="filebox position-relative">
                <input class="upload-name"
                  style={{padding: "8px 20px", width: "578px"}}
                  value="파일을 첨부해주세요."
                  disabled="disabled"
                />
                <label className="position-absolute" for="ex_filename" style={{right: "0", bottom: "2px"}}>
                  <img alt="file_button" src={`${process.env.PUBLIC_URL}/images/add_file.png`}/>
                </label>
                <input type="file" id="ex_filename" class="upload-hidden"/>
              </div>
            </div>

            <div className="mg-t-10 d-flex justify-content-between">
              <div className="fnt-size-9">첨부파일 3</div>
              <div>
                <div class="filebox position-relative">
                  <input class="upload-name"
                    style={{padding: "8px 20px", width: "578px"}}
                    value="파일을 첨부해주세요."
                    disabled="disabled"
                  />
                  <label className="position-absolute" for="ex_filename" style={{right: "0", bottom: "2px"}}>
                    <img alt="file_button" src={`${process.env.PUBLIC_URL}/images/add_file.png`}/>
                  </label>
                  <input type="file" id="ex_filename" class="upload-hidden"/>
                </div>
              </div>
            </div>

            <div className="mg-t-70 d-flex justify-content-between">
              <button className="py-3 btn btn-outline2-primary fw-500 fnt-size-9" style={{width: "49%"}}>나중에 하기</button>
              <button className="py-3 btn btn-primary fw-500 fnt-size-9" style={{width: "49%"}}>완료</button>
            </div>
          </div>
        </div>
        <div className="pd-b-180"></div>
      </div>
    </MainContainer>
  );
}

export default VProfileRegistration;