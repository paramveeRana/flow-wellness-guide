
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useForm } from "react-hook-form";
import { useToast } from "@/hooks/use-toast";
import { Calendar } from "lucide-react";

type FormData = {
  cycleLength: string;
  periodLength: string;
  regularCycle: string;
  symptoms: string;
};

const CycleAssessment = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const form = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log("Cycle assessment data:", data);
    
    toast({
      title: "Assessment Submitted",
      description: "Your cycle health assessment has been recorded.",
    });
    
    navigate("/assessment");
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="mb-8 flex items-center gap-3 justify-center">
        <Calendar className="text-primary h-8 w-8" />
        <h1 className="text-3xl font-bold text-center">Cycle Health Assessment</h1>
      </div>

      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>Answer a few questions about your cycle</CardTitle>
          <CardDescription>
            This helps us understand your menstrual health patterns
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="cycleLength"
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <FormLabel>What is your typical cycle length?</FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="flex flex-col space-y-1"
                      >
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="short" />
                          </FormControl>
                          <FormLabel className="font-normal">
                            Less than 21 days
                          </FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="normal" />
                          </FormControl>
                          <FormLabel className="font-normal">
                            21-35 days
                          </FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="long" />
                          </FormControl>
                          <FormLabel className="font-normal">
                            More than 35 days
                          </FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="irregular" />
                          </FormControl>
                          <FormLabel className="font-normal">
                            Highly variable/irregular
                          </FormLabel>
                        </FormItem>
                      </RadioGroup>
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="periodLength"
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <FormLabel>How long does your period typically last?</FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="flex flex-col space-y-1"
                      >
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="short" />
                          </FormControl>
                          <FormLabel className="font-normal">
                            1-2 days
                          </FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="normal" />
                          </FormControl>
                          <FormLabel className="font-normal">
                            3-7 days
                          </FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="long" />
                          </FormControl>
                          <FormLabel className="font-normal">
                            More than 7 days
                          </FormLabel>
                        </FormItem>
                      </RadioGroup>
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="regularCycle"
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <FormLabel>Do you have a regular menstrual cycle?</FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="flex flex-col space-y-1"
                      >
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="yes" />
                          </FormControl>
                          <FormLabel className="font-normal">
                            Yes, very predictable
                          </FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="mostly" />
                          </FormControl>
                          <FormLabel className="font-normal">
                            Mostly regular with some variation
                          </FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="no" />
                          </FormControl>
                          <FormLabel className="font-normal">
                            No, very irregular
                          </FormLabel>
                        </FormItem>
                      </RadioGroup>
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="symptoms"
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <FormLabel>Do you experience severe symptoms during your period?</FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="flex flex-col space-y-1"
                      >
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="mild" />
                          </FormControl>
                          <FormLabel className="font-normal">
                            Mild or no symptoms
                          </FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="moderate" />
                          </FormControl>
                          <FormLabel className="font-normal">
                            Moderate symptoms (manageable pain, mood changes)
                          </FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="severe" />
                          </FormControl>
                          <FormLabel className="font-normal">
                            Severe symptoms (debilitating pain, heavy bleeding)
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

export default CycleAssessment;
