"use client";
import React from "react";
import style from "@/app/login/Login.module.css";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { PasswordInput } from "@/components/ui/password_input";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Link from "next/link";
import { FiLock } from "react-icons/fi";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useRouter } from "next/navigation";

const RegisterSchema = z.object({
  email: z.string().min(3, {
    message: "email ít nhất 3 ký tự",
  }),
  username: z.string().min(3, {
    message: "email ít nhất 3 ký tự",
  }),
  password: z.string().min(3, {
    message: "Password ít nhất 3 ký tự",
  }),
});

const RegisterPage = () => {
  const router = useRouter()
  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      email: "",
      username: "",
      password: "",
    },
  });

  const onSubmit = async (value: z.infer<typeof RegisterSchema>) => {
    const respone = await fetch("/api/register",{
      method: "POST",
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: value.email,
        password: value.password,
        username: value.username
      })
    }) 
    if(respone.ok){
      alert("Success")
      router.push("/login")
    }
    else {
      console.error('Error during registration:', respone.statusText);
    }
  };

  return (
    <div className={style.loginContainer}>
      <div className={style.welcomeLogin}>
        <h1>Welcome to</h1>
        <img src="/logo.png" alt="Logo" />
        <h5>
          Flower <span>Garden</span>
        </h5>
      </div>
      <div className={style.lock}>
        <Avatar>
          <AvatarFallback><FiLock className={style.icon}/></AvatarFallback>
        </Avatar>
      </div>
      <div className={style.formLogin}>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <FormDescription className="text-6xl text-center font-serif mb-8">
              Đăng ký
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
                  <FormMessage className="text-red-500 text-xl text-xl"/>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-4xl font-serif">
                    Email
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="email" {...field}/>
                  </FormControl>
                  <FormMessage className="text-red-500 text-xl" />
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
                  <FormMessage className="text-red-500 text-xl" />
                </FormItem>
              )}
            />
            <div className={style.buttonLogin}>
              <Button
                className="w-[99%] text-2xl rounded-2xl mt-8 p-7 bg-[#2092F4] text-white hover:bg-[#30303c] hover:text-white"
                type="submit"
              >
                Đăng Ký
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

export default RegisterPage;
