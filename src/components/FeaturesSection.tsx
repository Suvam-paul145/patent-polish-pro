import { Card } from "@/components/ui/card";
import { 
  Brain, 
  Copy, 
  FileCheck, 
  Zap, 
  Shield, 
  Clock,
  Users,
  CheckCircle,
  TrendingUp
} from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "Advanced AI Detection",
    description: "99.9% accuracy in detecting AI-generated content with automated humanization suggestions.",
    color: "ai-detect",
    stats: "99.9% Accuracy"
  },
  {
    icon: Copy,
    title: "Comprehensive Plagiarism Check",
    description: "Scan against global patent databases, academic journals, and web content.",
    color: "plagiarism", 
    stats: "50M+ Sources"
  },
  {
    icon: FileCheck,
    title: "Grammar & Style Validation",
    description: "Professional grammar checking with patent-specific language recommendations.",
    color: "success",
    stats: "500+ Rules"
  },
  {
    icon: Zap,
    title: "Format Compliance",
    description: "Verify compliance with USPTO, EPO, and major patent office requirements.",
    color: "primary",
    stats: "15+ Patent Offices"
  },
  {
    icon: Shield,
    title: "Secure & Confidential",
    description: "Enterprise-grade security with end-to-end encryption for your sensitive documents.",
    color: "success",
    stats: "256-bit Encryption"
  },
  {
    icon: Clock,
    title: "Real-time Analysis",
    description: "Get instant feedback as you write with live document analysis and suggestions.",
    color: "warning",
    stats: "< 30 Seconds"
  }
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Everything You Need for{" "}
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              Perfect Patents
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive patent validation tools trusted by thousands of students, 
            professors, and researchers worldwide.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="p-8 bg-gradient-card border-0 shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 group">
              <div className={`p-4 rounded-xl w-fit mb-6 group-hover:scale-110 transition-transform duration-300 ${
                feature.color === 'ai-detect' ? 'bg-ai-detect/10' :
                feature.color === 'plagiarism' ? 'bg-plagiarism/10' :
                feature.color === 'success' ? 'bg-success/10' :
                feature.color === 'primary' ? 'bg-primary/10' :
                feature.color === 'warning' ? 'bg-warning/10' : 'bg-secondary/10'
              }`}>
                <feature.icon className={`h-8 w-8 ${
                  feature.color === 'ai-detect' ? 'text-ai-detect' :
                  feature.color === 'plagiarism' ? 'text-plagiarism' :
                  feature.color === 'success' ? 'text-success' :
                  feature.color === 'primary' ? 'text-primary' :
                  feature.color === 'warning' ? 'text-warning' : 'text-secondary'
                }`} />
              </div>
              
              <h3 className="text-xl font-bold text-foreground mb-3">
                {feature.title}
              </h3>
              
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {feature.description}
              </p>
              
              <div className="flex items-center justify-between">
                <span className={`text-sm font-semibold px-3 py-1 rounded-full ${
                  feature.color === 'ai-detect' ? 'text-ai-detect bg-ai-detect/10' :
                  feature.color === 'plagiarism' ? 'text-plagiarism bg-plagiarism/10' :
                  feature.color === 'success' ? 'text-success bg-success/10' :
                  feature.color === 'primary' ? 'text-primary bg-primary/10' :
                  feature.color === 'warning' ? 'text-warning bg-warning/10' : 'text-secondary bg-secondary/10'
                }`}>
                  {feature.stats}
                </span>
                <CheckCircle className={`h-5 w-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                  feature.color === 'ai-detect' ? 'text-ai-detect' :
                  feature.color === 'plagiarism' ? 'text-plagiarism' :
                  feature.color === 'success' ? 'text-success' :
                  feature.color === 'primary' ? 'text-primary' :
                  feature.color === 'warning' ? 'text-warning' : 'text-secondary'
                }`} />
              </div>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <Users className="h-8 w-8 text-primary mr-2" />
              <span className="text-3xl font-bold text-foreground">10,000+</span>
            </div>
            <p className="text-muted-foreground">Active Users</p>
          </div>
          
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <FileCheck className="h-8 w-8 text-success mr-2" />
              <span className="text-3xl font-bold text-foreground">250,000+</span>
            </div>
            <p className="text-muted-foreground">Patents Analyzed</p>
          </div>
          
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <TrendingUp className="h-8 w-8 text-warning mr-2" />
              <span className="text-3xl font-bold text-foreground">98.5%</span>
            </div>
            <p className="text-muted-foreground">Success Rate</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;