import { useState } from "react";
import { HeroSection } from "@/components/HeroSection";
import { ProductForm } from "@/components/ProductForm";
import { AIResearchPhase } from "@/components/AIResearchPhase";
import { InteractiveClarification } from "@/components/InteractiveClarification";
import { PRDDisplay } from "@/components/PRDDisplay";

type AppPhase = "hero" | "form" | "research" | "clarification" | "prd";

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

  const handleBackToClarification = () => {
    setCurrentPhase("clarification");
  };

  return (
    <div className="min-h-screen">
      {currentPhase === "hero" && (
        <HeroSection onGetStarted={handleGetStarted} />
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
        />
      )}
    </div>
  );
};

export default Index;
