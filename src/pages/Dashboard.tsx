
import { Seo } from "@/components/Seo";
import Layout from "@/components/Layout";
import cam1 from "@/assets/cam1.jpg";
import cam2 from "@/assets/cam2.jpg";
import cam3 from "@/assets/cam3.jpg";
import cam4 from "@/assets/cam4.jpg";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Camera, Activity, Shield, AlertTriangle, Settings, BarChart3, Play, Maximize } from "lucide-react";
import { useState } from "react";

const feeds = [
  { src: cam1, name: "Front Entrance", status: "online", location: "Main Gate" },
  { src: cam2, name: "Parking Lot", status: "online", location: "Zone A" },
  { src: cam3, name: "Lobby Area", status: "recording", location: "Ground Floor" },
  { src: cam4, name: "Back Exit", status: "online", location: "Rear Gate" }
];

const recentAlerts = [
  { time: "10:15 AM", camera: "Front Entrance", event: "Motion Detected", description: "Person approaching main entrance", severity: "low" },
  { time: "11:30 AM", camera: "Parking Lot", event: "Vehicle Alert", description: "Unauthorized vehicle detected", severity: "high" },
  { time: "12:45 PM", camera: "Lobby Area", event: "Sound Detection", description: "Loud noise in lobby area", severity: "medium" },
  { time: "01:20 PM", camera: "Back Exit", event: "Door Opened", description: "Emergency exit accessed", severity: "high" },
];

const quickStats = [
  { title: "Active Cameras", value: "4", subtext: "All systems operational", icon: Camera, color: "text-green-600", bg: "bg-green-50" },
  { title: "Today's Events", value: "23", subtext: "+12% from yesterday", icon: Activity, color: "text-blue-600", bg: "bg-blue-50" },
  { title: "Active Alerts", value: "3", subtext: "2 high priority", icon: AlertTriangle, color: "text-red-600", bg: "bg-red-50" },
  { title: "System Health", value: "98%", subtext: "Excellent performance", icon: Shield, color: "text-purple-600", bg: "bg-purple-50" },
];

export default function Dashboard() {
  const [selectedFeed, setSelectedFeed] = useState<number | null>(null);

  const getSeverityBadge = (severity: string) => {
    switch (severity) {
      case 'high': return <Badge variant="destructive">High</Badge>;
      case 'medium': return <Badge variant="warning">Medium</Badge>;
      case 'low': return <Badge variant="secondary">Low</Badge>;
      default: return <Badge variant="secondary">Unknown</Badge>;
    }
  };

  return (
    <Layout>
      <Seo title="Dashboard - Vista Guard Pro" description="Security system overview and monitoring" />
      
      <div className="space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">Security Dashboard</h1>
            <p className="text-slate-600 mt-1">Real-time monitoring and system overview</p>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline" size="sm">
              <BarChart3 className="w-4 h-4 mr-2" />
              Analytics
            </Button>
            <Button size="sm" className="bg-gradient-to-r from-blue-600 to-purple-600">
              <Settings className="w-4 h-4 mr-2" />
              Quick Setup
            </Button>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {quickStats.map((stat, index) => (
            <Card key={index} className="border-0 shadow-sm bg-white hover:shadow-md transition-shadow duration-200">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-slate-600">{stat.title}</p>
                    <p className="text-2xl font-bold text-slate-900 mt-2">{stat.value}</p>
                    <p className="text-xs text-slate-500 mt-1">{stat.subtext}</p>
                  </div>
                  <div className={`w-12 h-12 rounded-lg ${stat.bg} flex items-center justify-center`}>
                    <stat.icon className={`w-6 h-6 ${stat.color}`} />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Live Camera Feeds */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-xl font-semibold text-slate-900">Live Camera Feeds</h2>
              <p className="text-slate-600 text-sm">Real-time monitoring from all security cameras</p>
            </div>
            <Button variant="outline" size="sm">View All Cameras</Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {feeds.map((feed, index) => (
              <Card key={index} className="overflow-hidden border-0 shadow-sm bg-white hover:shadow-lg transition-all duration-300 group">
                <div className="relative">
                  <img 
                    src={feed.src} 
                    alt={feed.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />
                  
                  {/* Live indicator */}
                  <div className="absolute top-3 left-3 flex items-center gap-2">
                    <div className="flex items-center gap-1 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                      <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                      LIVE
                    </div>
                  </div>
                  
                  {/* Status badge */}
                  <div className="absolute top-3 right-3">
                    <Badge variant={feed.status === 'online' ? 'success' : 'secondary'} className="capitalize">
                      {feed.status}
                    </Badge>
                  </div>
                  
                  {/* Overlay controls */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex gap-2">
                      <Button size="sm" variant="secondary" className="bg-white/90 text-slate-700 hover:bg-white">
                        <Play className="w-4 h-4" />
                      </Button>
                      <Button size="sm" variant="secondary" className="bg-white/90 text-slate-700 hover:bg-white">
                        <Maximize className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
                
                <CardContent className="p-4">
                  <h3 className="font-medium text-slate-900">{feed.name}</h3>
                  <p className="text-sm text-slate-600 mt-1">{feed.location}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Recent Alerts & Quick Actions */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Recent Alerts */}
          <div className="lg:col-span-2">
            <Card className="border-0 shadow-sm bg-white">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-red-500" />
                  Recent Alerts
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentAlerts.map((alert, index) => (
                    <div key={index} className="flex items-center gap-4 p-3 rounded-lg hover:bg-slate-50 transition-colors duration-200">
                      <div className="text-sm font-medium text-slate-600 w-20">{alert.time}</div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-medium text-slate-900">{alert.event}</span>
                          {getSeverityBadge(alert.severity)}
                        </div>
                        <div className="text-sm text-slate-600">{alert.camera} • {alert.description}</div>
                      </div>
                      <Button variant="ghost" size="sm">View</Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Quick Actions */}
          <div>
            <Card className="border-0 shadow-sm bg-white">
              <CardHeader className="pb-4">
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  <Camera className="w-4 h-4 mr-2" />
                  Camera Configuration
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <BarChart3 className="w-4 h-4 mr-2" />
                  Event Reports
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Shield className="w-4 h-4 mr-2" />
                  Security Settings
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <AlertTriangle className="w-4 h-4 mr-2" />
                  Alert Management
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
}
