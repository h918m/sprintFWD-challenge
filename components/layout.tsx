import Navbar from './navbar';
import Footer from './footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



interface Ilayout {
    children: JSX.Element
}

const Layout: React.FC<Ilayout> = ({ children }) => {
  return (
    <>
      <ToastContainer />
      <Navbar />
      <main >{children}</main>
      <Footer />
    </>
  );
};

export default Layout
