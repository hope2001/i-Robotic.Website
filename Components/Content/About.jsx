function About() {
    return ( 
        // <!-- ======= About Section ======= -->
        <section id="about" className="about">
          <div className="container" data-aos="fade-up">
    
            <div className="section-header">
              <h2>INSPECTIONS ROBOTICS LABS</h2>
              <p>Nous sommes une entreprise basée au Bénin qui, depuis trois ans, fournit des services d&apos;acquisition de données géographiques (SIG), d&apos;inspections industrielles et d&apos;imagerie aérienne en utilisant des drones et intégrant l&apos;intelligence artificielle à la robotiques.</p>
            </div>
    
            <div className="row g-4 g-lg-5" data-aos="fade-up" data-aos-delay="200">
    
              <div className="col-lg-5">
                <div className="about-img">
                  <img src="assets/img/about.jpg" className="img-fluid" alt=""/>
                </div>
              </div>
    
              <div className="col-lg-7">
                <h3 className="pt-0 pt-lg-5">A IROBOTICS Labs, nous aspirons à l&apos;excellence en permanence !</h3>
    
                {/* <!-- Tabs --> */}
                <ul className="nav nav-pills mb-3">
                  <li><a className="nav-link active" data-bs-toggle="pill" href="#tab1" style={{paddingLeft: '15px', paddingRight: '15px', backgroundColor:"transparent", color:"gray"}}>Histoire</a></li>
                  <li><a className="nav-link" data-bs-toggle="pill" href="#tab2" style={{paddingLeft: '15px', paddingRight: '15px', backgroundColor:"transparent", color:"gray"}}>Mission</a></li>
                  <li><a className="nav-link" data-bs-toggle="pill" href="#tab3" style={{paddingLeft: '15px', paddingRight: '15px', backgroundColor:"transparent", color:"gray"}}>Vision</a></li>
                </ul>
                {/* <!-- End Tabs --> */}
    
                {/* <!-- Tab Content --> */}
                <div className="tab-content">
    
                  <div className="tab-pane fade show active" id="tab1">
    
                    <h4>A l&apos;origine...</h4>
                    <p>
                      Le laboratoire a été fondé en 2019 et s&apos;est imposé comme un leader du marché 
                      béninois dans la fourniture services d&apos;acquisition de données géographiques 
                      (SIG), d&apos;inspections industrielles et d&apos;imagerie aérienne en utilisant des drones et 
                      intégrant l&apos;intelligence artificielle à la robotiques pour répondre aux besoins les 
                      plus divers de ses clients.
                    </p>

                    <h4>Collaboration...</h4>
                    <p>
                      Nous travaillons en étroite collaboration avec des 
                      partenaires du secteur public et privé pour créer des solutions adaptées à leurs 
                      besoins spécifiques en matière de collecte de données géospatiales.
                    </p>

                    <h4>Notre joie...</h4>
                    <p>
                      Fier de 
                      pouvoir aider nos clients à améliorer leur prise de décision et à optimiser leur 
                      gestion des ressources naturelles, nous sommes impatients de collaborer avec 
                      vous pour créer des solutions sur mesure pour répondre à vos besoins spécifiques 
                      en matière de collecte de données géospatiales.
                    </p>
    
                  </div>
    
                  <div className="tab-pane fade show" id="tab2">
    
                    <p>
                      Créer de la valeur pour l&apos;ensemble des parties prenantes impliquées 
                      dans notre activité, à travers la prestation de services de haute qualité et 
                      sûrs, ainsi que l&apos;exploration de nouvelles solutions pour l&apos;industrie.
                    </p>
    
                  </div>
    
                  <div className="tab-pane fade show" id="tab3">
    
                    <p>
                      Nous visons à atteindre un haut niveau d&apos;excellence dans notre 
                      domaine, en utilisant des technologies innovantes pour offrir des 
                      services de qualité en matière d&apos;inspection visuelle et de surveillance 
                      aérienne en Afrique.

                    </p>
    
                  </div>
    
                </div>
    
              </div>
    
            </div>
    
          </div>
        </section>
     );
}

export default About;