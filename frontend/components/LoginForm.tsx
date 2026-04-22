"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Eye, EyeOff, Loader2, AlertCircle } from "lucide-react";
import { useAuth } from "@/lib/auth-context";


export default function LoginForm() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { login } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    // Simulasi Delay API
    try {
      if (!username.includes("@")) {
        throw new Error("Format username tidak valid");
      }
      if (password.length < 6) {
        throw new Error("Password minimal 6 karakter");
      }

      // Simulasi Fetch ke Backend
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Berhasil
      const userData = {
        name: "Admin",
        role: "Supervisor",
        username: username,
      };
      
      login("dummy_token_123", userData);
    } catch (err: any) {
      setError(err.message || "Username atau password salah");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md animate-fade-in-up">
      <div className="mb-8 overflow-hidden rounded-2xl bg-white p-8 shadow-xl shadow-slate-200/50 border border-slate-100">
        <h1 className="mb-2 text-2xl font-bold text-slate-800 text-center">dots RIA</h1>
        <p className="mb-8 text-sm text-slate-400 font-medium text-center">Regulatory Integrated Assessment</p>

        {error && (
          <div className="mb-6 flex items-center gap-3 rounded-xl bg-red-50 p-4 text-sm text-red-600 border border-red-100">
            <AlertCircle size={18} />
            <p>{error}</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Username */}
          <div className="space-y-1.5 text-left">
            <label className="text-[13px] font-semibold text-slate-700">Username</label>
            <input
              type="text"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder=" "
              className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 transition-all focus:border-blue-700 focus:bg-white focus:ring-4 focus:ring-blue-700/10 outline-none"
            />
          </div>

          {/* Password */}
          <div className="space-y-1.5 text-left">
            <div className="flex items-center justify-between">
              <label className="text-[13px] font-semibold text-slate-700">Password</label>
              <a href="#" className="text-xs font-semibold text-blue-700 hover:text-blue-600">Lupa password?</a>
            </div>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder=" "
                className="w-full rounded-xl border border-slate-200 bg-slate-50 pl-4 pr-12 py-3 text-sm text-slate-700 transition-all focus:border-blue-700 focus:bg-white focus:ring-4 focus:ring-blue-700/10 outline-none"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-900 to-blue-800 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-900/30 transition-all hover:shadow-xl hover:shadow-blue-900/40 active:scale-[0.98] disabled:opacity-70"
          >
            {loading ? <Loader2 size={18} className="animate-spin" /> : "LOGIN"}
          </button>
        </form>
      </div>
      <p className="text-center text-xs text-slate-400">Powered By Dimensi Kreasi Nusantara © 2026 </p>
    </div>
  );
}
