"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  FileSearch,
  Upload,
  BookOpen,
  FolderOpen,
  ChevronDown,
  AlertTriangle,
  ShieldCheck,
  BarChart3,
  CalendarCheck,
  Landmark,
  ClipboardList,
  ShieldAlert,
  Fingerprint,
  GraduationCap,
  FileCheck,
  Box,
  FileText,
  Database,
} from "lucide-react";

/* ─── Menu data ─── */

interface MenuItem {
  label: string;
  href: string;
  icon: React.ReactNode;
  children?: MenuItem[];
}

const menuItems: MenuItem[] = [
  {
    label: "Dashboard",
    href: "/",
    icon: <LayoutDashboard size={20} />,
  },
  {
    label: "Review Lapbul",
    href: "/review-lapbul",
    icon: <FileSearch size={20} />,
  },
  {
    label: "Unggah Lapbul",
    href: "/unggah-lapbul",
    icon: <Upload size={20} />,
  },
  {
    label: "Regulasi Terkait",
    href: "/regulasi",
    icon: <BookOpen size={20} />,
  },
  {
    label: "Laporan",
    href: "#",
    icon: <FolderOpen size={20} />,
    children: [
      {
        label: "Laporan Insidentil",
        href: "/laporan/insidentil",
        icon: <AlertTriangle size={16} />,
      },
      {
        label: "Laporan Tata Kelola",
        href: "/laporan/tata-kelola",
        icon: <ShieldCheck size={16} />,
      },
      {
        label: "Laporan Profil Resiko",
        href: "/laporan/profil-resiko",
        icon: <BarChart3 size={16} />,
      },
      {
        label: "Laporan Tahunan",
        href: "/laporan/tahunan",
        icon: <CalendarCheck size={16} />,
      },
      {
        label: "Laporan Aksi Keuangan",
        href: "/laporan/aksi-keuangan",
        icon: <Landmark size={16} />,
      },
      {
        label: "Laporan Realisasi RBB",
        href: "/laporan/realisasi-rbb",
        icon: <ClipboardList size={16} />,
      },
      {
        label: "Strategi Anti Fraud",
        href: "/laporan/antifraud",
        icon: <ShieldAlert size={16} />,
      },
      {
        label: "Laporan IRA-APUPPT",
        href: "/laporan/ira-apuppt",
        icon: <Fingerprint size={16} />,
      },
      {
        label: "Edukasi & Perlindungan",
        href: "/laporan/edukasi",
        icon: <GraduationCap size={16} />,
      },
      {
        label: "Laporan AP KAP",
        href: "/laporan/ap-kap",
        icon: <FileCheck size={16} />,
      },
      {
        label: "OBOX",
        href: "/laporan/obox",
        icon: <Box size={16} />,
      },
      {
        label: "Lapbul",
        href: "/laporan/lapbul",
        icon: <FileText size={16} />,
      },
      {
        label: "SLIK",
        href: "/laporan/slik",
        icon: <Database size={16} />,
      },
    ],
  },
];

/* ─── Component ─── */

export default function Sidebar() {
  const pathname = usePathname();
  const [laporanOpen, setLaporanOpen] = useState(() => {
    return pathname.startsWith("/laporan");
  });

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <aside
      id="sidebar"
      className="fixed top-0 left-0 z-40 flex h-screen flex-col"
      style={{
        width: "var(--sidebar-width)",
        background: "linear-gradient(180deg, #0f172a 0%, #1a1f3d 100%)",
      }}
    >
      {/* ── Logo ── */}
      <div className="flex h-[var(--topbar-height)] items-center gap-3 px-6">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-cyan-400">
          <span className="text-sm font-bold text-white">D</span>
        </div>
        <div>
          <span className="text-lg font-bold tracking-tight text-white">
            dots{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
              RIA
            </span>
          </span>
          <p className="text-[10px] leading-none text-slate-500">
            Reporting Hub
          </p>
        </div>
      </div>

      {/* ── Divider ── */}
      <div className="mx-4 border-t border-white/5" />

      {/* ── Navigation ── */}
      <nav className="flex-1 overflow-y-auto px-3 py-4">
        <p className="mb-2 px-3 text-[11px] font-semibold uppercase tracking-widest text-slate-500">
          Menu
        </p>

        <ul className="space-y-1">
          {menuItems.map((item) => {
            const hasChildren = item.children && item.children.length > 0;
            const active = hasChildren
              ? pathname.startsWith("/laporan")
              : isActive(item.href);

            return (
              <li key={item.label}>
                {/* ── Parent item ── */}
                {hasChildren ? (
                  <button
                    id={`menu-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
                    type="button"
                    onClick={() => setLaporanOpen((prev) => !prev)}
                    className={`group flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all duration-200 ${
                      active
                        ? "bg-white/10 text-white"
                        : "text-slate-400 hover:bg-white/5 hover:text-slate-200"
                    }`}
                  >
                    <span
                      className={`transition-colors ${
                        active ? "text-indigo-400" : "text-slate-500 group-hover:text-slate-400"
                      }`}
                    >
                      {item.icon}
                    </span>
                    <span className="flex-1 text-left">{item.label}</span>
                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-300 ${
                        laporanOpen ? "rotate-180" : ""
                      } ${active ? "text-indigo-400" : "text-slate-600"}`}
                    />
                  </button>
                ) : (
                  <Link
                    id={`menu-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
                    href={item.href}
                    className={`group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all duration-200 ${
                      active
                        ? "bg-white/10 text-white shadow-lg shadow-indigo-500/5"
                        : "text-slate-400 hover:bg-white/5 hover:text-slate-200"
                    }`}
                  >
                    <span
                      className={`transition-colors ${
                        active ? "text-indigo-400" : "text-slate-500 group-hover:text-slate-400"
                      }`}
                    >
                      {item.icon}
                    </span>
                    {active && (
                      <span className="absolute left-0 h-6 w-[3px] rounded-r-full bg-indigo-400" />
                    )}
                    <span>{item.label}</span>
                  </Link>
                )}

                {/* ── Submenu ── */}
                {hasChildren && (
                  <div
                    className={`submenu-enter ${
                      laporanOpen ? "submenu-enter-active" : ""
                    }`}
                  >
                    <ul className="mt-1 space-y-0.5 pl-4">
                      {item.children!.map((child) => {
                        const childActive = isActive(child.href);
                        return (
                          <li key={child.href}>
                            <Link
                              id={`submenu-${child.href.split("/").pop()}`}
                              href={child.href}
                              className={`group flex items-center gap-2.5 rounded-md px-3 py-2 text-[13px] font-medium transition-all duration-200 ${
                                childActive
                                  ? "bg-indigo-500/15 text-indigo-300"
                                  : "text-slate-500 hover:bg-white/5 hover:text-slate-300"
                              }`}
                            >
                              <span
                                className={`transition-colors ${
                                  childActive
                                    ? "text-indigo-400"
                                    : "text-slate-600 group-hover:text-slate-500"
                                }`}
                              >
                                {child.icon}
                              </span>
                              <span>{child.label}</span>
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      </nav>

      {/* ── Footer ── */}
      <div className="border-t border-white/5 px-4 py-4">
        <div className="flex items-center gap-2 rounded-lg bg-white/5 px-3 py-2.5">
          <div className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse-dot" />
          <span className="text-xs text-slate-400">System Online</span>
        </div>
      </div>
    </aside>
  );
}
