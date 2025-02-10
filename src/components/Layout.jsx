import Footer from "./Footer";
import Navbar from "./Navbar";
import LayoutClasses from './Layout.module.css'
import { useEffect, useState } from "react";
import LoaderScreen from "./Loaders/LoaderScreen";

const Layout = ({ children }) => {
    const [loading, setLoading] = useState(false);

    // useEffect(() => {
    //     setTimeout(() => {
    //         setLoading(false);
    //     }, 2000);
    // }, []);

    return (
        loading ? (
            <LoaderScreen />
        ) : (
            <main className={LayoutClasses['main-container']} >
                <Navbar />  
                {children}
                {/* <Footer /> */}
            </main >
        )
    );
};

export default Layout;

// Router.events.on("routeChangeStart", nProgress.start);
// Router.events.on("routeChangeError", nProgress.done);
// Router.events.on("routeChangeComplete", nProgress.done);
