import Features from "@/components/features/Features";
import Banner from "../../components/banner/Banner";
import { FAQ } from './../../components/FAQ';
import Hero from "@/Shared/hero/Hero";
import PricingPlans from './../../components/PricingPlans';


const Home = () => {
  return (
    <div>

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
