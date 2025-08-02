import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Upload, FileText, Building, Zap, Briefcase, Heart, DollarSign } from "lucide-react";

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

interface SamplePRDLoaderProps {
  onLoadSample: (prd: SamplePRD) => void;
  onBack: () => void;
}

export const SamplePRDLoader = ({ onLoadSample, onBack }: SamplePRDLoaderProps) => {
  const [selectedPRD, setSelectedPRD] = useState<string | null>(null);

  const samplePRDs: SamplePRD[] = [
    {
      id: "edtech-mvp",
      title: "LearnFlow Learning Platform",
      industry: "EdTech",
      type: "MVP Development",
      description: "AI-powered personalized learning platform for K-12 students",
      filePath: "sample-prds/edtech-mvp-learning-platform.md",
      icon: Building,
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: "hrtech-modernization",
      title: "TalentHub Modernization",
      industry: "HRTech",
      type: "Legacy System Modernization",
      description: "Cloud-native talent management system replacing 15-year-old legacy platform",
      filePath: "sample-prds/hrtech-modernization-talent-management.md",
      icon: Briefcase,
      color: "from-purple-500 to-pink-500"
    },
    {
      id: "martech-feature",
      title: "MarketFlow Email Automation",
      industry: "MarTech",
      type: "Feature Development",
      description: "Intelligent email automation engine with advanced segmentation",
      filePath: "sample-prds/martech-feature-email-automation.md",
      icon: Zap,
      color: "from-orange-500 to-red-500"
    },
    {
      id: "fintech-mvp",
      title: "SmartSpend Expense Tracker",
      industry: "FinTech",
      type: "MVP Development",
      description: "AI-powered expense tracking and financial management for freelancers",
      filePath: "sample-prds/fintech-mvp-expense-tracker.md",
      icon: DollarSign,
      color: "from-green-500 to-emerald-500"
    },
    {
      id: "healthtech-feature",
      title: "MediConnect Telemedicine",
      industry: "HealthTech",
      type: "Feature Development",
      description: "HIPAA-compliant telemedicine platform with real-time consultations",
      filePath: "sample-prds/healthtech-feature-telemedicine.md",
      icon: Heart,
      color: "from-teal-500 to-blue-500"
    }
  ];

  const handleLoadSample = (prd: SamplePRD) => {
    setSelectedPRD(prd.id);
    // Simulate loading delay
    setTimeout(() => {
      onLoadSample(prd);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-subtle py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-2">
                Sample PRD Library
              </h1>
              <p className="text-muted-foreground">
                Select a sample PRD to explore the generated architecture and documentation
              </p>
            </div>
            
            <Button variant="outline" onClick={onBack}>
              <Upload className="w-4 h-4" />
              Create New PRD
            </Button>
          </div>

          <div className="flex gap-2 mb-6">
            <Badge variant="default">
              <FileText className="w-3 h-3 mr-1" />
              {samplePRDs.length} Sample PRDs Available
            </Badge>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {samplePRDs.map((prd) => {
            const IconComponent = prd.icon;
            const isLoading = selectedPRD === prd.id;
            
            return (
              <Card 
                key={prd.id} 
                className={`p-6 shadow-card border border-border/50 cursor-pointer transition-all duration-300 hover:shadow-hover hover:scale-105 ${
                  isLoading ? 'opacity-50' : ''
                }`}
                onClick={() => !isLoading && handleLoadSample(prd)}
              >
                <div className="space-y-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${prd.color} flex items-center justify-center mb-4`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {prd.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      {prd.description}
                    </p>
                  </div>

                  <div className="flex gap-2">
                    <Badge variant="outline" className="text-xs">
                      {prd.industry}
                    </Badge>
                    <Badge variant="secondary" className="text-xs">
                      {prd.type}
                    </Badge>
                  </div>

                  <Button 
                    variant="professional" 
                    className="w-full"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                        Loading...
                      </>
                    ) : (
                      <>
                        <FileText className="w-4 h-4 mr-2" />
                        View PRD & Architecture
                      </>
                    )}
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};