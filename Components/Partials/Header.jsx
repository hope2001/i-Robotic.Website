// import Link from "next/link";

// function Header() {
//     return ( 
//         // <!-- ======= Header ======= -->
//   <header id="header" className="header fixed-top" data-scrollto-offset="0">
//     <div className="container-fluid px-4 d-flex align-items-center justify-content-between">

//       <Link href="/" className="logo d-flex align-items-center scrollto me-auto me-lg-0">
//         {/* <!-- Uncomment the line below if you also wish to use an image logo --> */}
//         {/* <img src="assets/img/logo.png" alt=""/>  */}
//         <h1 className="fw-bold fs-5">I-ROBOTICS<span>.</span></h1>
//       </Link>

//       <nav id="navbar" className="navbar">
//         <ul>

//           <li className="dropdown"><Link href="#"><span>Accueil</span> <i className="bi bi-chevron-down dropdown-indicator"></i></Link>
//             <ul>
//               <li><Link href="index.html" className="active">Home 1 - index.html</Link></li>
//               <li><Link href="index-2.html">Home 2 - index-2.html</Link></li>
//               <li><Link href="index-3.html">Home 3 - index-3.html</Link></li>
//               <li><Link href="index-4.html">Home 4 - index-4.html</Link></li>
//             </ul>
//           </li>

//           <li><Link className="nav-link scrollto" href="index.html#about">A Propos</Link></li>
//           <li><Link className="nav-link scrollto" href="index.html#services">Services</Link></li>
//           {/* <li><Link className="nav-link scrollto" href="index.html#portfolio">Portfolio</Link></li> */}
//           <li><Link className="nav-link scrollto" href="index.html#team">Notre Equipe</Link></li>
//           {/* <li><Link href="blog.html">Blog</Link></li> */}
//           {/* <li className="dropdown megamenu"><Link href="#"><span>Mega Menu</span> <i className="bi bi-chevron-down dropdown-indicator"></i></Link>
//             <ul>
//               <li>
//                 <Link href="#">Column 1 link 1</Link>
//                 <Link href="#">Column 1 link 2</Link>
//                 <Link href="#">Column 1 link 3</Link>
//               </li>
//               <li>
//                 <Link href="#">Column 2 link 1</Link>
//                 <Link href="#">Column 2 link 2</Link>
//                 <Link href="#">Column 3 link 3</Link>
//               </li>
//               <li>
//                 <Link href="#">Column 3 link 1</Link>
//                 <Link href="#">Column 3 link 2</Link>
//                 <Link href="#">Column 3 link 3</Link>
//               </li>
//               <li>
//                 <Link href="#">Column 4 link 1</Link>
//                 <Link href="#">Column 4 link 2</Link>
//                 <Link href="#">Column 4 link 3</Link>
//               </li>
//             </ul>
//           </li> */}
//           {/* <li className="dropdown"><Link href="#"><span>Drop Down</span> <i className="bi bi-chevron-down dropdown-indicator"></i></Link>
//             <ul>
//               <li><Link href="#">Drop Down 1</Link></li>
//               <li className="dropdown"><Link href="#"><span>Deep Drop Down</span> <i className="bi bi-chevron-down dropdown-indicator"></i></Link>
//                 <ul>
//                   <li><Link href="#">Deep Drop Down 1</Link></li>
//                   <li><Link href="#">Deep Drop Down 2</Link></li>
//                   <li><Link href="#">Deep Drop Down 3</Link></li>
//                   <li><Link href="#">Deep Drop Down 4</Link></li>
//                   <li><Link href="#">Deep Drop Down 5</Link></li>
//                 </ul>
//               </li>
//               <li><Link href="#">Drop Down 2</Link></li>
//               <li><Link href="#">Drop Down 3</Link></li>
//               <li><Link href="#">Drop Down 4</Link></li>
//             </ul>
//           </li> */}
//           {/* <li><Link className="nav-link scrollto" href="index.html#contact">Contacts</Link></li> */}
//         </ul>
//         <i className="bi bi-list mobile-nav-toggle d-lg-none"></i>
        
//       </nav>
//       {/* <!-- .navbar --> */}

//       <Link className="btn-getstarted scrollto" href="index.html#contact">Contacts</Link>

//     </div>
//   </header>
// //   <!-- End Header -->
//      );
// }

// export default Header;
















// import { useState } from "react";
// import Link from "next/link";
// import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
// import { BiList } from "react-icons/bi";

// function Header() {
//   const [expanded, setExpanded] = useState(false);

//   const handleToggle = () => {
//     setExpanded(!expanded);
//   };

//   return ( 
//     <header id="header" className="header fixed-top" data-scrollto-offset="0">
//       <Container fluid>
//         <Navbar expand="lg" expanded={expanded}>
//           <Link href="/" passHref>
//             <Navbar.Brand className="logo d-flex align-items-center scrollto me-auto me-lg-0">
//               <h1>HeroBiz<span>.</span></h1>
//             </Navbar.Brand>
//           </Link>

