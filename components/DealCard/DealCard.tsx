import css from './DealCard.module.css';

interface DealCardProps {
    pair: string,
    time: string,
    profit: string,
    target: string,
    date: string
}

export const DealCard = ({ pair, time, profit, target, date }: DealCardProps) => {
    return (
        <div className={css.card}>

            <svg className={css.logoOverlay} width="111" height="161">
                <use href='sprite.svg#logo-overlay'></use>
            </svg>

            <div className={css.header}>
                <span className={css.pair}>{pair}</span>
                <span className={css.time}>{time}</span>
            </div>

            <div className={css.content}>
                <p className={css.label}>ПРИБУТОК</p>
                <p className={css.profit}>
                    {profit}
                    <svg width="11" height="18" className={css.arrow}>
                        <use href='sprite.svg#arrow-up'></use>
                    </svg>             
                </p>
            </div>

            <div className={css.footer}>
                <span className={css.target}>{target}</span>
                <span className={css.date}>Дата входу {date}</span>
            </div>
        </div>
    );
};