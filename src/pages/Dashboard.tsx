
import { useNavigate } from "react-router-dom";
import { FileText, BarChart3, Clock, Mail, Bot, ShoppingCart } from "lucide-react";

const Dashboard = () => {
  const navigate = useNavigate();

  const salesOptions = [
    {
      title: "Manage Purchase Orders",
      description: "Upload and process purchase orders with AI assistance",
      icon: FileText,
      action: () => navigate("/purchase-order-upload"),
      color: "bg-soft-blue hover:bg-soft-blue-hover"
    }
  ];

  const procurementOptions = [
    {
      title: "Spend Analysis", 
      description: "Analyze spending patterns and generate insights",
      icon: BarChart3,
      action: () => navigate("/spend-analysis-upload"),
      color: "bg-emerald-600 hover:bg-emerald-700"
    },
    {
      title: "Lead Time Tracking",
      description: "Monitor delivery times and vendor performance", 
      icon: Clock,
      action: () => navigate("/lead-time-upload"),
      color: "bg-amber-600 hover:bg-amber-700"
    },
    {
      title: "Quick Access",
      description: "Email automation and quick tools",
      icon: Mail,
      action: () => navigate("/email-automation"),
      color: "bg-purple-600 hover:bg-purple-700"
    }
  ];

  return (
    <div className="max-w-4xl mx-auto animate-fade-in">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">
          Welcome to AI Business Assistant
        </h1>
        <p className="text-gray-400 text-lg">
          Choose your workflow: Sales Assistant or Procurement Flow
        </p>
      </div>

      {/* AI Sales Assistant Section */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-soft-blue rounded-lg flex items-center justify-center">
            <Bot className="h-6 w-6 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-white">AI Sales Assistant</h2>
        </div>
        
        <div className="grid gap-4 md:grid-cols-1">
          {salesOptions.map((option, index) => (
            <div
              key={option.title}
              className="card-dark hover:scale-105 transition-all duration-200 cursor-pointer group"
              onClick={option.action}
            >
              <div className={`w-12 h-12 ${option.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200`}>
                <option.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{option.title}</h3>
              <p className="text-gray-400">{option.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* AI Procurement Flow Section */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center">
            <ShoppingCart className="h-6 w-6 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-white">AI Procurement Flow</h2>
        </div>
        
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {procurementOptions.map((option, index) => (
            <div
              key={option.title}
              className="card-dark hover:scale-105 transition-all duration-200 cursor-pointer group"
              onClick={option.action}
            >
              <div className={`w-12 h-12 ${option.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200`}>
                <option.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{option.title}</h3>
              <p className="text-gray-400">{option.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
