
import Contact from "@/components/contact/Contact";

import Features from "@/components/features/Features";

import Banner from "../../components/banner/Banner";
import { FAQ } from "./../../components/FAQ";
import Hero from "@/Shared/hero/Hero";
import PricingPlans from "./../../components/PricingPlans";
import Newsletters from "@/components/newsletters/Newsletters";

const Home = () => {
  return (
    <div>
      <Hero />

      <Banner />


      <h2>here is home</h2>
     <Contact></Contact>

      <Features />
       <Newsletters/>
      <PricingPlans />
      <FAQ />

    </div>
  );
};

export default Home;
