
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { format, addDays } from "date-fns";
import { CalendarIcon } from "lucide-react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const formSchema = z.object({
  lastPeriodStart: z.date({
    required_error: "Please select the start date of your last period",
  }),
  cycleLength: z.coerce
    .number()
    .int()
    .min(21, { message: "Cycle length must be at least 21 days" })
    .max(45, { message: "Cycle length must be less than 45 days" })
    .default(28),
  periodLength: z.coerce
    .number()
    .int()
    .min(2, { message: "Period length must be at least 2 days" })
    .max(10, { message: "Period length must be less than 10 days" })
    .default(5),
});

type CycleFormData = z.infer<typeof formSchema>;

interface CyclePrediction {
  nextPeriodStart: Date;
  nextPeriodEnd: Date;
  fertileWindowStart: Date;
  fertileWindowEnd: Date;
}

const CycleTracker: React.FC = () => {
  const [prediction, setPrediction] = useState<CyclePrediction | null>(null);

  const form = useForm<CycleFormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      cycleLength: 28,
      periodLength: 5,
    },
  });

  const onSubmit = (data: CycleFormData) => {
    // Calculate the next period start date
    const nextPeriodStart = addDays(data.lastPeriodStart, data.cycleLength);
    const nextPeriodEnd = addDays(nextPeriodStart, data.periodLength - 1);
    
    // Calculate fertile window (typically 12-16 days before next period)
    const fertileWindowEnd = addDays(nextPeriodStart, -12);
    const fertileWindowStart = addDays(nextPeriodStart, -16);

    setPrediction({
      nextPeriodStart,
      nextPeriodEnd,
      fertileWindowStart,
      fertileWindowEnd,
    });
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-center">Menstrual Cycle Tracker</h2>
        <p className="text-muted-foreground text-center">
          Enter your cycle information to get predictions for next month
        </p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="lastPeriodStart"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Last Period Start Date</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant="outline"
                        className={cn(
                          "w-full pl-3 text-left font-normal",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        {field.value ? (
                          format(field.value, "PPP")
                        ) : (
                          <span>Pick a date</span>
                        )}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      disabled={(date) => date > new Date()}
                      initialFocus
                      className="pointer-events-auto"
                    />
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="cycleLength"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Average Cycle Length (days)</FormLabel>
                <FormControl>
                  <select
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    {...field}
                  >
                    {[...Array(25)].map((_, i) => (
                      <option key={i} value={i + 21}>
                        {i + 21} days
                      </option>
                    ))}
                  </select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="periodLength"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Average Period Length (days)</FormLabel>
                <FormControl>
                  <select
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    {...field}
                  >
                    {[...Array(9)].map((_, i) => (
                      <option key={i} value={i + 2}>
                        {i + 2} days
                      </option>
                    ))}
                  </select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full">Calculate Next Period</Button>
        </form>
      </Form>

      {prediction && (
        <div className="mt-8 space-y-4">
          <Alert>
            <AlertTitle className="text-primary">Next Period</AlertTitle>
            <AlertDescription>
              Your next period is likely to start on{" "}
              <strong>{format(prediction.nextPeriodStart, "PPP")}</strong> and end on{" "}
              <strong>{format(prediction.nextPeriodEnd, "PPP")}</strong>.
            </AlertDescription>
          </Alert>

          <Alert>
            <AlertTitle className="text-primary">Fertile Window</AlertTitle>
            <AlertDescription>
              Your fertile window is likely to be from{" "}
              <strong>{format(prediction.fertileWindowStart, "PPP")}</strong> to{" "}
              <strong>{format(prediction.fertileWindowEnd, "PPP")}</strong>.
            </AlertDescription>
          </Alert>
        </div>
      )}
    </div>
  );
};

export default CycleTracker;
