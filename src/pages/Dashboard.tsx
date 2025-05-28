
import { useNavigate } from "react-router-dom";
import { FileText, BarChart3, Clock, Mail } from "lucide-react";

const Dashboard = () => {
  const navigate = useNavigate();

  const mainActions = [
    {
      title: "Manage Purchase Orders",
      description: "Upload and process purchase orders with AI assistance",
      icon: FileText,
      action: () => navigate("/purchase-order-upload"),
      color: "bg-soft-blue hover:bg-soft-blue-hover"
    },
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
    }
  ];

  return (
    <div className="max-w-4xl mx-auto animate-fade-in">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">
          Welcome to AI Business Assistant
        </h1>
        <p className="text-gray-400 text-lg">
          Streamline your sales and procurement processes with AI-powered tools
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-8">
        {mainActions.map((action, index) => (
          <div
            key={action.title}
            className="card-dark hover:scale-105 transition-all duration-200 cursor-pointer group"
            onClick={action.action}
          >
            <div className={`w-12 h-12 ${action.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200`}>
              <action.icon className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">{action.title}</h3>
            <p className="text-gray-400">{action.description}</p>
          </div>
        ))}
      </div>

      <div className="card-dark">
        <h2 className="text-xl font-semibold text-white mb-4">Quick Access</h2>
        <button
          onClick={() => navigate("/email-automation")}
          className="flex items-center gap-3 text-soft-blue hover:text-soft-blue-hover transition-colors duration-200"
        >
          <Mail className="h-5 w-5" />
          <span className="font-medium">Email Automation</span>
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
