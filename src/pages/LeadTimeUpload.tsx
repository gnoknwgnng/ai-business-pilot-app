
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Upload } from "lucide-react";

const LeadTimeUpload = () => {
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

  const handleCheck = () => {
    navigate("/lead-time-results");
  };

  return (
    <div className="max-w-2xl mx-auto animate-fade-in">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Lead Time Tracking Upload</h1>
        <p className="text-gray-400">Upload delivery and vendor data to track lead times</p>
      </div>

      <div className="card-dark mb-6">
        <div
          className={`upload-area ${dragActive ? "border-amber-500 bg-amber-500/10" : ""}`}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
        >
          <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-white mb-2">
            Drop your delivery tracking files here
          </h3>
          <p className="text-gray-400 mb-4">
            CSV, Excel, or PDF shipping data supported
          </p>
          <input
            type="file"
            accept=".csv,.xlsx,.xls,.pdf"
            multiple
            className="hidden"
            id="leadtime-file-upload"
          />
          <label
            htmlFor="leadtime-file-upload"
            className="btn-secondary cursor-pointer inline-block"
          >
            Browse Files
          </label>
        </div>
      </div>

      <div className="flex gap-4">
        <button
          onClick={handleCheck}
          className="btn-primary flex-1"
          style={{ backgroundColor: "#d97706", borderColor: "#d97706" }}
        >
          Check Lead Times
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

export default LeadTimeUpload;
