import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Map from '../../api/map';

function VMemberProfile(props) {
  const registerResult = props.registerResult;
  const [memberId, setMemberId] = useState(0);
  const [profileImage, setProfileImage] = useState(null);
  const [bannerImage, setBannerImage] = useState(null);
  const [file1, setFile1] = useState(null);
  const [file2, setFile2] = useState(null);
  const [file3, setFile3] = useState(null);

  const [companyUrl, setCompanyUrl] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [companyLevel, setCompanyLevel] = useState('');
  const [onGoingCollabo, setOnGoingCollabo] = useState('');
  const [businessRegistNum, setBusinessRegistNum] = useState('');
  const [address, setAddress] = useState('');
  const [address2, setAddress2] = useState('');
  const [companyIntroduction, setCompanyIntroduction] = useState('');
  const [companyIntroductionDetail, setCompanyIntroductionDetail] = useState('');

  useEffect(() => {
    setMemberId(registerResult.id);
    var data;
    async function getProfileImages() {
      await axios.all([
        axios.get(`/profile/data/${memberId}`),
        axios.get(`/profile/${memberId}`, { responseType: 'blob' }),
        axios.get(`/banner/${memberId}`,  { responseType: 'blob' })
      ]).then(
        axios.spread((res1, res2, res3) => {
          data = res1.data;
          const profileUrl = window.URL.createObjectURL(new Blob([res2.data], { type: res1.headers['content-type'] } ));
          setProfileImage(profileUrl);
          const bannerUrl = window.URL.createObjectURL(new Blob([res3.data], { type: res2.headers['content-type'] } ));
          setBannerImage(bannerUrl);
        })
      ).catch(e => {
        console.log(`profile image onload error: ${e}`)
      });

      setCompanyName(data.companyName);
      setCompanyLevel(data.level);
      setBusinessRegistNum(data.businessRegistrationNumber);
      setCompanyIntroduction(data.companyIntroductionSummary);
      setCompanyIntroductionDetail(data.companyIntroduction);
      setCompanyUrl(data.companyUrl);
      setAddress(data.region);
      setAddress2(data.regionDetail);
      setFile1(data.uploadFileName1);
      setFile2(data.uploadFileName2);
      setFile3(data.uploadFileName3);
    }
    getProfileImages();
  }, []);

  async function downloadFile(fileNumber, fileName) {
    var url = `/profile/${fileNumber}/${memberId}`;
    var xhr = new XMLHttpRequest(),
        a = document.createElement('a'),
        file;
    
    xhr.open('GET', url, true);
    xhr.responseType = 'blob';
    xhr.onload = function () {
      file = new Blob([xhr.response], { type : 'application/octet-stream' });
      a.href = window.URL.createObjectURL(file);
      a.download = fileName;
      a.click();
    };
    xhr.send();
  }

  
  return (
    <div className="flex-wrap" style={{width: "974px", height: "100%", overflow: "scroll"}} >
      <div className="d-flex mt-4 me-4 justify-content-end">
        <button className="btn p-0 size-18" onClick={props.onClose}>
          <img alt="close_btn" src={`${process.env.PUBLIC_URL}/images/close_btn.png`}/>
        </button>
      </div>
      <div style={{margin: "38px 100px 0px 100px"}}>
        <div className="position-relative">
          <Link to={{companyUrl}}>
            <img alt="profile_banner_image"
              src={bannerImage != null ? bannerImage : `${process.env.PUBLIC_URL}/images/profile_banner_background.png`}
              style={{width: "776px", height: "190px", opacity: "45%"}}
            />
          </Link>
          <div className="d-flex position-absolute" style={{top: "32px", left: "34px"}}>
            <div>
              <img alt="profile_image"
                className="rounded-circle"
                src={profileImage != null ? profileImage : `${process.env.PUBLIC_URL}/images/profile_sample.png`}
                style={{width: "126px", height: "126px"}}
              />
            </div>
            <div className="flex-column" style={{marginLeft: "24px"}}>
              <div className="text-start fw-700 fnt-size-12">{companyName}</div>
              <div className="d-flex">
                <div className="text-start" style={{width: "179px"}}>콜라보 레벨</div>
                <div className="fw-700">Lv.{companyLevel}</div>
              </div>
              <div className="d-flex">
                <div className="text-start" style={{width: "179px"}}>진행중인 업체 수</div>
                <div className="fw-700">{companyLevel}</div>
              </div>
              <div className="d-flex">
                <div className="text-start" style={{width: "179px"}}>사업자등록번호</div>
                <div className="fw-700">{businessRegistNum}</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mg-t-40 text-start color-primary fw-700 fnt-size-10">{companyIntroduction}</div>
        <div className="mg-t-20 text-start fnt-size-9">{companyIntroductionDetail}</div>
        
        <div className="mg-t-30 d-flex justify-content-between align-items-center">
          <div className="fnt-size-9">첨부파일 1</div>
          <div className="filebox position-relative">
            <input className="upload-name"
              style={{padding: "8px 20px", width: "578px"}}
              placeholder={file1}
              disabled="disabled"
            />
            <label className="position-absolute" style={{right: "0", bottom: "2px"}} htmlFor="ex_filename_1">
              <img alt="download_button_1" src={`${process.env.PUBLIC_URL}/images/icon_download.png`}/>
            </label>
            <button id="ex_filename_1" className="upload-hidden btn hidden-btn" onClick={(e) => { downloadFile('file1', file1); }}/>
          </div>
        </div>

        <div className="mg-t-10 d-flex justify-content-between align-items-center">
          <div className="fnt-size-9">첨부파일 2</div>
          <div className="filebox position-relative">
            <input className="upload-name"
              style={{padding: "8px 20px", width: "578px"}}
              placeholder={file2}
              disabled="disabled"
            />
            <label className="position-absolute" htmlFor="ex_filename_2" style={{right: "0", bottom: "2px"}}>
              <img alt="download_button_1" src={`${process.env.PUBLIC_URL}/images/icon_download.png`}/>
            </label>
            <button id="ex_filename_2" className="upload-hidden btn hidden-btn" onClick={(e) => { downloadFile('file2', file2); }}/>
          </div>
        </div>

        <div className="mg-t-10 d-flex justify-content-between align-items-center">
          <div className="fnt-size-9">첨부파일 3</div>
          <div>
            <div className="filebox position-relative">
              <input className="upload-name"
                style={{padding: "8px 20px", width: "578px"}}
                placeholder={file3}
                disabled="disabled"
              />
              <label className="position-absolute" htmlFor="ex_filename_3" style={{right: "0", bottom: "2px"}}>
                <img alt="download_button_3" src={`${process.env.PUBLIC_URL}/images/icon_download.png`}/>
              </label>
              <button id="ex_filename_3" className="upload-hidden btn hidden-btn" onClick={(e) => { downloadFile('file3', file3); }}/>
            </div>
          </div>
        </div>

        <div className="mg-t-80 mb-5">
          <Map width={776} height={360}/>
        </div>
      </div>
    </div>
  );
}

export default VMemberProfile;