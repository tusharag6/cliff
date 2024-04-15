"use server";

import { SignInSchema, SignUpSchema } from "@repo/types";

export type FormState = {
  message: string;
  fields?: Record<string, string>;
  issues?: string[];
};

export async function registerUserAction(
  prevState: FormState,
  data: FormData,
): Promise<FormState> {
  const formData = Object.fromEntries(data);
  delete formData.avatar; // TODO: add avatar to storage and then url to formData

  const parsed = SignUpSchema.safeParse(formData);
  console.log(parsed);

  if (!parsed.success) {
    const fields: Record<string, string> = {};
    for (const key of Object.keys(formData)) {
      fields[key] = formData[key].toString();
    }
    return {
      message: "Invalid form data",
      fields,
      issues: parsed.error.issues.map((issue) => issue.message),
    };
  }

  /**
   * Check for server side validation
   * If this returns then server side validation occured
   */

  // if (parsed.data.email.includes("a")) {
  //   return {
  //     message: "Invalid email",
  //     fields: parsed.data,
  //   };
  // }

  return { message: "User registered successfully" };
}

export async function loginUserAction(
  prevState: FormState,
  data: FormData,
): Promise<FormState> {
  const formData = Object.fromEntries(data);
  delete formData.avatar; // TODO: add avatar to storage and then url to formData

  const parsed = SignInSchema.safeParse(formData);
  console.log(parsed);

  if (!parsed.success) {
    const fields: Record<string, string> = {};
    for (const key of Object.keys(formData)) {
      fields[key] = formData[key].toString();
    }
    return {
      message: "Invalid form data",
      fields,
      issues: parsed.error.issues.map((issue) => issue.message),
    };
  }

  /**
   * Check for server side validation
   * If this returns then server side validation occured
   */

  // if (parsed.data.email.includes("a")) {
  //   return {
  //     message: "Invalid email",
  //     fields: parsed.data,
  //   };
  // }

  return { message: "Logged in successfully" };
}
