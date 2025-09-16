import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Calendar, 
  Users, 
  BookOpen, 
  Award, 
  Phone,
  MapPin,
  Clock,
  TrendingUp,
  Star,
  ChevronRight
} from 'lucide-react';

// Components
import HeroSlider from '../components/Home/HeroSlider';
import QuickLinks from '../components/Home/QuickLinks';
import PrincipalMessage from '../components/Home/PrincipalMessage';
import NewsTicker from '../components/Home/NewsTicker';
import EventsPreview from '../components/Home/EventsPreview';
import PlacementHighlights from '../components/Home/PlacementHighlights';
import StatsSection from '../components/Home/StatsSection';

const Home: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Government Polytechnic Alapur, Budaun - Premier Technical Institute</title>
        <meta 
          name="description" 
          content="Government Polytechnic Alapur, Budaun is a premier technical institute offering quality education in Civil, Electrical, Mechanical, and Production Engineering. Apply now for admissions." 
        />
        <meta name="keywords" content="polytechnic, engineering, technical education, Budaun, Uttar Pradesh, admissions, courses" />
      </Helmet>

      <div className="pt-16">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <HeroSlider />
          <div className="absolute inset-0 bg-black/40 z-10"></div>
          <div className="relative z-20 text-center text-white px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
              Government Polytechnic
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 animate-fade-in">
              Alapur, Budaun
            </h2>
            <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto animate-fade-in">
              Empowering minds, building futures through excellence in technical education
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
              <Link
                to="/admissions"
                className="btn-primary text-lg px-8 py-3 inline-flex items-center justify-center"
              >
                Apply Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/about"
                className="btn-outline text-lg px-8 py-3 inline-flex items-center justify-center border-white text-white hover:bg-white hover:text-gray-900"
              >
                Learn More
              </Link>
            </div>
          </div>
        </section>

        {/* Quick Links */}
        <section className="py-16 bg-white">
          <div className="container-custom">
            <QuickLinks />
          </div>
        </section>

        {/* News & Announcements Ticker */}
        <section className="bg-primary-600 text-white py-4">
          <div className="container-custom">
            <NewsTicker />
          </div>
        </section>

        {/* Principal's Message */}
        <section className="py-16 bg-gray-50">
          <div className="container-custom">
            <PrincipalMessage />
          </div>
        </section>

        {/* Statistics */}
        <section className="py-16 bg-white">
          <div className="container-custom">
            <StatsSection />
          </div>
        </section>

        {/* Events Preview */}
        <section className="py-16 bg-gray-50">
          <div className="container-custom">
            <EventsPreview />
          </div>
        </section>

        {/* Placement Highlights */}
        <section className="py-16 bg-white">
          <div className="container-custom">
            <PlacementHighlights />
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-primary-600 text-white">
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Start Your Engineering Journey?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join thousands of successful engineers who started their careers at Government Polytechnic Alapur
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/admissions"
                className="bg-white text-primary-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-lg transition-colors duration-200 inline-flex items-center justify-center"
              >
                Apply for Admission
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/contact"
                className="border border-white text-white hover:bg-white hover:text-primary-600 font-medium py-3 px-8 rounded-lg transition-colors duration-200 inline-flex items-center justify-center"
              >
                Contact Us
                <Phone className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Quick Contact Info */}
        <section className="py-12 bg-gray-900 text-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Visit Us</h3>
                <p className="text-gray-400">
                  Government Polytechnic Alapur<br />
                  Budaun, Uttar Pradesh 243601
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Call Us</h3>
                <p className="text-gray-400">
                  +91-5832-XXXXXX<br />
                  +91-5832-XXXXXX
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Office Hours</h3>
                <p className="text-gray-400">
                  Mon - Fri: 9:00 AM - 5:00 PM<br />
                  Sat: 9:00 AM - 1:00 PM
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
