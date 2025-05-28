
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppLayout } from "@/components/AppLayout";
import Dashboard from "./pages/Dashboard";
import PurchaseOrderUpload from "./pages/PurchaseOrderUpload";
import Processing from "./pages/Processing";
import OPFPreview from "./pages/OPFPreview";
import Confirmation from "./pages/Confirmation";
import SpendAnalysisUpload from "./pages/SpendAnalysisUpload";
import SpendReport from "./pages/SpendReport";
import LeadTimeUpload from "./pages/LeadTimeUpload";
import LeadTimeResults from "./pages/LeadTimeResults";
import EmailAutomation from "./pages/EmailAutomation";
import EmailConfirmation from "./pages/EmailConfirmation";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <SidebarProvider>
          <div className="min-h-screen flex w-full bg-dark-bg">
            <AppLayout>
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/purchase-order-upload" element={<PurchaseOrderUpload />} />
                <Route path="/processing" element={<Processing />} />
                <Route path="/opf-preview" element={<OPFPreview />} />
                <Route path="/confirmation" element={<Confirmation />} />
                <Route path="/spend-analysis-upload" element={<SpendAnalysisUpload />} />
                <Route path="/spend-report" element={<SpendReport />} />
                <Route path="/lead-time-upload" element={<LeadTimeUpload />} />
                <Route path="/lead-time-results" element={<LeadTimeResults />} />
                <Route path="/email-automation" element={<EmailAutomation />} />
                <Route path="/email-confirmation" element={<EmailConfirmation />} />
              </Routes>
            </AppLayout>
          </div>
        </SidebarProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
