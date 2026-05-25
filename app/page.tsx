import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Steps from "@/components/Steps";
import Pricing from "@/components/Pricing";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Steps />
        <Pricing />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
