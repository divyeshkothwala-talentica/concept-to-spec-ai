import { useState } from "react";
import { HeroSection } from "@/components/HeroSection";
import { ProductForm } from "@/components/ProductForm";
import { AIResearchPhase } from "@/components/AIResearchPhase";
import { InteractiveClarification } from "@/components/InteractiveClarification";
import { PRDDisplay } from "@/components/PRDDisplay";
import { SamplePRDLoader } from "@/components/SamplePRDLoader";
import { SamplePRDDisplay } from "@/components/SamplePRDDisplay";

type AppPhase = "hero" | "form" | "research" | "clarification" | "prd" | "sample-library" | "sample-display";

interface SamplePRD {
  id: string;
  title: string;
  industry: string;
  type: string;
  description: string;
  filePath: string;
  icon: any;
  color: string;
}

interface ProductFormData {
  productName: string;
  description: string;
  budget: string;
  timeline: string;
  domain: string;
  targetMarket: string;
  businessGoals: string;
}

const Index = () => {
  const [currentPhase, setCurrentPhase] = useState<AppPhase>("hero");
  const [productData, setProductData] = useState<ProductFormData | null>(null);
  const [clarificationResponses, setClarificationResponses] = useState<Record<number, string>>({});
  const [selectedSamplePRD, setSelectedSamplePRD] = useState<SamplePRD | null>(null);

  const handleGetStarted = () => {
    setCurrentPhase("form");
  };

  const handleFormSubmit = (data: ProductFormData) => {
    setProductData(data);
    setCurrentPhase("research");
  };

  const handleResearchComplete = () => {
    setCurrentPhase("clarification");
  };

  const handleClarificationComplete = (responses: Record<number, string>) => {
    setClarificationResponses(responses);
    setCurrentPhase("prd");
  };

  const handleBackToHero = () => {
    setCurrentPhase("hero");
    setProductData(null);
    setClarificationResponses({});
  };

  const handleBackToHeroFromPRD = () => {
    setCurrentPhase("hero");
    setProductData(null);
    setClarificationResponses({});
  };

  const handleBackToClarification = () => {
    setCurrentPhase("clarification");
  };

  const handleViewSamples = () => {
    setCurrentPhase("sample-library");
  };

  const handleLoadSample = (prd: SamplePRD) => {
    setSelectedSamplePRD(prd);
    setCurrentPhase("sample-display");
  };

  const handleBackToSamples = () => {
    setCurrentPhase("sample-library");
    setSelectedSamplePRD(null);
  };

  return (
    <div className="min-h-screen">
      {currentPhase === "hero" && (
        <HeroSection onGetStarted={handleGetStarted} onViewSamples={handleViewSamples} />
      )}
      
      {currentPhase === "form" && (
        <ProductForm 
          onSubmit={handleFormSubmit} 
          onBack={handleBackToHero}
        />
      )}
      
      {currentPhase === "research" && productData && (
        <AIResearchPhase 
          productData={productData}
          onComplete={handleResearchComplete}
        />
      )}
      
      {currentPhase === "clarification" && productData && (
        <InteractiveClarification 
          productData={productData}
          onComplete={handleClarificationComplete}
        />
      )}
      
      {currentPhase === "prd" && productData && (
        <PRDDisplay 
          productData={productData}
          clarificationResponses={clarificationResponses}
          onBack={handleBackToClarification}
          onHome={handleBackToHeroFromPRD}
        />
      )}

      {currentPhase === "sample-library" && (
        <SamplePRDLoader 
          onLoadSample={handleLoadSample}
          onBack={handleBackToHero}
        />
      )}

      {currentPhase === "sample-display" && selectedSamplePRD && (
        <SamplePRDDisplay 
          prd={selectedSamplePRD}
          onBack={handleBackToSamples}
        />
      )}
    </div>
  );
};

export default Index;
