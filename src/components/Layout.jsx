import Footer from "./Footer";
import Navbar from "./Navbar";

// export default function Layout({ children }) {
//     <>
//         <Navbar />
//         {children}
//     </>
// }
const Layout = ({ children }) => {
    return (
      <div>
        <Navbar />
        {children}
        <Footer />
      </div>
    );
  };
  
  export default Layout;