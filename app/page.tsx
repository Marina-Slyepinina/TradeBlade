import { Header } from "@/components/Header/Header";
import { Hero } from "@/components/Hero/Hero";
import { Deals } from "@/components/Deals/Deals";
import { Numbers } from "@/components/Numbers/Numbers";
import { About } from "@/components/About/About";
import { Tariffs } from "@/components/Tariffs/Tariffs";
import { FAQ } from "@/components/FAQ/FAQ";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Numbers />
        <Deals />
        <About />
        <Tariffs />
        <FAQ />
      </main>
    </>
  );
}
