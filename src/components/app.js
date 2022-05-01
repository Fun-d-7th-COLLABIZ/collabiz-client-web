import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import API from '../api/api';
import { AppState, defaultAppState, ModalProvider } from '../context';
import { VCollaboRegistration, VGuide, VIntroduction, VMain, VNotice, VPrivacyPolicy, VQna, VRegister, VTermsOfService } from './views';
import { DataAuth } from './data';
import { WrapHeaderFooter, WrapScrollTo } from './wrappers';

function App() {
  const [auth, setAuth] = useState(defaultAppState);
  API.initAxios();
  // useEffect(() => {
  //   API.initAxios()
  // }, []);

  async function _login(loginEmail, pw) {
    var loginResult = await DataAuth.login(loginEmail, pw);

    setAuth(loginResult);

    return loginResult;
  }

  function _logout() {
    DataAuth.logout();
  }

  return (
    <Router>
      <AppState.Provider value={Object.assign({}, auth, {
        login: _login,
        logout: _logout,
      })}>
        <ModalProvider>
          <div style={{minHeight: `${105}vh`}}>
            <WrapScrollTo>
              <Routes>
                <Route element={<WrapHeaderFooter />}>
                  <Route path="/register"                 element={<VRegister       />} />
                  {/* <Route path="/login"                    element={<VLogin          />} /> */}
                  
                  {/* collaboration */}
                  <Route path="/collaborations"           element={<VRegister            />} />
                  <Route path="/collaborations/info"      element={<VRegister            />} />
                  <Route path="/collaborations/term"      element={<VRegister            />} />
                  <Route path="/collaborations/loc"       element={<VRegister            />} />
                  <Route path="/collaborations/keyword"   element={<VRegister            />} />
                  <Route path="/collaborations/post"      element={<VCollaboRegistration />} />
                  
                  {/* guide */}
                  <Route path="/introduction"             element={<VIntroduction   />} />
                  <Route path="/guide"                    element={<VGuide          />} />
                  <Route path="/notice"                   element={<VNotice         />} />
                  <Route path="/docs/terms-of-service"    element={<VTermsOfService />} />
                  <Route path="/docs/privacy-policy"      element={<VPrivacyPolicy  />} />
                  <Route path="/qna"                      element={<VQna            />} />
                  
                  {/* my-page */}
                  <Route path="/my-page/collabo/ing"      element={<VRegister       />} />
                  <Route path="/my-page/collabo/suggest"  element={<VRegister       />} />
                  <Route path="/my-page/collabo/apply"    element={<VRegister       />} />
                  <Route path="/my-page/collabo/post"     element={<VRegister       />} />
                  <Route path="/my-page/collabo/end"      element={<VRegister       />} />
                  <Route path="/my-page/collabo/chat"     element={<VRegister       />} />
                  <Route path="/my-page/account/edit"     element={<VRegister       />} />
                  <Route path="/my-page/account/withdraw" element={<VRegister       />} />
                  <Route path="/my-page/account/logout"   element={<VRegister       />} />
                  
                  <Route path="/"                         element={<VMain           />} />
                  <Route path="*"                         element={<Navigate replace to="/" />} />
                </Route>
              </Routes>
              
            </WrapScrollTo>
          </div>
        </ModalProvider>
      </AppState.Provider>
    </Router>
  );
}

export default App;