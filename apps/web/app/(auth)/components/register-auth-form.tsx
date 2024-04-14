"use client";

import * as React from "react";
import { motion } from "framer-motion";
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
import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@repo/ui/components/ui/card";
import Link from "next/link";
import toast from "react-hot-toast";
import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "@repo/firebase-config/client";

const steps = [
  {
    id: "Step 1",
    name: "Personal Information",
    fields: ["userName", "email", "phoneNumber", "avatar"],
  },
  {
    id: "Step 2",
    name: "Academic Information",
    fields: ["sic", "branch", "year", "password"],
  },
];

interface RegisterAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export function RegisterAuthForm({
  className,
  ...props
}: RegisterAuthFormProps) {
  const [previousStep, setPreviousStep] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const delta = currentStep - previousStep;

  const form = useForm<SignUpType>({
    resolver: zodResolver(SignUpSchema),
    defaultValues: {
      userName: "",
      email: "",
      sic: "",
      branch: "",
      password: "",
      year: "",
      phoneNumber: "",
    },
  });

  async function onSubmit(values: SignUpType) {
    console.log(values);
    try {
      const res = await createUserWithEmailAndPassword(
        auth,
        values.email,
        values.password,
      );
      if (res.user) {
        toast.success("Account created successfully");
      }
    } catch (error) {
      console.log("Error during registration", error);
      toast.error("Some Error Occured, please try again!");
    }
    setPreviousStep(0);
    setCurrentStep(0);
    form.reset();
  }

  type FieldName = keyof SignUpType;

  const next = async () => {
    const step = steps[currentStep];
    const fields = step?.fields;

    if (!fields) {
      throw new Error(`Fields are undefined for step ${currentStep}`);
    }
    const output = await form.trigger(fields as FieldName[], {
      shouldFocus: true,
    });

    if (!output) return;

    if (currentStep < steps.length - 1) {
      setPreviousStep(currentStep);
      setCurrentStep((step) => step + 1);
    }
  };

  const prev = () => {
    if (currentStep > 0) {
      setPreviousStep(currentStep);
      setCurrentStep((step) => step - 1);
    }
  };

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="">
          <Card className="mx-auto">
            <CardHeader>
              <CardTitle className="text-xl">Sign Up</CardTitle>
              <CardDescription>
                Enter your information to create an account
              </CardDescription>
            </CardHeader>
            {currentStep === 0 && (
              <CardContent>
                <motion.div
                  initial={{ x: delta >= 0 ? "50%" : "-50%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="grid gap-2"
                >
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
                    name="phoneNumber"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone Number</FormLabel>
                        <FormControl>
                          <Input placeholder="Phone Number" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="avatar"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Avatar</FormLabel>
                        <FormControl>
                          <Input type="file" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button className="w-full mt-2" onClick={next}>
                    Next
                  </Button>
                </motion.div>
                <div className="mt-4 text-center text-sm">
                  Already have an account?{" "}
                  <Link href="/login" className="underline">
                    Sign in
                  </Link>
                </div>
              </CardContent>
            )}

            {currentStep === 1 && (
              <CardContent>
                <motion.div
                  initial={{ x: delta >= 0 ? "50%" : "-50%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="grid gap-2"
                >
                  {" "}
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
                  <div className="grid grid-cols-2 gap-4 mt-1">
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
                              <SelectItem value="cen">
                                Computer Engineering
                              </SelectItem>
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
                              <SelectItem value="second">
                                Second Year
                              </SelectItem>
                              <SelectItem value="third">Third Year</SelectItem>
                              <SelectItem value="fourth">
                                Fourth Year
                              </SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Password</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Password"
                            type="password"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className="grid grid-cols-2 gap-4 mt-2">
                    <Button variant="outline" className="w-full" onClick={prev}>
                      Previous
                    </Button>
                    <Button
                      type="submit"
                      className="w-full"
                      disabled={form.formState.isSubmitting}
                    >
                      Create an account
                    </Button>
                  </div>
                </motion.div>
                <div className="mt-4 text-center text-sm">
                  Already have an account?{" "}
                  <Link href="/login" className="underline">
                    Sign in
                  </Link>
                </div>
              </CardContent>
            )}
          </Card>
        </form>
      </Form>
    </div>
  );
}
