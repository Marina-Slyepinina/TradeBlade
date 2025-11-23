"use client"

import { Container } from "../Container/Container";
import { DealCard } from "../DealCard/DealCard"
import { deals } from "@/utils/dealsData";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Mousewheel, Scrollbar } from 'swiper/modules';
import css from "./Deals.module.css";
import 'swiper/css';
import 'swiper/css/free-mode';

export const Deals = () => {
    return (
        <section id="online-deals" className={css.dealsSection}>
            <Container>
                <div className={css.titleBlokWrapper}>
                    <h2 className={css.title}>МИНУЛІ УГОДИ</h2>
                    <p className={css.online}>Онлайн</p>
                </div>
            </Container>

            <div className={css.carouselWrapper}>
                <Swiper
                    className={css.swiperContainer}

                    modules={[FreeMode, Mousewheel, Scrollbar]} 
                    scrollbar={{ draggable: true }}
                    spaceBetween={8} 
                    slidesPerView={'auto'}
                    freeMode={true}
                    mousewheel={true}

                    centeredSlides={false}
                    watchOverflow={true}

                    breakpoints={{
                        768: {
                            spaceBetween: 16, 
                        },
                        1440: {
                            spaceBetween: 20, 
                        },
                    }}
                >
                    {deals.map((item, index) => (
                        <SwiperSlide key={index} className={css.swiperSlide}>
                            <DealCard pair={item.pair} time={item.time} profit={item.profit} target={item.target} date={item.date} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            <div className={css.scrollbarPlaceholder}></div>
        </section>
    )
}
