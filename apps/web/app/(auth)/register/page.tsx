import { Metadata } from "next";

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
      <div className="flex justify-center items-center h-[90vh] sm:h-screen">
        <div className="max-w-md w-full px-4 sm:px-0">
          <RegisterAuthForm />
        </div>
      </div>
    </>
  );
}
