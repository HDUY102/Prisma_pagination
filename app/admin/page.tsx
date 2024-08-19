'use client'
import React, { useEffect }  from "react";
import styles from "@/app/admin/Admin.module.css";
import Sidebar from "./Sidebar";
import Card from "./Card";
import { useRouter } from "next/navigation";
import {jwtDecode} from "jwt-decode";

interface MyTokenPayload {
  role: number
}

const AdminHome = () => {
  const router = useRouter()
  const token = localStorage.getItem("token")
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
    <div className={styles.container}>
      <Sidebar />
      <div className={styles.content}>
        {/* <Search /> */}
        <div className={styles.cards}>
          <Card />
        </div>
        {/* <Chart /> */}
      </div>
    </div>
  );
};

export default AdminHome;
