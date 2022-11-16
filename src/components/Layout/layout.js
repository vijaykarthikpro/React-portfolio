import About from "../About/about";
import Contact from "../Contact/contact";
import Navbar from "../Navbar/navbar";
import Portfolio from "../Portfolio/portfolio";
import Waves from "../Waves/waves";
import Footer from "../Footer/footer";
import "./layout.scss";
import SmallNav from "../SmallNav/smallNav";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Waves />
      <SmallNav/>
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
};

export default Layout;
