import Link from "next/link";

function OnFucus() {
    return ( 
        // <!-- ======= On Focus Section ======= -->
    <section id="onfocus" className="onfocus">
      <div className="container-fluid p-0" data-aos="fade-up">

        <div className="row g-0">
          <div className="col-lg-6 video-play position-relative">
            <Link href="/assets/img/extra/drone-anima.mp4" className="glightbox play-btn"></Link>
          </div>
          <div className="col-lg-6">
            <div className="content d-flex flex-column justify-content-center h-100">
              <h3>Pourquoi choisir IROBOTICS Labs ?</h3>
              <p className="fst-italic">
                Plusieurs dizaines d&apos;entreprises et de structures gouvernementales nous font confiance...
              </p>
              <ul>
                <li><i className="bi bi-check-circle"></i> Vous êtes au centre de notre politique de qualité service.</li>
                <li><i className="bi bi-check-circle"></i> Notre fierté est de pouvoir mener au succès vos projets.</li>
                <li><i className="bi bi-check-circle"></i> Nous nous portons guarrant de vos données. Nous mettons un point d&apos;honneur à conserver sous scellé vos données sensibles, quitte à les détruire sans trace sur votre demande express.</li>
              </ul>
              <Link href="/blog" className="read-more align-self-start"><span>En savoir plus</span><i className="bi bi-arrow-right"></i></Link>
            </div>
          </div>
        </div>

      </div>
    </section>
     );
}

export default OnFucus;