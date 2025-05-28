import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Mail, ChevronDown } from "lucide-react";

const EmailAutomation = () => {
  const navigate = useNavigate();
  const [selectedTemplate, setSelectedTemplate] = useState("delivery-reminder");
  const [emailContent, setEmailContent] = useState(`Subject: Delivery Status Update Required

Dear Vendor,

We are writing to request an update on the delivery status of our recent order. Our records indicate that the expected delivery date has passed, and we would appreciate an update on the current status.

Order Details:
- Order ID: PO-2024-001
- Expected Delivery: [Date]
- Current Status: Pending

Please provide us with:
1. Current shipment status
2. Updated delivery timeline
3. Any potential delays or issues

We appreciate your prompt response and continued partnership.

Best regards,
Procurement Team`);

  const templates = [
    { value: "delivery-reminder", label: "Delivery Reminder" },
    { value: "payment-confirmation", label: "Payment Confirmation" },
    { value: "order-status", label: "Order Status Update" },
    { value: "quality-feedback", label: "Quality Feedback" },
  ];

  const handleTemplateChange = (value: string) => {
    setSelectedTemplate(value);
    // Update email content based on template
    switch (value) {
      case "payment-confirmation":
        setEmailContent(`Subject: Payment Confirmation

Dear Vendor,

This email confirms that payment for invoice #INV-2024-001 has been processed and should reflect in your account within 2-3 business days.

Payment Details:
- Invoice Number: INV-2024-001
- Amount: $10,000.00
- Payment Date: ${new Date().toLocaleDateString()}

Thank you for your services.

Best regards,
Finance Team`);
        break;
      case "order-status":
        setEmailContent(`Subject: Order Status Inquiry

Dear Vendor,

We are requesting a status update on the following order:

Order ID: PO-2024-002
Order Date: ${new Date().toLocaleDateString()}
Expected Delivery: [Date]

Please provide the current status and any updates to the delivery timeline.

Best regards,
Procurement Team`);
        break;
      case "quality-feedback":
        setEmailContent(`Subject: Quality Assessment Feedback

Dear Vendor,

We have completed our quality assessment of the recent delivery and would like to provide feedback:

Order ID: PO-2024-003
Delivery Date: ${new Date().toLocaleDateString()}

Overall Quality Rating: Excellent
Comments: All items met our quality standards and specifications.

Thank you for maintaining high quality standards.

Best regards,
Quality Assurance Team`);
        break;
      default:
        // Keep the default delivery reminder content
        break;
    }
  };

  const handleSend = () => {
    navigate("/email-confirmation");
  };

  return (
    <div className="max-w-4xl mx-auto animate-fade-in">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Email Automation</h1>
        <p className="text-gray-400">Create and send automated emails to vendors and partners</p>
      </div>

      <div className="grid gap-6">
        <div className="card-dark">
          <h2 className="text-xl font-semibold text-white mb-4">Email Template</h2>
          <div className="relative">
            <select
              value={selectedTemplate}
              onChange={(e) => handleTemplateChange(e.target.value)}
              className="w-full bg-dark-card border border-gray-600 rounded-lg px-4 py-3 text-white appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-soft-blue"
            >
              {templates.map((template) => (
                <option key={template.value} value={template.value} className="bg-dark-card">
                  {template.label}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
          </div>
        </div>

        <div className="card-dark">
          <h2 className="text-xl font-semibold text-white mb-4">Email Preview</h2>
          <textarea
            value={emailContent}
            onChange={(e) => setEmailContent(e.target.value)}
            className="w-full h-64 bg-dark-card border border-gray-600 rounded-lg px-4 py-3 text-white resize-none focus:outline-none focus:ring-2 focus:ring-soft-blue"
            placeholder="Email content will appear here..."
          />
        </div>
      </div>

      <div className="flex gap-4 mt-6">
        <button
          onClick={handleSend}
          className="btn-primary flex items-center gap-2"
        >
          <Mail className="h-4 w-4" />
          Send Email
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

export default EmailAutomation;
