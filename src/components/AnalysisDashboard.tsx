import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  Brain, 
  Copy, 
  FileCheck, 
  Zap, 
  AlertTriangle, 
  CheckCircle, 
  ArrowRight,
  Download,
  RefreshCw
} from "lucide-react";

interface AnalysisResult {
  overall: number;
  aiDetection: { score: number; status: 'pass' | 'warning' | 'fail'; issues: string[] };
  plagiarism: { score: number; status: 'pass' | 'warning' | 'fail'; matches: number };
  grammar: { score: number; status: 'pass' | 'warning' | 'fail'; errors: number };
  format: { score: number; status: 'pass' | 'warning' | 'fail'; violations: string[] };
}

const mockResults: AnalysisResult = {
  overall: 78,
  aiDetection: { 
    score: 85, 
    status: 'warning', 
    issues: ['Section 3 shows AI-generated patterns', 'Abstract may need humanization'] 
  },
  plagiarism: { 
    score: 95, 
    status: 'pass', 
    matches: 2 
  },
  grammar: { 
    score: 72, 
    status: 'warning', 
    errors: 12 
  },
  format: { 
    score: 68, 
    status: 'fail', 
    violations: ['Missing claim dependencies', 'Incorrect figure numbering', 'Abstract too long'] 
  }
};

const AnalysisDashboard = ({ hasFile }: { hasFile: boolean }) => {
  if (!hasFile) {
    return null;
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pass': return 'default';
      case 'warning': return 'secondary';
      case 'fail': return 'destructive';
      default: return 'outline';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'pass': return <CheckCircle className="h-4 w-4" />;
      case 'warning': return <AlertTriangle className="h-4 w-4" />;
      case 'fail': return <AlertTriangle className="h-4 w-4" />;
      default: return <RefreshCw className="h-4 w-4" />;
    }
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Analysis Results
          </h2>
          <p className="text-lg text-muted-foreground">
            Comprehensive analysis of your patent document
          </p>
        </div>

        {/* Overall Score Card */}
        <div className="max-w-4xl mx-auto mb-8">
          <Card className="p-8 bg-gradient-card shadow-elegant">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-hero rounded-full mb-4 animate-pulse-glow">
                <span className="text-3xl font-bold text-primary-foreground">
                  {mockResults.overall}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">Overall Score</h3>
              <p className="text-muted-foreground mb-4">
                Your patent document needs some improvements before submission
              </p>
              <Progress value={mockResults.overall} className="w-64 mx-auto" />
            </div>
          </Card>
        </div>

        {/* Individual Analysis Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-8">
          {/* AI Detection */}
          <Card className="p-6 hover:shadow-card transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-ai-detect/10 rounded-lg">
                <Brain className="h-6 w-6 text-ai-detect" />
              </div>
              <Badge variant={getStatusColor(mockResults.aiDetection.status)}>
                {getStatusIcon(mockResults.aiDetection.status)}
                {mockResults.aiDetection.status}
              </Badge>
            </div>
            <h3 className="font-semibold text-lg mb-2">AI Detection</h3>
            <div className="mb-3">
              <div className="flex justify-between text-sm mb-1">
                <span>Score</span>
                <span className="font-medium">{mockResults.aiDetection.score}%</span>
              </div>
              <Progress value={mockResults.aiDetection.score} className="h-2" />
            </div>
            <p className="text-xs text-muted-foreground mb-3">
              {mockResults.aiDetection.issues.length} potential AI-generated sections
            </p>
            <Button variant="outline" size="sm" className="w-full">
              View Details <ArrowRight className="h-3 w-3 ml-1" />
            </Button>
          </Card>

          {/* Plagiarism Check */}
          <Card className="p-6 hover:shadow-card transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-plagiarism/10 rounded-lg">
                <Copy className="h-6 w-6 text-plagiarism" />
              </div>
              <Badge variant={getStatusColor(mockResults.plagiarism.status)}>
                {getStatusIcon(mockResults.plagiarism.status)}
                {mockResults.plagiarism.status}
              </Badge>
            </div>
            <h3 className="font-semibold text-lg mb-2">Plagiarism</h3>
            <div className="mb-3">
              <div className="flex justify-between text-sm mb-1">
                <span>Score</span>
                <span className="font-medium">{mockResults.plagiarism.score}%</span>
              </div>
              <Progress value={mockResults.plagiarism.score} className="h-2" />
            </div>
            <p className="text-xs text-muted-foreground mb-3">
              {mockResults.plagiarism.matches} potential matches found
            </p>
            <Button variant="outline" size="sm" className="w-full">
              View Details <ArrowRight className="h-3 w-3 ml-1" />
            </Button>
          </Card>

          {/* Grammar Check */}
          <Card className="p-6 hover:shadow-card transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-success/10 rounded-lg">
                <FileCheck className="h-6 w-6 text-success" />
              </div>
              <Badge variant={getStatusColor(mockResults.grammar.status)}>
                {getStatusIcon(mockResults.grammar.status)}
                {mockResults.grammar.status}
              </Badge>
            </div>
            <h3 className="font-semibold text-lg mb-2">Grammar</h3>
            <div className="mb-3">
              <div className="flex justify-between text-sm mb-1">
                <span>Score</span>
                <span className="font-medium">{mockResults.grammar.score}%</span>
              </div>
              <Progress value={mockResults.grammar.score} className="h-2" />
            </div>
            <p className="text-xs text-muted-foreground mb-3">
              {mockResults.grammar.errors} grammar issues found
            </p>
            <Button variant="outline" size="sm" className="w-full">
              View Details <ArrowRight className="h-3 w-3 ml-1" />
            </Button>
          </Card>

          {/* Format Check */}
          <Card className="p-6 hover:shadow-card transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <Badge variant={getStatusColor(mockResults.format.status)}>
                {getStatusIcon(mockResults.format.status)}
                {mockResults.format.status}
              </Badge>
            </div>
            <h3 className="font-semibold text-lg mb-2">Format</h3>
            <div className="mb-3">
              <div className="flex justify-between text-sm mb-1">
                <span>Score</span>
                <span className="font-medium">{mockResults.format.score}%</span>
              </div>
              <Progress value={mockResults.format.score} className="h-2" />
            </div>
            <p className="text-xs text-muted-foreground mb-3">
              {mockResults.format.violations.length} format violations
            </p>
            <Button variant="outline" size="sm" className="w-full">
              View Details <ArrowRight className="h-3 w-3 ml-1" />
            </Button>
          </Card>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="hero" size="lg">
            <RefreshCw className="h-5 w-5 mr-2" />
            Re-analyze Document
          </Button>
          <Button variant="outline" size="lg">
            <Download className="h-5 w-5 mr-2" />
            Download Report
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AnalysisDashboard;