//           <Navbar.Toggle
//             aria-controls="navbar"
//             onClick={()=>handleToggle()}
//           >
//             <i className="bi bi-list mobile-nav-toggle d-lg-none"></i>
//             {/* <BiList className="mobile-nav-toggle d-lg-none" /> */}
//           </Navbar.Toggle>

//           <Navbar.Collapse id="navbar">
//             <Nav className="ms-auto">
//               <NavDropdown title="Home" id="home-dropdown">
//                 <Link href="/" passHref>
//                   <NavDropdown.Item active>Home 1 - index.html</NavDropdown.Item>
//                 </Link>
//                 <Link href="/index-2" passHref>
//                   <NavDropdown.Item>Home 2 - index-2.html</NavDropdown.Item>
//                 </Link>
//                 <Link href="/index-3" passHref>
//                   <NavDropdown.Item>Home 3 - index-3.html</NavDropdown.Item>
//                 </Link>
//                 <Link href="/index-4" passHref>
//                   <NavDropdown.Item>Home 4 - index-4.html</NavDropdown.Item>
//                 </Link>
//               </NavDropdown>

//               <Link href="/" passHref>
//                 <Nav.Link className="nav-link scrollto">About</Nav.Link>
//               </Link>

//               <Link href="/" passHref>
//                 <Nav.Link className="nav-link scrollto">Services</Nav.Link>
//               </Link>

//               <Link href="/" passHref>
//                 <Nav.Link className="nav-link scrollto">Portfolio</Nav.Link>
//               </Link>

//               <Link href="/" passHref>
//                 <Nav.Link className="nav-link scrollto">Team</Nav.Link>
//               </Link>

//               <Link href="/blog" passHref>
//                 <Nav.Link>Blog</Nav.Link>
//               </Link>

//               <Link href="/" passHref>
//                 <Nav.Link className="nav-link scrollto">Contact</Nav.Link>
//               </Link>
//             </Nav>

//             <Link href="/" passHref>
//               <Nav.Link className="btn-getstarted scrollto">Get Started</Nav.Link>
//             </Link>
//           </Navbar.Collapse>
//         </Navbar>
//       </Container>
//     </header>
//   );
// }

// export default Header;













import Link from "next/link";
import { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { RiHomeSmileFill, RiChatSmile3Line } from 'react-icons/ri';


function Header() {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenu = () => setShowMenu(!showMenu);

  return (
    <header id="header" className="header fixed-top" data-scrollto-offset="0">
      <Container fluid className="d-flex align-items-center justify-content-between ">
        <Navbar.Brand href="#" className=" logo d-flex align-items-center me-auto me-lg-0 scrollto">
        <h1 className="fw-bold fs-lg-1 fs-sm-5 align-items-center my-auto">I-ROBOTICS<span>.</span></h1>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav inline-flex" className="mobile-nav-toggle d-lg-none" >
          {/* <BiList /> */}
          <Link className="btn-getstarted mx-3" href="/contact" > <span className="align-item-center"></span> <RiChatSmile3Line style={{fontSize: "20px", alignItems:"center"}} /></Link>
          <i onClick={handleMenu} className="bi bi-list fs-2 align-item-center"></i>
        </Navbar.Toggle>

        <Navbar.Collapse id="responsive-navbar-nav" className="d-lg-flex">
          <Nav className="mx-auto navbar1">
            <ul>
            {/* <li><Nav.Link href="#about" className="nav-link scrollto">Home</Nav.Link></li> */}

            <li><Link className="nav-link" href="/"><RiHomeSmileFill style={{fontSize: '20px'}} /></Link></li>
          <li><Link className="nav-link" href="/about">A Propos</Link></li>
          <li><Link className="nav-link" href="/services">Services</Link></li>
          <li><Link className="nav-link" href="/blog">Actualité</Link></li>
          <li><Link className="nav-link" href="/appointment">Rendez-vous</Link></li>


            </ul>
          </Nav>

          <Nav className="ms-auto">
            {/* <Nav.Link href="#about" className="btn-getstarted scrollto">Contact</Nav.Link> */}
            <Link className="btn-getstarted" href="/contact" style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '5px'}}>Prendre Contact <RiChatSmile3Line style={{fontSize: '20px'}} /></Link>

          </Nav>
        </Navbar.Collapse>
      </Container>

      <div className={`offcanvas offcanvas-end ${showMenu ? "show" : ""}`} tabIndex="-1" style={{ zIndex:99999 }} id="offcanvasMenu" aria-labelledby="offcanvasMenuLabel">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasMenuLabel">Menu</h5>
          <button type="button" className="btn-close text-reset" onClick={handleMenu}></button>
        </div>

        <div className="offcanvas-body">
          <Nav className="flex-column navba">

          <Link className="nav-link scrollto" href="/about">A Propos</Link>
        <Link className="nav-link scrollto" href="/services">Services</Link>
        <Link className="nav-link scrollto" href="/blog">Actualité</Link>
        <Link className="nav-link scrollto" href="/appointment">Rendez-vous</Link>
        <Link className="nav-link scrollto btn-getstarted" href="/blog">Contacts</Link>
            
          </Nav>
        </div>
      </div>
    </header>
  );
}

export default Header;

