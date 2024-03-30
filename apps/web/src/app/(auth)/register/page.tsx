import { Metadata } from "next";
import Link from "next/link";

import { RegisterAuthForm } from "../components/register-auth-form";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "Register to Cliff",
  description:
    "Register to your Cliff account to access your dashboard and more",
};

export default function RegisterPage() {
  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <div className="container h-[100vh] flex justify-center content-center ">
        <div className="lg:p-8 flex">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight">
                Register to your account
              </h1>
              <p className="text-sm text-muted-foreground">
                Enter your details below to register your account
              </p>
            </div>
            <RegisterAuthForm />
            <p className="px-8 text-center text-sm text-muted-foreground">
              Already have an account,{" "}
              <Link
                href="/login"
                className="underline underline-offset-4 hover:text-primary"
              >
                Login
              </Link>{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
