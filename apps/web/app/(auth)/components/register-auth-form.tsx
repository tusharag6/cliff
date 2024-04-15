"use client";

import * as React from "react";
import { useEffect, useRef } from "react";
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
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@repo/ui/components/ui/card";
import Link from "next/link";
import toast from "react-hot-toast";
import { registerUserAction } from "../actions";
import { useFormState } from "react-dom";

interface RegisterAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export function RegisterAuthForm({
  className,
  ...props
}: RegisterAuthFormProps) {
  const [state, formAction] = useFormState(registerUserAction, {
    message: "",
  });

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
      ...(state?.fields ?? {}),
    },
  });

  // async function onSubmit(values: SignUpType) {
  //   console.log(values);
  //   try {
  //     const res = await createUserWithEmailAndPassword(
  //       auth,
  //       values.email,
  //       values.password,
  //     );
  //     if (res.user) {
  //       toast.success("Account created successfully");
  //     }
  //   } catch (error) {
  //     console.log("Error during registration", error);
  //     toast.error("Some Error Occured, please try again!");
  //   }
  //   setPreviousStep(0);
  //   setCurrentStep(0);
  //   form.reset();
  // }

  useEffect(() => {
    if (state?.message !== "" && !state.issues) {
      if (state.message === "User registered successfully") {
        toast.success(state.message);
        form.reset();
      } else toast.error(state.message);
    }
  }, [state]);

  const formRef = useRef<HTMLFormElement>(null);

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <Form {...form}>
        {state?.issues && (
          <div className="text-red-500">
            <li className="flex gap-1">{state.issues[0]}</li>
          </div>
        )}
        <form
          ref={formRef}
          action={formAction}
          onSubmit={(evt) => {
            evt.preventDefault();
            form.handleSubmit(() => {
              formAction(new FormData(formRef.current!));
            })(evt);
          }}
        >
          <Card className="mx-auto">
            <CardHeader>
              <CardTitle className="text-xl">Sign Up</CardTitle>
              <CardDescription>
                Enter your information to create an account
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-3">
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
              <div className="grid grid-cols-2 gap-4 mt-1">
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
              </div>
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
                        {...field}
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
                        {...field}
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
              <Button
                type="submit"
                className="w-full mt-3"
                disabled={form.formState.isSubmitting}
              >
                Create an account
              </Button>
              <div className="mt-3 text-center text-sm">
                Already have an account?{" "}
                <Link href="/login" className="underline">
                  Sign in
                </Link>
              </div>
            </CardContent>
          </Card>
        </form>
      </Form>
    </div>
  );
}
