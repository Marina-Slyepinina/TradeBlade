'use client'

import { useState } from "react";
import Link from "next/link";
import { Container } from "../Container/Container";
import { sections } from "@/utils/sectionTitles";
import { MenuModal } from "../MenuModal/MenuModal";
import css from "./Header.module.css";

export const Header = () => {

const [isModalOpen, setIsModalOpen] = useState(false);

const handleCloseOpen = () => setIsModalOpen(true);
const handleCloseModal = () => setIsModalOpen(false);

return (
    <>
        <header className={css.header}>
            <Container className={css.headerWrapper}>
                <nav className={css.navigation}>
                    <Link href='/' className={css.logo}>
                        <svg width={132} height={64}>
                            <use href="sprite.svg#logo"></use>
                        </svg>
                    </Link>
                    <ul className={css.navList}>
                        {sections.map(item => (
                            <li className={css.navItem} key={item.id}>
                                <Link className={css.navLink} href={`/#${item.id}`}>{(item.name).toUpperCase()}</Link>
                            </li>))
                        }
                    </ul>
                </nav>
        
                <div className={css.btnWrapper}>
                    <button type="button" className={`${css.btn} ${css.outline}`}>ВХІД</button>
                    <button type="button" className={`${css.btn} ${css.filled}`}>РЕЄСТРАЦІЯ</button>
                </div>
        
                <svg width={32} height={32} className={css.burger} onClick={handleCloseOpen}>
                    <use href="sprite.svg#burger"></use>
                </svg>
        
            </Container>
        </header>
        {isModalOpen && <MenuModal
            onClose={handleCloseModal}
        />}
    </>
)
}
