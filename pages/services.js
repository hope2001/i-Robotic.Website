import CTA from '@/Components/Content/CallToAct'
import Layout from '@/Components/Layout/Layout'
import React from 'react'

export default function ServicesPage() {
  return (
    <Layout pageTarget={"Services"}>

      {/* <div>services</div> */}
      {/* <CTA/> */}
      <>
        <section id="services" className="blog">
          <div className="container" data-aos="fade-up">

            <div className="section-header">
              <h2>Architecture, Ingénierie, Construction</h2>
              <p> Architecture, Ingénierie, Construction

                Découvrez nos services d’inspection par drone et scanner 3D permettant de visualiser, mesurer, comprendre et gérer plus efficacement vos parcs immobiliers et vos projets.
                .</p>
            </div>

            <div className="row gy-5">

              <div className="col-xl-4 col-md-6" data-aos="zoom-in" data-aos-delay="400">
                <div className="img  d-flex">
                  <img style={{ objectFit: "cover" }} src="assets/img/arch.png" className="img-fluid w-75 m-auto" alt="" />
                </div>
              </div>
              <div className="col-xl-8 col-md-6 d-flex" data-aos="zoom-in" data-aos-delay="400">
                <p className="align-items-center" style={{ lineHeight: "2.5em" }}>
                  Nous collaborons avec les professionnels de la construction, bureau d’études, cabinet d’architecte, bureau SPS, et offre les meilleurs outils dans la gestion des missions techniques et des solutions sur mesure pour la prise de décision.
                  Inspectez, numérisez, modélisez, évaluez et mesurez grâce aux outils collaboratifs d’inspection. Besoin d’aller plus loin dans vos investigations techniques ?
                  I-Robotics Labs, c’est aussi des géomètres topographes, bureaux d’étude thermiques, architectes et huissiers en mesure de certifier les captations et les livrables.
                  Les meilleurs solutions pour les secteurs de l’architecture, de l’ingénierie et de la construction.
                </p>
              </div>

            </div>

          </div>
        </section>
        <section id="services" className="blog">
          <div className="container" data-aos="fade-up">

            <div className="section-header">
              <h2>Gestion technique des bâtiments</h2>
              <p> Que vous soyez asset manager, property manager, syndic de copropriété, gestionnaire de bien, propriétaire d’un parc immobilier, les solutions de numérisation par drone et scan de Dronotec offrent rapidité, efficacité et précision dans la gestion technique de vos bâtiments.</p>
            </div>

            <div className="row gy-5">


              <div className="col-xl-8 col-md-6" data-aos="zoom-in" data-aos-delay="400">
                <p className="align-items-center" style={{ lineHeight: "2.5em" }}>
                  Inspectez vos couvertures, toitures et façades à l’aide de drones, numérisez votre patrimoine pour avoir accès au jumeau numérique de vos immeubles, recréez et actualisez les plans intérieurs et extérieurs d’un site, anticipez la survenance de sinistres, améliorez l’efficacité énergétique de vos immeubles, détectez des éléments amiantés en partie non accessible, suivez l’avancement de travaux, optimisez vos opérations de maintenance, provisionnez les plans pluriannuels de travaux et actualisez la valorisation de vos biens.
                </p>
              </div>
              <div className="col-xl-4 col-md-6" data-aos="zoom-in" data-aos-delay="400">
                <div className="img d-flex">
                  <img src="assets/img/gest.png" className="img-fluid w-75 m-auto" alt="" />
                </div>
              </div>
            </div>

          </div>
        </section>
        <section id="services" className="blog">
          <div className="container" data-aos="fade-up">

            <div className="section-header">
              <h2>Energies et environnement</h2>
              <p> Les drones aux services des énergies et de l’environnement. Optimisez vos inspections techniques à l’aide de technologie drone et scan pour gagner en efficacité opérationnelle.</p>
            </div>

            <div className="row gy-5">


              <div className="col-xl-8 col-md-6" data-aos="zoom-in" data-aos-delay="400">
                <p className="align-items-center" style={{ lineHeight: "2.5em" }}>
                  I-Robotics propose une large gamme de services et des techniciens spécialisés à destination des sociétés qui produisent, distribuent et stockent l’énergie. Nous réalisons des inspections de centrales photovoltaïques, des inspections de parcs éoliens, des inspections de pylônes et lignes électriques, ou encore des inspections en raffinerie et dépôts pétroliers.

                  Nous produisons des levées topographiques pour répondre aux problématiques d’érosion de littoral, des suivis de déconstruction et de dépollution de sites industriels, et intervenons à la suite de catastrophes naturelles et technologiques majeures.

                </p>
              </div>
              <div className="col-xl-4 col-md-6" data-aos="zoom-in" data-aos-delay="400">
                <div className="img d-flex">
                  <img src="assets/img/gestion.png" className="img-fluid w-75 m-auto" alt="" />
                </div>
              </div>
            </div>

          </div>
        </section>
        <section id="services" className="blog">
          <div className="container" data-aos="fade-up">

            <div className="section-header">
              <h2>Transport et logistique</h2>
              <p>
              Pour la gestion technique des axes routiers, l’inspection portuaire, le transport de fluides comme l’eau le gaz et l’électricité, l’audit technique de site ferroviaire, ou encore l’inventaire de stock en entrepôt, l’imagerie aérienne par drone et la numérisation par scan 3D apportent de nouveaux outils à forte valeur ajoutée pour l’industrie.
              </p>
            </div>

            <div className="row gy-5">


              <div className="col-xl-8 col-md-6" data-aos="zoom-in" data-aos-delay="400">
                <p className="align-items-center" style={{ lineHeight: "2.5em" }}>
                Optimisez les opérations de maintenance, évitez les interruptions d’activités, faites gagner du temps à vos équipes dans la résolution de leur problématique technique, réduisez la pénibilité du travail et les risques d’accident.
                </p>
              </div>
              <div className="col-xl-4 col-md-6" data-aos="zoom-in" data-aos-delay="400">
                <div className="img d-flex">
                  <img src="assets/img/trans.png" className="img-fluid w-75 m-auto" alt="" />
                </div>
              </div>
            </div>

          </div>
        </section>
      </>
    </Layout>
  )
}
