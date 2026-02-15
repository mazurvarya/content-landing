interface CTASectionProps {
  onOpenForm: () => void;
}

export default function CTASection({ onOpenForm }: CTASectionProps) {
  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto bg-black text-white rounded-3xl p-12 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-lime-400 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-lime-400 to-transparent rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Subscribe to learn more<br />
            about how we can help your business
          </h2>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-2xl mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full sm:flex-1 px-6 py-4 bg-white text-black rounded-full focus:outline-none focus:ring-2 focus:ring-lime-400"
            />
            <button
              onClick={onOpenForm}
              className="w-full sm:w-auto px-8 py-4 bg-lime-400 text-black rounded-full font-medium hover:bg-lime-300 transition-colors whitespace-nowrap"
            >
              Get Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
