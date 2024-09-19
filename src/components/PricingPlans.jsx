import { pricingPlans } from "@/constants";
import PropTypes from "prop-types";
import Container from "./Container";
import { Button } from "./ui/button";

const PricingPlanCard = ({ name, price, features, paymentType }) => {
  return (
    <div className="flex flex-col  border-2 rounded-lg p-5 hover:shadow-lg transform  delay-150">
      <div className="flex flex-col text-center pb-10">
        <h3 className="text-base font-semibold">{name}</h3>
        <p className=" text-3xl font-bold">
          {price}{" "}
          <span className="text-sm font-semibold text-zinc-500">
            ({paymentType})
          </span>
        </p>
      </div>
      <div className="flex flex-col justify-between h-full">
        <ul role="list" className="mb-8 space-y-4 text-left">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center space-x-3">
              <svg
                className="flex-shrink-0 w-5 h-5 text-teal-600"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 00-1.414 0L7 13.586 4.707 11.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l9-9a1 1 0 000-1.414z"
                  clipRule="evenodd"
                />
              </svg>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        <Button className="w-full font-bold gap-2 shadow uppercase p-2 text-white">
          Get Started
        </Button>
      </div>
    </div>
  );
};

const PricingPlans = () => (
  <Container>
    <section className="p-4 md:p-8">
      <div className="py-8 max-w-screen-xl lg:py-16">
        <div className="mx-auto max-w-3xl text-center pb-12 md:pb-20">
          <h2 className="text-3xl font-bold sm:text-4xl mb-4">Pricing Plans</h2>
          <p className="text-xl">
            Choose a plan that best suits your data needs.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-col-3 lg:grid-cols-3 gap-4">
          {pricingPlans.map((plan, index) => (
            <PricingPlanCard key={index} {...plan} />
          ))}
        </div>
      </div>
    </section>
  </Container>
);

PricingPlanCard.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  paymentType: PropTypes.string.isRequired,
  features: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default PricingPlans;
