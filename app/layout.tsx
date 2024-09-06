import type { Metadata } from "next";
import "./globals.css";

import { ThemeProvider } from "next-themes";
import Sidebar from "@/components/Sidebar";

export const metadata: Metadata = {
  title: "FinanceControl",
  description: "Exemplo de aplicativo para controle financeiro",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="flex h-screen overflow-hidden">
            <Sidebar />
            <main className="flex-1 overflow-x-hidden overflow-y-auto bg-background">
              <div className="container mx-auto px-4 py-8">{children}</div>
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
