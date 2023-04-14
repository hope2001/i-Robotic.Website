import Link from "next/link";

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

          <li className="dropdown"><Link href="#"><span>Accueil</span> <i className="bi bi-chevron-down dropdown-indicator"></i></Link>
            <ul>
              <li><Link href="index.html" className="active">Home 1 - index.html</Link></li>
              <li><Link href="index-2.html">Home 2 - index-2.html</Link></li>
              <li><Link href="index-3.html">Home 3 - index-3.html</Link></li>
              <li><Link href="index-4.html">Home 4 - index-4.html</Link></li>
            </ul>
          </li>

          <li><Link className="nav-link scrollto" href="index.html#about">A Propos</Link></li>
          <li><Link className="nav-link scrollto" href="index.html#services">Services</Link></li>
          {/* <li><Link className="nav-link scrollto" href="index.html#portfolio">Portfolio</Link></li> */}
          <li><Link className="nav-link scrollto" href="index.html#team">Notre Equipe</Link></li>
          {/* <li><Link href="blog.html">Blog</Link></li> */}
          {/* <li className="dropdown megamenu"><Link href="#"><span>Mega Menu</span> <i className="bi bi-chevron-down dropdown-indicator"></i></Link>
            <ul>
              <li>
                <Link href="#">Column 1 link 1</Link>
                <Link href="#">Column 1 link 2</Link>
                <Link href="#">Column 1 link 3</Link>
              </li>
              <li>
                <Link href="#">Column 2 link 1</Link>
                <Link href="#">Column 2 link 2</Link>
                <Link href="#">Column 3 link 3</Link>
              </li>
              <li>
                <Link href="#">Column 3 link 1</Link>
                <Link href="#">Column 3 link 2</Link>
                <Link href="#">Column 3 link 3</Link>
              </li>
              <li>
                <Link href="#">Column 4 link 1</Link>
                <Link href="#">Column 4 link 2</Link>
                <Link href="#">Column 4 link 3</Link>
              </li>
            </ul>
          </li> */}
          {/* <li className="dropdown"><Link href="#"><span>Drop Down</span> <i className="bi bi-chevron-down dropdown-indicator"></i></Link>
            <ul>
              <li><Link href="#">Drop Down 1</Link></li>
              <li className="dropdown"><Link href="#"><span>Deep Drop Down</span> <i className="bi bi-chevron-down dropdown-indicator"></i></Link>
                <ul>
                  <li><Link href="#">Deep Drop Down 1</Link></li>
                  <li><Link href="#">Deep Drop Down 2</Link></li>
                  <li><Link href="#">Deep Drop Down 3</Link></li>
                  <li><Link href="#">Deep Drop Down 4</Link></li>
                  <li><Link href="#">Deep Drop Down 5</Link></li>
                </ul>
              </li>
              <li><Link href="#">Drop Down 2</Link></li>
              <li><Link href="#">Drop Down 3</Link></li>
              <li><Link href="#">Drop Down 4</Link></li>
            </ul>
          </li> */}
          {/* <li><Link className="nav-link scrollto" href="index.html#contact">Contacts</Link></li> */}
        </ul>
        <i className="bi bi-list mobile-nav-toggle d-none"></i>
        
      </nav>
      {/* <!-- .navbar --> */}

      <Link className="btn-getstarted scrollto" href="index.html#contact">Contacts</Link>

    </div>
  </header>
//   <!-- End Header -->
     );
}

export default Header;