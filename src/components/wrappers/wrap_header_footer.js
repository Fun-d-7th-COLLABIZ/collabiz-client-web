import { Outlet } from 'react-router-dom';
import { Header, Footer } from '../fragments';

const WrapHeaderFooter = () => (
  <>
    <Header />
    <Outlet />
    <Footer />
  </>
);

export default WrapHeaderFooter;