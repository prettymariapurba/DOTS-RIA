"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { AuthProvider, useAuth } from "@/lib/auth-context";
import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/Topbar";

function InnerProvider({ children }: { children: React.ReactNode }) {
  const { user, isLoading } = useAuth();
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div style={{ padding: '20px' }}>Loading Application...</div>;

  const isLoginPage = pathname === "/login";

  if (isLoading) {
    return (
      <div style={{ display: 'flex', height: '100vh', width: '100vw', alignItems: 'center', justifyContent: 'center', background: '#f8fafc' }}>
        <p>Checking authentication...</p>
      </div>
    );
  }

  // If not logged in and not on login page, we will show a message while redirects happen
  if (!user && !isLoginPage) {
    return (
      <div style={{ display: 'flex', height: '100vh', width: '100vw', alignItems: 'center', justifyContent: 'center', background: '#f8fafc' }}>
        <p>Redirecting to login page...</p>
      </div>
    );
  }

  const showDashboardUI = !isLoginPage && user;

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: '#f1f5f9' }}>
      {showDashboardUI && <Sidebar />}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', marginLeft: showDashboardUI ? 'var(--sidebar-width)' : '0' }}>
        {showDashboardUI && <Topbar />}
        <main style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          {children}
        </main>
      </div>
    </div>
  );
}

export default function RootProvider({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
      <InnerProvider>{children}</InnerProvider>
    </AuthProvider>
  );
}
