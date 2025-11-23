import { Container } from "../Container/Container"
import css from "./About.module.css";

export const About = () => {
    return (
        <div className={css.aboutSectionWrapper} id="about-company">
            <section className={css.aboutSection}>
                <Container className={css.container}>
                    <div className={css.content}>
                        <h2 className={css.title}>ПРО КОМПАНІЮ</h2>
                        <p className={css.description}>Ми досвідчена команда, для якої трейдинг - професія. TradeBlade є авторизованим офіційним брокером біржі Binance.<br /><br />
                        Він надає користувачам безліч переваг, таких як більш висока швидкість синхронізації API та можливість створити обліковий запис Binance через платформу TradeBlade всього в 1 клік.
                        </p>
                    </div>
                    <form className={css.form}>
                        <p className={css.text}>Спробуйте зараз та отримайте <br />
                            5 днів безкоштовного користування
                        </p>
                        <div className={css.inputWrapper}>
                            <input type="email" name="email" placeholder='Ваш e-mail' className={css.input} />
                            <button className={css.btn}>СПРОБУВАТИ</button>
                        </div>
                    </form>
                </Container>
            
                <svg className={css.dividerMob} width="100%" viewBox="0 0 267 82" preserveAspectRatio="none">
                    <use href="sprite.svg#divider-mob"></use>
                </svg>
                <svg className={css.dividerDesc} width="45%" viewBox="0 0 639 60">
                    <use href="sprite.svg#divider-desc"></use>
                </svg>
            </section>
        </div>
    )
}
