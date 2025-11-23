import Image from "next/image";
import { Container } from "../Container/Container";
import css from "./Hero.module.css";

export const Hero = () => {
    return (
        <section className={css.heroSection}>
            <Container className={css.heroSectionWrapper}>
                <div className={css.imgWrapper}>
                    <Image className={css.img} alt="" src="/hero-decor.png"  fill sizes="(max-width: 767px) 300px, 469px" />
                </div>
                <div className={css.contentWrapper}>
                    <h1 className={css.title}>МОМЕНТАЛЬНО КОПІЮЙ УГОДИ ПРОФІ ТРЕЙДЕРІВ</h1>
                    <p className={css.text}>Почни копіювати угоди з успішною командою професійних трейдерів в автоматичному режимі.</p>
                    <form action="" className={css.form}>
                        <input type="email" name="email" placeholder='Ваш e-mail' className={css.input} />
                        <button className={css.btn}>ПОЧАТИ</button>
                    </form>
                    <p className={css.info}>5 днів безкоштовного користування</p>
                </div>
            </Container>
        </section>
    )
}
