import { Metadata } from "next";

import { LoginAuthForm } from "../components/login-auth-form";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "Login to Cliff",
  description: "Login to your Cliff account to access your dashboard and more",
};

export default function LoginPage() {
  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <div className="flex justify-center items-center h-[90vh] sm:h-screen">
        <div className="max-w-md w-full px-4 sm:px-0">
          <LoginAuthForm />
        </div>
      </div>
    </>
  );
}
