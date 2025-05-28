
import { useNavigate } from "react-router-dom";
import { Check, Mail } from "lucide-react";

const EmailConfirmation = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-2xl mx-auto text-center animate-fade-in">
      <div className="card-dark">
        <div className="w-16 h-16 bg-soft-blue rounded-full flex items-center justify-center mx-auto mb-6">
          <Mail className="h-8 w-8 text-white" />
        </div>
        
        <h1 className="text-2xl font-bold text-white mb-4">
          Email Sent Successfully
        </h1>
        
        <p className="text-gray-400 mb-8">
          Your email has been sent successfully to the vendor. 
          They should receive it within the next few minutes.
        </p>

        <div className="bg-dark-card rounded-lg p-4 mb-6">
          <div className="flex items-center gap-2 text-emerald-500 mb-2">
            <Check className="h-5 w-5" />
            <span className="font-medium">Email Details</span>
          </div>
          <div className="text-left text-gray-300 space-y-1">
            <p><span className="text-gray-400">To:</span> vendor@example.com</p>
            <p><span className="text-gray-400">Subject:</span> Delivery Status Update Required</p>
            <p><span className="text-gray-400">Sent:</span> {new Date().toLocaleString()}</p>
          </div>
        </div>

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

export default EmailConfirmation;
