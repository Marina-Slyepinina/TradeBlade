'use client'

import { sections } from "@/utils/sectionTitles";
import css from "./MenuModal.module.css";
import Link from "next/link";

interface MenuModalProps {
    onClose: () => void,
}

export const MenuModal = ({ onClose }: MenuModalProps) => {

    return (
        <div className={css.modal}>
            <svg width={32} height={32} className={css.iconClose} onClick={onClose}>
                <use href="sprite.svg#close"></use>
            </svg>

            <ul className={css.navList}>
                {sections.map(item => (
                    <li className={css.navItem} key={item.id} onClick={onClose}>
                        <Link className={css.navLink} href={`/#${item.id}`}>{(item.name).toUpperCase()}</Link>
                    </li>))
                }
            </ul>

            <div className={css.btnWrapper}>
                <button type="button" className={`${css.btn} ${css.filled}`}>РЕЄСТРАЦІЯ</button>
                <button type="button" className={`${css.btn} ${css.outline}`}>ВХІД</button>
            </div>
        </div>
    )
}