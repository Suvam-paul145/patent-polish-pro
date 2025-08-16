import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Upload, 
  FileText, 
  Play, 
  Save, 
  Download, 
  Settings, 
  Code, 
  Database,
  TestTube,
  Brain,
  Copy,
  CheckCircle,
  Zap,
  ArrowLeft
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";

const DeveloperDashboard = () => {
  const [testFile, setTestFile] = useState<File | null>(null);
  const [testText, setTestText] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [testResults, setTestResults] = useState<any>(null);
  const { toast } = useToast();

  const handleFileUpload = (file: File) => {
    setTestFile(file);
    toast({
      title: "Test file uploaded",
      description: `${file.name} ready for testing`,
    });
  };

  const runAnalysis = async () => {
    setIsAnalyzing(true);
    
    // Simulate API call
    setTimeout(() => {
      const mockResults = {
        overall: Math.floor(Math.random() * 40) + 60,
        aiDetection: {
          score: Math.floor(Math.random() * 30) + 70,
          status: ['pass', 'warning', 'fail'][Math.floor(Math.random() * 3)],
          confidence: Math.floor(Math.random() * 20) + 80
        },
        plagiarism: {
          score: Math.floor(Math.random() * 20) + 80,
          matches: Math.floor(Math.random() * 5),
          sources: ['Patent DB', 'Academic Sources', 'Web Content']
        },
        grammar: {
          score: Math.floor(Math.random() * 30) + 70,
          errors: Math.floor(Math.random() * 15),
          suggestions: Math.floor(Math.random() * 10)
        },
        format: {
          score: Math.floor(Math.random() * 40) + 60,
          violations: Math.floor(Math.random() * 8),
          compliance: 'USPTO Standard'
        }
      };
      
      setTestResults(mockResults);
      setIsAnalyzing(false);
      
      toast({
        title: "Analysis complete",
        description: "Test results generated successfully",
      });
    }, 3000);
  };

  const downloadResults = () => {
    const dataStr = JSON.stringify(testResults, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
    
    const exportFileDefaultName = 'test-results.json';
    
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-background/95 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link to="/">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Main
                </Button>
              </Link>
              <div className="flex items-center space-x-2">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Code className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h1 className="text-xl font-bold">Developer Dashboard</h1>
                  <p className="text-sm text-muted-foreground">Testing & Configuration</p>
                </div>
              </div>
            </div>
            <Badge variant="secondary">
              <TestTube className="h-3 w-3 mr-1" />
              Testing Mode
            </Badge>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <Tabs defaultValue="testing" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="testing">Testing</TabsTrigger>
            <TabsTrigger value="apis">API Testing</TabsTrigger>
            <TabsTrigger value="config">Configuration</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          {/* Testing Tab */}
          <TabsContent value="testing" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              {/* Upload Section */}
              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <Upload className="h-5 w-5 mr-2" />
                  Test File Upload
                </h3>
                
                <div className="space-y-4">
                  <div className="border-2 border-dashed border-border rounded-lg p-6 text-center">
                    {!testFile ? (
                      <>
                        <FileText className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                        <p className="text-sm text-muted-foreground mb-2">
                          Drop your test patent document here
                        </p>
                        <Button variant="outline" size="sm">
                          Choose Test File
                        </Button>
                        <input
                          type="file"
                          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                          accept=".pdf,.doc,.docx,.txt"
                          onChange={(e) => e.target.files && handleFileUpload(e.target.files[0])}
                        />
                      </>
                    ) : (
                      <div className="flex items-center justify-center space-x-2">
                        <FileText className="h-5 w-5 text-success" />
                        <span className="text-sm font-medium">{testFile.name}</span>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => setTestFile(null)}
                        >
                          Remove
                        </Button>
                      </div>
                    )}
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Or paste text content:</label>
                    <Textarea
                      placeholder="Paste patent text here for quick testing..."
                      value={testText}
                      onChange={(e) => setTestText(e.target.value)}
                      rows={4}
                    />
                  </div>
                  
                  <Button 
                    className="w-full" 
                    variant="hero"
                    onClick={runAnalysis}
                    disabled={isAnalyzing || (!testFile && !testText)}
                  >
                    {isAnalyzing ? (
                      <>
                        <TestTube className="h-4 w-4 mr-2 animate-spin" />
                        Analyzing...
                      </>
                    ) : (
                      <>
                        <Play className="h-4 w-4 mr-2" />
                        Run Analysis
                      </>
                    )}
                  </Button>
                </div>
              </Card>

              {/* Results Section */}
              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <Database className="h-5 w-5 mr-2" />
                  Test Results
                </h3>
                
                {!testResults ? (
                  <div className="text-center text-muted-foreground py-8">
                    <TestTube className="h-12 w-12 mx-auto mb-2 opacity-50" />
                    <p>No test results yet. Run an analysis to see results.</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary mb-1">
                        {testResults.overall}%
                      </div>
                      <p className="text-sm text-muted-foreground">Overall Score</p>
                      <Progress value={testResults.overall} className="mt-2" />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-3">
                      <div className="text-center p-3 bg-secondary/30 rounded-lg">
                        <Brain className="h-4 w-4 mx-auto mb-1 text-ai-detect" />
                        <div className="text-sm font-medium">{testResults.aiDetection.score}%</div>
                        <div className="text-xs text-muted-foreground">AI Detection</div>
                      </div>
                      <div className="text-center p-3 bg-secondary/30 rounded-lg">
                        <Copy className="h-4 w-4 mx-auto mb-1 text-plagiarism" />
                        <div className="text-sm font-medium">{testResults.plagiarism.score}%</div>
                        <div className="text-xs text-muted-foreground">Plagiarism</div>
                      </div>
                      <div className="text-center p-3 bg-secondary/30 rounded-lg">
                        <CheckCircle className="h-4 w-4 mx-auto mb-1 text-success" />
                        <div className="text-sm font-medium">{testResults.grammar.score}%</div>
                        <div className="text-xs text-muted-foreground">Grammar</div>
                      </div>
                      <div className="text-center p-3 bg-secondary/30 rounded-lg">
                        <Zap className="h-4 w-4 mx-auto mb-1 text-primary" />
                        <div className="text-sm font-medium">{testResults.format.score}%</div>
                        <div className="text-xs text-muted-foreground">Format</div>
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="flex-1" onClick={downloadResults}>
                        <Download className="h-3 w-3 mr-1" />
                        Export
                      </Button>
                      <Button variant="outline" size="sm" className="flex-1">
                        <Save className="h-3 w-3 mr-1" />
                        Save
                      </Button>
                    </div>
                  </div>
                )}
              </Card>
            </div>
          </TabsContent>

          {/* API Testing Tab */}
          <TabsContent value="apis" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4">API Endpoints</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <div className="font-medium text-sm">AI Detection API</div>
                      <div className="text-xs text-muted-foreground">/api/ai-detect</div>
                    </div>
                    <Badge variant="default">Active</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <div className="font-medium text-sm">Plagiarism API</div>
                      <div className="text-xs text-muted-foreground">/api/plagiarism</div>
                    </div>
                    <Badge variant="default">Active</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <div className="font-medium text-sm">Grammar API</div>
                      <div className="text-xs text-muted-foreground">/api/grammar</div>
                    </div>
                    <Badge variant="secondary">Testing</Badge>
                  </div>
                </div>
              </Card>
              
              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4">Performance Metrics</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Response Time</span>
                      <span>2.3s avg</span>
                    </div>
                    <Progress value={77} />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Success Rate</span>
                      <span>98.5%</span>
                    </div>
                    <Progress value={98} />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Accuracy</span>
                      <span>94.2%</span>
                    </div>
                    <Progress value={94} />
                  </div>
                </div>
              </Card>
            </div>
          </TabsContent>

          {/* Configuration Tab */}
          <TabsContent value="config" className="space-y-6">
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <Settings className="h-5 w-5 mr-2" />
                System Configuration
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium">AI Detection Threshold</label>
                    <Input type="number" placeholder="85" />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Plagiarism Sensitivity</label>
                    <Input type="number" placeholder="75" />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Grammar Check Level</label>
                    <Input placeholder="Standard" />
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium">Format Standard</label>
                    <Input placeholder="USPTO" />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Max File Size (MB)</label>
                    <Input type="number" placeholder="10" />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Supported Formats</label>
                    <Input placeholder="PDF, DOC, DOCX, TXT" />
                  </div>
                </div>
              </div>
              <div className="flex justify-end mt-6">
                <Button variant="hero">
                  <Save className="h-4 w-4 mr-2" />
                  Save Configuration
                </Button>
              </div>
            </Card>
          </TabsContent>

          {/* Analytics Tab */}
          <TabsContent value="analytics" className="space-y-6">
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="p-6 text-center">
                <div className="text-2xl font-bold text-primary mb-1">1,247</div>
                <div className="text-sm text-muted-foreground">Total Tests Run</div>
              </Card>
              <Card className="p-6 text-center">
                <div className="text-2xl font-bold text-success mb-1">94.3%</div>
                <div className="text-sm text-muted-foreground">Average Accuracy</div>
              </Card>
              <Card className="p-6 text-center">
                <div className="text-2xl font-bold text-ai-detect mb-1">2.1s</div>
                <div className="text-sm text-muted-foreground">Avg Response Time</div>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default DeveloperDashboard;