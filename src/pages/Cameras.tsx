
import Layout from "@/components/Layout";
import { Seo } from "@/components/Seo";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Camera, Search, Settings, Play, Maximize, MoreVertical, MapPin, Wifi, WifiOff, Video } from "lucide-react";
import { useState } from "react";
import cam1 from "@/assets/cam1.jpg";
import cam2 from "@/assets/cam2.jpg";
import cam3 from "@/assets/cam3.jpg";
import cam4 from "@/assets/cam4.jpg";

const cameras = [
  { 
    id: 1, 
    name: "Front Entrance", 
    status: "online", 
    location: "Main Gate - Building A", 
    tag: "Outdoor", 
    lastSeen: "Live", 
    resolution: "1080p",
    fps: "30fps",
    image: cam1,
    ip: "192.168.1.101"
  },
  { 
    id: 2, 
    name: "Parking Lot", 
    status: "offline", 
    location: "Parking Zone A", 
    tag: "Outdoor", 
    lastSeen: "2 hours ago", 
    resolution: "720p",
    fps: "25fps",
    image: cam2,
    ip: "192.168.1.102"
  },
  { 
    id: 3, 
    name: "Lobby Area", 
    status: "online", 
    location: "Ground Floor Reception", 
    tag: "Indoor", 
    lastSeen: "Live", 
    resolution: "4K",
    fps: "30fps",
    image: cam3,
    ip: "192.168.1.103"
  },
  { 
    id: 4, 
    name: "Executive Floor", 
    status: "recording", 
    location: "5th Floor Corridor", 
    tag: "Indoor", 
    lastSeen: "Live", 
    resolution: "1080p",
    fps: "60fps",
    image: cam4,
    ip: "192.168.1.104"
  },
  { 
    id: 5, 
    name: "Back Exit", 
    status: "maintenance", 
    location: "Rear Emergency Exit", 
    tag: "Outdoor", 
    lastSeen: "1 day ago", 
    resolution: "720p",
    fps: "25fps",
    image: cam1,
    ip: "192.168.1.105"
  },
];

