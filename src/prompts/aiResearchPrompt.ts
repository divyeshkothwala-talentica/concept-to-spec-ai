interface ProductFormData {
  productName: string;
  description: string;
  budget: string;
  timeline: string;
  domain: string;
  targetMarket: string;
  businessGoals: string;
}

export const generateAIResearchPrompt = (productData: ProductFormData) => {
  return `You are an expert product strategist and technical architect. Conduct comprehensive research and analysis for the following product:

**PRODUCT OVERVIEW:**
- Product Name: ${productData.productName}
- Description: ${productData.description}
- Domain/Industry: ${productData.domain}
- Budget: ${productData.budget}
- Timeline: ${productData.timeline}
- Target Market: ${productData.targetMarket}
- Business Goals: ${productData.businessGoals}

**RESEARCH AREAS TO ANALYZE:**

1. **MARKET ANALYSIS**
   - Identify 3-5 key competitors in the ${productData.domain} space
   - Analyze market size and growth trends
   - Identify market gaps and opportunities
   - Assess target market segments and personas
   - Provide competitive positioning recommendations

2. **TECHNICAL REQUIREMENTS**
   - Recommend optimal technology stack based on requirements and budget
   - Identify scalability considerations for the target market size
   - Suggest architecture patterns (monolithic, microservices, serverless)
   - Outline infrastructure and hosting recommendations
   - Identify potential technical risks and mitigation strategies

3. **USER JOURNEY MAPPING**
   - Map primary user flows based on the product description
   - Identify key user touchpoints and interactions
   - Define user personas based on target market
   - Outline onboarding and engagement strategies
   - Identify potential user experience pain points

4. **FEATURE PRIORITIZATION**
   - Break down features into MVP, Phase 2, and Future releases
   - Prioritize features based on business goals and user value
   - Estimate development effort for each feature category
   - Suggest feature validation and testing strategies
   - Align features with the specified budget and timeline

5. **ARCHITECTURE PLANNING**
   - Design high-level system architecture
   - Identify core services and components needed
   - Plan data flow and storage requirements
   - Outline security and compliance considerations
   - Suggest deployment and DevOps strategies

**OUTPUT FORMAT:**
Provide detailed, actionable insights for each research area. Include specific recommendations, concrete examples, and practical next steps. Focus on insights that are directly relevant to the product goals and constraints provided.

**CONTEXT CONSIDERATIONS:**
- Budget constraint: ${productData.budget}
- Timeline constraint: ${productData.timeline}
- Industry-specific requirements for ${productData.domain}
- Target market characteristics: ${productData.targetMarket}
- Business objectives: ${productData.businessGoals}

Generate comprehensive research that will inform product strategy and technical decisions.`;
};

export const parseAIResearchResponse = (response: string) => {
  // Helper function to parse AI response into structured insights
  const sections = {
    marketAnalysis: "",
    technicalRequirements: "",
    userJourney: "",
    featurePrioritization: "",
    architecturePlanning: ""
  };

  // Parse sections based on headers
  const lines = response.split('\n');
  let currentSection = '';
  
  lines.forEach(line => {
    const cleanLine = line.trim();
    if (cleanLine.includes('MARKET ANALYSIS') || cleanLine.includes('Market Analysis')) {
      currentSection = 'marketAnalysis';
    } else if (cleanLine.includes('TECHNICAL REQUIREMENTS') || cleanLine.includes('Technical Requirements')) {
      currentSection = 'technicalRequirements';
    } else if (cleanLine.includes('USER JOURNEY') || cleanLine.includes('User Journey')) {
      currentSection = 'userJourney';
    } else if (cleanLine.includes('FEATURE PRIORITIZATION') || cleanLine.includes('Feature Prioritization')) {
      currentSection = 'featurePrioritization';
    } else if (cleanLine.includes('ARCHITECTURE PLANNING') || cleanLine.includes('Architecture Planning')) {
      currentSection = 'architecturePlanning';
    } else if (currentSection && cleanLine) {
      sections[currentSection as keyof typeof sections] += line + '\n';
    }
  });

  return sections;
};

export const extractKeyInsights = (parsedResponse: ReturnType<typeof parseAIResearchResponse>) => {
  // Extract key bullet points for display in the research phase
  const insights = [];
  
  if (parsedResponse.marketAnalysis) {
    insights.push("Identified key competitors and market opportunities");
  }
  
  if (parsedResponse.technicalRequirements) {
    insights.push("Recommended optimal technology stack and architecture");
  }
  
  if (parsedResponse.userJourney) {
    insights.push("Mapped core user journeys and touchpoints");
  }
  
  if (parsedResponse.featurePrioritization) {
    insights.push("Prioritized features across MVP and future releases");
  }
  
  if (parsedResponse.architecturePlanning) {
    insights.push("Designed scalable system architecture");
  }
  
  return insights;
};