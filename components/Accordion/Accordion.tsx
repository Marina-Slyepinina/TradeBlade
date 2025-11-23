"use client"

import { useState } from "react";
import { faqData } from "@/utils/faqData";
import css from "./Accordion.module.css";

export const Accordion = () => {

    const [openItemId, setOpenItemId] = useState<string | null>(null);

    const handleToggle = (id: string) => {
        setOpenItemId(id === openItemId ? null : id);
    };

    return (
        <div className={css.accordionList}>
            {faqData.map((item) => {

                const isOpen = item.id === openItemId;

                return (
                    <div
                        key={item.id}
                        className={`${css.accordionItem} ${isOpen ? css.activeItem : ''}`}
                    >
                        <button
                            className={css.accordionHeader}
                            onClick={() => handleToggle(item.id)} 
                            aria-expanded={isOpen}
                        >
                            <h3 className={css.question}>{item.question}</h3>
                            <svg className={`${css.arrowIcon} ${isOpen ? css.arrowUp : ''}`} width={24} height={24}>
                                <use href="sprite.svg#arrow-down"></use>
                            </svg>
                        </button>

                        {isOpen && (
                            <div className={css.accordionContent}>
                                {item.answer}
                            </div>
                        )}
                    </div>
                );
            })}
        </div>
    );
}
