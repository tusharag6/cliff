"use client";

import * as React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { cn } from "@repo/ui/lib/utils";
import { Button } from "@repo/ui/components/ui/button";
import { Input } from "@repo/ui/components/ui/input";
import { SignUpSchema, SignUpType } from "@repo/types";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@repo/ui/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@repo/ui/components/ui/select";

interface RegisterAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export function RegisterAuthForm({
  className,
  ...props
}: RegisterAuthFormProps) {
  const defaultValues: Partial<SignUpType> = {};

  const form = useForm<SignUpType>({
    resolver: zodResolver(SignUpSchema),
    defaultValues,
  });

  async function onSubmit(values: SignUpType) {
    console.log(values);
  }

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="userName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="Name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="Email" type="email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="sic"
            render={({ field }) => (
              <FormItem>
                <FormLabel>SIC Number</FormLabel>
                <FormControl>
                  <Input placeholder="SIC Number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="branch"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Branch</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your Branch" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="cse">
                      Computer Science Engineering
                    </SelectItem>
                    <SelectItem value="cst">
                      Computer Science and Technology
                    </SelectItem>
                    <SelectItem value="cen">Computer Engineering</SelectItem>
                    <SelectItem value="ece">
                      Electronics and Communication Engineering
                    </SelectItem>
                    <SelectItem value="eee">
                      Electrical and Electronics Engineering
                    </SelectItem>
                    <SelectItem value="eie">
                      Electronics and Instrumentation Engineering
                    </SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="year"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Year</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your year" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="first">First Year</SelectItem>
                    <SelectItem value="second">Second Year</SelectItem>
                    <SelectItem value="third">Third Year</SelectItem>
                    <SelectItem value="fourth">Fourth Year</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input placeholder="Password" type="password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Sign Up</Button>
        </form>
      </Form>
    </div>
  );
}
