import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { VGuide, VLogin, VMain, VNotice, VPrivacyPolicy, VQna, VRegister, VTermsOfService } from './views';

function App() {
  return (
    <Router>
      {/* <div style={{minHeight: `${100}vh`}}> */}
      <Routes>
        {/* full screen */}
        <Route path="/login"                 element={<VLogin          />} />
        <Route path="/docs/privacy-policy"   element={<VPrivacyPolicy  />} />
        <Route path="/docs/terms-of-service" element={<VTermsOfService />} />
      
        <Route path="/"                      element={<VMain           />} />
        <Route path="/signup"                element={<VRegister       />} />
        <Route path="/guide"                 element={<VGuide          />} />
        <Route path="/notice"                element={<VNotice         />} />
        <Route path="/qna"                   element={<VQna            />} />
        <Route path="*"                      element={<Navigate replace to="/" />} />
      </Routes>
      {/* </div> */}
    </Router>
  );
}

export default App;
