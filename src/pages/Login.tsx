
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { toast } from "@/hooks/use-toast";
import { useAuth, demoCreds } from "@/context/AuthContext";
import { Seo } from "@/components/Seo";
import { Eye, EyeOff, Shield, Lock, Mail } from "lucide-react";

export default function Login() {
  const { login } = useAuth();
  const [email, setEmail] = useState(demoCreds.email);
  const [password, setPassword] = useState(demoCreds.password);
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const ok = await login(email, password);
    setLoading(false);
    if (!ok) {
      toast({ 
        title: "Authentication Failed", 
        description: "Please check your credentials and try again.",
        variant: "destructive"
      });
    }
  };

  return (
    <>
      <Seo title="Sign In - Vista Guard Pro" description="Secure access to your security management system" />
      <div className="min-h-screen flex bg-gradient-to-br from-blue-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Ccircle cx="7" cy="7" r="1"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] animate-pulse"></div>
        
        {/* Left Side - Branding */}
        <div className="hidden lg:flex flex-1 items-center justify-center p-12 relative">
          <div className="max-w-md text-center text-white">
            <div className="w-20 h-20 mx-auto mb-8 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-2xl">
              <Shield className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">
              Vista Guard Pro
            </h1>
            <p className="text-xl text-blue-200 mb-8 leading-relaxed">
              Advanced Security Management System
            </p>
            <div className="space-y-4 text-left">
              <div className="flex items-center gap-3 text-blue-200">
                <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                <span>Real-time Camera Monitoring</span>
              </div>
              <div className="flex items-center gap-3 text-blue-200">
                <div className="w-2 h-2 rounded-full bg-purple-400"></div>
                <span>Intelligent Event Detection</span>
              </div>
              <div className="flex items-center gap-3 text-blue-200">
                <div className="w-2 h-2 rounded-full bg-indigo-400"></div>
                <span>Advanced Alert System</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Login Form */}
        <div className="flex-1 flex items-center justify-center p-8">
          <Card className="w-full max-w-md shadow-2xl bg-white/95 backdrop-blur border-0">
            <CardHeader className="text-center pb-8">
              <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center lg:hidden">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-slate-900">Welcome Back</h2>
              <p className="text-slate-600 mt-2">Sign in to your security dashboard</p>
            </CardHeader>
            
            <CardContent className="space-y-6">
              <form onSubmit={onSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Email Address</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-5 w-5 text-slate-400" />
                    <Input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="pl-10 h-12 border-slate-200 focus:border-blue-500 focus:ring-blue-500"
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Password</label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 h-5 w-5 text-slate-400" />
                    <Input
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter your password"
                      className="pl-10 pr-10 h-12 border-slate-200 focus:border-blue-500 focus:ring-blue-500"
                      required
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="absolute right-2 top-2 h-8 w-8 p-0 hover:bg-transparent"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <EyeOff className="h-4 w-4 text-slate-400" /> : <Eye className="h-4 w-4 text-slate-400" />}
                    </Button>
                  </div>
                </div>

                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full h-12 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-lg shadow-lg transition-all duration-200 transform hover:scale-[1.02]"
                >
                  {loading ? (
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>
                      Signing In...
                    </div>
                  ) : (
                    "Sign In to Dashboard"
                  )}
                </Button>
              </form>

              <div className="pt-4 border-t border-slate-200">
                <div className="bg-slate-50 rounded-lg p-4">
                  <p className="text-xs text-slate-600 font-medium mb-2">Demo Credentials:</p>
                  <div className="text-xs text-slate-500 space-y-1">
                    <div><strong>Email:</strong> {demoCreds.email}</div>
                    <div><strong>Password:</strong> {demoCreds.password}</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}
