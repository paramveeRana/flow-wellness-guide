
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Profile from "./pages/Profile";
import Tracker from "./pages/Tracker";
import About from "./pages/About";
import Assessment from "./pages/Assessment";
import CycleAssessment from "./pages/assessments/CycleAssessment";
import HormonalAssessment from "./pages/assessments/HormonalAssessment";
import FertilityAssessment from "./pages/assessments/FertilityAssessment";
import Resources from "./pages/Resources";
import NotFound from "./pages/NotFound";
import { UserProvider } from "./contexts/UserContext";
import Header from "./components/Header";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <UserProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/tracker" element={<Tracker />} />
                <Route path="/about" element={<About />} />
                <Route path="/assessment" element={<Assessment />} />
                <Route path="/assessment/cycle" element={<CycleAssessment />} />
                <Route path="/assessment/hormonal" element={<HormonalAssessment />} />
                <Route path="/assessment/fertility" element={<FertilityAssessment />} />
                <Route path="/resources" element={<Resources />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
          </div>
        </BrowserRouter>
      </UserProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
