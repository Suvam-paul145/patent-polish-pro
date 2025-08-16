import { useState } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import UploadSection from "@/components/UploadSection";
import AnalysisDashboard from "@/components/AnalysisDashboard";
import FeaturesSection from "@/components/FeaturesSection";
import Footer from "@/components/Footer";

const Index = () => {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);

  const handleFileUpload = (file: File) => {
    setUploadedFile(file);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <UploadSection onFileUpload={handleFileUpload} />
      <AnalysisDashboard hasFile={!!uploadedFile} />
      <FeaturesSection />
      <Footer />
    </div>
  );
};

export default Index;
