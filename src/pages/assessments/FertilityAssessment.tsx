
import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useForm } from "react-hook-form";
import { useToast } from "@/hooks/use-toast";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

type FormData = {
  trackingMethod: string;
  ovulationSigns: string;
  tryingToConceive: string;
  cycleAwareness: string;
};

const FertilityAssessment = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const form = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log("Fertility assessment data:", data);
    
    toast({
      title: "Assessment Submitted",
      description: "Your fertility awareness assessment has been recorded.",
    });
    
    navigate("/assessment");
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-center">Fertility Awareness Assessment</h1>
      </div>

      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>Understanding Your Fertility Window</CardTitle>
          <CardDescription>
            Learn about your fertility patterns and ovulation signs
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="trackingMethod"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>How do you currently track your fertile window?</FormLabel>
                    <Select 
                      onValueChange={field.onChange} 
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select tracking method" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="app">Period tracking app</SelectItem>
                        <SelectItem value="bbt">Basal body temperature</SelectItem>
                        <SelectItem value="cm">Cervical mucus observations</SelectItem>
                        <SelectItem value="opk">Ovulation prediction kits</SelectItem>
                        <SelectItem value="none">I don't track my fertile window</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="ovulationSigns"
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <FormLabel>Do you notice signs of ovulation?</FormLabel>
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
                            Yes, clearly (mittelschmerz, cervical mucus changes)
                          </FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="sometimes" />
                          </FormControl>
                          <FormLabel className="font-normal">
                            Sometimes notice subtle signs
                          </FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="no" />
                          </FormControl>
                          <FormLabel className="font-normal">
                            No, don't notice any signs
                          </FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="unsure" />
                          </FormControl>
                          <FormLabel className="font-normal">
                            Not sure what signs to look for
                          </FormLabel>
                        </FormItem>
                      </RadioGroup>
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="tryingToConceive"
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <FormLabel>Are you currently trying to conceive?</FormLabel>
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
                            Yes, actively trying
                          </FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="planning" />
                          </FormControl>
                          <FormLabel className="font-normal">
                            Planning to in the near future
                          </FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="no" />
                          </FormControl>
                          <FormLabel className="font-normal">
                            No, using this for cycle awareness only
                          </FormLabel>
                        </FormItem>
                      </RadioGroup>
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="cycleAwareness"
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <FormLabel>How would you rate your understanding of your fertility cycle?</FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="flex flex-col space-y-1"
                      >
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="expert" />
                          </FormControl>
                          <FormLabel className="font-normal">
                            Very knowledgeable - I understand my cycle completely
                          </FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="good" />
                          </FormControl>
                          <FormLabel className="font-normal">
                            Good understanding - I know the basics
                          </FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="limited" />
                          </FormControl>
                          <FormLabel className="font-normal">
                            Limited knowledge - want to learn more
                          </FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="beginner" />
                          </FormControl>
                          <FormLabel className="font-normal">
                            Complete beginner - need guidance
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

export default FertilityAssessment;
