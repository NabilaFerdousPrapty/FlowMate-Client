import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import pic1 from '../../assets/bannerImg/one.jpg'
import pic2 from '../../assets/bannerImg/two.jpg'
import pic3 from '../../assets/bannerImg/three.jpg'
import pic4 from '../../assets/bannerImg/four.jpg'
import pic5 from '../../assets/bannerImg/five.jpg'
import pic6 from '../../assets/bannerImg/six.jpg'
import pic7 from '../../assets/bannerImg/seven.jpg'
import pic8 from '../../assets/bannerImg/eight.jpg'
import pic9 from '../../assets/bannerImg/nine.jpg'


import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';

const Banner = () => {
  return (
    <div className="container mx-auto mt-8">

      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={1} // Initially show one slide
        autoplay={{
          delay: 3000, // Set autoplay delay (in milliseconds)
          disableOnInteraction: false, // Continue autoplay after user interaction
        }}
        breakpoints={{
          // Adjust breakpoints as needed
          640: { slidesPerView: 2 }, // Show 2 slides on medium screens
          768: { slidesPerView: 3 }, // Show 3 slides on large screens
          1024: { slidesPerView: 4 }, // Show 4 slides on extra large screens
        }}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination, Autoplay]} // Add Autoplay module
        className="swiper mySwiper"
      >
        <SwiperSlide>
          <img
            src={pic1}
            alt="Nature Image 1"
            className="w-[650px] h-[450px] object-cover" // Ensures responsive image scaling
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={pic2}
            alt="Nature Image 2"
            className="w-[650px] h-[450px] object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={pic3}
            alt="Nature Image 3"
            className="w-[650px] h-[450px] object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={pic4}
            alt="Nature Image 3"
            className="w-[650px] h-[450px] object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={pic5}
            alt="Nature Image 3"
            className="w-[650px] h-[450px] object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={pic6}
            alt="Nature Image 3"
            className="w-[650px] h-[450px] object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={pic7}
            alt="Nature Image 3"
            className="w-[650px] h-[450px] object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={pic8}
            alt="Nature Image 3"
            className="w-[650px] h-[450px] object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={pic9}
            alt="Nature Image 3"
            className="w-[650px] h-[450px] object-cover"
          />
        </SwiperSlide>

      </Swiper>
    </div>
  );
};

export default Banner;