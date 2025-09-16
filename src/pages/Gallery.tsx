import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { FaImages, FaVideo, FaBuilding, FaGraduationCap, FaTree, FaSearch } from 'react-icons/fa';

// Sample gallery data - in a real app, this would come from an API
const galleryData = [
  {
    id: 1,
    title: 'Campus Tour',
    category: 'campus',
    type: 'image',
    src: 'https://images.unsplash.com/photo-1523050853548-5201deccee86?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
    alt: 'College campus building',
    date: '2023-09-15'
  },
  {
    id: 2,
    title: 'Annual Day Celebration',
    category: 'events',
    type: 'image',
    src: 'https://images.unsplash.com/photo-1523050853548-5201deccee86?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
    alt: 'Students performing on stage',
    date: '2023-03-20'
  },
  {
    id: 3,
    title: 'Workshop on AI',
    category: 'workshops',
    type: 'video',
    src: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    alt: 'AI workshop in progress',
    date: '2023-05-10'
  },
  {
    id: 4,
    title: 'Sports Day',
    category: 'sports',
    type: 'image',
    src: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
    alt: 'Students participating in sports',
    date: '2023-02-15'
  },
  {
    id: 5,
    title: 'Library Interior',
    category: 'campus',
    type: 'image',
    src: 'https://images.unsplash.com/photo-1501630834273-4b5604d2ee31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
    alt: 'College library interior',
    date: '2023-08-05'
  },
  {
    id: 6,
    title: 'Robotics Competition',
    category: 'events',
    type: 'video',
    src: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    alt: 'Students with robots',
    date: '2023-07-22'
  },
  {
    id: 7,
    title: 'Cafeteria',
    category: 'campus',
    type: 'image',
    src: 'https://images.unsplash.com/photo-1564758565387-245f9c1c7e4d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
    alt: 'College cafeteria',
    date: '2023-06-18'
  },
  {
    id: 8,
    title: 'Cultural Fest',
    category: 'events',
    type: 'image',
    src: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
    alt: 'Cultural fest performance',
    date: '2023-04-30'
  }
];

const categories = [
  { id: 'all', name: 'All', icon: <FaImages className="mr-2" /> },
  { id: 'campus', name: 'Campus', icon: <FaBuilding className="mr-2" /> },
  { id: 'events', name: 'Events', icon: <FaGraduationCap className="mr-2" /> },
  { id: 'sports', name: 'Sports', icon: <FaTree className="mr-2" /> },
  { id: 'workshops', name: 'Workshops', icon: <FaVideo className="mr-2" /> }
];

const Gallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const filteredItems = galleryData.filter(item => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.alt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const openLightbox = (item: any, index: number) => {
    setSelectedItem(item);
    setCurrentIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedItem(null);
    document.body.style.overflow = 'auto';
  };

  const navigate = (direction: 'prev' | 'next') => {
    let newIndex = direction === 'next' ? currentIndex + 1 : currentIndex - 1;
    
    if (newIndex >= filteredItems.length) newIndex = 0;
    if (newIndex < 0) newIndex = filteredItems.length - 1;
    
    setCurrentIndex(newIndex);
    setSelectedItem(filteredItems[newIndex]);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Gallery - Government Polytechnic Alapur, Budaun</title>
        <meta name="description" content="Photo and video gallery of campus events and activities" />
      </Helmet>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-800 to-blue-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Campus Gallery</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Explore moments from our campus life, events, and achievements
          </p>
        </div>
      </div>

      {/* Gallery Controls */}
      <div className="container mx-auto px-4 py-8">
        {/* Search Bar */}
        <div className="mb-8 max-w-2xl mx-auto">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FaSearch className="text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Search gallery..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {category.icon}
              {category.name}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredItems.map((item, index) => (
              <div 
                key={item.id} 
                className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                onClick={() => openLightbox(item, index)}
              >
                {item.type === 'image' ? (
                  <img 
                    src={item.src} 
                    alt={item.alt} 
                    className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                ) : (
                  <div className="relative w-full h-64 bg-gray-200 flex items-center justify-center">
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                      <div className="w-16 h-16 bg-white bg-opacity-80 rounded-full flex items-center justify-center">
                        <FaVideo className="text-red-600 text-2xl" />
                      </div>
                    </div>
                    <img 
                      src={`https://img.youtube.com/vi/${item.src.split('v=')[1]}/hqdefault.jpg`} 
                      alt={item.alt}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                )}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="text-sm text-gray-200">{new Date(item.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No items found matching your criteria.</p>
            <button 
              onClick={() => {
                setActiveCategory('all');
                setSearchQuery('');
              }}
              className="mt-4 text-blue-600 hover:text-blue-800"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>

      {/* Lightbox */}
      {selectedItem && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <button 
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white text-3xl hover:text-gray-300 focus:outline-none"
            aria-label="Close"
          >
            &times;
          </button>
          
          <button 
            onClick={() => navigate('prev')}
            className="absolute left-4 text-white text-4xl hover:text-gray-300 focus:outline-none"
            aria-label="Previous"
          >
            &larr;
          </button>
          
          <div className="max-w-4xl w-full mx-4">
            <div className="bg-black rounded-lg overflow-hidden">
              {selectedItem.type === 'image' ? (
                <img 
                  src={selectedItem.src} 
                  alt={selectedItem.alt} 
                  className="w-full max-h-[80vh] object-contain"
                />
              ) : (
                <div className="aspect-w-16 aspect-h-9">
                  <iframe 
                    src={selectedItem.src} 
                    title={selectedItem.title}
                    className="w-full h-[70vh]"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              )}
              <div className="p-4 text-white">
                <h3 className="text-xl font-semibold">{selectedItem.title}</h3>
                <p className="text-gray-300">{selectedItem.alt}</p>
                <p className="text-sm text-gray-400 mt-2">
                  {new Date(selectedItem.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                </p>
              </div>
            </div>
          </div>
          
          <button 
            onClick={() => navigate('next')}
            className="absolute right-4 text-white text-4xl hover:text-gray-300 focus:outline-none"
            aria-label="Next"
          >
            &rarr;
          </button>
          
          <div className="absolute bottom-4 left-0 right-0 text-center text-white text-sm">
            {currentIndex + 1} of {filteredItems.length}
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
