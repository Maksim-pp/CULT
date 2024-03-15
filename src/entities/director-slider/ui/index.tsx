import { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation, Parallax } from "swiper/modules";
import { ButtonSwiper } from 'src/shared';
import { cards } from '..';
import styles from './styles.module.scss'
import Foto from 'src/app/assets/foto.png'


export const Slider:FC = () => {

  return (
    <Swiper  className={styles.slider}
    modules={[Navigation, Autoplay, Parallax]}
    autoplay
    parallax
    spaceBetween={20}
    navigation = {{
      prevEl: '.swiper__button__prev',
      nextEl: '.swiper__button__next'
    }}
    speed={1200}
    breakpoints={{
      0 :{
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024 :{
        slidesPerView: 3,
      }
    }}
    slidesPerView={3}
    >
      {
        cards.map(el => (
          <SwiperSlide className={styles.slide} key={el.id}>
            <img src={Foto} alt=""  className={styles.slide__img}/>
            <div className={styles.slide__text}>
              <div className={styles.slide__text__user}>
                <h1 className={styles.slide__text__user__name}>{el.name}</h1>
                <p className={styles.slide__text__user__post}>{el.post}</p>
              </div>
              <div className={styles.slide__text__contact}>
                <p className={styles.slide__text__contact__phone}>{el.contacts.phone}</p>
                <p className={styles.slide__text__contact__mail}>{el.contacts.mail}</p>
              </div>
            </div>
          </SwiperSlide>
        ))
      }
      <ButtonSwiper />
    </Swiper>
  )
}
