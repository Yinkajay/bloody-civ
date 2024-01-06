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
      </div>
    );
  };
  
  export default Layout;