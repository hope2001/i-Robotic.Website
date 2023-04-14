import Link from "next/link";
import { RiHomeSmileFill, RiChatSmile3Line } from 'react-icons/ri';

function Header() {
    return ( 
        // <!-- ======= Header ======= -->
  <header id="header" className="header fixed-top" data-scrollto-offset="0">
    <div className="container-fluid px-4 d-flex align-items-center justify-content-between">

      <Link href="/" className="logo d-flex align-items-center scrollto me-auto me-lg-0">
        {/* <!-- Uncomment the line below if you also wish to use an image logo --> */}
        {/* <img src="assets/img/logo.png" alt=""/>  */}
        <h1 className="fw-bold fs-5">I-ROBOTICS<span>.</span></h1>
      </Link>

      <nav id="navbar" className="navbar">
        <ul>
          <li><Link className="nav-link" href="/"><RiHomeSmileFill style={{fontSize: '20px'}} /></Link></li>
          <li><Link className="nav-link" href="/about">A Propos</Link></li>
          <li><Link className="nav-link" href="/services">Services</Link></li>
          <li><Link className="nav-link" href="/blog">Actualité</Link></li>
          <li><Link className="nav-link" href="/appointment">Rendez-vous</Link></li>
        </ul>
        <i className="bi bi-list mobile-nav-toggle d-none"></i>
        
      </nav>

      <Link className="btn-getstarted" href="/contact" style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '5px'}}>Prendre Contact <RiChatSmile3Line style={{fontSize: '20px'}} /></Link>

    </div>
  </header>
//   <!-- End Header -->
     );
}

export default Header;