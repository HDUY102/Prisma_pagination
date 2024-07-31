"use client";
import React from "react";
import style from "@/app/login/Login.module.css";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormDescription
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { PasswordInput } from "@/components/ui/password_input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { FiLock } from "react-icons/fi";
import Link from "next/link";

const formSchema = z.object({
  username: z.string().min(2).max(50),
  password: z.string().min(2).max(50),
});

const LoginPage = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: ""
    },
  });
  const handleSubmit = () => {};
  return (
    <div className={style.loginContainer}>
      <div className={style.welcomeLogin}>
        <h1>Welcome to</h1>
        <img src="/logo.png" alt="Logo" />
        <h5>Flower <span>Garden</span></h5>
      </div>
      <div className={style.lock}>
        <Avatar>
            <AvatarFallback><FiLock className={style.icon}/></AvatarFallback>
        </Avatar>
      </div>
      <div className={style.formLogin}>
      <Form {...form}>
          <form onSubmit={handleSubmit}>
            <FormDescription className="text-6xl text-center font-serif mb-8">
              Đăng nhập
            </FormDescription>
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-4xl font-serif">
                    Username
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="Username" {...field}/>
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-4xl font-serif">
                    Password
                  </FormLabel>
                  <FormControl>
                    <PasswordInput
                      {...field}
                      placeholder="Password"
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <div className={style.buttonLogin}>
              <Button
                className="w-[99%] text-2xl rounded-2xl mt-8 p-7 bg-[#2092F4] text-white hover:bg-[#30303c] hover:text-white"
                type="submit"
              >
                Đăng Nhập
              </Button>
            </div>
          </form>
        </Form>
        <Link href="/" className={style.closeLogin}>
          <button>X</button>
        </Link>
      </div>
    </div>
  );
};

export default LoginPage;
