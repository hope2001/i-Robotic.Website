import { IoPulse } from 'react-icons/io5';
import { TbGeometry, TbPhotoSearch } from 'react-icons/tb';
import { TfiSignal } from 'react-icons/tfi';


function FeaturedServices() {
    return ( 
        // <!-- ======= Featured Services Section ======= -->
        <section id="featured-services" className="featured-services">
          <div className="container">
    
            <div className="row gy-4">
    
              <div className="col-xl-3 col-md-6 d-flex" data-aos="zoom-out">
                <div className="service-item position-relative">
                  <div className="icon"><IoPulse style={{fontSize: '50px', color: '#6261C5'}} /></div>
                  <h4><a href="/services" className="stretched-link">Electricité</a></h4>
                  <p>Inspection des lignes de transmission hautes tension de manière exhaustive, couvrant 100% de la zone...</p>
                </div>
              </div>
    
              <div className="col-xl-3 col-md-6 d-flex" data-aos="zoom-out">
                <div className="service-item position-relative">
                  <div className="icon"><TbGeometry style={{fontSize: '50px', color: '#6261C5'}} /></div>
                  <h4><a href="/services" className="stretched-link">Topographie</a></h4>
                  <p>Travaux de topographie classique avec des équipements modernes, agiles et de très haute précision...</p>
                </div>
              </div>
    
              <div className="col-xl-3 col-md-6 d-flex" data-aos="zoom-out">
                <div className="service-item position-relative">
                  <div className="icon"><TfiSignal style={{fontSize: '50px', color: '#6261C5'}} /></div>
                  <h4><a href="/services" className="stretched-link">Télécommunications</a></h4>
                  <p>Inspection de plus de quatre tours de télécommunication par jour surtout dans les zones à risque...</p>
                </div>
              </div>
    
              <div className="col-xl-3 col-md-6 d-flex" data-aos="zoom-out">
                <div className="service-item position-relative">
                  <div className="icon"><TbPhotoSearch style={{fontSize: '50px', color: '#6261C5'}} /></div>
                  <h4><a href="/services" className="stretched-link">Thermographie</a></h4>
                  <p>Identification de points chauds, d&apos;équipements sous tension, d&apos;obstructions...</p>
                </div>
              </div>

    
            </div>
    
          </div>
        </section>
        // <!-- End Featured Services Section -->
     );
}

export default FeaturedServices;