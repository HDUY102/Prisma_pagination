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
  FormDescription,
  FormMessage
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { PasswordInput } from "@/components/ui/password_input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { FiLock } from "react-icons/fi";
import Link from "next/link";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  email: z.string().min(3,{ message: "email ít nhất 3 ký tự"}).max(50,{
    message: "email nhiều nhất 50 ký tự"
  }),
  password: z.string().min(3,{message: "password ít nhất 3 ký tự"}).max(50,{
    message: "password nhiều nhất 50 ký tự"
  })
});

const LoginPage = () => {
  const router = useRouter()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: ""
    },
  });
  const handleSubmit = async (data: z.infer<typeof formSchema>) => {
    const {email,password} = data
    const response = await fetch("/api/login",{
      method: "POST",
      body: JSON.stringify({email,password})
    })

    if(response.ok){
      const data = await response.json()
      if(data.success){
        localStorage.setItem("token",data.success)
      }
      if(data.role == 1){
        router.push("/admin")
      }else router.push("/")
    }
  };
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
          <form onSubmit={form.handleSubmit(handleSubmit)}>
            <FormDescription className="text-6xl text-center font-serif mb-8">
              Đăng nhập
            </FormDescription>
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
                      placeholder="password"
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
                Đăng Nhập
              </Button>
            </div>
          </form>
        </Form>
        <Link href="/" className={style.closeLogin}>
          <button>X</button>
        </Link>
        <p className={style.changePage}>
          Bạn chưa có tài khoản?{" "}
          <a className="hover:text-blue-600 hover:underline" href={"/register"}>
            <u>Đăng Ký</u>
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
