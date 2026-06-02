import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Steps from "@/components/Steps";
import Pricing from "@/components/Pricing";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import { getFoundersTakenCount } from "@/lib/foundersCount";

export default async function Home() {
  const foundersTaken = await getFoundersTakenCount();

  return (
    <>
      <Nav />
      <main>
        <Hero foundersTaken={foundersTaken} />
        <Steps />
        <Pricing foundersTaken={foundersTaken} />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
