import { ArrowRight } from 'lucide-react';

interface HeroProps {
  onOpenForm: () => void;
}

export default function Hero({ onOpenForm }: HeroProps) {
  return (
    <section className="relative bg-black text-white py-20 px-6 rounded-3xl overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-lime-400 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-3 h-3 bg-lime-400 rounded-full"></div>
          <span className="text-lime-400 text-sm font-medium">DigitalDynasty</span>
        </div>

        <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
          We are experts<br />
          in business promotion<br />
          on the Internet
        </h1>

        <div className="flex flex-wrap gap-4 mb-8">
          <button
            onClick={onOpenForm}
            className="px-8 py-4 bg-white text-black rounded-full font-medium hover:bg-gray-100 transition-colors"
          >
            Get Started
          </button>
          <button
            onClick={onOpenForm}
            className="px-8 py-4 bg-lime-400 text-black rounded-full font-medium hover:bg-lime-300 transition-colors"
          >
            Free Consultation
          </button>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex -space-x-2">
            <div className="w-10 h-10 rounded-full bg-gray-600 border-2 border-black"></div>
            <div className="w-10 h-10 rounded-full bg-gray-500 border-2 border-black"></div>
            <div className="w-10 h-10 rounded-full bg-gray-400 border-2 border-black"></div>
          </div>
          <p className="text-sm text-gray-400">
            100+ successful projects<br />
            with a 95% client retention rate
          </p>
        </div>
      </div>
    </section>
  );
}
