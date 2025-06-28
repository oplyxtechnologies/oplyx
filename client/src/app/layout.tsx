import { DashboardHeader } from "@/components/Dashboard/dashboard-header";
import { AppSidebar } from "@/components/Layout/app-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body>
        <main className="">
          <SidebarProvider>
            <SidebarInset>
              <section className="flex w-full overflow-hidden h-auto">
                <AppSidebar />
                <span className="w-full">
                  <DashboardHeader />
                  {children}
                </span>
              </section>
            </SidebarInset>
          </SidebarProvider>
        </main>
      </body>
    </html>
  );
}
