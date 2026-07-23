import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { JsonLd } from "@/components/JsonLd";
import { Hero } from "@/components/sections/Hero";
import { BuiltBySmoke } from "@/components/sections/BuiltBySmoke";
import { HeavyHitters } from "@/components/sections/HeavyHitters";
import { FullMenu } from "@/components/sections/FullMenu";
import { FakeTheSmoke } from "@/components/sections/FakeTheSmoke";
import { FireNeverGoesOut } from "@/components/sections/FireNeverGoesOut";
import { Catering } from "@/components/sections/Catering";
import { FindThePit } from "@/components/sections/FindThePit";
import { FinalCta } from "@/components/sections/FinalCta";

/**
 * Pirates Pit Barbeque — homepage.
 * Eight sections composed top to bottom. Phase 2 is fully static & responsive;
 * scroll animation is layered on in later phases without restructuring this.
 */
export default function Home() {
  return (
    <>
      <JsonLd />
      <Header />
      <main id="main" className="flex-1">
        <Hero />
        <BuiltBySmoke />
        <HeavyHitters />
        <FullMenu />
        <FakeTheSmoke />
        <FireNeverGoesOut />
        <Catering />
        <FindThePit />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
