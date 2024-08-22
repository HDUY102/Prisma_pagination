import React from "react";
import { ThemeProvider } from "./ThemeProvider";
import styles from "@/app/admin/Admin.module.css";
import Sidebar from "./Sidebar";
import { ThemeToggle } from "./ThemeToggle";

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <div className={styles.container}>
        <Sidebar />
        <div className={styles.theme}><ThemeToggle/></div>
        <div className={styles.content}>{children}</div>
      </div>
    </ThemeProvider>
  );
};

export default AdminLayout;
