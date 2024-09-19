import { useEffect, useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
const FlowMateService = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        AOS.init({ duration: 600 });
      }, []); 
    useEffect(() => {
        fetch('/data.json')
            .then(res => res.json())
            .then(data => setData(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div className="container mx-auto p-4 lg:p-8 mb-24">
            {data.map((section, index) => (
                <div key={index} className="mb-8" data-aos="fade-up-right">
                    <h2 className="text-3xl font-bold mb-2">{section.title}</h2>
                    <p className="mb-4">{section.description}</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {section.cards.map((card, idx) => (
                            <div data-aos="fade-up-right"
                                key={idx} 
                                className="border p-4 rounded-lg shadow-md transition-transform duration-300 transform hover:scale-105"
                            >
                                <img 
                                    src={card.image} 
                                    alt={card.title} 
                                    className="w-full h-32 object-cover mb-4" 
                                />
                                <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
                                <p>{card.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default FlowMateService;
