import Link from "next/link";

function Banner() {
    return ( 
        <section id="hero-animated" className="hero-animated d-flex align-items-center position-relative">
          <div className="overlay position-absolute " ></div>
        <div className="container d-flex flex-column justify-content-center align-items-center text-center position-relative mt-3" data-aos="zoom-out">
          <img src="assets/img/hero1.png" className="img-fluid animated"/>
          {/* <img src="assets/img/hero-carousel/hero-carousel-3.svg" className="img-fluid animated"/> */}
          <h2>Bienvenue sur <span> I-ROBOTICS</span></h2>
          <p>Pionnier des solutions de drones.</p>
          <div className="d-flex">
            <Link href="#about" className="btn-get-started scrollto">A Propos</Link>
            <Link href="https://www.youtube.com/watch?v=LXb3EKWsInQ" className="glightbox btn-watch-video d-flex align-items-center"><i className="bi bi-play-circle"></i><span>Watch Video</span></Link>
          </div>
        </div>
      </section>
     );
}

export default Banner;