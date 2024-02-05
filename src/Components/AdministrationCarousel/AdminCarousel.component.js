import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from './AdminCarousel.module.css'
import CarouselCard from './CarouselCard';
// import required modules
import { Autoplay } from "swiper";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';



const AdminCarousel = () => {
  return (
    <div className={`${styles.adminCarousel}`}>

    <Swiper
        breakpoints={{
          0: {
            slidesPerView: 4,
          },
          360: {
            slidesPerView: 1,
          },
          480: {
            slidesPerView: 2
          },
        
          760: {
            slidesPerView: 3
          },
        }}
        spaceBetween={10}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}

      

      modules={[Autoplay]}
      className={`${styles.swiper}`}
    >
      <SwiperSlide><CarouselCard /></SwiperSlide>
      <SwiperSlide><CarouselCard /></SwiperSlide>
      <SwiperSlide><CarouselCard /></SwiperSlide>
      <SwiperSlide><CarouselCard /></SwiperSlide>
      <SwiperSlide><CarouselCard /></SwiperSlide>
      <SwiperSlide><CarouselCard /></SwiperSlide>
      <SwiperSlide><CarouselCard /></SwiperSlide>
    </Swiper>

</div>
  )
}

export default AdminCarousel