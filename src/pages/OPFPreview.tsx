
import { useNavigate } from "react-router-dom";
import { Edit, Check, Upload } from "lucide-react";

const OPFPreview = () => {
  const navigate = useNavigate();

  const mockData = [
    { product: "Widget A", quantity: 100, internalCode: "WA-001" },
    { product: "Component B", quantity: 50, internalCode: "CB-002" },
    { product: "Material C", quantity: 200, internalCode: "MC-003" },
  ];

  return (
    <div className="max-w-4xl mx-auto animate-fade-in">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">OPF Preview</h1>
        <p className="text-gray-400">Review the processed purchase order data</p>
      </div>

      <div className="card-dark mb-6">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-700">
                <th className="text-left py-3 px-4 text-white font-semibold">Product Name</th>
                <th className="text-left py-3 px-4 text-white font-semibold">Quantity</th>
                <th className="text-left py-3 px-4 text-white font-semibold">Internal Code</th>
                <th className="text-left py-3 px-4 text-white font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody>
              {mockData.map((item, index) => (
                <tr key={index} className="border-b border-gray-800 hover:bg-dark-card transition-colors duration-200">
                  <td className="py-3 px-4 text-gray-300">{item.product}</td>
                  <td className="py-3 px-4 text-gray-300">{item.quantity}</td>
                  <td className="py-3 px-4 text-soft-blue font-mono">{item.internalCode}</td>
                  <td className="py-3 px-4">
                    <button className="text-gray-400 hover:text-white transition-colors duration-200">
                      <Edit className="h-4 w-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="flex gap-4">
        <button
          onClick={() => navigate("/confirmation")}
          className="btn-primary flex items-center gap-2"
        >
          <Check className="h-4 w-4" />
          Send to Production
        </button>
        <button className="btn-secondary flex items-center gap-2">
          <Upload className="h-4 w-4" />
          Download OPF
        </button>
        <button className="btn-secondary flex items-center gap-2">
          <Edit className="h-4 w-4" />
          Edit
        </button>
      </div>
    </div>
  );
};

export default OPFPreview;
