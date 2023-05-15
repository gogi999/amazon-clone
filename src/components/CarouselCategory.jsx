import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper';
import {
  Swiper,
  SwiperSlide,
} from 'swiper/react';

import cat_0 from '../assets/images/category_0.jpg';
import cat_1 from '../assets/images/category_1.jpg';
import cat_2 from '../assets/images/category_2.jpg';
import cat_3 from '../assets/images/category_3.jpg';
import cat_4 from '../assets/images/category_4.jpg';
import cat_5 from '../assets/images/category_5.jpg';

const CarouselCategory = () => {
    return (
        <div className="bg-white m-3">
            <div className="text-2xl font-semibold p-3">Shop by Category</div>
            <Swiper
                slidesPerView={5}
                spaceBetween={10}
                navigation={true}
                modules={[Navigation]}
            >
                <SwiperSlide>
                    <img src={cat_0} alt="category-0-img" className="ml-16" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={cat_1} alt="category-1-img" className="ml-12" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={cat_2} alt="category-2-img" className="ml-7" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={cat_3} alt="category-3-img" className="ml-7" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={cat_4} alt="category-4-img" className="ml-7" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={cat_5} alt="category-5-img" className="ml-7" />
                </SwiperSlide>
            </Swiper>
        </div>
    );
}

export default CarouselCategory;
