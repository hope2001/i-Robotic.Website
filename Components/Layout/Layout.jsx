import Banner from "../Content/Banner";
import Footer from "../Partials/Footer";
import Header from "../Partials/Header";

function Layout({children}) {
    return ( 
        <>
            <Header/>
            <Banner/>
            <main id="main">
                {children}
            </main>
            <Footer/>
        </>
     );
}

export default Layout;