// import Nav from "./Nav";
import Footer from "./Footer/Footer";
import Meta from "./Meta";
import Navbar from "./Navbar";
// import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div
    //  className={styles.layout}
     >
      <Meta />
      <Navbar />
      <div>{children}</div>

      <Footer />
    </div>
  );
};

export default Layout;
