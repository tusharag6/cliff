"use client";
import { Input } from "@repo/ui/components/ui/input";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { WinnerDeclareFormType, WinnerDeclareFormSchema } from "@repo/types";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@repo/ui/components/ui/form";

const WinnerDeclareForm = () => {
  const defaultValues: Partial<WinnerDeclareFormType> = {};

  const form = useForm<WinnerDeclareFormType>({
    resolver: zodResolver(WinnerDeclareFormSchema),
    defaultValues,
  });

  function onSubmit(data: WinnerDeclareFormType) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(data);
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="firstRankSIC"
          render={({ field }) => (
            <FormItem>
              <FormLabel>First Rank Winner's SIC</FormLabel>
              <FormControl>
                <Input placeholder="Enter the SIC" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="secondRankSIC"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Second Rank Winner's SIC</FormLabel>
              <FormControl>
                <Input placeholder="Enter the SIC" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="thirdRankSIC"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Third Rank Winner's SIC</FormLabel>
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
