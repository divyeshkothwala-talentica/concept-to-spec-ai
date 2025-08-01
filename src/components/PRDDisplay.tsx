import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { FileText, Download, Eye, Code, Lightbulb, Users, Target, Calendar, DollarSign } from "lucide-react";

interface PRDDisplayProps {
  productData: any;
  clarificationResponses: Record<number, string>;
  onBack: () => void;
}

export const PRDDisplay = ({ productData, clarificationResponses, onBack }: PRDDisplayProps) => {
  const [activeView, setActiveView] = useState("overview");

  const handleDownload = () => {
    // In a real implementation, this would generate and download a PDF/Word document
    console.log("Downloading PRD...");
  };

  const mockPRDContent = {
    overview: {
      title: "Product Overview",
      content: {
        mission: `${productData.productName} aims to revolutionize the ${productData.domain} space by providing an innovative solution that addresses core user needs while driving business growth.`,
        vision: "To become the leading platform in our domain, empowering users with seamless, efficient, and scalable solutions.",
        objectives: [
          "Achieve product-market fit within 6 months",
          "Scale to 10,000+ active users in year 1",
          "Establish strategic partnerships with key industry players",
          "Maintain 95%+ customer satisfaction rating"
        ]
      }
    },
    userStories: [
      {
        epic: "User Authentication & Management",
        stories: [
          "As a new user, I want to quickly sign up with my email or social accounts so that I can start using the platform immediately",
          "As a registered user, I want to securely log in and manage my profile settings",
          "As an admin, I want to manage user permissions and access levels"
        ]
      },
      {
        epic: "Core Functionality", 
        stories: [
          "As a user, I want an intuitive dashboard that shows relevant information at a glance",
          "As a power user, I want advanced features and customization options",
          "As a team lead, I want to collaborate with team members effectively"
        ]
      }
    ],
    technicalSpecs: {
      architecture: "Microservices architecture with React frontend and Node.js backend",
      database: "PostgreSQL with Redis for caching",
      hosting: "AWS cloud infrastructure with auto-scaling",
      security: "OAuth 2.0, JWT tokens, encrypted data transmission",
      performance: "Sub-second response times, 99.9% uptime SLA"
    },
    timeline: {
      phases: [
        { phase: "Discovery & Planning", duration: "2 weeks", status: "completed" },
        { phase: "MVP Development", duration: "8 weeks", status: "in-progress" },
        { phase: "Beta Testing", duration: "3 weeks", status: "pending" },
        { phase: "Launch & Marketing", duration: "2 weeks", status: "pending" },
        { phase: "Post-Launch Optimization", duration: "Ongoing", status: "pending" }
      ]
    }
  };

  const mermaidDiagram = `graph TD
    A[User Interface] --> B[API Gateway]
    B --> C[Authentication Service]
    B --> D[Core Business Logic]
    B --> E[Data Management Service]
    
    C --> F[User Database]
    D --> G[Application Database]
    E --> H[File Storage]
    
    D --> I[Third-party APIs]
    E --> J[Analytics Service]
    
    K[Admin Dashboard] --> B
    L[Mobile App] --> B
    
    style A fill:#e1f5fe
    style B fill:#f3e5f5
    style C fill:#e8f5e8
    style D fill:#fff3e0`;

  return (
    <div className="min-h-screen bg-gradient-subtle py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-2">
                Product Requirements Document
              </h1>
              <p className="text-muted-foreground">
                Generated for: <span className="font-medium text-foreground">{productData.productName}</span>
              </p>
            </div>
            
            <div className="flex gap-3">
              <Button variant="outline" onClick={onBack}>
                <Eye className="w-4 h-4" />
                Edit Requirements
              </Button>
              <Button variant="professional" onClick={handleDownload}>
                <Download className="w-4 h-4" />
                Download PRD
              </Button>
            </div>
          </div>

          <div className="flex gap-2 mb-6">
            <Badge variant="default">
              <FileText className="w-3 h-3 mr-1" />
              Generated PRD
            </Badge>
            <Badge variant="outline">
              Domain: {productData.domain}
            </Badge>
            <Badge variant="outline">
              Budget: {productData.budget}
            </Badge>
            <Badge variant="outline">
              Timeline: {productData.timeline}
            </Badge>
          </div>
        </div>

        <Tabs value={activeView} onValueChange={setActiveView} className="space-y-6">
          <TabsList className="grid w-full grid-cols-5 bg-card shadow-card">
            <TabsTrigger value="overview" className="flex items-center gap-2">
              <Target className="w-4 h-4" />
              Overview
            </TabsTrigger>
            <TabsTrigger value="users" className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              User Stories
            </TabsTrigger>
            <TabsTrigger value="technical" className="flex items-center gap-2">
              <Code className="w-4 h-4" />
              Technical
            </TabsTrigger>
            <TabsTrigger value="timeline" className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              Timeline
            </TabsTrigger>
            <TabsTrigger value="architecture" className="flex items-center gap-2">
              <Lightbulb className="w-4 h-4" />
              Architecture
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="p-6 shadow-card border border-border/50">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <Target className="w-5 h-5 text-primary" />
                  Mission & Vision
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-sm text-muted-foreground mb-2">MISSION</h4>
                    <p className="text-sm text-foreground">{mockPRDContent.overview.content.mission}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-sm text-muted-foreground mb-2">VISION</h4>
                    <p className="text-sm text-foreground">{mockPRDContent.overview.content.vision}</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 shadow-card border border-border/50">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <DollarSign className="w-5 h-5 text-accent" />
                  Key Objectives
                </h3>
                <ul className="space-y-2">
                  {mockPRDContent.overview.content.objectives.map((objective, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                      <span className="text-foreground">{objective}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </div>

            <Card className="p-6 shadow-card border border-border/50">
              <h3 className="text-lg font-semibold mb-4">Product Description</h3>
              <p className="text-foreground mb-4">{productData.description}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="font-medium text-muted-foreground">Target Market:</span>
                  <p className="text-foreground">{productData.targetMarket || "Not specified"}</p>
                </div>
                <div>
                  <span className="font-medium text-muted-foreground">Business Goals:</span>
                  <p className="text-foreground">{productData.businessGoals || "Not specified"}</p>
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="users" className="space-y-6">
            {mockPRDContent.userStories.map((epic, index) => (
              <Card key={index} className="p-6 shadow-card border border-border/50">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <Users className="w-5 h-5 text-primary" />
                  {epic.epic}
                </h3>
                <div className="space-y-3">
                  {epic.stories.map((story, storyIndex) => (
                    <div key={storyIndex} className="p-3 bg-muted/30 rounded-lg">
                      <p className="text-sm text-foreground">{story}</p>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="technical" className="space-y-6">
            <Card className="p-6 shadow-card border border-border/50">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Code className="w-5 h-5 text-primary" />
                Technical Specifications
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-sm text-muted-foreground mb-2">ARCHITECTURE</h4>
                    <p className="text-sm text-foreground">{mockPRDContent.technicalSpecs.architecture}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-sm text-muted-foreground mb-2">DATABASE</h4>
                    <p className="text-sm text-foreground">{mockPRDContent.technicalSpecs.database}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-sm text-muted-foreground mb-2">HOSTING</h4>
                    <p className="text-sm text-foreground">{mockPRDContent.technicalSpecs.hosting}</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-sm text-muted-foreground mb-2">SECURITY</h4>
                    <p className="text-sm text-foreground">{mockPRDContent.technicalSpecs.security}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-sm text-muted-foreground mb-2">PERFORMANCE</h4>
                    <p className="text-sm text-foreground">{mockPRDContent.technicalSpecs.performance}</p>
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="timeline" className="space-y-6">
            <Card className="p-6 shadow-card border border-border/50">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Calendar className="w-5 h-5 text-primary" />
                Development Timeline
              </h3>
              <div className="space-y-4">
                {mockPRDContent.timeline.phases.map((phase, index) => (
                  <div key={index} className="flex items-center gap-4 p-3 rounded-lg bg-muted/20">
                    <div className={`w-3 h-3 rounded-full ${
                      phase.status === "completed" ? "bg-accent" :
                      phase.status === "in-progress" ? "bg-primary" : "bg-muted-foreground"
                    }`} />
                    <div className="flex-1">
                      <h4 className="font-medium text-sm text-foreground">{phase.phase}</h4>
                      <p className="text-xs text-muted-foreground">{phase.duration}</p>
                    </div>
                    <Badge variant={
                      phase.status === "completed" ? "default" :
                      phase.status === "in-progress" ? "destructive" : "secondary"
                    }>
                      {phase.status.replace("-", " ")}
                    </Badge>
                  </div>
                ))}
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="architecture" className="space-y-6">
            <Card className="p-6 shadow-card border border-border/50">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Lightbulb className="w-5 h-5 text-primary" />
                System Architecture Diagram
              </h3>
              <div className="bg-muted/20 p-6 rounded-lg">
                <pre className="text-xs text-muted-foreground whitespace-pre-wrap font-mono">
                  {mermaidDiagram}
                </pre>
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                This Mermaid diagram can be rendered in any Mermaid-compatible viewer or integrated into your documentation.
              </p>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};