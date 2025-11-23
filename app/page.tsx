import { Header } from "@/components/Header/Header";
import { Hero } from "@/components/Hero/Hero";
import { Deals } from "@/components/Deals/Deals";
import { Numbers } from "@/components/Numbers/Numbers";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Numbers />
        <Deals />
      </main>
    </>
  );
}
