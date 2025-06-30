import React from 'react';
import { Calendar, Clock, MapPin, Users, Camera, Trophy } from 'lucide-react';

const Events: React.FC = () => {
  const upcomingEvents = [
    {
      title: 'Annual Science Fair',
      date: 'March 25, 2024',
      time: '9:00 AM - 4:00 PM',
      location: 'Main Auditorium',
      description: 'Students showcase their innovative science projects and experiments.',
      category: 'Academic',
      image: 'https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'Spring Sports Day',
      date: 'April 8, 2024',
      time: '8:00 AM - 5:00 PM',
      location: 'School Sports Complex',
      description: 'Inter-house athletics competition with various track and field events.',
      category: 'Sports',
      image: 'https://images.pexels.com/photos/1321909/pexels-photo-1321909.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'Art Exhibition',
      date: 'April 15, 2024',
      time: '10:00 AM - 6:00 PM',
      location: 'Art Gallery',
      description: 'Displaying creative artworks by our talented students.',
      category: 'Arts',
      image: 'https://images.pexels.com/photos/1194420/pexels-photo-1194420.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'Cultural Festival',
      date: 'May 2-4, 2024',
      time: 'All Day',
      location: 'Entire Campus',
      description: 'Three days of cultural performances, food, and celebrations.',
      category: 'Cultural',
      image: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
  ];

  const pastEvents = [
    {
      title: 'Winter Concert',
      date: 'December 15, 2023',
      description: 'Musical performances by school choir and orchestra.',
      highlights: ['150+ performers', '500+ audience members', 'Funds raised for charity'],
      images: [
        'https://images.pexels.com/photos/1047930/pexels-photo-1047930.jpeg?auto=compress&cs=tinysrgb&w=400',
        'https://images.pexels.com/photos/1481309/pexels-photo-1481309.jpeg?auto=compress&cs=tinysrgb&w=400',
      ],
    },
    {
      title: 'Science Olympiad',
      date: 'November 20, 2023',
      description: 'Inter-school science competition with multiple categories.',
      highlights: ['12 participating schools', '3 gold medals won', 'Outstanding team performance'],
      images: [
        'https://images.pexels.com/photos/256541/pexels-photo-256541.jpeg?auto=compress&cs=tinysrgb&w=400',
        'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=400',
      ],
    },
  ];

  const eventCategories = [
    { name: 'Academic', color: 'bg-blue-500', count: 8 },
    { name: 'Sports', color: 'bg-green-500', count: 12 },
    { name: 'Arts', color: 'bg-purple-500', count: 6 },
    { name: 'Cultural', color: 'bg-yellow-500', count: 4 },
    { name: 'Community', color: 'bg-red-500', count: 5 },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">School Events</h1>
          <p className="text-xl text-indigo-100 max-w-3xl mx-auto">
            Celebrating achievements, fostering community, and creating lasting memories 
            through our diverse range of school events and activities.
          </p>
        </div>
      </section>

      {/* Event Categories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Event Categories</h2>
            <p className="text-xl text-gray-600">Diverse activities for holistic development</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {eventCategories.map((category, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-200">
                <div className={`w-16 h-16 ${category.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <Calendar className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{category.name}</h3>
                <p className="text-gray-600">{category.count} events/year</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Upcoming Events</h2>
            <p className="text-xl text-gray-600">Don't miss these exciting upcoming activities</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-200">
                <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${event.image})` }}></div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                      event.category === 'Academic' ? 'bg-blue-100 text-blue-800' :
                      event.category === 'Sports' ? 'bg-green-100 text-green-800' :
                      event.category === 'Arts' ? 'bg-purple-100 text-purple-800' :
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {event.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{event.title}</h3>
                  <p className="text-gray-600 mb-4">{event.description}</p>
                  
                  <div className="space-y-2 text-sm text-gray-500">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2" />
                      {event.date}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-2" />
                      {event.time}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-2" />
                      {event.location}
                    </div>
                  </div>
                  
                  <button className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-200">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Past Events Highlights</h2>
            <p className="text-xl text-gray-600">Celebrating our recent achievements and memories</p>
          </div>
          
          <div className="space-y-12">
            {pastEvents.map((event, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{event.title}</h3>
                    <div className="flex items-center text-gray-500 mb-4">
                      <Calendar className="h-5 w-5 mr-2" />
                      {event.date}
                    </div>
                    <p className="text-gray-600 mb-6">{event.description}</p>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                        <Trophy className="h-5 w-5 mr-2 text-yellow-600" />
                        Event Highlights
                      </h4>
                      <ul className="space-y-2">
                        {event.highlights.map((highlight, hIndex) => (
                          <li key={hIndex} className="flex items-center">
                            <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                            <span className="text-gray-700">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                      <Camera className="h-5 w-5 mr-2 text-blue-600" />
                      Event Gallery
                    </h4>
                    <div className="grid grid-cols-2 gap-3">
                      {event.images.map((image, imgIndex) => (
                        <div key={imgIndex} className="aspect-square rounded-lg overflow-hidden">
                          <img src={image} alt="Event" className="w-full h-full object-cover hover:scale-105 transition-transform duration-200" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Registration CTA */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Want to Participate?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join us in our upcoming events and be part of our vibrant school community. 
            Registration is open for students and parents.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50 transition-colors duration-200">
              <Users className="h-5 w-5 mr-2" />
              Register for Events
            </button>
            <button className="inline-flex items-center px-8 py-3 border-2 border-white text-base font-medium rounded-md text-white hover:bg-white hover:text-blue-600 transition-colors duration-200">
              View Event Calendar
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;