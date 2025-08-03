import jsPDF from 'jspdf';

// Sample PRD data
const samplePRDs = [
  {
    filename: 'edtech-mvp-learning-platform.pdf',
    title: 'Product Requirements Document: EduFlow Learning Platform (MVP)',
    content: `# Product Requirements Document: EduFlow Learning Platform (MVP)

## Product Overview
**Product Name:** EduFlow Learning Platform  
**Industry:** EdTech  
**Project Type:** MVP Development  
**Target Market:** K-12 educators and students  
**Budget:** $150,000  
**Timeline:** 6 months  

## Mission & Vision
**Mission:** To democratize quality education by providing an intuitive, accessible learning management system that enhances student engagement and teacher efficiency.

**Vision:** To become the leading educational platform that bridges the gap between traditional teaching methods and modern digital learning experiences.

## Business Goals
- Achieve 1,000 active users within 3 months of launch
- Maintain 85%+ student engagement rate
- Reduce teacher administrative workload by 40%
- Generate $50K MRR by month 6

## Target Users
### Primary Users
- **Teachers:** Need tools to create courses, track student progress, and manage assignments
- **Students:** Require engaging, interactive learning experiences with clear progress tracking
- **School Administrators:** Need oversight and reporting capabilities

### User Personas
**Sarah Thompson - 5th Grade Teacher**
- Age: 32, Tech-savvy, Masters in Education
- Pain Points: Time-consuming grading, lack of student engagement tools
- Goals: Streamline lesson planning, improve student outcomes

**Jake Martinez - 10th Grade Student**
- Age: 15, Digital native, Visual learner
- Pain Points: Boring traditional learning methods, difficulty tracking progress
- Goals: Interactive learning, clear understanding of academic standing

## Core Features (MVP)
### Authentication & User Management
- User registration/login for teachers and students
- Role-based access control
- Basic profile management

### Course Management
- Course creation and editing tools
- Lesson planning interface
- Content upload (documents, videos, images)
- Assignment creation and distribution

### Student Experience
- Course enrollment and dashboard
- Assignment submission portal
- Progress tracking and grade viewing
- Basic messaging with teachers

### Assessment & Grading
- Quiz and test creation tools
- Automated grading for multiple choice
- Manual grading interface for essays
- Grade book and analytics

### Communication
- In-platform messaging between teachers and students
- Announcement system
- Basic notification system

## Technical Specifications
### Frontend
- React.js with TypeScript
- Responsive design for desktop and mobile
- Progressive Web App capabilities

### Backend
- Node.js with Express framework
- RESTful API architecture
- JWT authentication

### Database
- PostgreSQL for user data and course content
- Redis for session management and caching

### File Storage
- AWS S3 for content and assignment uploads
- CloudFront CDN for content delivery

### Hosting & Infrastructure
- AWS EC2 for application hosting
- Auto-scaling groups for load management
- SSL certificates for security

## Success Metrics
- User Adoption: 1,000+ registered users
- Engagement: 85%+ weekly active user rate
- Performance: <2 second page load times
- Satisfaction: 4.5+ star rating from users

## Development Timeline
### Phase 1: Foundation (Weeks 1-8)
- User authentication and role management
- Basic course creation and management
- Student enrollment system

### Phase 2: Core Features (Weeks 9-16)
- Assignment creation and submission
- Grading and feedback system
- Progress tracking dashboard

### Phase 3: Enhancement (Weeks 17-24)
- Communication features
- Mobile responsiveness
- Performance optimization
- Beta testing and bug fixes

## Risk Mitigation
- **Technical Risks:** Regular code reviews, automated testing
- **Market Risks:** Continuous user feedback integration
- **Resource Risks:** Agile development with regular milestone reviews

## Post-Launch Roadmap
- Advanced analytics and reporting
- Integration with popular educational tools
- Mobile app development
- AI-powered learning recommendations`
  },
  {
    filename: 'fintech-mvp-expense-tracker.pdf',
    title: 'Product Requirements Document: SmartSpend AI-Powered Expense Tracker (MVP)',
    content: `# Product Requirements Document: SmartSpend AI-Powered Expense Tracker (MVP)

## Product Overview
**Product Name:** SmartSpend  
**Industry:** FinTech  
**Project Type:** MVP Development  
**Target Market:** Freelancers and small businesses  
**Budget:** $200,000  
**Timeline:** 8 months  

## Mission & Vision
**Mission:** To simplify financial management for freelancers and small businesses through intelligent automation and insights.

**Vision:** To become the most trusted AI-powered financial assistant for independent professionals and growing businesses.

## Market Opportunity
- $12B+ expense management market
- 57M+ freelancers in the US alone
- 30% growth in remote work driving demand
- Competitive advantage: AI-powered categorization and insights

## Business Goals
- Achieve 5,000 active users within 6 months
- Maintain 70%+ monthly retention rate
- Convert 15% of free users to premium
- Generate $100K ARR by month 12

## Target Users
### Primary Users
- **Freelancers:** Need simple expense tracking and tax preparation
- **Small Business Owners:** Require comprehensive financial management
- **Independent Contractors:** Need receipt management and categorization

### User Personas
**Maria Garcia - Freelance Designer**
- Age: 28, Tech-savvy, Works from home
- Pain Points: Manual receipt tracking, tax season stress
- Goals: Automated expense categorization, easy tax prep

**David Kim - Small Business Owner**
- Age: 45, Moderate tech skills, Runs consulting firm
- Pain Points: Complex financial tracking, multiple revenue streams
- Goals: Clear financial overview, growth insights

## Core Features (MVP)
### Account Management
- Secure user registration and authentication
- Profile setup and preferences
- Data export and privacy controls

### Expense Tracking
- Manual expense entry with photos
- Receipt scanning with OCR technology
- Bank account integration via Plaid
- Real-time expense categorization using AI

### Smart Categorization
- AI-powered automatic categorization
- Custom category creation and rules
- Merchant recognition and learning
- Tax-relevant category flagging

### Receipt Management
- Photo capture and storage
- OCR text extraction
- Receipt matching with bank transactions
- Cloud backup and sync

### Budgeting & Goals
- Monthly budget creation and tracking
- Spending alerts and notifications
- Financial goal setting
- Progress visualization

### Reporting & Analytics
- Monthly and quarterly expense reports
- Tax-ready categorized summaries
- Spending trend analysis
- Export to popular accounting software

### AI Insights
- Spending pattern analysis
- Cost optimization recommendations
- Unusual expense detection
- Predictive budgeting suggestions

## Technical Architecture
### Frontend
- React Native for mobile apps (iOS/Android)
- React.js for web dashboard
- Progressive Web App capabilities
- Offline-first architecture

### Backend
- Node.js with Express framework
- Microservices architecture
- RESTful API design
- JWT authentication

### Database
- PostgreSQL for user and transaction data
- MongoDB for receipt images and metadata
- Redis for caching and sessions

### AI/ML Services
- Google Cloud Vision API for OCR
- Custom ML models for categorization
- TensorFlow for pattern recognition
- Azure Cognitive Services for receipt processing

### Integrations
- Plaid for bank connectivity
- Stripe for payment processing
- QuickBooks/Xero API for accounting sync
- IRS tax category mapping

### Security
- SOC 2 Type II compliance
- Bank-level encryption (256-bit SSL)
- Multi-factor authentication
- Regular security audits

## Business Model
### Freemium Tiers
**Free Tier:**
- Up to 50 expenses/month
- Basic categorization
- Manual receipt entry
- Basic reporting

**Premium ($9.99/month):**
- Unlimited expenses
- AI-powered categorization
- Bank integration
- Advanced reporting
- Tax export features

**Business ($19.99/month):**
- Multi-user access
- Team expense management
- Advanced analytics
- Priority support
- Accounting software integration

## Success Metrics
### Product Metrics
- User acquisition: 1,000+ new users/month
- Retention: 70%+ monthly, 40%+ annual
- Engagement: 15+ sessions/month per user
- Feature adoption: 60%+ use AI categorization

### Business Metrics
- Conversion rate: 15%+ free to premium
- Revenue growth: 20%+ month-over-month
- Customer satisfaction: 4.5+ stars
- Support ticket volume: <5% of users

## Development Timeline
### Phase 1: Foundation (Months 1-2)
- User authentication and account management
- Basic expense entry and manual categorization
- Receipt photo capture and storage

### Phase 2: Core Features (Months 3-4)
- AI-powered categorization engine
- Bank integration via Plaid
- Basic reporting and analytics

### Phase 3: Intelligence (Months 5-6)
- Advanced AI insights and recommendations
- Automated receipt matching
- Budgeting and goal tracking

### Phase 4: Launch Preparation (Months 7-8)
- Performance optimization
- Security audits and compliance
- Beta testing and user feedback integration

## Risk Management
### Technical Risks
- **AI Accuracy:** Continuous model training and user feedback loops
- **Integration Reliability:** Robust error handling and fallback systems
- **Data Security:** Regular security audits and compliance monitoring

### Business Risks
- **Market Competition:** Focus on unique AI features and user experience
- **User Adoption:** Comprehensive onboarding and customer success programs
- **Regulatory Changes:** Stay updated on financial regulations and adapt quickly

### Operational Risks
- **Scalability:** Cloud-native architecture with auto-scaling
- **Support Load:** Comprehensive documentation and self-service options
- **Data Loss:** Multiple backup systems and disaster recovery plans

## Post-MVP Roadmap
### Quarter 1 Post-Launch
- Advanced AI insights and spending predictions
- Integration with popular accounting software
- Team collaboration features

### Quarter 2 Post-Launch
- Investment tracking and portfolio management
- Advanced tax optimization features
- White-label solutions for accountants

### Long-term Vision
- Comprehensive financial wellness platform
- AI-powered financial advisory services
- Small business lending and credit products`
  },
  {
    filename: 'healthtech-telemedicine-integration.pdf',
    title: 'Product Requirements Document: CareConnect Telemedicine Integration',
    content: `# Product Requirements Document: CareConnect Telemedicine Integration

## Product Overview
**Product Name:** CareConnect Telemedicine Integration  
**Industry:** HealthTech  
**Project Type:** Feature Development  
**Target Market:** Healthcare providers and patients  
**Budget:** $300,000  
**Timeline:** 9 months  

## Mission & Vision
**Mission:** To seamlessly integrate telemedicine capabilities into the CareConnect platform, enabling comprehensive virtual care delivery.

**Vision:** To become the leading unified platform for both in-person and virtual healthcare delivery.

## Business Context
### Current State
- Existing CareConnect platform serves 500+ healthcare providers
- Growing demand for virtual care options (300% increase post-2020)
- Fragmented telemedicine solutions causing workflow disruptions
- Patient expectations for convenient, accessible care

### Desired Future State
- Unified platform for all patient interactions
- Seamless workflow between virtual and in-person care
- Enhanced patient access and satisfaction
- Competitive differentiation in healthcare technology market

## Target Users
### Primary Users
- **Healthcare Providers:** Physicians, nurses, and specialists
- **Medical Practice Administrators:** Practice managers and coordinators
- **Patients:** Existing and new patients seeking virtual care

### User Personas
**Dr. Emily Roberts - Primary Care Physician**
- Age: 42, 15+ years experience, Tech-comfortable
- Pain Points: Juggling multiple platforms, documentation overhead
- Goals: Efficient patient care, streamlined workflows

**Jennifer Martinez - Practice Administrator**
- Age: 38, Healthcare operations expert
- Pain Points: Complex scheduling, billing complications
- Goals: Operational efficiency, revenue optimization

**Robert Thompson - Patient**
- Age: 55, Moderate tech skills, Chronic condition management
- Pain Points: Travel difficulties, scheduling conflicts
- Goals: Convenient access to care, continuity with providers

## Core Features
### Virtual Consultation Platform
**Video Conferencing:**
- HD video/audio with screen sharing
- Multi-participant consultations
- Recording capabilities for documentation
- Mobile and desktop compatibility

**Consultation Workspace:**
- Integrated patient records access
- Real-time note-taking and documentation
- Prescription management and e-prescribing
- Lab result review and sharing

**Waiting Room:**
- Virtual waiting area with queue management
- Patient preparation and intake forms
- Technical requirements checking
- Provider notification system

### Scheduling & Workflow Management
**Hybrid Appointment Scheduling:**
- Unified calendar for virtual and in-person visits
- Patient self-scheduling with availability rules
- Automated appointment reminders and confirmations
- Rescheduling and cancellation management

**Workflow Orchestration:**
- Pre-visit preparation automation
- Visit type optimization recommendations
- Post-visit follow-up automation
- Care coordination between providers

### Patient Portal Enhancements
**Telehealth Access:**
- One-click visit joining from patient portal
- Technical setup assistance and testing
- Visit history and recordings access
- Follow-up care plan viewing

**Health Monitoring:**
- Remote vital signs integration
- Patient-reported outcomes collection
- Medication adherence tracking
- Symptom monitoring and alerts

### Clinical Documentation
**Virtual Visit Documentation:**
- Structured visit note templates
- Voice-to-text transcription
- Clinical decision support integration
- Quality measure tracking

**Regulatory Compliance:**
- HIPAA-compliant video infrastructure
- Audit trail maintenance
- Consent management
- State licensing verification

### Billing & Revenue Cycle
**Telehealth Billing:**
- CPT code automation for virtual visits
- Insurance eligibility verification
- Copay collection integration
- Claims submission automation

**Financial Management:**
- Revenue reporting and analytics
- Reimbursement rate optimization
- Prior authorization management
- Payment processing integration

## Technical Architecture
### Video Platform Infrastructure
**WebRTC Technology:**
- Peer-to-peer connection optimization
- Adaptive bitrate streaming
- Network quality monitoring
- Fallback server routing

**Cloud-based Infrastructure:**
- 99.9% uptime SLA
- Global CDN distribution
- Auto-scaling capabilities
- Disaster recovery systems

**Security & Privacy:**
- End-to-end encryption
- HIPAA compliance certification
- Access control and authentication
- Data residency requirements

### Integration Architecture
**EHR Integration:**
- HL7 FHIR standard compliance
- Real-time data synchronization
- Single sign-on (SSO) implementation
- Audit logging and monitoring

**Third-Party APIs:**
- Pharmacy integration for e-prescribing
- Lab systems connectivity
- Insurance verification services
- Payment gateway integration

### Performance Requirements
**Scalability:**
- Support for 10,000+ concurrent users
- Database performance optimization
- Caching strategy implementation
- Load balancing configuration

**Device Compatibility:**
- iOS/Android mobile applications
- Desktop browser support (Chrome, Firefox, Safari, Edge)
- Tablet optimization
- Accessibility compliance (WCAG 2.1 AA)

## User Experience Design
### Physician Workflow
**Pre-Visit:**
- Patient chart review with virtual visit context
- Technical requirements verification
- Consultation preparation checklist
- Care plan review and updates

**During Visit:**
- Intuitive video interface with clinical tools
- Real-time documentation capabilities
- Prescription and order management
- Consultation summary generation

**Post-Visit:**
- Automated follow-up scheduling
- Patient communication templates
- Care plan distribution
- Billing code suggestions

### Patient Experience
**Appointment Preparation:**
- Technical setup guide and testing
- Pre-visit questionnaire completion
- Insurance verification confirmation
- Visit instructions and expectations

**Virtual Visit Flow:**
- Simple join process with minimal clicks
- Clear audio/video quality indicators
- Chat functionality for questions
- Visit recording consent management

**Post-Visit Support:**
- Visit summary and next steps
- Prescription access and pharmacy integration
- Follow-up appointment scheduling
- Provider feedback collection

## Regulatory & Compliance
### Healthcare Regulations
**HIPAA Compliance:**
- Business Associate Agreements (BAAs)
- Risk assessment and mitigation
- Employee training and certification
- Incident response procedures

**State Licensing:**
- Provider license verification
- Cross-state practice regulations
- Telehealth law compliance
- Documentation requirements

### Quality & Safety Standards
**Clinical Quality:**
- Evidence-based care protocols
- Quality measure integration
- Patient safety monitoring
- Adverse event reporting

**Technology Standards:**
- FDA guidance compliance
- HITECH Act requirements
- State telehealth regulations
- International privacy laws (GDPR)

## Success Metrics
### Adoption Metrics
- Provider adoption: 80%+ within 6 months
- Patient utilization: 25%+ of appointments virtual
- Feature engagement: 90%+ use core features
- User satisfaction: 4.5+ star rating

### Clinical Quality
- Patient outcomes equivalent to in-person care
- Reduced no-show rates (target: <10%)
- Improved care continuity scores
- Enhanced patient access metrics

### Business Impact
- Revenue per provider increase: 15%+
- Operational cost reduction: 20%+
- Patient acquisition growth: 30%+
- Market share expansion in telehealth

### Technical Performance
- Video quality satisfaction: 95%+
- Platform uptime: 99.9%+
- Average connection time: <30 seconds
- Support ticket volume: <2% of sessions

## Development Timeline
### Phase 1: Foundation (Months 1-3)
- Infrastructure setup and security implementation
- Basic video conferencing integration
- User authentication and access control
- Core scheduling enhancements

### Phase 2: Core Features (Months 4-6)
- Complete virtual consultation platform
- Clinical documentation integration
- Patient portal enhancements
- Basic billing and coding support

### Phase 3: Advanced Features (Months 7-8)
- Advanced workflow automation
- Analytics and reporting capabilities
- Mobile application development
- Third-party integrations

### Phase 4: Launch & Optimization (Month 9)
- User training and change management
- Performance optimization
- Security audits and compliance verification
- Go-live support and monitoring

## Risk Management
### Technical Risks
- **Video Quality Issues:** Comprehensive testing and adaptive streaming
- **Integration Challenges:** Phased rollout with fallback options
- **Scalability Concerns:** Load testing and infrastructure monitoring

### Regulatory Risks
- **Compliance Violations:** Legal review and ongoing monitoring
- **State Law Changes:** Proactive regulatory tracking
- **Privacy Breaches:** Security audits and incident response plans

### Business Risks
- **User Adoption:** Comprehensive training and change management
- **Competition:** Unique feature differentiation
- **ROI Achievement:** Careful metrics tracking and optimization

## Post-Launch Roadmap
### Quarter 1
- AI-powered clinical decision support
- Advanced analytics and population health insights
- Enhanced mobile capabilities

### Quarter 2
- Specialty care workflow optimization
- Remote patient monitoring integration
- Multi-language support

### Quarter 3
- Machine learning for visit optimization
- Advanced scheduling intelligence
- Chronic care management features`
  }
];

// Function to create PDFs
export const generateSamplePDFs = () => {
  samplePRDs.forEach(prd => {
    const doc = new jsPDF();
    
    // Set font and add title
    doc.setFontSize(16);
    doc.setFont('helvetica', 'bold');
    doc.text(prd.title, 20, 20);
    
    // Add content
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    
    const lines = doc.splitTextToSize(prd.content, 170);
    let y = 40;
    
    lines.forEach((line: string) => {
      if (y > 280) {
        doc.addPage();
        y = 20;
      }
      doc.text(line, 20, y);
      y += 5;
    });
    
    // Save the PDF
    doc.save(prd.filename);
  });
};

// Generate PDFs immediately when this module is imported
generateSamplePDFs();