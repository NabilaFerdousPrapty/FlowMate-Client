
import Features from "@/components/features/Features";
import Banner from "../../components/banner/Banner";
import { FAQ } from "./../../components/FAQ";
import Hero from "@/Shared/hero/Hero";
import PricingPlans from "./../../components/PricingPlans";
import Newsletters from "@/components/newsletters/Newsletters";
import Testmonial from "@/components/Testmonial/Testmonial";





const Home = () => {
  return (
    <div>

      <Hero />

      <Banner />
      <Features />
      <Newsletters />
      <PricingPlans />
      <Testmonial />
      <FAQ />



    </div>
  );
};

export default Home;
