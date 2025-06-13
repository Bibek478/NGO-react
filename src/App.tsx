import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Index from "./pages/Index";
import About from "./pages/About";
import Projects from "./pages/Projects";
import News from "./pages/Publication";
import JoinUs from "./pages/JoinUs";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import ArticlePage from "./pages/ArticlePage";
import ProjectPage from "./pages/ProjectPage";
import Donate from "./pages/Donate";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <div className="min-h-screen bg-white">
        <Router>
          <NavBar />
          <div className="pt-20">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/news" element={<News />} />
              <Route path="/join" element={<JoinUs />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/articles/:id" element={<ArticlePage />} />
              <Route path="/projects/:id" element={<ProjectPage />} />
              <Route path="/donate" element={<Donate />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
          <Footer />
        </Router>
      </div>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
