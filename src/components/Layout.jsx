import Footer from "./Footer";
import Navbar from "./Navbar";
import LayoutClasses from './Layout.module.css'

const Layout = ({ children }) => {
    return (
        <main className={LayoutClasses['main-container']}>
            <Navbar />
            {children}
            <Footer />
        </main>
    );
};

export default Layout;