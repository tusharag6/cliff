"use client";
import { Input } from "@repo/ui/components/ui/input";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  HonorableMentionFormSchema,
  HonorableMentionFormType,
} from "@repo/types";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@repo/ui/components/ui/form";

const WinnerDeclareForm = () => {
  const defaultValues: Partial<HonorableMentionFormType> = {};

  const form = useForm<HonorableMentionFormType>({
    resolver: zodResolver(HonorableMentionFormSchema),
    defaultValues,
  });

  function onSubmit(data: HonorableMentionFormType) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(data);
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="firstMentionSIC"
          render={({ field }) => (
            <FormItem>
              <FormLabel>First Mentions's SIC</FormLabel>
              <FormControl>
                <Input placeholder="Enter the SIC" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="secondMentionSIC"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Second Mentions's SIC</FormLabel>
              <FormControl>
                <Input placeholder="Enter the SIC" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="thirdMentionSIC"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Third Mentions's SIC</FormLabel>
              <FormControl>
                <Input placeholder="Enter the SIC" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
};

export default WinnerDeclareForm;
