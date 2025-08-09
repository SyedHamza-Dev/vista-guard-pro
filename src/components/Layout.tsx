import { SidebarProvider, SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/AuthContext";

export default function Layout({ children }: { children: React.ReactNode }) {
  const { logout } = useAuth();
  return (
    <SidebarProvider>
      <header className="h-14 flex items-center border-b bg-background/60 backdrop-blur supports-[backdrop-filter]:bg-background/50">
        <SidebarTrigger className="ml-2" />
        <div className="ml-3 font-semibold">Vista Guard Pro</div>
        <div className="ml-auto mr-3">
          <Button variant="outline" size="sm" onClick={logout} aria-label="Logout">
            Logout
          </Button>
        </div>
      </header>
      <div className="flex min-h-screen w-full">
        <AppSidebar />
        <SidebarInset>
          <main className="p-6 container animate-enter">
            {children}
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}
