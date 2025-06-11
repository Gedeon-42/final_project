import React, { useState } from "react";
import {
  User,
  Bell,
  Settings,
  Search,
  Plus,
  Eye,
  MessageCircle,
  Calendar,
  TrendingUp,
  Users,
  FileText,
  DollarSign,
  Clock,
  CheckCircle,
  XCircle,
  AlertCircle,
  Edit,
  Trash2,
  Filter,
  Download,
  Star,
  MapPin,
  Briefcase,
  Mail,
  Phone,
  Globe,
  Building,
  Lock,
  User2,
} from "lucide-react";
import { Link } from "react-router-dom";
import RecentRequest from "./RecentRequest";
import Messages from "./Messages";
import Request from "./Request";
import Result from "./Result";

import Setting from "./Setting";

const SupplierDash = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [showProfileEdit, setShowProfileEdit] = useState(false);
  const [notifications, setNotifications] = useState(3);

  const [profileData, setProfileData] = useState({
    companyName: "TechCorp Industries",
    industry: "Technology",
    website: "www.techcorp.com",
    location: "New York, NY",
    email: "hiring@techcorp.com",
    phone: "+1 (555) 123-4567",
    description:
      "Leading technology company focused on innovative solutions and digital transformation.",
    employeeCount: "500-1000",
    founded: "2010",
  });

  // Mock data
  const stats = {
    activeRequests: 0,
    talentViewed: 0,
    responseRate: 0,
    avgResponseTime: "2",
  };

  const recentRequests = [
    {
      id: 1,
      talentId: "T001",
      position: "Casual Worker",
      status: "pending",
      submitted: "2024-06-01",
      budget: "$5000-$7000",
      responses: 0,
    },
    {
      id: 2,
      talentId: "T015",
      position: "Veterinary",
      status: "accepted",
      submitted: "2024-05-28",
      budget: "$3000-$4500",
      responses: 1,
    },
    {
      id: 3,
      talentId: "T008",
      position: "Casual Worker",
      status: "declined",
      submitted: "2024-05-25",
      budget: "$2500-$3500",
      responses: 1,
    },
    {
      id: 4,
      talentId: "T023",
      position: "Agronomist",
      status: "in_progress",
      submitted: "2024-05-20",
      budget: "$6000-$8000",
      responses: 2,
    },
  ];

  const conversations = [
    {
      id: 1,
      talentId: "T015",
      position: "UI/UX Designer",
      lastMessage: "I'd be happy to discuss the project timeline...",
      timestamp: "2 hours ago",
      unread: true,
    },

    {
      id: 2,
      talentId: "T023",
      position: "Full Stack Developer",
      lastMessage: "The project requirements look interesting...",
      timestamp: "1 day ago",
      unread: false,
    },
    {
      id: 3,
      talentId: "T007",
      position: "Marketing Manager",
      lastMessage: "Thank you for considering my proposal...",
      timestamp: "3 days ago",
      unread: false,
    },
  ];

 

  const getStatusColor = (status) => {
    switch (status) {
      case "pending":
        return "bg-yellow-100 text-yellow-800";
      case "accepted":
        return "bg-green-100 text-green-800";
      case "declined":
        return "bg-red-100 text-red-800";
      case "in_progress":
        return "bg-blue-100 text-blue-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "pending":
        return <Clock className="w-4 h-4" />;
      case "accepted":
        return <CheckCircle className="w-4 h-4" />;
      case "declined":
        return <XCircle className="w-4 h-4" />;
      case "in_progress":
        return <AlertCircle className="w-4 h-4" />;
      default:
        return <Clock className="w-4 h-4" />;
    }
  };

  const handleProfileUpdate = () => {
    setShowProfileEdit(false);
    alert("Profile updated successfully!");
  };

  const renderOverview = () => (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">
                Active Requests
              </p>
              <p className="text-2xl font-bold text-gray-900">
                {stats.activeRequests}
              </p>
            </div>
            <div className="bg-blue-100 p-3 rounded-full">
              <FileText className="w-6 h-6 text-blue-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Results</p>
              <p className="text-2xl font-bold text-gray-900">
                {stats.talentViewed}
              </p>
            </div>
            <div className="bg-green-100 p-3 rounded-full">
              <Users className="w-6 h-6 text-green-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Response Rate</p>
              <p className="text-2xl font-bold text-gray-900">
                {stats.responseRate}%
              </p>
            </div>
            <div className="bg-purple-100 p-3 rounded-full">
              <TrendingUp className="w-6 h-6 text-purple-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Avg Response</p>
              <p className="text-2xl font-bold text-gray-900">
                {stats.avgResponseTime}
              </p>
            </div>
            <div className="bg-orange-100 p-3 rounded-full">
              <Clock className="w-6 h-6 text-orange-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <RecentRequest
          recentRequests={recentRequests}
          getStatusColor={getStatusColor}
          getStatusIcon={getStatusIcon}
        />
        <Messages conversations={conversations} User={User} />
      </div>
    </div>
  );


  const renderMessages = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <p className="text-xl font-semibold text-gray-900">Messages</p>
        <div className="flex items-center space-x-4">
          <button className="text-gray-600 hover:text-gray-800">
            <Filter className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm">
        <div className="divide-y divide-gray-200">
          {conversations.map((conv) => (
            <div key={conv.id} className="p-6 hover:bg-gray-50 cursor-pointer">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <User className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <p className="font-medium text-gray-900">
                        Talent #{conv.talentId}
                      </p>
                      {conv.unread && (
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      )}
                    </div>
                    <span className="text-sm text-gray-500">
                      {conv.timestamp}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">{conv.position}</p>
                  <p className="text-gray-700 mt-2">{conv.lastMessage}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );



  const renderProfile = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <p className="text-xl font-semibold text-gray-900">Company Profile</p>
        <button
          onClick={() => setShowProfileEdit(!showProfileEdit)}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2"
        >
          <Edit className="w-4 h-4" />
          <span>Edit Profile</span>
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Company Name
              </label>
              {showProfileEdit ? (
                <input
                  type="text"
                  value={profileData.companyName}
                  onChange={(e) =>
                    setProfileData({
                      ...profileData,
                      companyName: e.target.value,
                    })
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              ) : (
                <p className="text-gray-900">{profileData.companyName}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Industry
              </label>
              {showProfileEdit ? (
                <input
                  type="text"
                  value={profileData.industry}
                  onChange={(e) =>
                    setProfileData({ ...profileData, industry: e.target.value })
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              ) : (
                <p className="text-gray-900">{profileData.industry}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Website
              </label>
              {showProfileEdit ? (
                <input
                  type="text"
                  value={profileData.website}
                  onChange={(e) =>
                    setProfileData({ ...profileData, website: e.target.value })
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              ) : (
                <div className="flex items-center space-x-2">
                  <Globe className="w-4 h-4 text-gray-400" />
                  <p className="text-blue-600">{profileData.website}</p>
                </div>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Location
              </label>
              {showProfileEdit ? (
                <input
                  type="text"
                  value={profileData.location}
                  onChange={(e) =>
                    setProfileData({ ...profileData, location: e.target.value })
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              ) : (
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4 text-gray-400" />
                  <p className="text-gray-900">{profileData.location}</p>
                </div>
              )}
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              {showProfileEdit ? (
                <input
                  type="email"
                  value={profileData.email}
                  onChange={(e) =>
                    setProfileData({ ...profileData, email: e.target.value })
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              ) : (
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4 text-gray-400" />
                  <p className="text-gray-900">{profileData.email}</p>
                </div>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Phone
              </label>
              {showProfileEdit ? (
                <input
                  type="tel"
                  value={profileData.phone}
                  onChange={(e) =>
                    setProfileData({ ...profileData, phone: e.target.value })
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              ) : (
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4 text-gray-400" />
                  <p className="text-gray-900">{profileData.phone}</p>
                </div>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Employee Count
              </label>
              {showProfileEdit ? (
                <select
                  value={profileData.employeeCount}
                  onChange={(e) =>
                    setProfileData({
                      ...profileData,
                      employeeCount: e.target.value,
                    })
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="1-10">1-10</option>
                  <option value="11-50">11-50</option>
                  <option value="51-200">51-200</option>
                  <option value="201-500">201-500</option>
                  <option value="500-1000">500-1000</option>
                  <option value="1000+">1000+</option>
                </select>
              ) : (
                <div className="flex items-center space-x-2">
                  <Building className="w-4 h-4 text-gray-400" />
                  <p className="text-gray-900">
                    {profileData.employeeCount} employees
                  </p>
                </div>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Founded
              </label>
              {showProfileEdit ? (
                <input
                  type="text"
                  value={profileData.founded}
                  onChange={(e) =>
                    setProfileData({ ...profileData, founded: e.target.value })
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              ) : (
                <p className="text-gray-900">{profileData.founded}</p>
              )}
            </div>
          </div>
        </div>

        <div className="mt-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Company Description
          </label>
          {showProfileEdit ? (
            <textarea
              rows={4}
              value={profileData.description}
              onChange={(e) =>
                setProfileData({ ...profileData, description: e.target.value })
              }
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          ) : (
            <p className="text-gray-900">{profileData.description}</p>
          )}
        </div>

        {showProfileEdit && (
          <div className="mt-6 flex space-x-4">
            <button
              onClick={handleProfileUpdate}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium"
            >
              Save Changes
            </button>
            <button
              onClick={() => setShowProfileEdit(false)}
              className="border border-gray-300 text-gray-700 px-6 py-2 rounded-lg font-medium hover:bg-gray-50"
            >
              Cancel
            </button>
          </div>
        )}
      </div>
    </div>
  );

  const navItems = [
    { id: "overview", label: "Overview", icon: TrendingUp },
    { id: "requests", label: "My Requests", icon: FileText },
     { id: "results", label: "My Results", icon: FileText },
    { id: "messages", label: "Messages", icon: MessageCircle },
    { id: "saved", label: "Settings", icon: Star },
    { id: "profile", label: "Company Profile", icon: Building },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-8">
              <div className="hidden md:flex space-x-6">
                {/* <Link className='text-decoration-none text-gray-600 hover:text-gray-900'  to='/dashboard'>Dashboard</Link>
                          <Link className='text-decoration-none text-gray-600 hover:text-gray-900'  to="/find-talents">Find Talents</Link> */}
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="relative">
                <Bell className="h-6 w-6 text-gray-400 hover:text-gray-600 cursor-pointer" />
                {/* {notifications > 0 && (
                              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                                {notifications}
                              </span>
                            )} */}
              </div>
              <div className="flex items-center space-x-2">
                <div className="h-8 w-8 bg-green-600 rounded-full flex items-center justify-center">
                  <User className="h-5 w-5 text-white" />
                </div>
                <span className="text-sm font-medium text-gray-900">
                  {" "}
                  Gedeon
                </span>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:w-64">
            <nav className="bg-white rounded-xl shadow-sm p-4">
              <ul className="space-y-2">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <li key={item.id}>
                      <button
                        onClick={() => setActiveTab(item.id)}
                        className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors ${
                          activeTab === item.id
                            ? "bg-blue-100 text-blue-700 font-medium"
                            : "text-gray-600 hover:bg-gray-100"
                        }`}
                      >
                        <Icon className="w-5 h-5" />
                        <span>{item.label}</span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {activeTab === "overview" && renderOverview()}
            {activeTab === "requests" && (
              <Request recentRequests={recentRequests} getStatusColor={getStatusColor} getStatusIcon={getStatusIcon} />
            )}
            {activeTab === "results" && <Result recentRequests={recentRequests} getStatusColor={getStatusColor} getStatusIcon={getStatusIcon} />}
            {activeTab === "messages" && renderMessages()}
            {activeTab === "saved" && <Setting/>}
            {activeTab === "profile" && renderProfile()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupplierDash;
