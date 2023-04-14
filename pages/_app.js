// import '@/styles/globals.css'
{/* <link href="assets/css/variables-blue.css" rel="stylesheet">
<link href="assets/css/variables-green.css" rel="stylesheet"> 
<link href="assets/css/variables-orange.css" rel="stylesheet"> 
<link href="assets/css/variables-purple.css" rel="stylesheet"> 
<link href="assets/css/variables-red.css" rel="stylesheet"> 
<link href="assets/css/variables-pink.css" rel="stylesheet">  */}
import "@/assets/css/variables-purple.css"
// import "@/assets/css/variables.css"
import "@/assets/css/main.css"
import "@/assets/vendor/bootstrap-icons/bootstrap-icons.css"
import "@/assets/vendor/bootstrap/css/bootstrap.min.css"
// import "bootstrap/dist/css/bootstrap.min.css"
import AOS from 'aos';import 'aos/dist/aos.css';
import { useEffect, useState } from "react";
import PreLoader from "@/Components/Partials/PageLoader";



export default function App({ Component, pageProps }) {

  const [loading, setLoading] = useState(true);



  useEffect(()=>{

  /**
   * Sticky header on scroll
   */
  const selectHeader = document.querySelector('#header');
  if (selectHeader) {
    document.addEventListener('scroll', () => {
      window.scrollY > 100 ? selectHeader.classList.add('sticked') : selectHeader.classList.remove('sticked');
    });
  }
  })
  useEffect(()=>{

      /**
   * Navbar links active state on scroll
   */
  let navbarlinks = document.querySelectorAll('#navbar .scrollto');

  function navbarlinksActive() {
    navbarlinks.forEach(navbarlink => {

      if (!navbarlink.hash) return;

      let section = document.querySelector(navbarlink.hash);
      if (!section) return;

      let position = window.scrollY;
      if (navbarlink.hash != '#header') position += 200;

      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active');
      } else {
        navbarlink.classList.remove('active');
      }
    })
  }
  window.addEventListener('load', navbarlinksActive);
  document.addEventListener('scroll', navbarlinksActive);

  /**
   * Function to scroll to an element with top ofset
   */
  function scrollto(el) {
    const selectHeader = document.querySelector('#header');
    let offset = 0;

    if (selectHeader.classList.contains('sticked')) {
      offset = document.querySelector('#header.sticked').offsetHeight;
    } else if (selectHeader.hasAttribute('data-scrollto-offset')) {
      offset = selectHeader.offsetHeight - parseInt(selectHeader.getAttribute('data-scrollto-offset'));
    }
    window.scrollTo({
      top: document.querySelector(el).offsetTop - offset,
      behavior: 'smooth'
    });
  }

  /**
   * Fires the scrollto function on click to links .scrollto
   */
  let selectScrollto = document.querySelectorAll('.scrollto');
  selectScrollto.forEach(el => el.addEventListener('click', function(event) {
    if (document.querySelector(this.hash)) {
      event.preventDefault();

      let mobileNavActive = document.querySelector('.mobile-nav-active');
      if (mobileNavActive) {
        mobileNavActive.classList.remove('mobile-nav-active');

        let navbarToggle = document.querySelector('.mobile-nav-toggle');
        navbarToggle.classList.toggle('bi-list');
        navbarToggle.classList.toggle('bi-x');
      }
      scrollto(this.hash);
    }
  }));

  /**
   * Scroll with ofset on page load with hash links in the url
   */
  window.addEventListener('load', () => {
    if (window.location.hash) {
      if (document.querySelector(window.location.hash)) {
        scrollto(window.location.hash);
      }
    }
  });

  /**
   * Auto generate the hero carousel indicators
   */
  let heroCarouselIndicators = document.querySelector('#hero .carousel-indicators');
  if (heroCarouselIndicators) {
    let heroCarouselItems = document.querySelectorAll('#hero .carousel-item')

    heroCarouselItems.forEach((item, index) => {
      if (index === 0) {
        heroCarouselIndicators.innerHTML += `<li data-bs-target="#hero" data-bs-slide-to="${index}" class="active"></li>`;
      } else {
        heroCarouselIndicators.innerHTML += `<li data-bs-target="#hero" data-bs-slide-to="${index}"></li>`;
      }
    });
  }

  /**
   * Scroll top button
   */
  const scrollTop = document.querySelector('.scroll-top');
  if (scrollTop) {
    const togglescrollTop = function() {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
    window.addEventListener('load', togglescrollTop);
    document.addEventListener('scroll', togglescrollTop);
    scrollTop.addEventListener('click', window.scrollTo({
      top: 0,
      behavior: 'smooth'
    }));
  }
  });

  useEffect(() => {
    // require("bootstrap/dist/js/bootstrap.bundle.min.js");
    require("@/assets/vendor/bootstrap/css/bootstrap.min.css");
    require("@/assets/vendor/bootstrap/js/bootstrap.bundle.min.js");
    // AOS.init();
    AOS.init({
      // add your AOS configurations here
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
    // require("@/assets/js/main.js")

  });

  useEffect(() => {

  /**
   * Mobile nav toggle
   */
  const mobileNavToogle = document.querySelector('.mobile-nav-toggle');
  if (mobileNavToogle) {
    alert('it enter')
    mobileNavToogle.addEventListener('click', function(event) {
      event.preventDefault();

      document.querySelector('body').classList.toggle('mobile-nav-active');

      this.classList.toggle('bi-list');
      this.classList.toggle('bi-x');
    });

        /**
    //  * Mobile nav toggle
    //  */
    //     const mobileNavShow = document.querySelector(".mobile-nav-show");
    //     const mobileNavHide = document.querySelector(".mobile-nav-hide");
    
    //     document.querySelectorAll(".mobile-nav-toggle").forEach((el) => {
    //       el.addEventListener("click", function (event) {
    //         event.preventDefault();
    //         mobileNavToogle();
    //       });
    //     });
    
    //     function mobileNavToogle() {
    //       document.querySelector("body").classList.toggle("mobile-nav-active");
    //       mobileNavShow.classList.toggle("d-none");
    //       mobileNavHide.classList.toggle("d-none");
    //     }
  }

  /**
   * Toggle mobile nav dropdowns
   */
  const navDropdowns = document.querySelectorAll('.navbar .dropdown > a');

  navDropdowns.forEach(el => {
    el.addEventListener('click', function(event) {
      if (document.querySelector('.mobile-nav-active')) {
        event.preventDefault();
        this.classList.toggle('active');
        this.nextElementSibling.classList.toggle('dropdown-active');

        let dropDownIndicator = this.querySelector('.dropdown-indicator');
        dropDownIndicator.classList.toggle('bi-chevron-up');
        dropDownIndicator.classList.toggle('bi-chevron-down');
      }
    })
  });

  },[]);


  useEffect(() => {
    setLoading(false);
  }, []);

  return( <>
   { 
   !loading ?<Component {...pageProps} /> 
   : <PreLoader/>}
   </>)
}
