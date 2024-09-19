import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Button } from '../ui/button';

const AboutScrum = () => {
  useEffect(() => {
    AOS.init({ duration: 600 });
  }, []); 

  return (
    <div className="container mx-auto p-4 lg:p-8 mb-24">
      <div className="grid justify-center items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        <div
          data-aos="fade-zoom-in"
          data-aos-offset="200"
          data-aos-easing="ease-in-sine"
          data-aos-duration="600"
          className="mt-3"
        >
          <h1 className="text-xl font-semibold mb-3">About FlowMate</h1>
          <h1 className="text-3xl font-bold">What is FlowMate?</h1>
          <p className="mt-2">
            Scrum helps people and teams <strong>deliver value incrementally</strong> in a{" "}
            <strong>collaborative</strong> manner. If you are just getting
            started, think of it as a way to get work done as a team in small
            pieces at a time, with experimentation and feedback loops along the
            way.
          </p>
          <Button className="mt-5">Learn More</Button>
        </div>
        <div data-aos="fade-zoom-in"
          data-aos-offset="200"
          data-aos-easing="ease-in-sine"
          data-aos-duration="400" className="ms-5">
          <img src="/scrum.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default AboutScrum;
