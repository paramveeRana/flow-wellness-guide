
import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useForm } from "react-hook-form";
import { useToast } from "@/hooks/use-toast";

type FormData = {
  moodSwings: string;
  skinIssues: string;
  hairLoss: string;
  weightChanges: string;
};

const HormonalAssessment = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const form = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log("Hormonal assessment data:", data);
    
    toast({
      title: "Assessment Submitted",
      description: "Your hormonal health assessment has been recorded.",
    });
    
    navigate("/assessment");
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-center">Hormonal Health Assessment</h1>
      </div>

      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>Answer questions about your hormonal balance</CardTitle>
          <CardDescription>
            This helps us identify any potential hormonal imbalances
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="moodSwings"
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <FormLabel>Do you experience mood swings related to your cycle?</FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="flex flex-col space-y-1"
                      >
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="rarely" />
                          </FormControl>
                          <FormLabel className="font-normal">
                            Rarely or never
                          </FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="sometimes" />
                          </FormControl>
                          <FormLabel className="font-normal">
                            Sometimes, but manageable
                          </FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="frequently" />
                          </FormControl>
                          <FormLabel className="font-normal">
                            Frequently and significant
                          </FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="severe" />
                          </FormControl>
                          <FormLabel className="font-normal">
                            Severe mood changes that affect daily life
                          </FormLabel>
                        </FormItem>
                      </RadioGroup>
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="skinIssues"
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <FormLabel>Do you experience skin issues related to your cycle?</FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="flex flex-col space-y-1"
                      >
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="no" />
                          </FormControl>
                          <FormLabel className="font-normal">
                            No skin changes
                          </FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="mild" />
                          </FormControl>
                          <FormLabel className="font-normal">
                            Mild acne before period
                          </FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="moderate" />
                          </FormControl>
                          <FormLabel className="font-normal">
                            Moderate acne throughout cycle
                          </FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="severe" />
                          </FormControl>
                          <FormLabel className="font-normal">
                            Severe acne or other skin issues
                          </FormLabel>
                        </FormItem>
                      </RadioGroup>
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="hairLoss"
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <FormLabel>Have you experienced hair loss or thinning?</FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="flex flex-col space-y-1"
                      >
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="no" />
                          </FormControl>
                          <FormLabel className="font-normal">
                            No hair loss
                          </FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="mild" />
                          </FormControl>
                          <FormLabel className="font-normal">
                            Slight thinning
                          </FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="noticeable" />
                          </FormControl>
                          <FormLabel className="font-normal">
                            Noticeable hair loss
                          </FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="significant" />
                          </FormControl>
                          <FormLabel className="font-normal">
                            Significant hair loss or bald patches
                          </FormLabel>
                        </FormItem>
                      </RadioGroup>
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="weightChanges"
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <FormLabel>Have you experienced unexplained weight changes?</FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="flex flex-col space-y-1"
                      >
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="no" />
                          </FormControl>
                          <FormLabel className="font-normal">
                            No unexplained weight changes
                          </FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="slight" />
                          </FormControl>
                          <FormLabel className="font-normal">
                            Slight fluctuations (2-5 lbs)
                          </FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="moderate" />
                          </FormControl>
                          <FormLabel className="font-normal">
                            Moderate weight gain (5-10 lbs)
                          </FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="significant" />
                          </FormControl>
                          <FormLabel className="font-normal">
                            Significant weight gain (10+ lbs)
                          </FormLabel>
                        </FormItem>
                      </RadioGroup>
                    </FormControl>
                  </FormItem>
                )}
              />
              
              <div className="flex justify-between">
                <Button 
                  type="button" 
                  variant="outline" 
                  onClick={() => navigate("/assessment")}
                >
                  Back
                </Button>
                <Button type="submit">Submit Assessment</Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};

export default HormonalAssessment;
