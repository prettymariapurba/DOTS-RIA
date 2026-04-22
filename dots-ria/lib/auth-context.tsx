"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";

interface AuthContextType {
  user: any;
  login: (token: string, userData: any) => void;
  logout: () => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const checkAuth = () => {
      try {
        const cookies = typeof document !== "undefined" ? document.cookie : "";
        const hasToken = cookies.includes("dots_token=");
        const storedUser = localStorage.getItem("dots_user");

        if (hasToken && storedUser) {
          setUser(JSON.parse(storedUser));
          if (pathname === "/login") {
            router.push("/");
          }
        } else {
          if (pathname !== "/login") {
            router.push("/login");
          }
        }
      } catch (err) {
        console.error("Auth check error:", err);
      } finally {
        setIsLoading(false);
      }
    };

    checkAuth();
  }, [pathname, router]);

  const login = (token: string, userData: any) => {
    document.cookie = `dots_token=${token}; path=/; max-age=604800; SameSite=Lax`;
    localStorage.setItem("dots_user", JSON.stringify(userData));
    setUser(userData);
    router.push("/");
  };

  const logout = () => {
    document.cookie = "dots_token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";
    localStorage.removeItem("dots_user");
    setUser(null);
    router.push("/login");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
