"use client";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { signInZodValidation } from "@/utils/formSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import {FcGoogle} from 'react-icons/fc'
import {FaGithub} from 'react-icons/fa'

const SignInCard = () => {
  const form = useForm<z.infer<typeof signInZodValidation>>({
    resolver: zodResolver(signInZodValidation),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof signInZodValidation>) {
    console.log(values);
  }

  return (
    <Card className="w-full h-full md:w-[490px] border-none shadow-none">
      <CardHeader className="flex  items-center justify-center text-center p-7">
        <CardTitle className="text-2xl">Welcome Back !</CardTitle>
      </CardHeader>
      <CardContent className="p-7">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Email" {...field} type="email" />
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
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input placeholder="Email" {...field} type="password" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              disabled={false}
              size={"lg"}
              className="w-full"
            >
              Login
            </Button>
          </form>
        </Form>
      </CardContent>

      <CardContent className="p-7 flex flex-col gap-4">
        <Button variant={"secondary"} size={"lg"} className="w-full">
          <FcGoogle/>
          Login with Google
        </Button>
        <Button variant={"outline"} size={"lg"} className="w-full">
          <FaGithub/>
          Login with Github
        </Button>
      </CardContent>
      <div className="p-7"></div>
      <CardContent>
        <p className="p-6 flex justify-center items-center gap-2">
          Dont have an Account ?{" "}
          <Link href={"/sign-up"}>
            <span className="text-blue-500 underline">Sign Up</span>
          </Link>
        </p>
      </CardContent>
    </Card>
  );
};

export default SignInCard;
