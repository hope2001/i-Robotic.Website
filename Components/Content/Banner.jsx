import Link from "next/link";
import { TbCertificate } from 'react-icons/tb';
import ParticlesJS from "../Partials/Particles";
// import ParticleBackground from "../Partials/PolyParticles";

function Banner() {
    return ( <>
    {/* <ParticleBackground/> */}
        <section id="hero-animated" className="hero-animated d-flex align-items-center position-relative" >
          <div className="overlay position-absolute ">
      {/* <ParticlesJS/> */}

          </div>
        <div className="container d-flex flex-column justify-content-center align-items-center text-center position-relative mt-3" data-aos="zoom-out">
          <img src="assets/img/hero1.png" className="img-fluid animated"/>
          {/* <img src="assets/img/hero-carousel/hero-carousel-3.svg" className="img-fluid animated"/> */}
          <h2>Bienvenue sur <span> I-ROBOTICS</span></h2>
          <p><b>Pionnier des solutions de drones:</b> technologie de pointe, livraison rapide & sécurité accrue.</p>
          <div className="d-flex">
            <Link href="/services" className="btn-get-started" style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '5px'}}>Nos Offres <TbCertificate style={{fontSize: '20px'}} /> </Link>
            <Link href="https://www.youtube.com/watch?v=eG1kJk4nJyU" target="blank" className="glightbox btn-watch-video d-flex align-items-center"><i className="bi bi-play-circle"></i><span>Vidéo de présentation</span></Link>
          </div>
        </div>
      </section>
      </>
     );
}

export default Banner;