export default function Cameras() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCamera, setSelectedCamera] = useState<typeof cameras[0] | null>(null);

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "online": 
        return <Badge variant="success" className="gap-1"><Wifi className="w-3 h-3" />Online</Badge>;
      case "offline": 
        return <Badge variant="destructive" className="gap-1"><WifiOff className="w-3 h-3" />Offline</Badge>;
      case "recording": 
        return <Badge variant="default" className="gap-1"><Video className="w-3 h-3" />Recording</Badge>;
      case "maintenance": 
        return <Badge variant="warning" className="gap-1"><Settings className="w-3 h-3" />Maintenance</Badge>;
      default: 
        return <Badge variant="secondary">Unknown</Badge>;
    }
  };

  const filteredCameras = cameras.filter(camera =>
    camera.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    camera.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Layout>
      <Seo title="Cameras - Vista Guard Pro" description="Manage and monitor all security cameras" />
      
      <div className="space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">Camera Management</h1>
            <p className="text-slate-600 mt-1">Monitor and configure all security cameras</p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline">
              <Settings className="w-4 h-4 mr-2" />
              Settings
            </Button>
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600">
              <Camera className="w-4 h-4 mr-2" />
              Add Camera
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="border-0 shadow-sm bg-white">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 mx-auto mb-3 bg-green-100 rounded-lg flex items-center justify-center">
                <Wifi className="w-6 h-6 text-green-600" />
              </div>
              <div className="text-2xl font-bold text-slate-900">3</div>
              <div className="text-sm text-slate-600">Online</div>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-sm bg-white">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 mx-auto mb-3 bg-red-100 rounded-lg flex items-center justify-center">
                <WifiOff className="w-6 h-6 text-red-600" />
              </div>
              <div className="text-2xl font-bold text-slate-900">1</div>
              <div className="text-sm text-slate-600">Offline</div>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-sm bg-white">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 mx-auto mb-3 bg-blue-100 rounded-lg flex items-center justify-center">
                <Video className="w-6 h-6 text-blue-600" />
              </div>
              <div className="text-2xl font-bold text-slate-900">1</div>
              <div className="text-sm text-slate-600">Recording</div>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-sm bg-white">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 mx-auto mb-3 bg-yellow-100 rounded-lg flex items-center justify-center">
                <Settings className="w-6 h-6 text-yellow-600" />
              </div>
              <div className="text-2xl font-bold text-slate-900">1</div>
              <div className="text-sm text-slate-600">Maintenance</div>
            </CardContent>
          </Card>
        </div>

        {/* Search and Filters */}
        <Card className="border-0 shadow-sm bg-white">
          <CardContent className="p-6">
            <div className="flex gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                  <Input
                    placeholder="Search cameras by name or location..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              <Button variant="outline">Filter by Status</Button>
              <Button variant="outline">Filter by Location</Button>
            </div>
          </CardContent>
        </Card>

        {/* Cameras Table */}
        <Card className="border-0 shadow-sm bg-white">
          <CardHeader>
            <CardTitle>All Cameras ({filteredCameras.length})</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="border-slate-200">
                    <TableHead>Camera</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Location</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Resolution</TableHead>
                    <TableHead>Last Seen</TableHead>
                    <TableHead className="w-[120px]">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredCameras.map((camera) => (
                    <TableRow key={camera.id} className="hover:bg-slate-50 border-slate-100">
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg overflow-hidden bg-slate-100">
                            <img src={camera.image} alt={camera.name} className="w-full h-full object-cover" />
                          </div>
                          <div>
                            <div className="font-medium text-slate-900">{camera.name}</div>
                            <div className="text-xs text-slate-500">{camera.ip}</div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>{getStatusBadge(camera.status)}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4 text-slate-400" />
                          <span>{camera.location}</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant="secondary">{camera.tag}</Badge>
                      </TableCell>
                      <TableCell>
                        <div className="text-sm">
                          <div>{camera.resolution}</div>
                          <div className="text-slate-500">{camera.fps}</div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-1">
                          {camera.status === 'online' && (
                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                          )}
                          <span className={camera.status === 'online' ? 'text-green-600 font-medium' : ''}>
                            {camera.lastSeen}
                          </span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-1">
                          <Dialog>
                            <DialogTrigger asChild>
                              <Button size="sm" variant="ghost" onClick={() => setSelectedCamera(camera)}>
                                <Play className="w-4 h-4" />
                              </Button>
                            </DialogTrigger>
                            <DialogContent className="max-w-4xl">
                              <DialogHeader>
                                <DialogTitle className="flex items-center gap-2">
                                  <Camera className="w-5 h-5" />
                                  {camera.name} - Live View
                                </DialogTitle>
                              </DialogHeader>
                              <div className="space-y-4">
                                <div className="relative aspect-video bg-slate-900 rounded-lg overflow-hidden">
                                  <img 
                                    src={camera.image} 
                                    alt={`${camera.name} live view`}
                                    className="w-full h-full object-cover"
                                  />
                                  <div className="absolute top-4 left-4 flex items-center gap-2 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                                    <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                                    LIVE
                                  </div>
                                  <div className="absolute top-4 right-4 bg-black/50 text-white px-2 py-1 rounded text-xs">
                                    {camera.resolution} • {camera.fps}
                                  </div>
                                </div>
                                <div className="grid grid-cols-2 gap-4 text-sm">
                                  <div><strong>Location:</strong> {camera.location}</div>
                                  <div><strong>IP Address:</strong> {camera.ip}</div>
                                  <div><strong>Status:</strong> {camera.status}</div>
                                  <div><strong>Type:</strong> {camera.tag}</div>
                                </div>
                              </div>
                            </DialogContent>
                          </Dialog>
                          <Button size="sm" variant="ghost">
                            <Settings className="w-4 h-4" />
                          </Button>
                          <Button size="sm" variant="ghost">
                            <MoreVertical className="w-4 h-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}
