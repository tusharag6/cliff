"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@repo/ui/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@repo/ui/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@repo/ui/components/ui/radio-group";
import { toast } from "@repo/ui/use-toast";
import { AppearanceFormSchema, AppearanceFormType } from "@repo/types";
import { useTheme } from "next-themes";

// This can come from your database or API.
const defaultValues: Partial<AppearanceFormType> = {
  theme: "light",
};

export function AppearanceForm() {
  const { setTheme } = useTheme();

  const form = useForm<AppearanceFormType>({
    resolver: zodResolver(AppearanceFormSchema),
    defaultValues,
  });

  function onSubmit(data: AppearanceFormType) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="theme"
          render={({ field }) => (
            <FormItem className="space-y-1">
              <FormLabel>Theme</FormLabel>
              <FormDescription>
                Select the theme for the website.
              </FormDescription>
              <FormMessage />
              <RadioGroup
                onValueChange={field.onChange}
                defaultValue={field.value}
                className="grid grid-cols-1 min-[475px]:grid-cols-2 md:grid-cols-4 gap-8 pt-2"
              >
                <FormItem>
                  <FormLabel className="[&:has([data-state=checked])>div]:border-primary">
                    <FormControl>
                      <RadioGroupItem
                        value="light"
                        onClick={() => setTheme("light")}
                        className="sr-only"
                      />
                    </FormControl>
                    <div className="items-center rounded-md border-2 p-1">
                      <div className="flex flex-col items-end space-y-2 rounded-sm bg-[#ecedef] p-2">
                        <div className="w-full space-y-2 rounded-md bg-[#ffffff] p-2 shadow-sm">
                          <div className="h-2 w-[80px] rounded-lg bg-[#09090b]" />
                          <div className="h-2 w-[100px] rounded-lg bg-[#09090b]" />
                        </div>
                        <div className="w-full flex items-center space-x-2 rounded-md bg-[#ffffff] p-2 shadow-sm">
                          <div className="h-4 w-4 rounded-full bg-[#09090b]" />
                          <div className="h-2 w-[100px] rounded-lg bg-[#09090b]" />
                        </div>
                        <div className="w-[70px] rounded-md bg-[#16a34a] p-2 shadow-sm">
                          <div className="h-3 w-full rounded-lg bg-[#fff1f2]" />
                        </div>
                      </div>
                    </div>
                    <span className="block w-full p-2 text-center font-normal">
                      Clear Daylight
                    </span>
                  </FormLabel>
                </FormItem>
                <FormItem>
                  <FormLabel className="[&:has([data-state=checked])>div]:border-primary">
                    <FormControl>
                      <RadioGroupItem
                        value="dark"
                        onClick={() => setTheme("dark")}
                        className="sr-only"
                      />
                    </FormControl>
                    <div className="items-center rounded-md border-2 p-1">
                      <div className="flex flex-col items-end space-y-2 rounded-sm bg-[#0c0a09] p-2">
                        <div className="w-full space-y-2 rounded-md bg-[#1c1917] p-2 shadow-sm">
                          <div className="h-2 w-[80px] rounded-lg bg-[#f2f2f2]" />
                          <div className="h-2 w-[100px] rounded-lg bg-[#f2f2f2]" />
                        </div>
                        <div className="w-full flex items-center space-x-2 rounded-md bg-[#1c1917] p-2 shadow-sm">
                          <div className="h-4 w-4 rounded-full bg-[#f2f2f2]" />
                          <div className="h-2 w-[100px] rounded-lg bg-[#f2f2f2]" />
                        </div>
                        <div className="w-[70px] rounded-md bg-[#22c55e] p-2 shadow-sm">
                          <div className="h-3 w-full rounded-lg bg-[#052e16]" />
                        </div>
                      </div>
                    </div>
                    <span className="block w-full p-2 text-center font-normal">
                      Midnight Dark
                    </span>
                  </FormLabel>
                </FormItem>

                <FormItem>
                  <FormLabel className="[&:has([data-state=checked])>div]:border-primary">
                    <FormControl>
                      <RadioGroupItem
                        value="orangeLight"
                        onClick={() => setTheme("orangeLight")}
                        className="sr-only"
                      />
                    </FormControl>
                    <div className="items-center rounded-md border-2 p-1">
                      <div className="flex flex-col items-end space-y-2 rounded-sm bg-[#ecedef] p-2">
                        <div className="w-full space-y-2 rounded-md bg-[#ffffff] p-2 shadow-sm">
                          <div className="h-2 w-[80px] rounded-lg bg-[#0c0a09]" />
                          <div className="h-2 w-[100px] rounded-lg bg-[#0c0a09]" />
                        </div>
                        <div className="w-full flex items-center space-x-2 rounded-md bg-[#ffffff] p-2 shadow-sm">
                          <div className="h-4 w-4 rounded-full bg-[#0c0a09]" />
                          <div className="h-2 w-[100px] rounded-lg bg-[#0c0a09]" />
                        </div>
                        <div className="w-[70px] rounded-md bg-[#f97316] p-2 shadow-sm">
                          <div className="h-3 w-full rounded-lg bg-[#fafaf9]" />
                        </div>
                      </div>
                    </div>
                    <span className="block w-full p-2 text-center font-normal">
                      Sunrise Orange
                    </span>
                  </FormLabel>
                </FormItem>
                <FormItem>
                  <FormLabel className="[&:has([data-state=checked])>div]:border-primary">
                    <FormControl>
                      <RadioGroupItem
                        value="orangeDark"
                        onClick={() => setTheme("orangeDark")}
                        className="sr-only"
                      />
                    </FormControl>
                    <div className="items-center rounded-md border-2 p-1">
                      <div className="flex flex-col items-end space-y-2 rounded-sm bg-[#0c0a09] p-2">
                        <div className="w-full space-y-2 rounded-md bg-[#1c1917] p-2 shadow-sm">
                          <div className="h-2 w-[80px] rounded-lg bg-[#fafaf9]" />
                          <div className="h-2 w-[100px] rounded-lg bg-[#fafaf9]" />
                        </div>
                        <div className="w-full flex items-center space-x-2 rounded-md bg-[#1c1917] p-2 shadow-sm">
                          <div className="h-4 w-4 rounded-full bg-[#fafaf9]" />
                          <div className="h-2 w-[100px] rounded-lg bg-[#fafaf9]" />
                        </div>
                        <div className="w-[70px] rounded-md bg-[#ea580c] p-2 shadow-sm">
                          <div className="h-3 w-full rounded-lg bg-[#fafaf9]" />
                        </div>
                      </div>
                    </div>
                    <span className="block w-full p-2 text-center font-normal">
                      Dusk Ember
                    </span>
                  </FormLabel>
                </FormItem>

                <FormItem>
                  <FormLabel className="[&:has([data-state=checked])>div]:border-primary">
                    <FormControl>
                      <RadioGroupItem
                        value="roseLight"
                        onClick={() => setTheme("roseLight")}
                        className="sr-only"
                      />
                    </FormControl>
                    <div className="items-center rounded-md border-2 p-1">
                      <div className="flex flex-col items-end space-y-2 rounded-sm bg-[#ecedef] p-2">
                        <div className="w-full space-y-2 rounded-md bg-[#ffffff] p-2 shadow-sm">
                          <div className="h-2 w-[80px] rounded-lg bg-[#09090b]" />
                          <div className="h-2 w-[100px] rounded-lg bg-[#09090b]" />
                        </div>
                        <div className="w-full flex items-center space-x-2 rounded-md bg-[#ffffff] p-2 shadow-sm">
                          <div className="h-4 w-4 rounded-full bg-[#09090b]" />
                          <div className="h-2 w-[100px] rounded-lg bg-[#09090b]" />
                        </div>
                        <div className="w-[70px] rounded-md bg-[#e11d48] p-2 shadow-sm">
                          <div className="h-3 w-full rounded-lg bg-[#fff1f2]" />
                        </div>
                      </div>
                    </div>
                    <span className="block w-full p-2 text-center font-normal">
                      Blush Light
                    </span>
                  </FormLabel>
                </FormItem>
                <FormItem>
                  <FormLabel className="[&:has([data-state=checked])>div]:border-primary">
                    <FormControl>
                      <RadioGroupItem
                        value="roseDark"
                        onClick={() => setTheme("roseDark")}
                        className="sr-only"
                      />
                    </FormControl>
                    <div className="items-center rounded-md border-2 p-1">
                      <div className="flex flex-col items-end space-y-2 rounded-sm bg-[#0c0a09] p-2">
                        <div className="w-full space-y-2 rounded-md bg-[#1c1917] p-2 shadow-sm">
                          <div className="h-2 w-[80px] rounded-lg bg-[#f2f2f2]" />
                          <div className="h-2 w-[100px] rounded-lg bg-[#f2f2f2]" />
                        </div>
                        <div className="w-full flex items-center space-x-2 rounded-md bg-[#1c1917] p-2 shadow-sm">
                          <div className="h-4 w-4 rounded-full bg-[#f2f2f2]" />
                          <div className="h-2 w-[100px] rounded-lg bg-[#f2f2f2]" />
                        </div>
                        <div className="w-[70px] rounded-md bg-[#e11d48] p-2 shadow-sm">
                          <div className="h-3 w-full rounded-lg bg-[#fff1f2]" />
                        </div>
                      </div>
                    </div>
                    <span className="block w-full p-2 text-center font-normal">
                      Midnight Rose
                    </span>
                  </FormLabel>
                </FormItem>
              </RadioGroup>
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}
