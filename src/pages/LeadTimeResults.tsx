
import { useNavigate } from "react-router-dom";
import { Mail, AlertTriangle, CheckCircle } from "lucide-react";

const LeadTimeResults = () => {
  const navigate = useNavigate();

  const mockResults = [
    { vendor: "Supplier A", product: "Widget A", expectedDays: 7, actualDays: 5, status: "early" },
    { vendor: "Supplier B", product: "Component B", expectedDays: 10, actualDays: 14, status: "late" },
    { vendor: "Supplier C", product: "Material C", expectedDays: 5, actualDays: 5, status: "ontime" },
    { vendor: "Supplier D", product: "Part D", expectedDays: 12, actualDays: 18, status: "late" },
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "early":
        return <CheckCircle className="h-5 w-5 text-emerald-500" />;
      case "late":
        return <AlertTriangle className="h-5 w-5 text-red-500" />;
      default:
        return <CheckCircle className="h-5 w-5 text-blue-500" />;
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "early":
        return "Early";
      case "late":
        return "Late";
      default:
        return "On Time";
    }
  };

  return (
    <div className="max-w-4xl mx-auto animate-fade-in">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Lead Time Results</h1>
        <p className="text-gray-400">Analysis of vendor delivery performance</p>
      </div>

      <div className="card-dark mb-6">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-700">
                <th className="text-left py-3 px-4 text-white font-semibold">Vendor</th>
                <th className="text-left py-3 px-4 text-white font-semibold">Product</th>
                <th className="text-left py-3 px-4 text-white font-semibold">Expected (Days)</th>
                <th className="text-left py-3 px-4 text-white font-semibold">Actual (Days)</th>
                <th className="text-left py-3 px-4 text-white font-semibold">Status</th>
              </tr>
            </thead>
            <tbody>
              {mockResults.map((item, index) => (
                <tr key={index} className="border-b border-gray-800 hover:bg-dark-card transition-colors duration-200">
                  <td className="py-3 px-4 text-gray-300 font-medium">{item.vendor}</td>
                  <td className="py-3 px-4 text-gray-300">{item.product}</td>
                  <td className="py-3 px-4 text-gray-300">{item.expectedDays}</td>
                  <td className="py-3 px-4 text-gray-300">{item.actualDays}</td>
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-2">
                      {getStatusIcon(item.status)}
                      <span className="text-gray-300">{getStatusText(item.status)}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="card-dark mb-6">
        <h2 className="text-xl font-semibold text-white mb-4">Summary</h2>
        <div className="grid grid-cols-3 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-emerald-500">1</div>
            <div className="text-gray-400">Early Deliveries</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-500">1</div>
            <div className="text-gray-400">On Time</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-red-500">2</div>
            <div className="text-gray-400">Late Deliveries</div>
          </div>
        </div>
      </div>

      <div className="flex gap-4">
        <button
          onClick={() => navigate("/email-automation")}
          className="btn-primary flex items-center gap-2"
          style={{ backgroundColor: "#d97706", borderColor: "#d97706" }}
        >
          <Mail className="h-4 w-4" />
          Notify Vendor
        </button>
        <button
          onClick={() => navigate("/")}
          className="btn-secondary"
        >
          Back to Dashboard
        </button>
      </div>
    </div>
  );
};

export default LeadTimeResults;
