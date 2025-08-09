import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "@/hooks/use-toast";
import { useAuth, demoCreds } from "@/context/AuthContext";
import { Seo } from "@/components/Seo";

export default function Login() {
  const { login } = useAuth();
  const [email, setEmail] = useState(demoCreds.email);
  const [password, setPassword] = useState(demoCreds.password);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const ok = await login(email, password);
    setLoading(false);
    if (!ok) toast({ title: "Invalid credentials", description: "Use the demo credentials shown." });
  };

  return (
    <>
      <Seo title="Login – Vista Guard Pro" description="Secure sign in to Vista Guard Pro." />
      <div className="min-h-screen flex items-center justify-center bg-background">
        <Card className="w-full max-w-md shadow-[var(--shadow-elevated)]">
          <CardContent className="p-6">
            <h1 className="text-2xl font-semibold mb-2">Welcome back</h1>
            <p className="text-muted-foreground mb-6">Sign in to your account</p>
            <form onSubmit={onSubmit} className="space-y-4">
              <div>
                <label className="text-sm">Email</label>
                <Input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" />
              </div>
              <div>
                <label className="text-sm">Password</label>
                <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="••••••••" />
              </div>
              <Button type="submit" className="w-full" variant="hero" disabled={loading}>
                {loading ? "Signing in..." : "Sign in"}
              </Button>
              <p className="text-xs text-muted-foreground">Demo: {demoCreds.email} / {demoCreds.password}</p>
            </form>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
