import { FC } from 'react';
import { Swiper } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from "swiper/modules";


export const Slider:FC = () => {
  return (
    <Swiper 
        modules={[Navigation, Autoplay]}
        autoplay={{ delay: 3500 }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log()}>
        
    </Swiper>
  )
}
