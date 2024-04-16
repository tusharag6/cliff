"use client";

import * as React from "react";

import { cn } from "@repo/ui/lib/utils";
import { Button } from "@repo/ui/components/ui/button";
import { Input } from "@repo/ui/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@repo/ui/components/ui/card";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignInSchema, SignInType } from "@repo/types";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@repo/ui/components/ui/form";
import toast from "react-hot-toast";
import { useEffect, useRef } from "react";
import { loginUserAction } from "../actions";
import { useFormState } from "react-dom";

interface LoginAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export function LoginAuthForm({ className, ...props }: LoginAuthFormProps) {
  const [state, formAction] = useFormState(loginUserAction, {
    message: "",
  });

  const form = useForm<SignInType>({
    resolver: zodResolver(SignInSchema),
    defaultValues: {
      email: "",
      password: "",
      ...(state?.fields ?? {}),
    },
  });

  useEffect(() => {
    if (state?.message !== "" && !state.issues) {
      if (state.message === "Logged in successfully") {
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
          <Card className="mx-auto max-w-sm">
            <CardHeader>
              <CardTitle className="text-2xl">Login</CardTitle>
              <CardDescription>
                Enter your email below to login to your account
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
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
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <div className="flex items-center">
                        <FormLabel>Password</FormLabel>
                        <Link
                          href="#"
                          className="ml-auto inline-block text-sm underline"
                        >
                          Forgot your password?
                        </Link>
                      </div>
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
              </div>
              <Button
                type="submit"
                className="w-full mt-4"
                disabled={form.formState.isSubmitting}
              >
                Login
              </Button>
              <div className="mt-4 text-center text-sm">
                Don&apos;t have an account?{" "}
                <Link href="/register" className="underline">
                  Sign up
                </Link>
              </div>
            </CardContent>
          </Card>
        </form>
      </Form>
    </div>
  );
}
