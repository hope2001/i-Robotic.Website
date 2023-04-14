function CTA() {
    return ( 
        // <!-- ======= Call To Action Section ======= -->
    <section id="cta" className="cta">
      <div className="container" data-aos="zoom-out">

        <div className="row g-5">

          <div className="col-lg-8 col-md-6 content d-flex flex-column justify-content-center order-last order-md-first">
            <h3>Nous assurons une prestation <em>complète</em> de votre projet</h3>
            <p> De l&apos;étape initiale jusqu&apos;à la livraison finale. Nous proposons une solution globale  et intégrale qui englobe toutes les étapes nécessaires pour répondre à vos besoins.</p>
            <a className="cta-btn align-self-start" href="/contact">Obtenir un devis</a>
          </div>

          <div className="col-lg-4 col-md-6 order-first order-md-last d-flex align-items-center">
            <div className="img">
              <img src="assets/img/cta.jpg" alt="" className="img-fluid"/>
            </div>
          </div>

        </div>

      </div>
    </section>
     );
}

export default CTA;