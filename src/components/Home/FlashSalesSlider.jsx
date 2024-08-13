import { Swiper, SwiperSlide} from "swiper/react"
import { Autoplay } from "swiper/modules"
import ProductBox from "./ProductBox"



export default function FlashSalesSlider() {
    return (
        <div>
            <Swiper
                modules={[Autoplay]}
                spaceBetween={20}
                slidesPerView={2}
                loop
                breakpoints={{
                    640: {
                        slidesPerView: 3,
                    },
                    1024: {
                        slidesPerView: 4,
                    },
                }}
                autoplay={{
                    delay:1000,
                    pauseOnMouseEnter: true,
                }}
            >
                <SwiperSlide> <div className="w-full"> <ProductBox price={120} priceBeforeOff={160} offPercent={60} title={'HAVIT HV-G92 Gamepad'} imageUrl={'/assets/images/flashsalesImages/Gamepad.png'} /> </div> </SwiperSlide>
                <SwiperSlide> <div className="w-full"> <ProductBox priceBeforeOff={400} price={370} offPercent={30} title={'HAVIT HV-G92 Gamepad'} imageUrl={'/assets/images/flashsalesImages/Monitor.png'} /> </div> </SwiperSlide>
                <SwiperSlide> <div className="w-full"> <ProductBox price={960} priceBeforeOff={1160} offPercent={35} title={'HAVIT HV-G92 Gamepad'} imageUrl={'/assets/images/flashsalesImages/Keyboard.png'} /> </div> </SwiperSlide>
                <SwiperSlide> <div className="w-full"> <ProductBox offPercent={30} priceBeforeOff={50} price={10} title={'HAVIT HV-G92 Gamepad'} imageUrl={'/assets/images/flashsalesImages/Chair.png'} /> </div> </SwiperSlide>
                <SwiperSlide> <div className="w-full"> <ProductBox priceBeforeOff={400} price={370} offPercent={30} title={'HAVIT HV-G92 Gamepad'} imageUrl={'/assets/images/flashsalesImages/Monitor.png'} /> </div> </SwiperSlide>


            </Swiper>
        </div>
    )
}
