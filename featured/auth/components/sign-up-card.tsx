"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Form } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import { signUpZodValidation } from "@/utils/formSchema";
import Form_FieldsContainer from "@/components/forms/Form_FieldsContainer";
import {FcGoogle} from 'react-icons/fc'
import {FaGithub} from 'react-icons/fa'


const SignUpCard = () => {
  const form = useForm<z.infer<typeof signUpZodValidation>>({
    resolver: zodResolver(signUpZodValidation),
    defaultValues: {
      user_name: "",
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof signUpZodValidation>) {
    console.log(values);
  }
  return (
    <Card className="w-full h-full md:w-[490px] border-none shadow-none">
      <CardHeader className="flex flex-col items-center justify-center text-center p-7">
        <CardTitle className="text-2xl">Sign Up</CardTitle>
        <CardDescription>
          By Signing up, you agree to our{" "}
          <Link href={"/privacy"}>
            <span className="text-blue-400 underline">Privacy Policy</span>
          </Link>
        </CardDescription>
      </CardHeader>
      <CardContent className="p-7">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <Form_FieldsContainer
              name="user_name"
              control={form.control}
              placeholder="User Name"
            />
            <Form_FieldsContainer
              name="email"
              control={form.control}
              placeholder="Email"
              type="email"
            />
            <Form_FieldsContainer
              name="password"
              control={form.control}
              placeholder="Password"
              type="password"
            />
            <Button
              type="submit"
              disabled={false}
              size={"lg"}
              className="w-full mt-4"
            >
              Create New Account
            </Button>
          </form>
        </Form>
      </CardContent>
      <CardContent className="p-7 flex flex-col gap-4">
        <Button variant={"secondary"} size={"lg"} className="w-full">
          <FcGoogle />
          Login with Google
        </Button>
        <Button variant={"outline"} size={"lg"} className="w-full">
          <FaGithub/>
          Login with Github
        </Button>
      </CardContent>
      <CardContent>
        <p className="p-6 flex justify-center items-center gap-2">
          Do have an Account ?{" "}
          <Link href={"/sign-in"}>
            <span className="text-blue-500 underline">Sign In</span>
          </Link>
        </p>
      </CardContent>
    </Card>
  );
};

export default SignUpCard;
