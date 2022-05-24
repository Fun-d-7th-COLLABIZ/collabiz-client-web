import React, { useState, useEffect } from 'react';
import Map from '../../api/map';

function VMemberProfile(props) {
  const [profileImage, setProfileImage] = useState(null);
  const [bannerImage, setBannerImage] = useState(null);
  const [profileImgBase64, setProfileImgBase64] = useState([]);
  const [bannerImgBase64, setBannerImgBase64] = useState([]);
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

  const registerResult = props.registerResult;
  useEffect(() => {
    if (registerResult === undefined)
    return;
    
    setCompanyName(registerResult.companyName);
    setCompanyLevel(registerResult.level);
    setBusinessRegistNum(registerResult.businessRegistrationNumber);
    setCompanyIntroduction(registerResult.companyIntroduction);
    setCompanyIntroductionDetail(registerResult.companyIntroduction);
    setFile1(registerResult.storeFileName1);
    setFile2(registerResult.storeFileName2);
    setFile3(registerResult.storeFileName3);
    // setAddress(registerResult.address);

    if (registerResult.storeProfileImage === null
      && registerResult.storeBannerImage === null)
    return;

    window.URL = window.URL || window.webkitURL;
    
    let reader = new FileReader();
    if (registerResult.storeProfileImage) {
      var fileName = registerResult.storeProfileImage;
      let url = `/Users/csy/Downloads/` + registerResult.storeProfileImage;
      var xhr = new XMLHttpRequest();
      var a = document.createElement('a');
      var file;
      xhr.open('GET', url, true);
      
      xhr.responseType = 'blob';
      xhr.onload = function() {
        file = new Blob([xhr.response], { type : 'application/octet-stream' });
        a.href = window.URL.createObjectURL(file);
        a.download = fileName;
        a.click();
        setProfileImgBase64(a.href);
      }
      xhr.send();

      // xhr.setRequestHeader('Authorization', 'Bearer' + token);
      // xhr.onreadystatechange = function() {
      //   if (this.readyState === 4 && this.status === 200) {
      //     let url = window.URL || window.webkitURL;
      //     let imgSrc = url.createObjectURL(this.response);
      //     setProfileImage(imgSrc);
      //   }
      // }
      
    }
    if (registerResult.storeBannerImage) {
      var fileName = registerResult.storeBannerImage;
      let url = `/Users/csy/Downloads/` + registerResult.storeBannerImage;
      var xhr = new XMLHttpRequest();
      var a = document.createElement('a');
      var file;
      xhr.open('GET', url, true);
      
      xhr.responseType = 'blob';
      xhr.onload = function() {
        file = new Blob([xhr.response], { type : 'application/octet-stream' });
        a.href = window.URL.createObjectURL(file);
        a.download = fileName;
        setBannerImgBase64(a.href);
        a.click();
      }
      xhr.send();


      // let url = `/Users/csy/Downloads/` + registerResult.storeBannerImage;
      // let xhr = new XMLHttpRequest();
      // xhr.open('GET', url, true);
      // // xhr.setRequestHeader('Authorization', 'Bearer' + token);
      // xhr.responseType = 'blob';
      // xhr.send();
      // xhr.onreadystatechange = function() {
      //   if (this.readyState === 4 && this.status === 200) {
      //     let url = window.URL || window.webkitURL;
      //     let imgSrc = url.createObjectURL(this.response);
      //     setBannerImage(imgSrc);
      //   }
      // }
    }
  }, []);

  
  return (
    <div className="flex-wrap" style={{width: "974px", height: "100%", overflow: "scroll"}} >
      <div className="d-flex mt-4 me-4 justify-content-end">
        <button className="btn p-0 size-18" onClick={props.onClose}>
          <img alt="close_btn" src={`${process.env.PUBLIC_URL}/images/close_btn.png`}/>
        </button>
      </div>
      <div style={{margin: "38px 100px 0px 100px"}}>
        <div className="position-relative">
          <img alt="profile_banner_image"
            src={bannerImgBase64.length > 0 ? bannerImgBase64[0] : `${process.env.PUBLIC_URL}/images/profile_banner_background.png`}
            style={{width: "776px", height: "190px", opacity: "45%"}}
          />
          <div className="d-flex position-absolute" style={{top: "32px", left: "34px"}}>
            <div>
              <img alt="profile_image"
                className="rounded-circle"
                src={profileImgBase64.length > 0 ? profileImgBase64[0] : `${process.env.PUBLIC_URL}/images/profile_sample.png`}
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
                <div className="fw-700">{companyName}</div>
              </div>
              <div className="d-flex">
                <div className="text-start" style={{width: "179px"}}>사업자등록번호</div>
                <div className="fw-700">{businessRegistNum}</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mg-t-40 text-start color-primary fw-700 fnt-size-10">{companyIntroduction}</div>
        <div className="mg-t-20 text-start fnt-size-9">{companyIntroduction}</div>
        
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
            <input type="file" id="ex_filename_1" className="upload-hidden"/>
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
            <input type="file" id="ex_filename_2" className="upload-hidden"/>
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
              <input type="file" id="ex_filename_3" className="upload-hidden"/>
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