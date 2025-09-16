import React from 'react';
import { 
  Bell, 
  Calendar, 
  Users, 
  Image, 
  Download, 
  Award, 
  MessageSquare, 
  TrendingUp,
  Eye,
  Plus,
  FileText
} from 'lucide-react';
import { Link } from 'react-router-dom';

const DashboardHome: React.FC = () => {
  const stats = [
    {
      name: 'Total Notices',
      value: '24',
      change: '+12%',
      changeType: 'positive',
      icon: Bell,
      href: '/admin/notices',
    },
    {
      name: 'Upcoming Events',
      value: '8',
      change: '+2',
      changeType: 'positive',
      icon: Calendar,
      href: '/admin/events',
    },
    {
      name: 'Faculty Members',
      value: '45',
      change: '+3',
      changeType: 'positive',
      icon: Users,
      href: '/admin/faculty',
    },
    {
      name: 'Gallery Items',
      value: '156',
      change: '+23',
      changeType: 'positive',
      icon: Image,
      href: '/admin/gallery',
    },
    {
      name: 'Downloads',
      value: '32',
      change: '+5',
      changeType: 'positive',
      icon: Download,
      href: '/admin/downloads',
    },
    {
      name: 'Results Published',
      value: '18',
      change: '+4',
      changeType: 'positive',
      icon: Award,
      href: '/admin/results',
    },
    {
      name: 'New Messages',
      value: '7',
      change: '+2',
      changeType: 'positive',
      icon: MessageSquare,
      href: '/admin/contacts',
    },
    {
      name: 'Page Views',
      value: '2,847',
      change: '+15%',
      changeType: 'positive',
      icon: Eye,
      href: '/admin/pages',
    },
  ];

  const recentActivities = [
    {
      id: 1,
      type: 'notice',
      title: 'New notice published: "Mid-term Exam Schedule"',
      time: '2 hours ago',
      icon: Bell,
    },
    {
      id: 2,
      type: 'event',
      title: 'Event created: "Technical Symposium 2024"',
      time: '4 hours ago',
      icon: Calendar,
    },
    {
      id: 3,
      type: 'contact',
      title: 'New contact form submission from John Doe',
      time: '6 hours ago',
      icon: MessageSquare,
    },
    {
      id: 4,
      type: 'gallery',
      title: '5 new images added to gallery',
      time: '8 hours ago',
      icon: Image,
    },
    {
      id: 5,
      type: 'result',
      title: 'Result published: "Semester 3 Results"',
      time: '1 day ago',
      icon: Award,
    },
  ];

  const quickActions = [
    {
      name: 'Create Notice',
      description: 'Publish a new notice or announcement',
      icon: Plus,
      href: '/admin/notices',
      color: 'bg-blue-500 hover:bg-blue-600',
    },
    {
      name: 'Add Event',
      description: 'Schedule a new event or activity',
      icon: Calendar,
      href: '/admin/events',
      color: 'bg-green-500 hover:bg-green-600',
    },
    {
      name: 'Upload Gallery',
      description: 'Add new photos to the gallery',
      icon: Image,
      href: '/admin/gallery',
      color: 'bg-purple-500 hover:bg-purple-600',
    },
    {
      name: 'Manage Faculty',
      description: 'Add or update faculty information',
      icon: Users,
      href: '/admin/faculty',
      color: 'bg-orange-500 hover:bg-orange-600',
    },
  ];

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Welcome back!</h1>
            <p className="text-gray-600">Here's what's happening with your website today.</p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="text-right">
              <p className="text-sm text-gray-500">Last updated</p>
              <p className="text-sm font-medium text-gray-900">2 minutes ago</p>
            </div>
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-green-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Link
              key={stat.name}
              to={stat.href}
              className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow duration-200"
            >
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center">
                    <Icon className="w-5 h-5 text-primary-600" />
                  </div>
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">
                      {stat.name}
                    </dt>
                    <dd className="flex items-baseline">
                      <div className="text-2xl font-semibold text-gray-900">
                        {stat.value}
                      </div>
                      <div className={`ml-2 flex items-baseline text-sm font-semibold ${
                        stat.changeType === 'positive' ? 'text-green-600' : 'text-red-600'
                      }`}>
                        {stat.change}
                      </div>
                    </dd>
                  </dl>
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activities */}
        <div className="bg-white rounded-lg shadow">
          <div className="px-6 py-4 border-b border-gray-200">
            <h3 className="text-lg font-medium text-gray-900">Recent Activities</h3>
          </div>
          <div className="divide-y divide-gray-200">
            {recentActivities.map((activity) => {
              const Icon = activity.icon;
              return (
                <div key={activity.id} className="px-6 py-4 flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                      <Icon className="w-4 h-4 text-gray-600" />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate">
                      {activity.title}
                    </p>
                    <p className="text-sm text-gray-500">
                      {activity.time}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="px-6 py-3 bg-gray-50 text-center">
            <Link
              to="/admin/notices"
              className="text-sm font-medium text-primary-600 hover:text-primary-500"
            >
              View all activities
            </Link>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-lg shadow">
          <div className="px-6 py-4 border-b border-gray-200">
            <h3 className="text-lg font-medium text-gray-900">Quick Actions</h3>
          </div>
          <div className="p-6 space-y-4">
            {quickActions.map((action) => {
              const Icon = action.icon;
              return (
                <Link
                  key={action.name}
                  to={action.href}
                  className={`flex items-center p-4 rounded-lg ${action.color} text-white hover:shadow-md transition-shadow duration-200`}
                >
                  <Icon className="w-6 h-6 mr-3" />
                  <div>
                    <p className="font-medium">{action.name}</p>
                    <p className="text-sm opacity-90">{action.description}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      {/* System Status */}
      <div className="bg-white rounded-lg shadow">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-medium text-gray-900">System Status</h3>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <div className="w-6 h-6 bg-green-500 rounded-full"></div>
              </div>
              <h4 className="text-sm font-medium text-gray-900">Website Status</h4>
              <p className="text-sm text-green-600">Online</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <div className="w-6 h-6 bg-green-500 rounded-full"></div>
              </div>
              <h4 className="text-sm font-medium text-gray-900">Database</h4>
              <p className="text-sm text-green-600">Connected</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <div className="w-6 h-6 bg-green-500 rounded-full"></div>
              </div>
              <h4 className="text-sm font-medium text-gray-900">Storage</h4>
              <p className="text-sm text-green-600">85% Available</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
