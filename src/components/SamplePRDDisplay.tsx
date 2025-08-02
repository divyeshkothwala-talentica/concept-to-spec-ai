import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { FileText, Download, ArrowLeft, Code, Lightbulb, Users, Target, Calendar, Building, DollarSign } from "lucide-react";

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

interface SamplePRDDisplayProps {
  prd: SamplePRD;
  onBack: () => void;
}

export const SamplePRDDisplay = ({ prd, onBack }: SamplePRDDisplayProps) => {
  const [activeView, setActiveView] = useState("overview");

  const handleDownload = () => {
    console.log(`Downloading PRD for ${prd.title}...`);
  };

  // Generate architecture diagrams based on the PRD type and industry
  const getArchitectureDiagram = (prdId: string) => {
    const diagrams = {
      "edtech-mvp": `graph TD
    A[Web App React] --> B[API Gateway]
    A --> C[Mobile App React Native]
    
    B --> D[Authentication Service]
    B --> E[Learning Management Service]
    B --> F[AI Recommendation Engine]
    B --> G[Progress Tracking Service]
    
    D --> H[User Database PostgreSQL]
    E --> I[Content Database MongoDB]
    F --> J[ML Models TensorFlow]
    G --> K[Analytics Database ClickHouse]
    
    E --> L[Content Delivery CDN]
    F --> M[Redis Cache]
    G --> N[Real-time Analytics Kafka]
    
    O[Admin Dashboard] --> B
    P[Teacher Portal] --> B
    
    style A fill:#e3f2fd
    style B fill:#f3e5f5
    style D fill:#e8f5e8
    style E fill:#fff3e0
    style F fill:#fce4ec`,

      "hrtech-modernization": `graph TD
    A[Web Application React] --> B[API Gateway Kong]
    C[Mobile App] --> B
    
    B --> D[Auth Service OAuth2]
    B --> E[Employee Service]
    B --> F[Performance Service]
    B --> G[Recruitment Service]
    B --> H[Analytics Service]
    
    D --> I[User Store PostgreSQL]
    E --> J[Employee DB PostgreSQL]
    F --> K[Performance DB PostgreSQL]
    G --> L[Applicant DB MongoDB]
    H --> M[Data Warehouse Snowflake]
    
    N[Legacy System SOAP] --> O[ETL Pipeline Apache Airflow]
    O --> J
    O --> K
    
    P[External Systems] --> Q[Integration Hub]
    Q --> B
    
    style A fill:#e1f5fe
    style B fill:#f3e5f5
    style D fill:#e8f5e8
    style N fill:#ffebee`,

      "martech-feature": `graph TD
    A[Marketing Dashboard] --> B[Email Automation API]
    
    B --> C[Campaign Manager]
    B --> D[Segmentation Engine]
    B --> E[Template Engine]
    B --> F[Analytics Processor]
    
    C --> G[Campaign DB PostgreSQL]
    D --> H[Customer DB PostgreSQL]
    E --> I[Template Store MongoDB]
    F --> J[Metrics DB InfluxDB]
    
    K[Email Service Provider] --> L[Delivery Queue Redis]
    C --> L
    
    M[Webhook Processor] --> N[Event Stream Kafka]
    N --> F
    
    O[A/B Testing Engine] --> C
    P[Personalization AI] --> E
    
    style A fill:#e8eaf6
    style B fill:#f3e5f5
    style C fill:#e0f2f1
    style K fill:#fff3e0`,

      "fintech-mvp": `graph TD
    A[Mobile App React Native] --> B[API Gateway]
    C[Web App PWA] --> B
    
    B --> D[Auth Service Auth0]
    B --> E[Expense Service]
    B --> F[Bank Integration Plaid]
    B --> G[ML Categorization]
    B --> H[Analytics Service]
    
    D --> I[User DB PostgreSQL]
    E --> J[Transaction DB PostgreSQL]
    F --> K[Bank Data Cache Redis]
    G --> L[ML Models Python]
    H --> M[Analytics DB ClickHouse]
    
    N[Receipt OCR Google Vision] --> E
    O[Notification Service FCM] --> P[Push Queue]
    
    Q[Backup Service] --> R[Encrypted Storage AWS S3]
    
    style A fill:#e8f5e8
    style B fill:#f3e5f5
    style D fill:#e3f2fd
    style F fill:#fff3e0
    style Q fill:#fce4ec`,

      "healthtech-feature": `graph TD
    A[Patient Portal] --> B[API Gateway HIPAA]
    C[Provider Dashboard] --> B
    D[Mobile App] --> B
    
    B --> E[Auth Service SMART on FHIR]
    B --> F[Consultation Service]
    B --> G[Video Service WebRTC]
    B --> H[Records Service HL7 FHIR]
    B --> I[Billing Service]
    
    E --> J[Provider DB PostgreSQL]
    F --> K[Consultation DB PostgreSQL]
    G --> L[Media Server Janus]
    H --> M[EMR Integration HL7]
    I --> N[Billing DB PostgreSQL]
    
    O[Encryption Service] --> P[End-to-End Encryption]
    P --> G
    
    Q[Audit Service] --> R[Audit Log PostgreSQL]
    B --> Q
    
    S[Backup Service] --> T[HIPAA Compliant Storage]
    
    style A fill:#e8f5e8
    style B fill:#f3e5f5
    style E fill:#e3f2fd
    style O fill:#ffebee
    style Q fill:#fff3e0`
    };

    return diagrams[prdId as keyof typeof diagrams] || diagrams["edtech-mvp"];
  };

  // Generate technical specs based on industry
  const getTechnicalSpecs = (industry: string, type: string) => {
    const baseSpecs = {
      EdTech: {
        architecture: "Microservices with React frontend, Node.js backend, and AI/ML services",
        database: "PostgreSQL for user data, MongoDB for content, Redis for caching",
        hosting: "AWS with auto-scaling, CDN for content delivery",
        security: "OAuth 2.0, JWT tokens, COPPA/FERPA compliance, encrypted data",
        performance: "Sub-second response times, 99.9% uptime, global CDN"
      },
      HRTech: {
        architecture: "Cloud-native microservices with legacy system integration",
        database: "PostgreSQL cluster with read replicas, ETL pipeline for migration",
        hosting: "Multi-region AWS deployment with disaster recovery",
        security: "SAML/OAuth, RBAC, SOC 2 Type II, GDPR compliance",
        performance: "High availability, real-time analytics, mobile optimization"
      },
      MarTech: {
        architecture: "Event-driven architecture with real-time processing",
        database: "PostgreSQL for campaigns, InfluxDB for metrics, Redis for queuing",
        hosting: "Kubernetes orchestration with auto-scaling based on email volume",
        security: "API rate limiting, CAN-SPAM compliance, data encryption",
        performance: "Real-time segmentation, bulk email processing, A/B testing"
      },
      FinTech: {
        architecture: "Secure microservices with banking integrations and ML pipeline",
        database: "Encrypted PostgreSQL, Redis for sessions, ML data lake",
        hosting: "PCI DSS compliant infrastructure with encrypted backups",
        security: "Bank-level encryption, MFA, fraud detection, compliance monitoring",
        performance: "Real-time transaction processing, offline capability, sync"
      },
      HealthTech: {
        architecture: "HIPAA-compliant microservices with FHIR integration",
        database: "Encrypted PostgreSQL, HL7 FHIR store, audit logging",
        hosting: "HIPAA-compliant cloud with end-to-end encryption",
        security: "SMART on FHIR, encrypted communications, audit trails",
        performance: "Real-time video, low latency, 99.99% uptime SLA"
      }
    };

    return baseSpecs[industry as keyof typeof baseSpecs] || baseSpecs.EdTech;
  };

  const technicalSpecs = getTechnicalSpecs(prd.industry, prd.type);
  const mermaidDiagram = getArchitectureDiagram(prd.id);

  const mockTimeline = {
    MVP: [
      { phase: "MVP Planning & Design", duration: "2 weeks", status: "completed" },
      { phase: "Core Development", duration: "8 weeks", status: "in-progress" },
      { phase: "Beta Testing", duration: "3 weeks", status: "pending" },
      { phase: "Launch Preparation", duration: "2 weeks", status: "pending" },
      { phase: "Post-Launch Iteration", duration: "Ongoing", status: "pending" }
    ],
    Modernization: [
      { phase: "Legacy Analysis", duration: "3 weeks", status: "completed" },
      { phase: "Migration Planning", duration: "2 weeks", status: "completed" },
      { phase: "Infrastructure Setup", duration: "4 weeks", status: "in-progress" },
      { phase: "Data Migration", duration: "6 weeks", status: "pending" },
      { phase: "User Training & Rollout", duration: "4 weeks", status: "pending" }
    ],
    Feature: [
      { phase: "Feature Specification", duration: "1 week", status: "completed" },
      { phase: "Development", duration: "6 weeks", status: "in-progress" },
      { phase: "Integration Testing", duration: "2 weeks", status: "pending" },
      { phase: "Beta Release", duration: "2 weeks", status: "pending" },
      { phase: "Production Rollout", duration: "1 week", status: "pending" }
    ]
  };

  const getTimelineByType = (type: string) => {
    if (type.includes("MVP")) return mockTimeline.MVP;
    if (type.includes("Modernization")) return mockTimeline.Modernization;
    if (type.includes("Feature")) return mockTimeline.Feature;
    return mockTimeline.MVP;
  };

  const timeline = getTimelineByType(prd.type);

  return (
    <div className="min-h-screen bg-gradient-subtle py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-2">
                {prd.title}
              </h1>
              <p className="text-muted-foreground">
                Sample PRD for {prd.industry} - {prd.type}
              </p>
            </div>
            
            <div className="flex gap-3">
              <Button variant="outline" onClick={onBack}>
                <ArrowLeft className="w-4 h-4" />
                Back to Library
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
              Sample PRD
            </Badge>
            <Badge variant="outline">
              {prd.industry}
            </Badge>
            <Badge variant="outline">
              {prd.type}
            </Badge>
          </div>
        </div>

        <Tabs value={activeView} onValueChange={setActiveView} className="space-y-6">
          <TabsList className="grid w-full grid-cols-5 bg-card shadow-card">
            <TabsTrigger value="overview" className="flex items-center gap-2">
              <Target className="w-4 h-4" />
              Overview
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
            <TabsTrigger value="specs" className="flex items-center gap-2">
              <Building className="w-4 h-4" />
              Full Specs
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <Card className="p-6 shadow-card border border-border/50">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Target className="w-5 h-5 text-primary" />
                Product Overview
              </h3>
              <p className="text-foreground mb-4">{prd.description}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium text-sm text-muted-foreground mb-2">INDUSTRY</h4>
                  <p className="text-sm text-foreground">{prd.industry}</p>
                </div>
                <div>
                  <h4 className="font-medium text-sm text-muted-foreground mb-2">PROJECT TYPE</h4>
                  <p className="text-sm text-foreground">{prd.type}</p>
                </div>
              </div>
            </Card>
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
                    <p className="text-sm text-foreground">{technicalSpecs.architecture}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-sm text-muted-foreground mb-2">DATABASE</h4>
                    <p className="text-sm text-foreground">{technicalSpecs.database}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-sm text-muted-foreground mb-2">HOSTING</h4>
                    <p className="text-sm text-foreground">{technicalSpecs.hosting}</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-sm text-muted-foreground mb-2">SECURITY</h4>
                    <p className="text-sm text-foreground">{technicalSpecs.security}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-sm text-muted-foreground mb-2">PERFORMANCE</h4>
                    <p className="text-sm text-foreground">{technicalSpecs.performance}</p>
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
                {timeline.map((phase, index) => (
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
                This Mermaid diagram shows the complete system architecture for the {prd.title} project.
                Copy this code into any Mermaid-compatible viewer or documentation system.
              </p>
            </Card>
          </TabsContent>

          <TabsContent value="specs" className="space-y-6">
            <Card className="p-6 shadow-card border border-border/50">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Building className="w-5 h-5 text-primary" />
                Complete PRD Document
              </h3>
              <p className="text-muted-foreground mb-4">
                The complete PRD document is available in the project files at:
              </p>
              <div className="bg-muted/20 p-4 rounded-lg">
                <code className="text-sm font-mono text-foreground">{prd.filePath}</code>
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                This file contains the full detailed specifications, user stories, technical requirements, 
                and implementation guidelines for the {prd.title} project.
              </p>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};