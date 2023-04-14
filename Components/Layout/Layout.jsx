import Banner from "../Content/Banner";
import Footer from "../Partials/Footer";
import Header from "../Partials/Header";
import OffcanvasExample from "../Partials/OffNav";

function Layout({children}) {
    return ( 
        <>
            <Header/>
            <Banner/>
            {/* <OffcanvasExample/> */}
            <main id="main">
                {children}
            </main>
            <Footer/>
        </>
     );
}

export default Layout;