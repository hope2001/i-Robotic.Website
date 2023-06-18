import Link from "next/link";

function Footer() {
    return (
        // <!-- ======= Footer ======= -->
        <>
        <footer id="footer" className="footer">

            <div className="footer-content">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-3 col-md-6">
                            <div className="footer-info">
                                <h3>I-Robitics</h3>
                                <p>
                                    Fidjrossè<br/>
                                        Cotonou, Bénin<br/><br/>
                                            <strong>Tél.:</strong> +229 99 29 81 81<br/>
                                                <strong>E-mail:</strong> support@irobitics.store<br/>
                                                </p>
                                            </div>
                                        </div>

                                            <div className="col-lg-2 col-md-6 footer-links">
                                                <h4>Liens utiles</h4>
                                                <ul>
                                                    <li><i className="bi bi-chevron-right"></i> <Link href="/about">Qui sommes-nous ?</Link></li>
                                                    <li><i className="bi bi-chevron-right"></i> <Link href="/services">Que faisons-nous ?</Link></li>
                                                    <li><i className="bi bi-chevron-right"></i> <Link href="/blog">Nos derniers articles</Link></li>
                                                    <li><i className="bi bi-chevron-right"></i> <Link href="/contact">Prendre Contact</Link></li>
                                                    <li><i className="bi bi-chevron-right"></i> <Link href="#">Conditions d&apos;utilisation</Link></li>
                                                    <li><i className="bi bi-chevron-right"></i> <Link href="#">Politique de confidentialité</Link></li>
                                                </ul>
                                            </div>

                                            <div className="col-lg-3 col-md-6 footer-links">
                                                <h4>Nos Services</h4>
                                                <ul>
                                                    <li><i className="bi bi-chevron-right"></i> <Link href="/services">Fabrication de drones</Link></li>
                                                    <li><i className="bi bi-chevron-right"></i> <Link href="/services">Logiciels d&apos;imagerie</Link></li>
                                                    <li><i className="bi bi-chevron-right"></i> <Link href="/services">Cartographie numérique</Link></li>
                                                    <li><i className="bi bi-chevron-right"></i> <Link href="/services">Analyse géospatiale</Link></li>
                                                    <li><i className="bi bi-chevron-right"></i> <Link href="/services">Visualisation de données</Link></li>
                                                    <li><i className="bi bi-chevron-right"></i> <Link href="/services">Géodésie</Link></li>
                                                    <li><i className="bi bi-chevron-right"></i> <Link href="/services">Topographie</Link></li>
                                                    <li><i className="bi bi-chevron-right"></i> <Link href="/services">Les inspections</Link></li>
                                                </ul>
                                            </div>

                                            <div className="col-lg-4 col-md-6 footer-newsletter">
                                                <h4>Notre Newsletter</h4>
                                                <p>Ne manquez plus aucune information, abonnez-vous pour recevoir nos nouvelles offres en premier.</p>
                                                <form action="" method="post">
                                                    <input type="email" name="email"/><input type="submit" value="Je m'abonne"/>
                                                    </form>

                                                    </div>

                                            </div>
                                        </div>
                                    </div>

                                    <div className="footer-legal text-center">
                                        <div className="container d-flex flex-column flex-lg-row justify-content-center justify-content-lg-between align-items-center">

                                            <div className="d-flex flex-column align-items-center align-items-lg-start">
                                                <div className="copyright">
                                                    &copy; Copyright <strong><span>I-Robotics</span></strong>. All Rights Reserved
                                                </div>
                                                <div className="credits">
                                                    Designed by <Link href="https://labourd.tech">Labourd</Link>
                                                </div>
                                            </div>

                                            <div className="social-links order-first order-lg-last mb-3 mb-lg-0">
                                                <Link href="#" className="twitter"><i className="bi bi-twitter"></i></Link>
                                                <Link href="#" className="facebook"><i className="bi bi-facebook"></i></Link>
                                                <Link href="#" className="instagram"><i className="bi bi-instagram"></i></Link>
                                                <Link href="#" className="google-plus"><i className="bi bi-skype"></i></Link>
                                                <Link href="#" className="linkedin"><i className="bi bi-linkedin"></i></Link>
                                            </div>

                                        </div>
                                    </div>

                                </footer>
                                

                                <Link href="#" className="scroll-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></Link>
                                </>
                                );
}

                                export default Footer;