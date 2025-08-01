import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Brain, Search, FileText, CheckCircle, ArrowRight } from "lucide-react";

interface AIResearchPhaseProps {
  productData: any;
  onComplete: () => void;
}

const researchSteps = [
  { id: 1, title: "Market Analysis", description: "Analyzing target market and competitors", duration: 3000 },
  { id: 2, title: "Technical Requirements", description: "Identifying technical specifications", duration: 2500 },
  { id: 3, title: "User Journey Mapping", description: "Mapping user interactions and flows", duration: 3500 },
  { id: 4, title: "Feature Prioritization", description: "Analyzing and prioritizing features", duration: 2000 },
  { id: 5, title: "Architecture Planning", description: "Designing system architecture", duration: 4000 },
];

export const AIResearchPhase = ({ productData, onComplete }: AIResearchPhaseProps) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (currentStep < researchSteps.length) {
      const step = researchSteps[currentStep];
      const timer = setTimeout(() => {
        setCompletedSteps(prev => [...prev, step.id]);
        setCurrentStep(prev => prev + 1);
        setProgress(((currentStep + 1) / researchSteps.length) * 100);
        
        if (currentStep + 1 === researchSteps.length) {
          setIsComplete(true);
        }
      }, step.duration);

      return () => clearTimeout(timer);
    }
  }, [currentStep]);

  return (
    <div className="min-h-screen bg-gradient-subtle py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Brain className="w-4 h-4 animate-pulse" />
            AI Research in Progress
          </div>
          
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Analyzing your product: <span className="text-primary">{productData.productName}</span>
          </h2>
          
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our AI is conducting comprehensive research to understand your product requirements, 
            market context, and technical specifications.
          </p>
        </div>

        {/* Progress Overview */}
        <Card className="p-8 mb-8 shadow-elegant border border-border/50">
          <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-foreground">Research Progress</span>
              <span className="text-sm text-muted-foreground">{Math.round(progress)}%</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {researchSteps.map((step) => {
              const isCompleted = completedSteps.includes(step.id);
              const isCurrent = !isCompleted && currentStep === step.id - 1;
              
              return (
                <div
                  key={step.id}
                  className={`p-4 rounded-lg border transition-all duration-500 ${
                    isCompleted
                      ? "bg-accent/10 border-accent/20"
                      : isCurrent
                      ? "bg-primary/10 border-primary/20 animate-pulse"
                      : "bg-muted/20 border-border"
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div
                      className={`p-2 rounded-lg ${
                        isCompleted
                          ? "bg-accent text-accent-foreground"
                          : isCurrent
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {isCompleted ? (
                        <CheckCircle className="w-4 h-4" />
                      ) : isCurrent ? (
                        <Search className="w-4 h-4" />
                      ) : (
                        <FileText className="w-4 h-4" />
                      )}
                    </div>
                    <div className="flex-1">
                      <h3 className={`font-medium text-sm ${isCompleted ? "text-accent" : isCurrent ? "text-primary" : "text-muted-foreground"}`}>
                        {step.title}
                      </h3>
                      <p className="text-xs text-muted-foreground mt-1">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Card>

        {/* Research Insights (shown as steps complete) */}
        {completedSteps.length > 0 && (
          <Card className="p-6 shadow-card border border-border/50 mb-8">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Brain className="w-5 h-5 text-primary" />
              AI Insights
            </h3>
            <div className="space-y-3">
              {completedSteps.includes(1) && (
                <div className="p-3 bg-muted/50 rounded-lg">
                  <p className="text-sm text-foreground">
                    ✓ Identified 3 key competitors in the {productData.domain} space
                  </p>
                </div>
              )}
              {completedSteps.includes(2) && (
                <div className="p-3 bg-muted/50 rounded-lg">
                  <p className="text-sm text-foreground">
                    ✓ Recommended tech stack: React, Node.js, PostgreSQL based on scalability needs
                  </p>
                </div>
              )}
              {completedSteps.includes(3) && (
                <div className="p-3 bg-muted/50 rounded-lg">
                  <p className="text-sm text-foreground">
                    ✓ Mapped 5 core user journeys with 12 key touchpoints
                  </p>
                </div>
              )}
              {completedSteps.includes(4) && (
                <div className="p-3 bg-muted/50 rounded-lg">
                  <p className="text-sm text-foreground">
                    ✓ Prioritized 18 features across MVP, Phase 2, and Future releases
                  </p>
                </div>
              )}
              {completedSteps.includes(5) && (
                <div className="p-3 bg-muted/50 rounded-lg">
                  <p className="text-sm text-foreground">
                    ✓ Generated microservices architecture with 6 core services
                  </p>
                </div>
              )}
            </div>
          </Card>
        )}

        {/* Continue Button */}
        {isComplete && (
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6">
              <CheckCircle className="w-4 h-4" />
              Research Complete
            </div>
            
            <Button 
              variant="success" 
              size="lg" 
              onClick={onComplete}
              className="shadow-glow"
            >
              Continue to Clarification
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};