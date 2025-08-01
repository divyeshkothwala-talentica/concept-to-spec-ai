import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { MessageSquare, Brain, ArrowRight, CheckCircle, HelpCircle } from "lucide-react";

interface Question {
  id: number;
  category: string;
  question: string;
  examples: string[];
  priority: "high" | "medium" | "low";
  answered: boolean;
  answer?: string;
}

interface InteractiveClarificationProps {
  productData: any;
  onComplete: (responses: Record<number, string>) => void;
}

const mockQuestions: Question[] = [
  {
    id: 1,
    category: "User Authentication",
    question: "How should users authenticate and manage their accounts?",
    examples: [
      "Email/password with social login options",
      "SSO integration for enterprise customers",
      "Multi-factor authentication required"
    ],
    priority: "high",
    answered: false,
  },
  {
    id: 2,
    category: "Data Management", 
    question: "What are your data storage and backup requirements?",
    examples: [
      "Cloud-based with automatic backups",
      "On-premise deployment option needed",
      "GDPR compliance required"
    ],
    priority: "high",
    answered: false,
  },
  {
    id: 3,
    category: "Integration",
    question: "Which third-party services or APIs do you need to integrate with?",
    examples: [
      "Payment processors (Stripe, PayPal)",
      "CRM systems (Salesforce, HubSpot)",
      "Communication tools (Slack, Microsoft Teams)"
    ],
    priority: "medium",
    answered: false,
  },
  {
    id: 4,
    category: "Scalability",
    question: "What are your expected user growth and performance requirements?",
    examples: [
      "Start with 100 users, scale to 10,000 in year 1",
      "High availability with 99.9% uptime",
      "Global user base with CDN requirements"
    ],
    priority: "medium",
    answered: false,
  },
  {
    id: 5,
    category: "Mobile Experience",
    question: "What mobile strategy do you prefer for your product?",
    examples: [
      "Responsive web app optimized for mobile",
      "Native mobile apps for iOS and Android",
      "Progressive Web App (PWA) approach"
    ],
    priority: "low",
    answered: false,
  },
];

export const InteractiveClarification = ({ productData, onComplete }: InteractiveClarificationProps) => {
  const [questions, setQuestions] = useState<Question[]>(mockQuestions);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [responses, setResponses] = useState<Record<number, string>>({});
  const [currentAnswer, setCurrentAnswer] = useState("");

  const handleAnswerSubmit = () => {
    if (!currentAnswer.trim()) return;

    const updatedQuestions = [...questions];
    updatedQuestions[currentQuestion].answered = true;
    updatedQuestions[currentQuestion].answer = currentAnswer;
    setQuestions(updatedQuestions);

    const newResponses = { ...responses, [questions[currentQuestion].id]: currentAnswer };
    setResponses(newResponses);
    setCurrentAnswer("");

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handleSkip = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handleExampleClick = (example: string) => {
    setCurrentAnswer(example);
  };

  const completedCount = questions.filter(q => q.answered).length;
  const allQuestionsAnswered = completedCount === questions.length;
  const canProceed = completedCount >= 2; // At least 2 questions answered

  return (
    <div className="min-h-screen bg-gradient-subtle py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <MessageSquare className="w-4 h-4" />
            Interactive Clarification
          </div>
          
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Help us understand your requirements better
          </h2>
          
          <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
            Based on our AI research, we have some specific questions to ensure your PRD captures 
            all important details. You can skip questions if they're not relevant.
          </p>

          {/* Progress indicator */}
          <div className="flex items-center justify-center gap-2 mb-8">
            <span className="text-sm text-muted-foreground">
              Progress: {completedCount}/{questions.length} questions
            </span>
            <div className="flex gap-1">
              {questions.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full ${
                    index < completedCount
                      ? "bg-accent"
                      : index === currentQuestion
                      ? "bg-primary"
                      : "bg-muted"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Current Question */}
          <div className="lg:col-span-2">
            {!allQuestionsAnswered ? (
              <Card className="p-8 shadow-elegant border border-border/50">
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Badge variant={questions[currentQuestion].priority === "high" ? "destructive" : questions[currentQuestion].priority === "medium" ? "default" : "secondary"}>
                      {questions[currentQuestion].priority} priority
                    </Badge>
                    <Badge variant="outline">
                      {questions[currentQuestion].category}
                    </Badge>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {questions[currentQuestion].question}
                  </h3>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-medium text-muted-foreground mb-3">Example responses:</h4>
                  <div className="space-y-2">
                    {questions[currentQuestion].examples.map((example, index) => (
                      <button
                        key={index}
                        onClick={() => handleExampleClick(example)}
                        className="w-full text-left p-3 bg-muted/50 hover:bg-muted rounded-lg text-sm transition-colors border border-transparent hover:border-primary/20"
                      >
                        {example}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <Textarea
                    value={currentAnswer}
                    onChange={(e) => setCurrentAnswer(e.target.value)}
                    placeholder="Provide your detailed answer here..."
                    rows={4}
                    className="resize-none"
                  />
                  
                  <div className="flex gap-3">
                    <Button 
                      onClick={handleAnswerSubmit}
                      disabled={!currentAnswer.trim()}
                      variant="professional"
                      className="flex-1"
                    >
                      <CheckCircle className="w-4 h-4" />
                      Submit Answer
                    </Button>
                    
                    <Button 
                      onClick={handleSkip}
                      variant="outline"
                    >
                      Skip
                    </Button>
                  </div>
                </div>
              </Card>
            ) : (
              <Card className="p-8 shadow-elegant border border-border/50 text-center">
                <CheckCircle className="w-16 h-16 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  All questions completed!
                </h3>
                <p className="text-muted-foreground">
                  We have all the information needed to generate your comprehensive PRD.
                </p>
              </Card>
            )}
          </div>

          {/* Question Summary */}
          <div>
            <Card className="p-6 shadow-card border border-border/50">
              <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                <HelpCircle className="w-4 h-4" />
                Questions Overview
              </h4>
              
              <div className="space-y-3">
                {questions.map((question, index) => (
                  <div
                    key={question.id}
                    className={`p-3 rounded-lg border text-sm ${
                      question.answered
                        ? "bg-accent/10 border-accent/20"
                        : index === currentQuestion
                        ? "bg-primary/10 border-primary/20"
                        : "bg-muted/20 border-border"
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <div className={`w-2 h-2 rounded-full ${
                        question.answered ? "bg-accent" : index === currentQuestion ? "bg-primary" : "bg-muted-foreground"
                      }`} />
                      <span className={`font-medium ${
                        question.answered ? "text-accent" : index === currentQuestion ? "text-primary" : "text-muted-foreground"
                      }`}>
                        {question.category}
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground truncate">
                      {question.question}
                    </p>
                  </div>
                ))}
              </div>

              {canProceed && (
                <Button 
                  onClick={() => onComplete(responses)}
                  variant="success"
                  size="sm"
                  className="w-full mt-6"
                >
                  Generate PRD
                  <ArrowRight className="w-4 h-4" />
                </Button>
              )}
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};