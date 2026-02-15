import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  bgColor: string;
  textColor: string;
  onClick: (service: string) => void;
}

function ServiceCard({ title, description, bgColor, textColor, onClick }: ServiceCardProps) {
  return (
    <div
      className={`${bgColor} ${textColor} p-8 rounded-3xl relative overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-300`}
      onClick={() => onClick(title)}
    >
      <div className="absolute top-4 right-4 w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
        <ArrowRight className="w-6 h-6" />
      </div>

      <h3 className="text-3xl font-bold mb-4 mt-8">{title}</h3>
      <p className="text-sm opacity-80 mb-6">{description}</p>

      <button className="px-6 py-3 bg-black text-white rounded-full text-sm font-medium hover:bg-gray-900 transition-colors flex items-center gap-2">
        Learn More
        <ArrowRight className="w-4 h-4" />
      </button>
    </div>
  );
}

interface ServicesProps {
  onSelectService: (service: string) => void;
}

export default function Services({ onSelectService }: ServicesProps) {
  const services = [
    {
      title: 'SEO',
      description: 'Search Engine Optimization - increase your visibility in search results and attract organic traffic',
      bgColor: 'bg-black',
      textColor: 'text-white',
    },
    {
      title: 'SMM',
      description: 'Social Media Marketing - build your brand presence and engage with your audience on social platforms',
      bgColor: 'bg-lime-400',
      textColor: 'text-black',
    },
    {
      title: 'Content Marketing',
      description: 'Create valuable content that attracts and retains your target audience while driving profitable actions',
      bgColor: 'bg-white',
      textColor: 'text-black',
    },
    {
      title: 'Contextual Advertising',
      description: 'Targeted advertising campaigns that reach your ideal customers at the right time and place',
      bgColor: 'bg-lime-400',
      textColor: 'text-black',
    },
  ];

  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              {...service}
              onClick={onSelectService}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
