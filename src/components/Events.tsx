import { ArrowRight, Calendar } from 'lucide-react';

interface Event {
  title: string;
  description: string;
  date: string;
}

export default function Events() {
  const events: Event[] = [
    {
      title: 'Digital Growth',
      description: 'How to scale your business and increase conversions through digital channels',
      date: '12/03/24',
    },
    {
      title: 'Success Exhibition',
      description: 'Best practices from successful digital campaigns and case studies',
      date: '29/05/24',
    },
    {
      title: 'Business Masterclass',
      description: 'Master the art of digital marketing and business development strategies',
      date: '06/06/24',
    },
    {
      title: 'Innovators Forum',
      description: 'Learn about the latest trends in digital marketing and business innovation',
      date: '18/08/24',
    },
  ];

  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-start justify-between mb-12">
          <h2 className="text-4xl font-bold">Events for Business in 2024</h2>
          <p className="text-sm text-gray-600 max-w-xs">
            Join our exclusive events and webinars to learn from industry experts
          </p>
        </div>

        <div className="space-y-4">
          {events.map((event, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl flex items-center justify-between hover:shadow-lg transition-shadow cursor-pointer group"
            >
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                <p className="text-gray-600 text-sm">{event.description}</p>
              </div>
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2 text-gray-600">
                  <Calendar className="w-5 h-5" />
                  <span className="font-medium">{event.date}</span>
                </div>
                <button className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-lime-400 transition-colors">
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
