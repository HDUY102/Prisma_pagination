"use client";
import React, { useEffect } from "react";
import styles from "@/app/admin/Admin.module.css";
import Sidebar from "./Sidebar";
import Card from "./Card";
import Search from "./Search";
import { useRouter } from "next/navigation";
import { jwtDecode } from "jwt-decode";
import AdminLayout from "./AdminLayout";

interface MyTokenPayload {
  role: number;
}

const AdminHome = () => {
  const router = useRouter();
  const token = localStorage.getItem("token");
  useEffect(() => {
    if (!token) {
      router.push("/login");
    } else {
      try {
        const decoded = jwtDecode<MyTokenPayload>(token);
        if (decoded.role !== 1) {
          router.push("/");
        }
      } catch (error) {
        router.push("/login");
      }
    }
  }, [router, token]);
  return (
    <AdminLayout>
      <div>
        <Search />
        <Card />
      </div>
    </AdminLayout>
  );
};

export default AdminHome;
