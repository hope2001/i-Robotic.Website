function ServicesSection() {
    return ( 
        // <!-- ======= Services Section ======= -->
    <section id="services" className="services">
      <div className="container" data-aos="fade-up">

        <div className="section-header">
          <h2>Dernières nouvelles</h2>
          <p>Nous vous tenons au courant des dernières actualités. Pour ne rien rater, n&apos;oubliez pas de vos abonner à notre news-letter.</p>
        </div>

        <div className="row gy-5">

          <div className="col-xl-4 col-md-6" data-aos="zoom-in" data-aos-delay="200">
            <div className="service-item">
              <div className="img">
                <img src="assets/img/services-1.jpg" className="img-fluid" alt=""/>
              </div>
              <div className="details position-relative">
                <div className="icon">
                  <i className="bi bi-broadcast"></i>
                </div>
                <a href="/blog" className="stretched-link">
                  <h3>Partenariat avec la HBI</h3>
                </a>
                <p>La Holding Bourjon Investment a su voir en nous un partenaire de confiance. En effet suite à quelques prestation de haut...</p>
              </div>
            </div>
          </div>
          {/* <!-- End Service Item --> */}

          <div className="col-xl-4 col-md-6" data-aos="zoom-in" data-aos-delay="300">
            <div className="service-item">
              <div className="img">
                <img src="assets/img/services-2.jpg" className="img-fluid" alt=""/>
              </div>
              <div className="details position-relative">
                <div className="icon">
                  <i className="bi bi-broadcast"></i>
                </div>
                <a href="/blog" className="stretched-link">
                  <h3>Nouvelle extension</h3>
                </a>
                <p>Pour votre plus grande aise, INPECTIONS ROBOTICS LABS ouvre bientôt ses portes à Fidrjossè dans la ville de Cotonou au Bé...</p>
              </div>
            </div>
          </div>
          {/* <!-- End Service Item --> */}

          <div className="col-xl-4 col-md-6" data-aos="zoom-in" data-aos-delay="400">
            <div className="service-item">
              <div className="img">
                <img src="assets/img/services-3.jpg" className="img-fluid" alt=""/>
              </div>
              <div className="details position-relative">
                <div className="icon">
                  <i className="bi bi-broadcast"></i>
                </div>
                <a href="/blog" className="stretched-link">
                  <h3>Aquisition de matériel</h3>
                </a>
                <p>Vous l&apos;attendiez-tous. Et bien il est là ! Le nouveau model de caméra pour drone ultra précis qui est capable de voir...</p>
              </div>
            </div>
          </div>
          {/* <!-- End Service Item --> */}

        </div>

      </div>
    </section>
     );
}

export default ServicesSection;