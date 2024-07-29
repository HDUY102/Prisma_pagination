'use client'
import React from "react";
import styles from "@/app/admin/Admin.module.css";
import Sidebar from "./Sidebar";
import Card from "./Card";

const AdminHome = () => {
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
