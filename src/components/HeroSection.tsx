import { Button } from "@/components/ui/button";
import { ArrowRight, FileText, Brain, Zap } from "lucide-react";

interface HeroSectionProps {
  onGetStarted: () => void;
}

export const HeroSection = ({ onGetStarted }: HeroSectionProps) => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-subtle overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-hero opacity-5"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Brain className="w-4 h-4" />
            AI-Powered Product Planning
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Transform Ideas into
            <span className="bg-gradient-hero bg-clip-text text-transparent"> Comprehensive PRDs</span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Streamline your product development process from initial concept to technical specification 
            through AI-guided requirement gathering and automated documentation.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button 
            variant="hero" 
            size="xl" 
            onClick={onGetStarted}
            className="group"
          >
            Get Started
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          
          <Button 
            variant="outline" 
            size="xl"
            className="border-primary/20 hover:bg-primary/5"
          >
            View Demo
            <FileText className="w-5 h-5" />
          </Button>
        </div>

        {/* Feature highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
          <div className="bg-card/50 backdrop-blur-sm p-6 rounded-lg shadow-card border border-border/50">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
              <Brain className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-2">AI Research</h3>
            <p className="text-muted-foreground text-sm">
              Intelligent analysis of your product requirements with targeted questions
            </p>
          </div>

          <div className="bg-card/50 backdrop-blur-sm p-6 rounded-lg shadow-card border border-border/50">
            <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
              <FileText className="w-6 h-6 text-accent" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Auto PRD Generation</h3>
            <p className="text-muted-foreground text-sm">
              Comprehensive documentation created automatically from your inputs
            </p>
          </div>

          <div className="bg-card/50 backdrop-blur-sm p-6 rounded-lg shadow-card border border-border/50">
            <div className="w-12 h-12 bg-primary-glow/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
              <Zap className="w-6 h-6 text-primary-glow" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Technical Diagrams</h3>
            <p className="text-muted-foreground text-sm">
              Visual architecture diagrams generated in Mermaid format
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};