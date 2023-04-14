// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function Client() {
    return ( 
        // <!-- ======= Clients Section ======= -->
        <section id="clients" className="clients">
               
          <div className="container" data-aos="zoom-out">
    
            <div className="clients-slider swiper">
              <div className="swiper-wrapper align-items-center">
              <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={7}
    //   navigation
      pagination={{ clickable: true }}
    //   scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
                <SwiperSlide><div className="swiper-slide"><img src="assets/img/clients/client-2.png" className="img-fluid" alt=""/></div></SwiperSlide>
                <SwiperSlide><div className="swiper-slide"><img src="assets/img/clients/client-1.png" className="img-fluid" alt=""/></div></SwiperSlide>
                <SwiperSlide><div className="swiper-slide"><img src="assets/img/clients/client-3.png" className="img-fluid" alt=""/></div></SwiperSlide>
                <SwiperSlide><div className="swiper-slide"><img src="assets/img/clients/client-4.png" className="img-fluid" alt=""/></div></SwiperSlide>
                <SwiperSlide><div className="swiper-slide"><img src="assets/img/clients/client-5.png" className="img-fluid" alt=""/></div></SwiperSlide>
                <SwiperSlide><div className="swiper-slide"><img src="assets/img/clients/client-6.png" className="img-fluid" alt=""/></div></SwiperSlide>
                <SwiperSlide><div className="swiper-slide"><img src="assets/img/clients/client-7.png" className="img-fluid" alt=""/></div></SwiperSlide>
                <SwiperSlide><div className="swiper-slide"><img src="assets/img/clients/client-8.png" className="img-fluid" alt=""/></div></SwiperSlide>
</Swiper>
              </div>
            </div>
    
          </div>
          
        </section>
     );
}

export default Client;