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
      slidesPerView={3}
    //   navigation
      pagination={{ clickable: true }}
    //   scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
                <SwiperSlide><div className="swiper-slide"><img src="assets/img/clients/bollore.png" className="img-fluid" alt=""/></div></SwiperSlide>
                {/* <SwiperSlide><div className="swiper-slide"><img src="assets/img/clients/hbi.png" className="img-fluid" alt=""/></div></SwiperSlide>
                <SwiperSlide><div className="swiper-slide"><img src="assets/img/clients/normat.png" className="img-fluid" alt=""/></div></SwiperSlide>
                <SwiperSlide><div className="swiper-slide"><img src="assets/img/clients/labourd.png" className="img-fluid" alt=""/></div></SwiperSlide> */}
                <SwiperSlide><div className="swiper-slide"><img src="assets/img/clients/siraga.png" className="img-fluid" alt=""/></div></SwiperSlide>
                <SwiperSlide><div className="swiper-slide"><img src="assets/img/clients/uac.png" className="img-fluid" alt=""/></div></SwiperSlide>
                <SwiperSlide><div className="swiper-slide"><img src="assets/img/clients/sobebra.png" className="img-fluid" alt=""/></div></SwiperSlide>
</Swiper>
              </div>
            </div>
    
          </div>
          
        </section>
     );
}

export default Client;