
import { useNavigate } from "react-router-dom";
import { Check } from "lucide-react";

const Confirmation = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-2xl mx-auto text-center animate-fade-in">
      <div className="card-dark">
        <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
          <Check className="h-8 w-8 text-white" />
        </div>
        
        <h1 className="text-2xl font-bold text-white mb-4">
          OPF Sent to Production
        </h1>
        
        <p className="text-gray-400 mb-8">
          Your order processing form has been successfully sent to the production team. 
          You will receive a confirmation email shortly.
        </p>

        <button
          onClick={() => navigate("/")}
          className="btn-primary"
        >
          Return to Dashboard
        </button>
      </div>
    </div>
  );
};

export default Confirmation;
