




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

          <Link className="nav-link" href="/about">A Propos</Link>
        <Link className="nav-link" href="/services">Services</Link>
        <Link className="nav-link" href="/blog">Actualité</Link>
        <Link className="nav-link" href="/appointment">Rendez-vous</Link>
        <Link className="nav-link btn-getstarted" href="/blog">Contacts</Link>
            
          </Nav>
        </div>
      </div>
    </header>
  );
}

export default Header;

