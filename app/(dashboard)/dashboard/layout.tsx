import { Metadata } from "next";

import { DashboardNav } from "@/components/dashboard/dashboard-nav";
import { Search } from "@/components/dashboard/search";
import TeamSwitcher from "@/components/dashboard/team-switcher";
import { UserNav } from "@/components/dashboard/user-nav";
import { MainNav } from "@/components/main-nav";
import { SiteFooter } from "@/components/site-footer";
import { dashboardConfig } from "@/config/dashboard";
import { SignedIn, UserButton } from "@clerk/nextjs";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Example dashboard app built using the components.",
};

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default async function DashboardLayout({
  children,
}: DashboardLayoutProps) {
  return (
    <>
      <div className="flex min-h-screen flex-col space-y-6">
        <header className="sticky top-0 z-40 border-b bg-background">
          <div className="container flex h-16 items-center justify-between py-4">
            <MainNav items={dashboardConfig.mainNav} />
            <div className="ml-auto flex items-center space-x-4">
              <Search />
              <UserNav />
              <SignedIn>
                <UserButton />
              </SignedIn>
            </div>
          </div>
        </header>
        <div className="container grid flex-1 gap-12 md:grid-cols-[200px_1fr]">
          <aside className="hidden w-[200px] flex-col md:flex gap-4">
            <TeamSwitcher />
            <DashboardNav items={dashboardConfig.sidebarNav} />
          </aside>
          <main className="flex w-full flex-1 flex-col overflow-hidden">
            {children}
          </main>
        </div>
        <SiteFooter className="border-t" />
      </div>
    </>
  );
}
