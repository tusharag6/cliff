"use server";

import { SignInSchema, SignUpSchema } from "@repo/types";
import {
  AuthError,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth, db } from "./firebase";
import { addDoc, collection } from "firebase/firestore";

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
      // @ts-ignore
      fields[key] = formData[key].toString();
    }
    return {
      message: "Invalid form data",
      fields,
      issues: parsed.error.issues.map((issue) => issue.message),
    };
  }

  try {
    await createUserWithEmailAndPassword(
      auth,
      parsed.data.email,
      parsed.data.password,
    );
    try {
      const docRef = await addDoc(collection(db, "users"), {
        email: parsed.data.email,
        name: parsed.data.userName,
        sic: parsed.data.sic,
        branch: parsed.data.branch,
        year: parsed.data.year,
        phoneNumber: parsed.data.phoneNumber,
        role: parsed.data.role,
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  } catch (error) {
    const authError = error as AuthError;
    if (authError.code === "auth/email-already-in-use") {
      return {
        message: "Email is already in use! Please try another email.",
      };
    }
    return {
      message: "Some Error Occured, please try again!",
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
      // @ts-ignore
      fields[key] = formData[key].toString();
    }
    return {
      message: "Invalid form data",
      fields,
      issues: parsed.error.issues.map((issue) => issue.message),
    };
  }

  try {
    await signInWithEmailAndPassword(
      auth,
      parsed.data.email,
      parsed.data.password,
    );
  } catch (error) {
    const authError = error as AuthError;
    if (authError.code === "auth/invalid-credential") {
      return {
        message: "Invalid Credentials! Please try again.",
      };
    } else if (authError.code === "auth/user-not-found") {
      return {
        message: "You are not registered yet! Please register first.",
      };
    } else {
      return {
        message: "Some Error Occured, please try again!",
      };
    }
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
