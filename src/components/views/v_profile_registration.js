import React, { useState, useRef, useEffect } from 'react';
import Map from '../../api/map';
import API from '../../api/api';
import { ModalContext } from '../../context';
import { useLocation } from 'react-router-dom';
import { MainContainer } from '../blueprints';
import { VCompleteRegister, VMemberProfile } from '../views';

function VProfileRegistration() {
  const { handleModal, closeModal } = React.useContext(ModalContext);
  const [isSubmit, setIsSubmit] = useState(false);
  
  const [profileImage, setProfileImage] = useState(null);
  const [bannerImage, setBannerImage] = useState(null);
  const [profileImgBase64, setProfileImgBase64] = useState([]);
  const [bannerImgBase64, setBannerImgBase64] = useState([]);
  const [file1, setFile1] = useState(null);
  const [file2, setFile2] = useState(null);
  const [file3, setFile3] = useState(null);

  const profileImgInput = useRef(null);
  const bannerImgInput = useRef(null);
  const file1Input = useRef(null);
  const file2Input = useRef(null);
  const file3Input = useRef(null);

  const [companyUrl, setCompanyUrl] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [businessRegistNum, setBusinessRegistNum] = useState('');
  const [address, setAddress] = useState('');
  const [address2, setAddress2] = useState('');
  const [contactNum, setContactNum] = useState('');
  const [email, setEmail] = useState('');
  const [faxNum, setFaxNum] = useState('');
  const [companyIntroductionSummary, setCompanyIntroductionSummary] = useState('');
  const [companyIntroduction, setCompanyIntroduction] = useState('');
  
  const location = useLocation();
  useEffect(() => {
    var state = location.state;
    if (state === null)
      return;
    setCompanyName(state.companyName);
    setEmail(state.email);
    setBusinessRegistNum(state.businessRegistNum);
  }, []);


  function handleChangeFile(e) {
    var id = e.target.id;
    if (e.target.files === null || e.target.files.length < 1)
      return;

    if (id === 'ex_filename_1') {
      file1Input.current.value = e.target.files[0].name;
      setFile1(e.target.files[0]);
      return;
    }
    if (id === 'ex_filename_2') {
      file2Input.current.value = e.target.files[0].name;
      setFile2(e.target.files[0]);
      return;
    }
    if (id === 'ex_filename_3') {
      file3Input.current.value = e.target.files[0].name;
      setFile3(e.target.files[0]);
      return;
    }
    
    let reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]); // ????????? ?????? ????????? ??????
    reader.onloadend = () => {
      const base64 = reader.result;
      if (base64) {
        var base64Sub = base64.toString();
        if (id === 'profile-img') {
          setProfileImgBase64([]);
          setProfileImage(e.target.files[0]);
          setProfileImgBase64(imgBase64 => [...imgBase64, base64Sub]);
        }
        else if (id === 'banner-img') {
          setBannerImgBase64([]);
          setBannerImage(e.target.files[0]);
          setBannerImgBase64(imgBase64 => [...imgBase64, base64Sub]);
        }
      }
    }
    
  }


  function validate() {
    if (email.trim()=== '') {
      return '???????????? ????????? ?????????.';
    }
    else if (companyUrl.trim() === '') {
      return 'URL ????????? ????????? ?????????.';
    }
    else if (companyName.trim() === '') {
      return '???????????? ????????? ?????????.';
    }
    else if (businessRegistNum.trim() === '') {
      return '???????????????????????? ????????? ?????????.';
    }
    else if (address.trim() === '') {
      return '????????? ????????? ?????????.';
    }
    else if (address2.trim() === '') {
      return '??????????????? ????????? ?????????.';
    }
    else if (faxNum.trim() === '') {
      return '?????? ????????? ????????? ?????????.';
    }
    else if (companyIntroduction.trim() === '' || companyIntroductionSummary.trim() === '') {
      return '?????? ????????? ?????? ????????? ?????????.';
    }
    else
      return true;
  }

  async function submitRegister() {
    var validateResult = validate();
    if (validateResult !== true) {
      alert(validateResult);
      return;
    }

    setIsSubmit(true);
    try {
      var formData = new FormData();
      let requestParams = {
          email: email,
          companyName: companyName,
          companyUrl: companyUrl,
          region: address,
          regionDetail: address2,
          companyIntroductionSummary: companyIntroductionSummary,
          companyIntroduction: companyIntroduction,
          companyContactNumber: contactNum,
          businessRegistrationNumber: businessRegistNum
      };

      formData.append('profileDto',
        new Blob([JSON.stringify(requestParams)],
        { type: 'application/json' }
      ));

      formData.append('ProfileImage', profileImage);
      formData.append('BannerImage', bannerImage);
      formData.append('File1', file1);
      formData.append('File2', file2);
      formData.append('File3', file3);

      var registerResult = await API.db.post('/profile', formData);
      
      handleModal(
        <VMemberProfile
          style={{width: "974px", height: "85%"}}
          registerResult={registerResult.data}
          onClose={() => {
            closeModal();
            window.location.href = '/';
          }}
        />
      );
    } catch (e) {
      console.log('profile register error: ', e);
      if (e?.response?.data?.message) {
        const msg = e.response.data.message;
        alert('submit register error: ' + msg);
      } else if (e?.response?.data?.error) {
        const msg = e.response.data.error;
        alert('submit register error: ' + msg);
      } else
        alert('profile register error: ', e);
    }
    setIsSubmit(false);
  }
  
  return (
    <MainContainer className="w-100 bg-f0f0f0" style={{height: `${100}%`}}>
      <div className="w-100 mx-auto d-flex flex-column align-items-center"
        style={{marginLeft: "100px", marginRight: "100px"}}
      >
        <div className="mg-t-80 text-center fnt-size-17 fw-700">????????? ??????</div>
        <div className="mg-t-25 bg-ffffff" style={{padding: "40px 100px"}}>
          <div style={{width: "774px", height: "1779px"}}>
            <div>
              <div className="text-center">
                <div className="position-relative">
                  <img alt="profile_image"
                    className="rounded-circle"
                    src={profileImgBase64.length > 0 ? profileImgBase64[0] : `${process.env.PUBLIC_URL}/images/profile_sample.png`}
                    style={{width: "145px", height: "145px"}}
                  />
                  <button className="btn p-0 position-absolute" style={{bottom: "0px", right: "40%"}}
                    onClick={(e) => {
                      e.preventDefault();
                      profileImgInput.current.click();
                    }}
                  >
                    <img alt="camera_button"
                      src={`${process.env.PUBLIC_URL}/images/profile_camera_btn.png`}
                      style={{width: "42px", height: "42px"}}
                    />
                  </button>
                  <input className="img-input"
                    type="file"
                    id="profile-img"
                    accept="image/*"
                    ref={profileImgInput}
                    style={{display: "none"}}
                    onChange={handleChangeFile}
                  />
                </div>
              </div>
              <div className="mg-t-30 fnt-size-9">???????????????</div>
              <div className="mt-2">
                <button className="btn p-0"
                  onClick={(e) => {
                    e.preventDefault();
                    bannerImgInput.current.click();
                  }}
                >
                  <img alt="profile_banner_image"
                    src={bannerImgBase64.length > 0 ? bannerImgBase64[0] : `${process.env.PUBLIC_URL}/images/profile_banner_background.png`}
                    style={{width: "774px", height: "140px"}}
                  />
                </button>
                <input className="img-input"
                  type="file"
                  id="banner-img"
                  accept="image/*"
                  ref={bannerImgInput}
                  style={{display: "none"}}
                  onChange={handleChangeFile}
                />
              </div>
              <div className="mg-t-20">
                <input className="py-2"
                  value={companyUrl}
                  style={{padding: "0 20px", width: "100%", color: "#606060"}}
                  onChange={(e) => setCompanyUrl(e.target.value)}
                  placeholder="?????? ???, ????????? URL ????????? ??????????????????."
                />
              </div>
            </div>

            <div className="mg-t-70 d-flex justify-content-between align-items-center">
              <div className="fnt-size-9">?????????</div>
              <div>
                <input value={companyName} placeholder="???????????? ??????????????????."
                  style={{padding: "14px 20px", width: "578px"}}
                  onChange={(e) => setCompanyName(e.target.value)}
                />
              </div>
            </div>

            <div className="mg-t-30 d-flex justify-content-between align-items-center">
              <div className="fnt-size-9">?????????????????????</div>
              <div>
                <input value={businessRegistNum} placeholder="???????????????????????? ??????????????????."
                  style={{padding: "14px 20px", width: "578px"}}
                  onChange={(e) => setBusinessRegistNum(e.target.value)}
                />
              </div>
            </div>

            <div className="mg-t-30 d-flex justify-content-between">
              <div className="pt-2 fnt-size-9">??????</div>
              <div className="d-flex">
                <div className="d-flex flex-column">
                  <input value={address} placeholder="????????? ??????????????????."
                    style={{padding: "14px 20px", width: "370px"}}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                  <input value={address2} placeholder="??????????????? ??????????????????."
                    className="mg-t-10" style={{padding: "14px 20px", width: "370px"}}
                    onChange={(e) => setAddress2(e.target.value)}
                  />
                </div>
                <div style={{marginLeft: "20px"}}>
                  <Map width={188} height={118}/>
                </div>
              </div>
            </div>

            <div className="mg-t-30 d-flex justify-content-between align-items-center">
              <div value={contactNum} className="fnt-size-9">????????? ?????????</div>
              <div>
                <input placeholder="???????????? ??????????????????."
                  style={{padding: "14px 20px", width: "578px"}}
                  onChange={(e) => setContactNum(e.target.value)}
                />
              </div>
            </div>

            <div className="mg-t-30 d-flex justify-content-between align-items-center">
              <div className="fnt-size-9">?????????</div>
              <div>
                <input value={email} placeholder="????????? ????????? ??????????????????."
                  style={{padding: "14px 20px", width: "578px"}}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div className="mg-t-30 d-flex justify-content-between align-items-center">
              <div className="fnt-size-9">Fax</div>
              <div>
                <input value={faxNum} placeholder="Fax ????????? ??????????????????."
                  style={{padding: "14px 20px", width: "578px"}}
                  onChange={(e) => setFaxNum(e.target.value)}
                />
              </div>
            </div>

            <div className="mg-t-30 d-flex justify-content-between">
              <div className="pt-2 fnt-size-9">?????? ??????</div>
              <div className="d-flex flex-column">
                <input value={companyIntroductionSummary} placeholder="?????? ????????? ????????? ??????????????????."
                  style={{padding: "14px 20px", width: "578px"}}
                  onChange={(e) => setCompanyIntroductionSummary(e.target.value)}
                />
                <textarea
                  className="mg-t-10"
                  rows="12"
                  value={companyIntroduction}
                  onChange={(e) => setCompanyIntroduction(e.target.value)}
                  style={{padding: "14px 20px", width: "578px"}}
                  placeholder="?????? ????????? ??????????????????. (1000??? ??????)"
                >

                </textarea>
              </div>
            </div>

            <div className="mg-t-20 d-flex justify-content-between align-items-center">
              <div className="fnt-size-9">???????????? 1</div>
              <div className="filebox position-relative">
                <input className="upload-name"
                  style={{padding: "8px 20px", width: "578px"}}
                  placeholder="????????? ??????????????????."
                  ref={file1Input}
                  disabled="disabled"
                />
                <label className="position-absolute" style={{right: "0", bottom: "2px"}} htmlFor="ex_filename_1">
                  <img alt="file_button_1" src={`${process.env.PUBLIC_URL}/images/add_file.png`}/>
                </label>
                <input type="file" id="ex_filename_1" className="upload-hidden"
                  onChange={handleChangeFile}
                />
              </div>
            </div>

            <div className="mg-t-10 d-flex justify-content-between align-items-center">
              <div className="fnt-size-9">???????????? 2</div>
              <div className="filebox position-relative">
                <input className="upload-name"
                  style={{padding: "8px 20px", width: "578px"}}
                  placeholder="????????? ??????????????????."
                  ref={file2Input}
                  disabled="disabled"
                />
                <label className="position-absolute" htmlFor="ex_filename_2" style={{right: "0", bottom: "2px"}}>
                  <img alt="file_button_2" src={`${process.env.PUBLIC_URL}/images/add_file.png`}/>
                </label>
                <input type="file" id="ex_filename_2" className="upload-hidden"
                  onChange={handleChangeFile}
                />
              </div>
            </div>

            <div className="mg-t-10 d-flex justify-content-between align-items-center">
              <div className="fnt-size-9">???????????? 3</div>
              <div>
                <div className="filebox position-relative">
                  <input className="upload-name"
                    style={{padding: "8px 20px", width: "578px"}}
                    placeholder="????????? ??????????????????."
                    ref={file3Input}
                    disabled="disabled"
                  />
                  <label className="position-absolute" htmlFor="ex_filename_3" style={{right: "0", bottom: "2px"}}>
                    <img alt="file_button_3" src={`${process.env.PUBLIC_URL}/images/add_file.png`}/>
                  </label>
                  <input type="file" id="ex_filename_3" className="upload-hidden"
                    onChange={handleChangeFile}
                  />
                </div>
              </div>
            </div>

            <div className="mg-t-70 d-flex justify-content-between">
              <button className="py-3 btn btn-outline2-primary fw-500 fnt-size-9"
                style={{width: "49%"}}
                onClick={() => {
                  return handleModal(
                    <VCompleteRegister companyName={companyName}
                      style={{width: "686px", height: "258px"}}
                      onClose={() => {
                        closeModal();
                        window.location.href = '/';
                      }}
                    />
                  );
                }}
              >
                ????????? ??????
              </button>
              <button className="py-3 btn btn-primary fw-500 fnt-size-9"
                style={{width: "49%"}}
                onClick={!isSubmit ? submitRegister : null}
              >
                ??????
              </button>
            </div>
          </div>
        </div>
        <div className="pd-b-180"></div>
      </div>
    </MainContainer>
  );
}

export default VProfileRegistration;