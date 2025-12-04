import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

import LiquidEther from "@/components/LiquidEther";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import Education from "./components/sections/Education";
import Experience from '@/components/sections/Experience';
import { Certificate } from "crypto";
import Certificates from "./components/sections/Certificates";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />

      {/* 🌟 FULL-SCREEN GLOBAL BACKGROUND ANIMATION */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <LiquidEther />
      </div>

      <BrowserRouter>
        <Routes>
          {/* Your pages */}
          <Route path="/" element={<Index />} />
          <Route path="/Skills" element={<Skills />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Education" element={<Education/>} />
          <Route path="/Experience" element={<Experience/>} />
          <Route path="/Certificates" element={<Certificates/>} />
          {/* Catch-all 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>

    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
