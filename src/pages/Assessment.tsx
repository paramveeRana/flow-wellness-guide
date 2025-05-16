
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const Assessment = () => {
  const navigate = useNavigate();

  const handleStartAssessment = (type: string) => {
    navigate(`/assessment/${type}`);
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-center">Health Assessment</h1>
        <p className="text-center text-muted-foreground mt-2">
          Complete these assessments to get personalized insights
        </p>
      </div>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Cycle Health</CardTitle>
            <CardDescription>
              Assess your menstrual cycle patterns and symptoms
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              This assessment helps identify irregular cycles, concerning symptoms, 
              and provides personalized recommendations.
            </p>
          </CardContent>
          <CardFooter>
            <Button 
              className="w-full" 
              onClick={() => handleStartAssessment('cycle')}
            >
              Start Assessment
            </Button>
          </CardFooter>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Hormonal Health</CardTitle>
            <CardDescription>
              Understand your hormonal balance and its effects
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              This assessment evaluates signs of hormonal imbalance 
              and suggests lifestyle changes that may help.
            </p>
          </CardContent>
          <CardFooter>
            <Button 
              className="w-full"
              onClick={() => handleStartAssessment('hormonal')}
            >
              Start Assessment
            </Button>
          </CardFooter>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Fertility Awareness</CardTitle>
            <CardDescription>
              Learn about your fertility window and ovulation
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              This assessment helps you understand your fertile days 
              and track signs of ovulation for family planning.
            </p>
          </CardContent>
          <CardFooter>
            <Button 
              className="w-full"
              onClick={() => handleStartAssessment('fertility')}
            >
              Start Assessment
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Assessment;
