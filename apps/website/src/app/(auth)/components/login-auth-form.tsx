"use client";

import * as React from "react";

import { cn } from "@/lib/utils";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { auth } from "@/firebase/config";
import toast from "react-hot-toast";
import type { AuthError } from "firebase/auth";

interface LoginAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export function LoginAuthForm({ className, ...props }: LoginAuthFormProps) {
  const [isLoadingEmail, setIsLoadingEmail] = React.useState<boolean>(false);
  const [isLoadingGoogle, setIsLoadingGoogle] = React.useState<boolean>(false);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  async function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault();
    setIsLoadingEmail(true);

    try {
      const res = await signInWithEmailAndPassword(auth, email, password);
      setEmail("");
      setPassword("");
      if (res.user) {
        toast.success("Login Sucessfully!");
      }
    } catch (error) {
      const authError = error as AuthError;
      if (authError.code === "auth/invalid-credential") {
        toast.error("Invalid Credentials! Please try again.");
      } else if (authError.code === "auth/user-not-found") {
        toast("You are not registered yet! Please register first.", {
          icon: "🚫",
        });
      } else {
        toast.error("Some Error Occured, please try again!");
      }
    }
    setIsLoadingEmail(false);
  }

  async function signInWithGoogle() {
    setIsLoadingGoogle(true);
    try {
      const provider = new GoogleAuthProvider();
      const res = await signInWithPopup(auth, provider);
      if (res.user) {
        toast.success("Login Sucessfully!");
      }
    } catch (error) {
      const authError = error as AuthError;
      if (authError.code === "auth/invalid-credential") {
        toast.error("Invalid Credentials! Please try again.");
      } else if (authError.code === "auth/user-not-found") {
        toast("You are not registered yet! Please register first.", {
          icon: "🚫",
        });
      } else {
        toast.error("Some Error Occured, please try again!");
      }
    }
    setIsLoadingGoogle(false);
  }

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <form onSubmit={onSubmit}>
        <div className="grid gap-2">
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="email">
              Email
            </Label>
            <Input
              id="email"
              placeholder="Enter your email address"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              disabled={isLoadingEmail || isLoadingGoogle}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="password">
              Password
            </Label>
            <Input
              id="password"
              placeholder="Enter your password"
              type="password"
              autoCapitalize="none"
              autoComplete="password"
              autoCorrect="off"
              disabled={isLoadingEmail || isLoadingGoogle}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <Button disabled={isLoadingEmail || isLoadingGoogle}>
            {isLoadingEmail && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )}
            Login
          </Button>
        </div>
      </form>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
      </div>
      <Button
        variant="outline"
        type="button"
        disabled={isLoadingGoogle || isLoadingEmail}
        onClick={signInWithGoogle}
      >
        {isLoadingGoogle ? (
          <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <Icons.google className="mr-2 h-4 w-4" />
        )}{" "}
        Google
      </Button>
    </div>
  );
}
