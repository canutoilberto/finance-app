"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import {
  Menu,
  X,
  Home,
  PieChart,
  CreditCard,
  Settings,
  Moon,
  Sun,
} from "lucide-react";

const menuItems = [
  { name: "Dashboard", icon: Home, href: "/" },
  { name: "Relatórios", icon: PieChart, href: "/relatorios" },
  { name: "Transações", icon: CreditCard, href: "/transacoes" },
  { name: "Configurações", icon: Settings, href: "/configuracoes" },
];

export default function Sidebar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const SidebarContent = () => (
    <div className="flex flex-col h-full">
      <div className="px-3 py-4">
        <h1 className="mb-4 px-4 text-2xl font-bold text-primary">
          FinanceControl
        </h1>
        <div className="space-y-1">
          {menuItems.map((item) => (
            <Link key={item.name} href={item.href}>
              <Button
                variant={pathname === item.href ? "secondary" : "ghost"}
                className="w-full justify-start"
                onClick={() => setOpen(false)}
              >
                <item.icon className="mr-2 h-4 w-4" />
                {item.name}
              </Button>
            </Link>
          ))}
        </div>
      </div>
      <div className="mt-auto px-3 py-4">
        <div className="flex items-center space-x-2">
          <Switch
            checked={theme === "dark"}
            onCheckedChange={() =>
              setTheme(theme === "dark" ? "light" : "dark")
            }
            className="data-[state=checked]:bg-primary"
          />
          <span className="text-sm font-medium">
            {theme === "dark" ? "Modo Escuro" : "Modo Claro"}
          </span>
          {mounted &&
            (theme === "dark" ? (
              <Moon className="h-[1.2rem] w-[1.2rem]" />
            ) : (
              <Sun className="h-[1.2rem] w-[1.2rem]" />
            ))}
        </div>
      </div>
    </div>
  );

  return (
    <>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className="fixed left-4 top-4 z-40 md:hidden"
          >
            <Menu className="h-4 w-4" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-[240px] sm:w-[300px]">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">Menu</h2>
            <Button
              variant="outline"
              size="icon"
              onClick={() => setOpen(false)}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
          <SidebarContent />
        </SheetContent>
      </Sheet>

      <div className="hidden md:flex flex-col h-screen w-[240px] border-r bg-background">
        <SidebarContent />
      </div>
    </>
  );
}
