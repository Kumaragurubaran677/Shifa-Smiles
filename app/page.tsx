import NavBar from "@/components/Reusable/NavBar";
import HomeHero from "@/components/Home/HomeHero";
import HomeCTA from "@/components/Home/HomeCTA";
import HomeAbout from "@/components/Home/HomeAbout";
import HomeCollection from "@/components/Home/HomeCollection";
import HomeCustomize from "@/components/Home/HomeCustomize";
import Reviews from "@/components/Reviews/Reviews";
import FAQ from "@/components/Home/FAQ";
import Footer from "@/components/Reusable/Footer";
import PetalBackground from "@/components/Reusable/PetalBackground";

export default function Home() {
  return (
    <div>

      <PetalBackground
        petalCount={50}
        petalColor="#ffb7c5"
        windSpeed={2}
        petalSize={20}
      >

        <NavBar />
        <HomeHero />
        <HomeCTA />
        <HomeAbout />
        <HomeCollection />
        <HomeCustomize />
        <Reviews />
        <FAQ />
      </PetalBackground>
      <Footer />
    </div>
  );
}
