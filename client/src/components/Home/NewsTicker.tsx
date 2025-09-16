import React, { useState, useEffect } from 'react';
import { Bell, ChevronRight } from 'lucide-react';

const NewsTicker: React.FC = () => {
  const [currentNews, setCurrentNews] = useState(0);

  const newsItems = [
    'Admissions for Academic Year 2024-25 are now open. Apply online before March 31, 2024.',
    'Mid-term examination schedule has been announced. Check student portal for details.',
    'Workshop on "Latest Trends in Civil Engineering" will be held on March 15, 2024.',
    'Library will remain open 24/7 during examination period starting March 1, 2024.',
    'Placement drive by TCS and Infosys scheduled for March 20-22, 2024.',
    'Sports week will be organized from March 25-30, 2024. Registration open now.',
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentNews((prev) => (prev + 1) % newsItems.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [newsItems.length]);

  return (
    <div className="flex items-center space-x-4">
      <div className="flex items-center space-x-2">
        <Bell className="w-5 h-5 text-yellow-400" />
        <span className="font-semibold text-sm uppercase tracking-wide">
          Latest News
        </span>
      </div>
      <div className="flex-1 overflow-hidden">
        <div className="flex items-center space-x-2">
          <ChevronRight className="w-4 h-4 text-yellow-400 flex-shrink-0" />
          <div className="overflow-hidden">
            <div
              className="whitespace-nowrap animate-scroll"
              style={{
                animation: `scroll ${newsItems.length * 4}s linear infinite`,
              }}
            >
              {newsItems.map((item, index) => (
                <span
                  key={index}
                  className={`inline-block mr-8 ${
                    index === currentNews ? 'opacity-100' : 'opacity-70'
                  } transition-opacity duration-500`}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsTicker;
