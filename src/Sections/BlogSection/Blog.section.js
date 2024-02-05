import React from "react";
import { BlogCard, Button } from "../../Components";
import styles from "./Blog.module.css";
// import required modules
import { Navigation } from "swiper";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const Blog = () => {
  return (
    <div className={`${styles.blog}`}>
      <h3 className={`${styles.blogHeading}`}>Latest News</h3>
      <div className={`${styles.onlineHeader}`}>
        <h1>News and Blog</h1>

        <div className={`${styles.onlineText}`}>
          <p>
            Get the latest news about what we are doing and how our students and
            strieving
          </p>
          <Button buttonText="All News" />
        </div>
      </div>
      <div className={`${styles.blogWrapper}`}>
        <Swiper
          breakpoints={{
            0: {
              slidesPerView: 4,
            },
            360: {
              slidesPerView: 1,
            },
            480: {
              slidesPerView: 2,
            },

            760: {
              slidesPerView: 3,
            },
          }}
          spaceBetween={10}
          navigation={true}
          modules={[Navigation]}
        >
          <SwiperSlide>
            <BlogCard />
          </SwiperSlide>
          <SwiperSlide>
            <BlogCard />
          </SwiperSlide>
          <SwiperSlide>
            <BlogCard />
          </SwiperSlide>
          <SwiperSlide>
            <BlogCard />
          </SwiperSlide>
          <SwiperSlide>
            <BlogCard />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Blog;
