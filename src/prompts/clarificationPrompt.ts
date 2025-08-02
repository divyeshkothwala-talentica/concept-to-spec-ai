interface ProductFormData {
  productName: string;
  description: string;
  budget: string;
  timeline: string;
  domain: string;
  targetMarket: string;
  businessGoals: string;
}

interface AIResearchInsights {
  marketAnalysis: string;
  technicalRequirements: string;
  userJourney: string;
  featurePrioritization: string;
  architecturePlanning: string;
}

export const generateClarificationQuestionsPrompt = (
  productData: ProductFormData,
  researchInsights: AIResearchInsights
) => {
  return `You are an expert product manager tasked with generating targeted clarification questions to finalize a comprehensive PRD and technical architecture diagram.

**PRODUCT CONTEXT:**
- Product: ${productData.productName}
- Domain: ${productData.domain}
- Budget: ${productData.budget}
- Timeline: ${productData.timeline}
- Target Market: ${productData.targetMarket}

**RESEARCH INSIGHTS COMPLETED:**
${Object.entries(researchInsights).map(([key, value]) => `
**${key.toUpperCase()}:**
${value.substring(0, 500)}...
`).join('\n')}

**OBJECTIVE:**
Generate 8-12 strategic clarification questions that will help finalize the PRD and architecture. Questions should be:
- Specific and actionable
- Fill gaps in the research
- Address critical decision points
- Help prioritize features and technical choices
- Clarify business requirements and constraints

**QUESTION CATEGORIES TO COVER:**

1. **Business & Strategy Clarifications** (2-3 questions)
   - Revenue model and monetization strategy
   - Success metrics and KPIs
   - Competitive differentiation
   - Market entry strategy

2. **User Experience & Features** (2-3 questions)
   - Core user workflows and pain points
   - Feature prioritization and MVP scope
   - User onboarding and engagement
   - Accessibility and internationalization needs

3. **Technical & Architecture** (2-3 questions)
   - Performance and scalability requirements
   - Integration needs with existing systems
   - Security and compliance requirements
   - Development team size and expertise

4. **Operations & Launch** (2-3 questions)
   - Go-to-market strategy
   - Support and maintenance approach
   - Analytics and monitoring needs
   - Future roadmap considerations

**OUTPUT FORMAT:**
Return exactly 8-12 questions in this JSON format:

{
  "questions": [
    {
      "id": 1,
      "category": "Business & Strategy",
      "question": "What is your primary revenue model (subscription, one-time purchase, freemium, etc.) and expected pricing strategy?",
      "context": "Understanding monetization will impact feature prioritization and user experience design",
      "options": ["Subscription (SaaS)", "One-time purchase", "Freemium model", "Enterprise licensing", "Other"]
    },
    {
      "id": 2,
      "category": "Technical & Architecture",
      "question": "What are your expected user volumes and performance requirements?",
      "context": "This will determine database choices, caching strategies, and infrastructure needs",
      "type": "text"
    }
  ]
}

**REQUIREMENTS:**
- Each question must be directly relevant to finalizing the PRD and architecture
- Include multiple choice options where appropriate, otherwise use "text" type
- Provide clear context explaining why each question is important
- Focus on decisions that will significantly impact the final product specification
- Consider the specific domain (${productData.domain}) and target market (${productData.targetMarket})
- Address any gaps or ambiguities found in the research insights

Generate questions that will lead to a comprehensive, actionable PRD and detailed technical architecture diagram.`;
};

export interface ClarificationQuestion {
  id: number;
  category: string;
  question: string;
  context: string;
  options?: string[];
  type?: string;
}

export interface ClarificationResponse {
  questions: ClarificationQuestion[];
}

export const generateFinalPRDPrompt = (
  productData: ProductFormData,
  researchInsights: AIResearchInsights,
  clarificationResponses: Record<number, string>
) => {
  return `You are an expert product manager creating a comprehensive Product Requirements Document (PRD) and technical architecture diagram.

**PRODUCT INFORMATION:**
- Product Name: ${productData.productName}
- Description: ${productData.description}
- Domain: ${productData.domain}
- Budget: ${productData.budget}
- Timeline: ${productData.timeline}
- Target Market: ${productData.targetMarket}
- Business Goals: ${productData.businessGoals}

**AI RESEARCH INSIGHTS:**
${Object.entries(researchInsights).map(([key, value]) => `
**${key.toUpperCase()}:**
${value}
`).join('\n')}

**CLARIFICATION RESPONSES:**
${Object.entries(clarificationResponses).map(([questionId, response]) => `
Question ${questionId}: ${response}
`).join('\n')}

**GENERATE COMPREHENSIVE PRD:**

Create a detailed Product Requirements Document with the following sections:

1. **Executive Summary**
2. **Product Overview**
3. **Market Analysis & Competitive Landscape**
4. **User Personas & Target Market**
5. **Feature Specifications**
   - MVP Features (Phase 1)
   - Phase 2 Features
   - Future Roadmap
6. **Technical Requirements**
7. **User Experience & Design Guidelines**
8. **Success Metrics & KPIs**
9. **Timeline & Milestones**
10. **Risk Assessment & Mitigation**

**TECHNICAL ARCHITECTURE DIAGRAM:**

Also generate a detailed mermaid diagram showing:
- System components and services
- Data flow and interactions
- Third-party integrations
- Security layers
- Deployment architecture

**OUTPUT FORMAT:**
Provide a comprehensive PRD in markdown format followed by the mermaid architecture diagram.

Make the PRD actionable, specific, and ready for development teams to implement. Include concrete specifications, acceptance criteria, and technical details based on all the gathered information.`;
};