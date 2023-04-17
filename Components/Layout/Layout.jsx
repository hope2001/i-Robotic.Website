import { useRouter } from "next/router";
import Banner from "../Content/Banner";
import Footer from "../Partials/Footer";
import Header from "../Partials/Header";
import OffcanvasExample from "../Partials/OffNav";
import Header1 from "../Partials/Header1";
import Breadcumb from "../Partials/Breadcumb";

function Layout({pageTarget,children}) {
    const router = useRouter()
    let pathname = router.pathname
    return ( 
        <>
            {/* <h1> {pathname} </h1> */}
            {/* <Header/> */}
          { pathname ==="/" ? <Header/> : <Header1/>}
           {pathname ==="/"&& <Banner/>}
           { pathname !=="/" && <Breadcumb toPage={pageTarget}/>}
            {/* <OffcanvasExample/> */}
            <main id="main">
                {children}
            </main>
            <Footer/>
        </>
     );
}

export default Layout;