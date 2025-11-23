import Link from 'next/link';
import { sections } from '@/utils/sectionTitles';
import { Container } from '../Container/Container';
import css from './Footer.module.css';

export const Footer = () => {
  return (
    <footer className={css.footer}>
      <Container className={css.container}>
        <div className={css.navWrapper}>
            <p className={css.text}>Швидка навігація</p>
            <nav className={css.navigation}>
              <ul className={css.navList}>
                {sections.map(item => (
                  <li className={css.navItem} key={item.id}>
                    <Link className={css.navLink} href={`/#${item.id}`}>{(item.name).toUpperCase()}</Link>
                  </li>))
                }
              </ul>
          </nav>
        </div>
        <div className={css.rightsWrapper}>
          <Link href='/' className={css.logo}>
            <svg width={165} height={80}>
              <use href="sprite.svg#logo"></use>
            </svg>
          </Link>
          <div className={css.rights}>© 2022 TradeBlade. All rights reserved</div>
        </div>
      </Container>
    </footer>
  );
};
