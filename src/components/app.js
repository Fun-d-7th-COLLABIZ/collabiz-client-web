import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { VGuide, VIntroduction, VLogin, VMain, VNotice, VPrivacyPolicy, VQna, VRegister, VTermsOfService } from './views';
import { WrapHeaderFooter } from './wrappers';

function App() {
  return (
    <Router>
      {/* <div style={{minHeight: `${100}vh`}}> */}
      <Routes>
        <Route path="/login"                    element={<VLogin          />} />
          <Route element={<WrapHeaderFooter />}>
          <Route path="/"                         element={<VMain           />} />
          <Route path="/register"                 element={<VRegister       />} />

          {/* collaboration */}
          <Route path="/collaborations/info"      element={<VRegister       />} />
          <Route path="/collaborations/term"      element={<VRegister       />} />
          <Route path="/collaborations/loc"       element={<VRegister       />} />
          <Route path="/collaborations/key-word"  element={<VRegister       />} />
          <Route path="/collaborations/post"      element={<VRegister       />} />
          
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
          
          <Route path="*"                         element={<Navigate replace to="/" />} />
        </Route>
      </Routes>
      {/* </div> */}
    </Router>
  );
}

export default App;
