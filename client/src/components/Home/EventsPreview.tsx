import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, MapPin, Clock, ArrowRight } from 'lucide-react';

const EventsPreview: React.FC = () => {
  const upcomingEvents = [
    {
      id: 1,
      title: 'Technical Symposium 2024',
      date: '2024-03-15',
      time: '9:00 AM - 5:00 PM',
      location: 'Main Auditorium',
      description: 'Annual technical symposium showcasing student projects and innovations',
      category: 'Academic',
    },
    {
      id: 2,
      title: 'Placement Drive - TCS',
      date: '2024-03-20',
      time: '10:00 AM - 4:00 PM',
      location: 'Placement Cell',
      description: 'Campus recruitment drive by Tata Consultancy Services',
      category: 'Placement',
    },
    {
      id: 3,
      title: 'Sports Week',
      date: '2024-03-25',
      time: '8:00 AM - 6:00 PM',
      location: 'Sports Complex',
      description: 'Annual sports competition featuring various games and activities',
      category: 'Sports',
    },
    {
      id: 4,
      title: 'Workshop on AI & ML',
      date: '2024-04-01',
      time: '9:00 AM - 3:00 PM',
      location: 'Computer Lab',
      description: 'Hands-on workshop on Artificial Intelligence and Machine Learning',
      category: 'Workshop',
    },
  ];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  };

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      Academic: 'bg-blue-100 text-blue-800',
      Placement: 'bg-green-100 text-green-800',
      Sports: 'bg-orange-100 text-orange-800',
      Workshop: 'bg-purple-100 text-purple-800',
    };
    return colors[category] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div>
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Upcoming Events
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Stay updated with our latest events and activities
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {upcomingEvents.map((event) => (
          <div
            key={event.id}
            className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden group"
          >
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(
                    event.category
                  )}`}
                >
                  {event.category}
                </span>
                <div className="text-right">
                  <div className="text-sm font-semibold text-gray-900">
                    {formatDate(event.date)}
                  </div>
                </div>
              </div>

              <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                {event.title}
              </h3>

              <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                {event.description}
              </p>

              <div className="space-y-2">
                <div className="flex items-center text-sm text-gray-500">
                  <Calendar className="w-4 h-4 mr-2" />
                  {formatDate(event.date)}
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <Clock className="w-4 h-4 mr-2" />
                  {event.time}
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <MapPin className="w-4 h-4 mr-2" />
                  {event.location}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center">
        <Link
          to="/student-corner#events"
          className="inline-flex items-center px-6 py-3 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors duration-200"
        >
          View All Events
          <ArrowRight className="ml-2 w-4 h-4" />
        </Link>
      </div>
    </div>
  );
};

export default EventsPreview;
