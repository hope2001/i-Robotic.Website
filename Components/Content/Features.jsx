import { MdOutlineImageSearch, MdMap } from 'react-icons/md';
import { SlGlobeAlt } from 'react-icons/sl';
import { RxCube } from 'react-icons/rx';
import { RiSearchEyeLine } from 'react-icons/ri';
import { TbGeometry } from 'react-icons/tb';


function Features() {
    return ( 
        // <!-- ======= Features Section ======= -->
    <section id="features" className="features">
      <div className="container" data-aos="fade-up">

        <ul className="nav nav-tabs row gy-4 d-flex">

          <li className="nav-item col-6 col-md-4 col-lg-2">
            <a className="nav-link active show" data-bs-toggle="tab" data-bs-target="#tab-1">
              <MdOutlineImageSearch style={{color: 'rgba(0,0,0,.3)', fontSize: '50px'}} />
              <h4 style={{textAlign: 'center'}}>Imagerie</h4>
            </a>
          </li>
          {/* <!-- End Tab 1 Nav --> */}

          <li className="nav-item col-6 col-md-4 col-lg-2">
            <a className="nav-link" data-bs-toggle="tab" data-bs-target="#tab-2">
              <MdMap style={{color: 'rgba(0, 0, 0, .3)', fontSize: '50px'}} />
              <h4>Cartographie</h4>
            </a>
          </li>
          {/* <!-- End Tab 2 Nav --> */}

          <li className="nav-item col-6 col-md-4 col-lg-2">
            <a className="nav-link" data-bs-toggle="tab" data-bs-target="#tab-3">
              <RxCube style={{color: 'rgba(0,0,0,.3)', fontSize: '50px'}} />
              <h4>Géospatiale</h4>
            </a>
          </li>
          {/* <!-- End Tab 3 Nav --> */}

          <li className="nav-item col-6 col-md-4 col-lg-2">
            <a className="nav-link" data-bs-toggle="tab" data-bs-target="#tab-4">
              <SlGlobeAlt style={{color: 'rgba(0,0,0,.3)', fontSize: '50px'}} />
              <h4>Géodésie</h4>
            </a>
          </li>
          {/* <!-- End Tab 4 Nav --> */}

          <li className="nav-item col-6 col-md-4 col-lg-2">
            <a className="nav-link" data-bs-toggle="tab" data-bs-target="#tab-5">
              <TbGeometry style={{color: 'rgba(0,0,0,.3)', fontSize: '50px'}} />
              <h4>Topographie</h4>
            </a>
          </li>
          {/* <!-- End Tab 5 Nav --> */}

          <li className="nav-item col-6 col-md-4 col-lg-2">
            <a className="nav-link" data-bs-toggle="tab" data-bs-target="#tab-6">
              <RiSearchEyeLine style={{color: 'rgba(0,0,0,.3)', fontSize: '50px'}} />
              <h4>CVI</h4>
            </a>
          </li>
          {/* <!-- End Tab 6 Nav --> */}

        </ul>

        <div className="tab-content">

          <div className="tab-pane active show" id="tab-1">
            <div className="row gy-4">
              <div className="col-lg-8 order-2 order-lg-1" data-aos="fade-up" data-aos-delay="100">
                <h3>Création de logiciels de traitement d&apos;images</h3>
                <p className="fst-italic">
                  Ces logiciels permettent de mettre en évidence les détails pertinents dans les images capturées.
                </p>
                <ul>
                  <li><i className="bi bi-check-circle-fill"></i> Analyse termique des éléments photographiés.</li>
                  <li><i className="bi bi-check-circle-fill"></i> Interpretation des elements capturées afin de les faire analyser par une Intélligence artificielle.</li>
                  <li><i className="bi bi-check-circle-fill"></i> Génération de formes vectorielles 3D des surfaces photographiées avec possibilité d&apos;extraire des éléments de dimensionnement de grande précision.</li>
                </ul>
                <p>
                  Pour les analyses termiques, Les images analysées peuvent être interprétées dans une représentation graphique facile à lire de plages de température discrètes. La fonction de régions d&apos;intérêt (ROI) 
                  vous permet de définir et d&apos;étiqueter une variété de formes de régions et de calculer automatiquement les températures moyenne, minimale et maximale dans ces régions. Nos logiciels avancé de 
                  traitement d&apos;images thermiques  bénéficie des fonctions suivantes : calculateur d&apos;objectif / distance intégré, calculateur de perte de chaleur intégré, fusion d&apos;images thermiques / visuelles, 
                  construction d&apos;image en mosaïque.
                </p>
              </div>
              <div className="col-lg-4 order-1 order-lg-2 text-center" data-aos="fade-up" data-aos-delay="200">
                <img src="assets/img/features-1.svg" alt="" className="img-fluid"/>
              </div>
            </div>
          </div>
          {/* <!-- End Tab Content 1 --> */}

          <div className="tab-pane" id="tab-2">
            <div className="row gy-4">
              <div className="col-lg-8 order-2 order-lg-1">
                <h3>Cartographie numérique par drone</h3>
                <p>
                  Nos domaines d&apos;expertise comprennent la conception et la fabrication de drones de haute performance.
                </p>
                <p>
                  Nos drones par leur facilité et leur rapidité à mettre en oeuvre, permettent de réaliser différents types de cartographies aériennes de plus en plus utilisées dans de nombreux secteurs 
                  d&apos;activitées professionnels comme le bâtiment, les travaux publics ou l&apos;agriculture.
                </p>
                <p>
                  Pour modéliser tout type d&apos;objets ou surfaces en 3 Dimensions, exploitable pour prendre des mesures calculer des volumes ou des superficies.
                </p>
                <p>
                  Si vous souhaitez cartographier, un champ, un chantier, une zone archéologique, une carrière, une mine ou toutes autres sites, contactez nous.
                </p>
                <h4>D&apos;autres techniques peuvent être utilisés en cartographie</h4>
                <p>
                  Les informations données ici sont une explication simple, pour vous donner une idée des prestations pouvant être réalisés par les drones et leurs pilotes, pour en savoir plus, 
                  contactez nous, les professionnels de ce secteur vous expliquerons en détail les techniques et les services qu&apos;ils peuvent vous apporter.
                </p>
              </div>
              <div className="col-lg-4 order-1 order-lg-2 text-center">
                <img src="assets/img/features-2.svg" alt="" className="img-fluid"/>
              </div>
            </div>
          </div>
          {/* <!-- End Tab Content 2 --> */}

          <div className="tab-pane" id="tab-3">
            <div className="row gy-4">
              <div className="col-lg-8 order-2 order-lg-1">
                <h3>Analyse géospatiale et la visualisation de données en 3D</h3>
                <h4>Qu&apos;est-ce que c&apos;est ?</h4>
                <p>
                L&apos;analyse spatiale permet aux entreprises d&apos;analyser les emplacements, les relations, les attributs et les proximités dans les données géospatiales pour faire émerger des 
                insights grâce à la modélisation géographique. Dans le passé, l&apos;analyse spatiale était réalisée uniquement à l&apos;aide du cadre de référence des systèmes d&apos;information géographique (SIG), 
                qui est spécialisé dans l&apos;établissement de liens entre des données de géolocalisation et des informations descriptives et dans l&apos;affichage de ces données sur une carte. 
                Aujourd&apos;hui, le processus tire également parti des capacités de la data science et du machine learning.
                </p>
              </div>
              <div className="col-lg-4 order-1 order-lg-2 text-center">
                <img src="assets/img/features-3.svg" alt="" className="img-fluid"/>
              </div>
            </div>
          </div>
          {/* <!-- End Tab Content 3 --> */}

          <div className="tab-pane" id="tab-4">
            <div className="row gy-4">
              <div className="col-lg-8 order-2 order-lg-1">
                <h3>Géographie mathématique et moderne</h3>
                <p>
                  La Terre est ronde. Oui, mais encore ? Quelle est exactement sa taille ? sa forme ? Qu&apos;en est-il de son champ de gravité ? La géodésie est une science fascinante qui tente de répondre à ces questions. Découvrez-la dans ce dossier.
                </p>
                <p className="fst-italic">
                  Nous disposons de moyens et de technologies assez avancé pour mettre à votre disposition des éléments géodésique, suffisament éttofé pour vous permettre de mieux cerner les informations géographique qui vous permettrons de prendre de  mailleurs décisions
                  dans la mise en place de vos projets.
                </p>
              </div>
              <div className="col-lg-4 order-1 order-lg-2 text-center">
                <img src="assets/img/features-4.svg" alt="" className="img-fluid"/>
              </div>
            </div>
          </div>
          {/* <!-- End Tab Content 4 --> */}

          <div className="tab-pane" id="tab-5">
            <div className="row gy-4">
              <div className="col-lg-8 order-2 order-lg-1">
                <h3>Levés topographiques</h3>
                <p>
                  Inspection Robotics Labs est une entreprise qui s&apos;efforce de répondre aux besoins 
                  et aux exigences du marché en proposant des solutions innovantes pour les 
                  travaux publics et privés. 
                </p>
                <p>
                  Elle utilise la topographie classique en conjonction avec 
                  des équipements modernes agiles et précis pour garantir la précision des travaux. 
                </p>
                <p>
                  L&apos;entreprise collabore avec des sociétés d&apos;ingénierie pour la réalisation de projets 
                  de génie civil, de travaux urbains, de routes et de services de terrassement.
                </p>
                <p>
                  Elle 
                  s&apos;engage à maintenir un standard de qualité élevé dans toutes ses activités.
                </p>
              </div>
              <div className="col-lg-4 order-1 order-lg-2 text-center">
                <img src="assets/img/features-5.svg" alt="" className="img-fluid"/>
              </div>
            </div>
          </div>
          {/* <!-- End Tab Content 5 --> */}

          <div className="tab-pane" id="tab-6">
            <div className="row gy-4">
              <div className="col-lg-8 order-2 order-lg-1">
                <h3> Inspections CVI (Check Valve Inspections), thermiques et lidar, ainsi que l&apos;imagerie aérienne</h3>
                <p>
                  Notre entreprise dispose de drones équipés de châssis anti-collision et de drones 
                  laser pour effectuer des inspections visuelles et dimensionnelles dans des espaces 
                  confinés tels que des réservoirs, des chaudières, des conduits et des réchauffeurs. 
                </p>
                <p>
                  Nous avons obtenu une certification d&apos;un classificateur pour l&apos;inspection des 
                  réservoirs et des navires, et notre équipe est composée de pilotes et d&apos;inspecteurs 
                  certifiés avec des années d&apos;expérience dans le secteur offshore.
                </p>
                <p>
                  Les rapports 
                  d&apos;inspection peuvent être fournis au format PDF traditionnel ou via un logiciel de 
                  gestion des actifs pour une meilleure communication, un accès rapide à l&apos;analyse 
                  des défauts et un enregistrement visuel complet qui peut être comparé dans le 
                  temps.
                </p>
              </div>
              <div className="col-lg-4 order-1 order-lg-2 text-center">
                <img src="assets/img/features-6.svg" alt="" className="img-fluid"/>
              </div>
            </div>
          </div>
          {/* <!-- End Tab Content 6 --> */}

        </div>

      </div>
    </section>
     );
}

export default Features;