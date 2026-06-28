import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import SeedBallsDispersalDrones from "./pages/SeedBallsDispersalDrones";
import SurveillanceSecurityDrones from "./pages/SurveillanceSecurityDrones";
import FirefightersFalconFly from "./pages/FirefightersFalconFly";
import FalconMistWashDrones from "./pages/FalconMistWashDrones";
import DroneWorkshopOfferings from "./pages/DroneWorkshopOfferings";
import CustomDroneServices from "./pages/CustomDroneServices";
import SurveyMappingDrones from "./pages/SurveyMappingDrones";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/seed-balls-dispersal-drones" element={<SeedBallsDispersalDrones />} />
          <Route path="/surveillance-security-drones" element={<SurveillanceSecurityDrones />} />
          <Route path="/firefighters-falcon-fly" element={<FirefightersFalconFly />} />
          <Route path="/survey-mapping-drones" element={<SurveyMappingDrones />} />
          <Route path="/falcon-mist-wash-drones" element={<FalconMistWashDrones />} />
          <Route path="/drone-workshop-offerings" element={<DroneWorkshopOfferings />} />
          <Route path="/custom-drone-services" element={<CustomDroneServices />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
