import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Upload, FileText, CheckCircle, Shield, Zap } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-secondary/30 to-primary/5 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-primary-glow/20 rounded-full blur-2xl" />
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Hero Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-8 animate-fade-in-up">
            <CheckCircle className="h-4 w-4 text-primary mr-2" />
            <span className="text-sm font-medium text-primary">Trusted by 10,000+ Students & Professors</span>
          </div>
          
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight animate-fade-in-up">
            Perfect Your{" "}
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              Patent Applications
            </span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in-up">
            Comprehensive patent validation with AI detection, plagiarism check, grammar correction, 
            and format verification. Get your patent application ready for submission.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in-up">
            <Button 
              variant="hero" 
              size="lg" 
              className="group"
              onClick={() => document.getElementById('upload-section')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Upload className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" />
              Upload Patent Document
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => window.open('/developer', '_blank')}
            >
              <FileText className="h-5 w-5 mr-2" />
              See Demo
            </Button>
          </div>
          
          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto animate-fade-in-up">
            <Card className="p-6 bg-gradient-card border-0 shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
              <div className="p-3 bg-success/10 rounded-lg w-fit mx-auto mb-4">
                <Shield className="h-8 w-8 text-success" />
              </div>
              <h3 className="text-lg font-semibold mb-2">AI Detection</h3>
              <p className="text-muted-foreground text-sm">
                Advanced AI detection with 99.9% accuracy. Automatically humanize AI-generated content.
              </p>
            </Card>
            
            <Card className="p-6 bg-gradient-card border-0 shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
              <div className="p-3 bg-plagiarism/10 rounded-lg w-fit mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-plagiarism" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Plagiarism Check</h3>
              <p className="text-muted-foreground text-sm">
                Comprehensive plagiarism detection against global patent databases and academic sources.
              </p>
            </Card>
            
            <Card className="p-6 bg-gradient-card border-0 shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
              <div className="p-3 bg-primary/10 rounded-lg w-fit mx-auto mb-4">
                <Zap className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Format Validation</h3>
              <p className="text-muted-foreground text-sm">
                Verify patent format compliance with USPTO, EPO, and other major patent offices.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;