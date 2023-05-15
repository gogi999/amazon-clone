import 'swiper/css';
import 'swiper/css/navigation';

import { Link } from 'react-router-dom';
import { Navigation } from 'swiper';
import {
  Swiper,
  SwiperSlide,
} from 'swiper/react';

const CarouselProduct = () => {
    return (
        <div className="bg-white m-3">
            <div className="text-2xl font-semibold p-3">Best Sellers</div>
            <Swiper
                slidesPerView={5}
                spaceBetween={10}
                navigation={true}
                modules={[Navigation]}
            >
                {Array.from({ length: 9 }, (_, i) => (
                    <SwiperSlide key={i}>
                        <Link to={`/product/${i}`}>
                            <img 
                                src={`../images/product_${i}_small.jpg`} 
                                alt="product-img" 
                                className="ml-16"    
                            />
                        </Link>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default CarouselProduct;
