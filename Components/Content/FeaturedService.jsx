import Link from 'next/link';
import { IoPulse,IoGitCompareOutline,IoLogoAppleAr,IoBug } from 'react-icons/io5';
import { TbGeometry, TbPhotoSearch,TbMacro, TbDrone,TbChartRadar,TbFiretruck,TbBrandSupernova,TbTriangleSquareCircle } from 'react-icons/tb';
import { TfiSignal } from 'react-icons/tfi';


function FeaturedServices() {
  const color = ['green','#6261C5'];
  const Items = [
    {
      id: 1,
      label: "Agriculture de précision",
      description: "Optimiser le développement des plantations et le rendement des récoltes en établissant un diagnostic rapide et précis de l'état des sols et des cultures.",
      icon:<TbMacro style={{fontSize: '50px', color: 'green'}} />,

  },
    {
      id: 2,
      label: "Logistiques et Télématiques",
      description: "Fourniture de services de logistique et de télématics en tant que solution intégrée pour optimiser l'efficacité des opérations de transports multimodals et de gestion des flottes",
      icon:<TbFiretruck style={{fontSize: '50px', color: color[1]}} />,

  },
    {
      id: 3,
      label: "Géo Radar et cartographie de réseaux souterains",
      description: "Service d'imagerie souteraine et cartographie des réseaux enterrés grace aux signaux électromagnétiques et à l'expertise de nos experts dans le traitement des nuages de points.  par drone",
      icon:<IoLogoAppleAr style={{fontSize: '50px', color: color[1]}} />

  },
    {
      id: 4,
      label: "Exploitation des carrières et mines",
      description: "Nous fournissons les services suivants: Analyse globale d’exploitation, Calcul des volumes d’extraction,Releve 3D,Détection d’érosion,Intégrité des murs,Analyse hyper hyperspectral,",
      icon:<TbChartRadar style={{fontSize: '50px', color: color[1]}} />

  },
    {
      id: 5,
      label: "SIG et Inspection industrielle",
      description: "Nous fournissons des services de cartographie, d'imagerie aérienne par drones, satellite et IoT pour fournir des solutions de collecte de données géospatiales et de gestion des actifs.",
      icon:<IoBug style={{fontSize: '50px', color: color[1]}} />

  },
    {
      id: 6,
      label: "Energies et Energie renouvelables",
      description: "Nous fournissons des services de cartographie, d'analyse spatiale et de modélisation pour soutenir la planification, la gestion et l'optimisation des infrastructures énergétiques",
      icon:<TbBrandSupernova style={{fontSize: '50px', color: color[1]}} />

  },
    {
      id: 7,
      label: "Assainissement et Hydrographie",
      description: "Nous fournissons des services de collecte de données géospatiales, de cartographie des réseaux d'assainissement, de modélisation des bassins versants, et la gestion des ressources hydriques.",
      icon:<TbDrone style={{fontSize: '50px', color: color[1]}} />

  },
    {
      id: 8,
      label: "Centre de formation de drone",
      description: " Nous offrons des formations spécialisée dans le télépilotage de drone professionnels et dans le traitement des données issues de la collecte de leurs données.",
      icColor: "green",
      icon:<TbTriangleSquareCircle style={{fontSize: '50px', color: color[1]}} />

  },
  ]
    return ( 
        // <!-- ======= Featured Services Section ======= -->
        <section id="featured-services" className="featured-services">
          <div className="container">
    
            <div className="row gy-4">

                {
                  Items.map((item,index)=>(
                      
              <div key={index} className="col-xl-3 col-md-6 d-flex" data-aos="zoom-out">
              <div className="service-item position-relative">
                <div className="icon"> {item.icon} </div>
                <h4><Link href="/services" className="stretched-link"> {item.label} </Link></h4>
                <p> {item.description} </p>
              </div>
            </div>
                  ))
                }

              {/* <div className="col-xl-3 col-md-6 d-flex" data-aos="zoom-out">
                <div className="service-item position-relative">
                  <div className="icon"><IoPulse style={{fontSize: '50px', color: '#6261C5'}} /></div>
                  <h4><Link href="/services" className="stretched-link">Electricité</Link></h4>
                  <p>Inspection des lignes de transmission hautes tension de manière exhaustive, couvrant 100% de la zone...</p>
                </div>
              </div>
    
              <div className="col-xl-3 col-md-6 d-flex" data-aos="zoom-out">
                <div className="service-item position-relative">
                  <div className="icon"><TbGeometry style={{fontSize: '50px', color: '#6261C5'}} /></div>
                  <h4><Link href="/services" className="stretched-link">Topographie</Link></h4>
                  <p>Travaux de topographie classique avec des équipements modernes, agiles et de très haute précision...</p>
                </div>
              </div>
    
              <div className="col-xl-3 col-md-6 d-flex" data-aos="zoom-out">
                <div className="service-item position-relative">
                  <div className="icon"><TfiSignal style={{fontSize: '50px', color: '#6261C5'}} /></div>
                  <h4><Link href="/services" className="stretched-link">Télécommunications</Link></h4>
                  <p>Inspection de plus de quatre tours de télécommunication par jour surtout dans les zones à risque...</p>
                </div>
              </div>
    
              <div className="col-xl-3 col-md-6 d-flex" data-aos="zoom-out">
                <div className="service-item position-relative">
                  <div className="icon"><TbPhotoSearch style={{fontSize: '50px', color: '#6261C5'}} /></div>
                  <h4><Link href="/services" className="stretched-link">Thermographie</Link></h4>
                  <p>Identification de points chauds, d&apos;équipements sous tension, d&apos;obstructions...</p>
                </div>
              </div> */}

    
            </div>
    
          </div>
        </section>
        // <!-- End Featured Services Section -->
     );
}

export default FeaturedServices;