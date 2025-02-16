"use client";

import { Button } from "@/components/ui/button";
import { CardContent, CardHeader } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { z } from "zod";
import banner from "./assets/banner.svg";

const schema = z.object({
  email: z.string().email("Invalid Email"),
  password: z.string().min(6, "The password must have at least 6 characters"),
  remember: z.boolean().optional(),
});

type FormData = z.infer<typeof schema>;

export default function SignIn() {
  const form = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      email: "",
      password: "",
      remember: false,
    },
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <div className="flex">
      <div className="flex h-screen w-[50%] items-center justify-center">
        <div className="w-[36rem]">
          <CardHeader className="mb-[5.6rem]">
            <h1 className="text-[4rem] font-semibold">Control Panel</h1>
            <p className="font-regular text-[1.6rem] text-gray-500">
              Fill in your details to access your account.
            </p>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4"
              >
                {/* Email */}
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-[1.4rem] font-medium">
                        E-mail
                      </FormLabel>
                      <FormControl>
                        <Input
                          className="rounded-[0.8rem] p-[1.3rem] !text-[1.2rem]"
                          type="email"
                          placeholder="Enter your email"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Password */}
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-[1.4rem] font-medium">
                        Password
                      </FormLabel>
                      <FormControl>
                        <Input
                          className="rounded-[0.8rem] p-[1.3rem] !text-[1.2rem]"
                          type="password"
                          placeholder="Enter your password"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Checkbox Remember Me */}
                <FormField
                  control={form.control}
                  name="remember"
                  render={({ field }) => (
                    <FormItem className="!mb-[3.2rem] !mt-[2rem] flex items-center gap-[1rem]">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <FormLabel className="text-[1.4rem] font-medium">
                        Remember me
                      </FormLabel>
                    </FormItem>
                  )}
                />

                {/* Submit Button */}
                <Button
                  type="submit"
                  className="h-[4.4rem] w-full rounded-[0.8rem]"
                >
                  Login
                </Button>
              </form>
            </Form>
          </CardContent>
        </div>
      </div>
      <div className="flex h-screen w-[50%] items-center justify-center bg-highlighted">
        <div>
          <div className="relative h-[31.7rem] w-[41.9rem] overflow-hidden">
            <Image fill src={banner} alt="Banner peppa" />
          </div>
          <p className="mt-[-3rem] text-center text-[1.6rem] text-white">
            Creativity and Education
          </p>
        </div>
      </div>
    </div>
  );
}
