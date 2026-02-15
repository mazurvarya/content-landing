export default function FeatureShowcase() {
  const features = [
    { label: 'WE', color: 'bg-lime-400' },
    { label: 'PROFESSIONALS', color: 'bg-white' },
    { label: 'LEADING', color: 'bg-black text-white' },
    { label: 'TO RESULTS', color: 'bg-gray-200' },
  ];

  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-6">
            Get results<br />
            as soon as possible!
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Our team works quickly to develop a strategy, launch campaigns, and deliver
            measurable results. Experience professional service and transparent
            communication at every step.
          </p>
          <button className="px-8 py-4 bg-white border-2 border-gray-300 text-black rounded-full font-medium hover:border-lime-400 transition-colors">
            Schedule Consultation →
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`${feature.color} p-8 rounded-3xl flex items-center justify-center text-center min-h-[200px]`}
            >
              <h3 className="text-2xl md:text-3xl font-bold">{feature.label}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
