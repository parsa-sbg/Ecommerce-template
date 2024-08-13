import { Pagination, Scrollbar, A11y } from 'swiper/modules';
import './HomeSlider.css'
import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


export default function HomeSlider() {
    return (
        <div>
            <Swiper
                modules={[Pagination, Scrollbar, A11y]}
                slidesPerView={1}
                pagination={{ clickable: true }}
            >
                <SwiperSlide> <img src="/assets/images/swiperImages/Frame560.png" alt="" /> </SwiperSlide>
                <SwiperSlide> <img src="/assets/images/swiperImages/Frame560.png" alt="" /> </SwiperSlide>
                <SwiperSlide> <img src="/assets/images/swiperImages/Frame560.png" alt="" /> </SwiperSlide>
            </Swiper>
        </div>
    )
}
