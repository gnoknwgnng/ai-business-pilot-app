
import { ReactNode } from "react";
import { AppSidebar } from "./AppSidebar";
import { SidebarTrigger } from "@/components/ui/sidebar";

interface AppLayoutProps {
  children: ReactNode;
}

export function AppLayout({ children }: AppLayoutProps) {
  return (
    <>
      <AppSidebar />
      <main className="flex-1 flex flex-col">
        <header className="h-16 flex items-center border-b border-gray-800 px-4 bg-dark-surface">
          <SidebarTrigger className="text-white hover:bg-dark-card" />
          <h1 className="ml-4 text-xl font-semibold text-white">AI Business Assistant</h1>
        </header>
        <div className="flex-1 p-6 overflow-auto">
          {children}
        </div>
      </main>
    </>
  );
}
