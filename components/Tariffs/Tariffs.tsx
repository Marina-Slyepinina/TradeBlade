"use client"

import { Container } from "../Container/Container";
import { standartTariff, vipTariff } from "@/utils/tariffsData";
import css from "./Tariffs.module.css";
import { useState } from "react";

export const Tariffs = () => {

    const [activeCategory, setActiveCategory] = useState('СПОТ');

    const handleCategoryChange = (category: string) => {
        setActiveCategory(category);
    };

    return (
        
        <section className={css.tariffsSection} id="tariffs">
            <Container className={css.container}>
                <h2 className={css.title}>Тарифи</h2>
                <div className={css.categoriesWrapper}>
                    <button className={`${css.category} ${activeCategory === 'СПОТ' ? css.activeBtn : ''}`} onClick={() => handleCategoryChange('СПОТ')}>СПОТ</button>

                    <button className={`${css.category} ${activeCategory === 'ФЬЮЧЕРС' ? css.activeBtn : ''}`} onClick={() => handleCategoryChange('ФЬЮЧЕРС')}>ФЬЮЧЕРС</button>
                </div>
                <div className={css.cardsWrapper}>
                    <div className={css.standart}>
                        <div>
                            <h3  className={css.cardTitle}>STANDART</h3>
                            <ul className={css.servicesList}>
                                {standartTariff.data.map((item, index) => (
                                    <li key={index} className={css.servicesItem}>
                                        <div>
                                            <svg width={12} height={12} className={css.checkIcon}>
                                                <use href="sprite.svg#check"></use>
                                            </svg>
                                        </div>
                                        <p>{item}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <form className={css.form}>
                            <div className={css.formContent}>
                                <p className={css.price}>{standartTariff.price}</p>
                                <div className={css.selectWrapper}>
                                    <select name="period" id="period" className={css.customSelect}>
                                        <option value="12">12 місяців</option>
                                        <option value="6">6 місяців</option>
                                        <option value="3">3 місяців</option>
                                    </select>
                                    <svg width={24} height={24} className={css.selectArrow}>
                                        <use href="sprite.svg#arrow-down"></use>
                                    </svg>
                                </div>
                            </div>
                            <button className={css.btn}>
                                <p className={css.btnTitle}>СПРОБУВАТИ</p>
                                <p className={css.btnSubtitle}>5 дній безкоштовно</p>
                            </button>
                        </form>
                    </div>
                
                    <div className={css.vip}>
                        <h3 className={css.cardTitle}>VIP</h3>
                        <ul className={css.servicesList}>
                            {vipTariff.data.map((item, index) => (
                                <li key={index} className={css.servicesItem}>
                                    <div>
                                        <svg width={12} height={12} className={css.checkIcon}>
                                            <use href="sprite.svg#check"></use>
                                        </svg>
                                    </div>
                                    <p>{item}</p>
                                </li>
                            ))}
                        </ul>
                        <form className={css.form}>
                            <div className={css.formContent}>
                                <p className={css.price}>{vipTariff.price}</p>
                                <div className={css.selectWrapper}>
                                    <select name="period" id="period" className={css.customSelect}>
                                        <option value="12">12 місяців</option>
                                        <option value="6">6 місяців</option>
                                        <option value="3">3 місяців</option>
                                    </select>
                                    <svg width={24} height={24} className={css.selectArrow}>
                                        <use href="sprite.svg#arrow-down"></use>
                                    </svg>
                                </div>
                            </div>
                            <button className={css.btn}>
                                <p className={css.btnTitle}>СПРОБУВАТИ</p>
                                <p className={css.btnSubtitle}>5 дній безкоштовно</p>
                            </button>
                        </form>
                    </div>
                </div>
            </Container>
        </section>
    )
}
