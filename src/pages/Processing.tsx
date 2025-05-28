
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Processing = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/opf-preview");
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="max-w-2xl mx-auto text-center animate-fade-in">
      <div className="card-dark">
        <div className="mb-8">
          <div className="w-16 h-16 bg-soft-blue rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
            <div className="w-8 h-8 bg-white rounded-full"></div>
          </div>
          <h1 className="text-2xl font-bold text-white mb-2">Processing Purchase Order</h1>
          <p className="text-gray-400">Reading PO and matching product codes...</p>
        </div>

        <div className="w-full bg-dark-card rounded-full h-2 mb-4">
          <div 
            className="bg-soft-blue h-2 rounded-full transition-all duration-1000 ease-out"
            style={{ width: "75%" }}
          ></div>
        </div>

        <p className="text-sm text-gray-500">This usually takes 30-60 seconds</p>
      </div>
    </div>
  );
};

export default Processing;
