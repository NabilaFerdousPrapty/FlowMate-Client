
import Hero from "@/Shared/hero/Hero";


import Features from "@/components/features/Features";

import PricingPlans from "@/components/PricingPlans";


import Banner from "../../components/banner/Banner";
import { FAQ } from "@/components/FAQ";

const Home = () => {
  return (
    <div>
< 
       <Hero/>


      <Banner />
      <Features/>

      <h2>here is home</h2>
      <PricingPlans />
      <FAQ />
    </div>
  );
};

export default Home;
