
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Upload } from "lucide-react";

const SpendAnalysisUpload = () => {
  const navigate = useNavigate();
  const [dragActive, setDragActive] = useState(false);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleGenerate = () => {
    navigate("/spend-report");
  };

  return (
    <div className="max-w-2xl mx-auto animate-fade-in">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Spend Analysis Upload</h1>
        <p className="text-gray-400">Upload your spending data for AI-powered analysis</p>
      </div>

      <div className="card-dark mb-6">
        <div
          className={`upload-area ${dragActive ? "border-emerald-500 bg-emerald-500/10" : ""}`}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
        >
          <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-white mb-2">
            Drop your spending data files here
          </h3>
          <p className="text-gray-400 mb-4">
            CSV, Excel, or PDF formats supported
          </p>
          <input
            type="file"
            accept=".csv,.xlsx,.xls,.pdf"
            multiple
            className="hidden"
            id="spend-file-upload"
          />
          <label
            htmlFor="spend-file-upload"
            className="btn-secondary cursor-pointer inline-block"
          >
            Browse Files
          </label>
        </div>
      </div>

      <div className="flex gap-4">
        <button
          onClick={handleGenerate}
          className="btn-primary flex-1"
          style={{ backgroundColor: "#059669", borderColor: "#059669" }}
        >
          Generate Spend Report
        </button>
        <button
          onClick={() => navigate("/")}
          className="btn-secondary"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default SpendAnalysisUpload;
