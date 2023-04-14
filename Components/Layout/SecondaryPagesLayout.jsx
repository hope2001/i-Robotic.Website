import Banner from "../Content/Banner";
import Footer from "../Partials/Footer";
import Header from "../Partials/Header";

function SecondaryPagesLayout({children}) {
    return ( 
        <>
            <Header/>
            <main id="main">
                {children}
            </main>
            <Footer/>
        </>
     );
}

export default SecondaryPagesLayout;