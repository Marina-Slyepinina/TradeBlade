import { Container } from "../Container/Container";
import css from "./Numbers.module.css";

export const Numbers = () => {
    return (
        <div className={css.numbersSectionWrapper} id="numbers">
            <section className={css.numbersSection}>
                <Container className={css.container}>
                    <div className={css.mainBlokWrapper}>
                        <h2 className={css.title}>ЦИФРИ</h2>
                        <p className={css.date}>Вересень 2022</p>
                    </div>
                    <ul className={css.statisticList}>
                        <li className={css.statisticItem}>
                            <p className={css.statisticCategory}>Торгового прибутку</p>
                            <p className={css.statisticValue}>2756%</p>
                        </li>
                        <li className={css.statisticItem}>
                            <p className={css.statisticCategory}>Ф&apos;ючерсних та спотових угод</p>
                            <p className={css.statisticValue}>67</p>
                        </li>
                        <li className={css.statisticItem}>
                            <p className={css.statisticCategory}>Прибуток передплатників</p>
                            <p className={css.statisticValue}>375000</p>
                        </li>
                    </ul>
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
