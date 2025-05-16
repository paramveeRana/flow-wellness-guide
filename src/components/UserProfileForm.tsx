
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  height: z.coerce
    .number()
    .min(100, { message: "Height must be at least 100 cm" })
    .max(250, { message: "Height must be less than 250 cm" }),
  weight: z.coerce
    .number()
    .min(30, { message: "Weight must be at least 30 kg" })
    .max(300, { message: "Weight must be less than 300 kg" }),
});

type UserFormData = z.infer<typeof formSchema>;

interface UserProfileFormProps {
  onSave: (data: UserFormData) => void;
  initialData?: UserFormData;
}

const UserProfileForm: React.FC<UserProfileFormProps> = ({ onSave, initialData }) => {
  const form = useForm<UserFormData>({
    resolver: zodResolver(formSchema),
    defaultValues: initialData || {
      name: "",
      height: undefined,
      weight: undefined,
    },
  });

  const onSubmit = (data: UserFormData) => {
    onSave(data);
    toast({
      title: "Profile saved",
      description: "Your profile information has been saved successfully.",
    });
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-center">Your Profile</h2>
        <p className="text-muted-foreground text-center">
          Please enter your information to personalize your experience
        </p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="height"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Height (cm)</FormLabel>
                <FormControl>
                  <Input 
                    type="number" 
                    placeholder="Enter your height in cm" 
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="weight"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Weight (kg)</FormLabel>
                <FormControl>
                  <Input 
                    type="number" 
                    placeholder="Enter your weight in kg" 
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full">Save Profile</Button>
        </form>
      </Form>
    </div>
  );
};

export default UserProfileForm;
