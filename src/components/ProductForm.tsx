import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card } from "@/components/ui/card";
import { Upload, ArrowRight, ArrowLeft } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface ProductFormData {
  productName: string;
  description: string;
  budget: string;
  timeline: string;
  domain: string;
  targetMarket: string;
  businessGoals: string;
  requirementsFile?: string;
}

interface ProductFormProps {
  onSubmit: (data: ProductFormData) => void;
  onBack: () => void;
}

export const ProductForm = ({ onSubmit, onBack }: ProductFormProps) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<ProductFormData>({
    productName: "",
    description: "",
    budget: "",
    timeline: "",
    domain: "",
    targetMarket: "",
    businessGoals: "",
    requirementsFile: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.productName || !formData.description) {
      toast({
        title: "Missing Information",
        description: "Please fill in the product name and description at minimum.",
        variant: "destructive",
      });
      return;
    }

    onSubmit(formData);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.type === "text/markdown" || file.name.endsWith('.md')) {
        const reader = new FileReader();
        reader.onload = (event) => {
          const content = event.target?.result as string;
          setFormData(prev => ({ ...prev, requirementsFile: content }));
          toast({
            title: "Markdown File Uploaded",
            description: `${file.name} has been processed and content extracted.`,
          });
        };
        reader.readAsText(file);
      } else {
        toast({
          title: "Invalid File Type",
          description: "Please upload a .md (Markdown) file.",
          variant: "destructive",
        });
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-subtle py-12 px-6">
      <div className="max-w-2xl mx-auto">
        <div className="mb-8">
          <Button 
            variant="ghost" 
            onClick={onBack}
            className="mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </Button>
          
          <h2 className="text-3xl font-bold text-foreground mb-2">
            Tell us about your product
          </h2>
          <p className="text-muted-foreground">
            Provide basic details about your product idea. The more information you provide, 
            the better our AI can assist you.
          </p>
        </div>

        <Card className="p-8 shadow-elegant border border-border/50">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Document Upload Option */}
            <div className="border-2 border-dashed border-border rounded-lg p-6 text-center bg-muted/20">
              <Upload className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
              <p className="text-sm text-muted-foreground mb-2">
                Have existing requirements? Upload a .md file for auto-extraction
              </p>
              <input
                type="file"
                onChange={handleFileUpload}
                accept=".md"
                className="hidden"
                id="file-upload"
              />
              <label htmlFor="file-upload">
                <Button variant="outline" size="sm" type="button" asChild>
                  <span>Choose File</span>
                </Button>
              </label>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="productName">Product Name *</Label>
                <Input
                  id="productName"
                  value={formData.productName}
                  onChange={(e) => setFormData(prev => ({ ...prev, productName: e.target.value }))}
                  placeholder="e.g., TaskFlow Pro"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="domain">Domain/Industry</Label>
                <Select onValueChange={(value) => setFormData(prev => ({ ...prev, domain: value }))}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select domain" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="saas">SaaS/Software</SelectItem>
                    <SelectItem value="ecommerce">E-commerce</SelectItem>
                    <SelectItem value="fintech">FinTech</SelectItem>
                    <SelectItem value="healthcare">Healthcare</SelectItem>
                    <SelectItem value="education">Education</SelectItem>
                    <SelectItem value="marketplace">Marketplace</SelectItem>
                    <SelectItem value="social">Social/Community</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Product Description *</Label>
              <Textarea
                id="description"
                value={formData.description}
                onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                placeholder="Describe your product idea, key features, and what problem it solves..."
                rows={4}
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="budget">Budget Range</Label>
                <Select onValueChange={(value) => setFormData(prev => ({ ...prev, budget: value }))}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select budget range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="under-10k">Under $10,000</SelectItem>
                    <SelectItem value="10k-50k">$10,000 - $50,000</SelectItem>
                    <SelectItem value="50k-100k">$50,000 - $100,000</SelectItem>
                    <SelectItem value="100k-500k">$100,000 - $500,000</SelectItem>
                    <SelectItem value="over-500k">Over $500,000</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="timeline">Timeline</Label>
                <Select onValueChange={(value) => setFormData(prev => ({ ...prev, timeline: value }))}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select timeline" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1-3months">1-3 months</SelectItem>
                    <SelectItem value="3-6months">3-6 months</SelectItem>
                    <SelectItem value="6-12months">6-12 months</SelectItem>
                    <SelectItem value="1-2years">1-2 years</SelectItem>
                    <SelectItem value="flexible">Flexible</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="targetMarket">Target Market</Label>
              <Input
                id="targetMarket"
                value={formData.targetMarket}
                onChange={(e) => setFormData(prev => ({ ...prev, targetMarket: e.target.value }))}
                placeholder="e.g., Small to medium businesses, individual professionals..."
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="businessGoals">Business Goals</Label>
              <Textarea
                id="businessGoals"
                value={formData.businessGoals}
                onChange={(e) => setFormData(prev => ({ ...prev, businessGoals: e.target.value }))}
                placeholder="What are your main business objectives? Revenue targets, user acquisition goals, market positioning..."
                rows={3}
              />
            </div>

            <Button type="submit" variant="professional" size="lg" className="w-full">
              Continue to AI Research
              <ArrowRight className="w-5 h-5" />
            </Button>
          </form>
        </Card>
      </div>
    </div>
  );
};