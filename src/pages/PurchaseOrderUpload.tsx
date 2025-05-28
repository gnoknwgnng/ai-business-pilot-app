
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Upload } from "lucide-react";

const PurchaseOrderUpload = () => {
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

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    // Handle file upload logic here
  };

  const handleProcess = () => {
    navigate("/processing");
  };

  return (
    <div className="max-w-2xl mx-auto animate-fade-in">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Purchase Order Upload</h1>
        <p className="text-gray-400">Upload your PDF purchase orders for AI processing</p>
      </div>

      <div className="card-dark mb-6">
        <div
          className={`upload-area ${dragActive ? "border-soft-blue bg-soft-blue/10" : ""}`}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
        >
          <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-white mb-2">
            Drop your PDF files here
          </h3>
          <p className="text-gray-400 mb-4">
            or click to browse and select files
          </p>
          <input
            type="file"
            accept=".pdf"
            multiple
            className="hidden"
            id="file-upload"
          />
          <label
            htmlFor="file-upload"
            className="btn-secondary cursor-pointer inline-block"
          >
            Browse Files
          </label>
        </div>
      </div>

      <div className="flex gap-4">
        <button
          onClick={handleProcess}
          className="btn-primary flex-1"
        >
          Process PO
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

export default PurchaseOrderUpload;
