import { Accordion } from "../Accordion/Accordion";
import { Container } from "../Container/Container";
import css from "./FAQ.module.css";

export const FAQ = () => {
  return (
    <section className={css.faqSection} id="faq">
        <Container className={css.container}>
            <h2 className={css.title}>Часті питання</h2>
            <Accordion />
        </Container>
    </section>
  )
}
