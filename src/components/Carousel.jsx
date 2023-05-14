import 'swiper/css';
import 'swiper/css/navigation';

import {
  Autoplay,
  Navigation,
} from 'swiper';
import {
  Swiper,
  SwiperSlide,
} from 'swiper/react';

import carousel_1 from '../assets/images/carousel_1.jpg';
import carousel_2 from '../assets/images/carousel_2.jpg';
import carousel_4 from '../assets/images/carousel_4.jpg';
import carousel_5 from '../assets/images/carousel_5.jpg';
import carousel_3 from '../assets/images/carousel_vid.mp4';

const Carousel = () => {
    return (
        <div className="h-[600px] bg-white">
            <Swiper
                loop={true}
                spaceBetween={0}
                navigation={true}
                modules={[Navigation, Autoplay]}
                autoplay={{ delay: 4500 }}
                className="h-[50%]"
            >
                <SwiperSlide>
                    <img src={carousel_1} alt="carousel-one" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={carousel_2} alt="carousel-two" />
                </SwiperSlide>
                <SwiperSlide className="bg-black">
                    <video controls muted="muted">
                        <source src={carousel_3} type="video/mp4" />
                    </video>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={carousel_4} alt="carousel-four" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={carousel_5} alt="carousel-five" />
                </SwiperSlide>
            </Swiper>
            <div className="h-[50%] bg-gradient-to-b from-stone-900" />
        </div>
    );
}

export default Carousel;
