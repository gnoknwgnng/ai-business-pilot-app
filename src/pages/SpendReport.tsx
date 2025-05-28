
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Download } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const SpendReport = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleExport = () => {
    toast({
      title: "Export Started",
      description: "Your spend report is being generated and will be downloaded shortly.",
    });
  };

  const mockData = [
    { category: "Raw Materials", spent: "$125,000", percentage: "35%" },
    { category: "Office Supplies", spent: "$45,000", percentage: "12%" },
    { category: "Equipment", spent: "$89,000", percentage: "25%" },
    { category: "Services", spent: "$67,000", percentage: "18%" },
    { category: "Travel", spent: "$34,000", percentage: "10%" },
  ];

  return (
    <div className="max-w-4xl mx-auto animate-fade-in">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Spend Analysis Report</h1>
        <p className="text-gray-400">AI-generated insights from your spending data</p>
      </div>

      <div className="grid gap-6 mb-6">
        <div className="card-dark">
          <h2 className="text-xl font-semibold text-white mb-4">Spending Overview</h2>
          <div className="grid gap-4">
            {mockData.map((item, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-dark-card rounded-lg">
                <span className="text-gray-300 font-medium">{item.category}</span>
                <div className="text-right">
                  <div className="text-white font-semibold">{item.spent}</div>
                  <div className="text-gray-400 text-sm">{item.percentage} of total</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="card-dark">
          <h2 className="text-xl font-semibold text-white mb-4">Key Insights</h2>
          <ul className="space-y-3 text-gray-300">
            <li>• Raw materials account for the largest portion of spending at 35%</li>
            <li>• Equipment spending has increased by 15% compared to last quarter</li>
            <li>• Office supplies spending is within budget parameters</li>
            <li>• Travel expenses have decreased by 23% this quarter</li>
          </ul>
        </div>
      </div>

      <div className="flex gap-4">
        <button
          onClick={handleExport}
          className="btn-primary flex items-center gap-2"
          style={{ backgroundColor: "#059669", borderColor: "#059669" }}
        >
          <Download className="h-4 w-4" />
          Export Report
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

export default SpendReport;
