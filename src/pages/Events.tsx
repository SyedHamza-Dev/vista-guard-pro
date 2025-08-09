
import Layout from "@/components/Layout";
import { Seo } from "@/components/Seo";
import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon, Download, Filter, Search, Eye, Clock, Camera, Shield } from "lucide-react";
import { Input } from "@/components/ui/input";
import { format } from "date-fns";

const mockEvents = [
  {
    id: 1,
    timestamp: "2024-01-15 14:30:15",
    camera: "Front Entrance",
    eventType: "Person Detected",
    severity: "low",
    description: "Individual approaching main entrance",
    thumbnail: "🎥",
    duration: "00:02:15"
  },
  {
    id: 2,
    timestamp: "2024-01-15 15:22:30",
    camera: "Parking Lot",
    eventType: "Vehicle Alert",
    severity: "high",
    description: "Unauthorized vehicle in restricted zone",
    thumbnail: "🚗",
    duration: "00:01:45"
  },
  {
    id: 3,
    timestamp: "2024-01-15 16:45:12",
    camera: "Lobby Area",
    eventType: "Sound Detection",
    severity: "medium",
    description: "Unusual noise levels detected",
    thumbnail: "🔊",
    duration: "00:00:30"
  },
  {
    id: 4,
    timestamp: "2024-01-15 18:10:05",
    camera: "Back Exit",
    eventType: "Door Access",
    severity: "high",
    description: "Emergency exit door opened",
    thumbnail: "🚪",
    duration: "00:03:20"
  },
  {
    id: 5,
    timestamp: "2024-01-15 19:35:45",
    camera: "Reception",
    eventType: "Motion Alert",
    severity: "low",
    description: "Movement detected after hours",
    thumbnail: "👤",
    duration: "00:01:10"
  }
];

export default function Events() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [searchTerm, setSearchTerm] = useState("");
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  const getSeverityBadge = (severity: string) => {
    switch (severity) {
      case 'high': return <Badge variant="destructive">High Priority</Badge>;
      case 'medium': return <Badge variant="warning">Medium</Badge>;
      case 'low': return <Badge variant="secondary">Low</Badge>;
      default: return <Badge variant="secondary">Unknown</Badge>;
    }
  };

  const getEventIcon = (eventType: string) => {
    switch (eventType.toLowerCase()) {
      case 'person detected': return <Shield className="w-4 h-4 text-blue-600" />;
      case 'vehicle alert': return <Camera className="w-4 h-4 text-red-600" />;
      case 'sound detection': return <Clock className="w-4 h-4 text-yellow-600" />;
      default: return <Eye className="w-4 h-4 text-slate-600" />;
    }
  };

  const filteredEvents = mockEvents.filter(event =>
    event.camera.toLowerCase().includes(searchTerm.toLowerCase()) ||
    event.eventType.toLowerCase().includes(searchTerm.toLowerCase()) ||
    event.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Layout>
      <Seo title="Events - Vista Guard Pro" description="Browse and analyze security events and recordings" />
      
      <div className="space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">Security Events</h1>
            <p className="text-slate-600 mt-1">Monitor and analyze security incidents across your premises</p>
          </div>
        </div>

        {/* Controls */}
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left side - Filters and Search */}
          <div className="lg:w-2/3 space-y-6">
            <Card className="border-0 shadow-sm bg-white">
              <CardHeader className="pb-4">
                <CardTitle className="text-lg">Event Filters</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex-1 min-w-[240px]">
                    <div className="relative">
                      <Search className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                      <Input
                        placeholder="Search events, cameras, or descriptions..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10"
                      />
                    </div>
                  </div>
                  <div className="flex gap-3 shrink-0">
                    <Popover open={isCalendarOpen} onOpenChange={setIsCalendarOpen}>
                      <PopoverTrigger asChild>
                        <Button variant="outline" className="w-full md:w-auto justify-start">
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {date ? format(date, "MMM dd, yyyy") : "Select date"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="end">
                        <Calendar
                          mode="single"
                          selected={date}
                          onSelect={(newDate) => {
                            setDate(newDate);
                            setIsCalendarOpen(false);
                          }}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                    <Button variant="outline">
                      <Filter className="mr-2 h-4 w-4" />
                      More Filters
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right side - Export Actions */}
          <div className="lg:w-1/3">
            <Card className="border-0 shadow-sm bg-white h-fit">
              <CardHeader className="pb-4">
                <CardTitle className="text-lg">Export Events</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="text-sm text-slate-600 mb-4">
                  Selected date: <span className="font-medium text-slate-900">{date?.toDateString()}</span>
                </div>
                <Button variant="outline" className="w-full">
                  <Download className="mr-2 h-4 w-4" />
                  Export as CSV
                </Button>
                <Button className="w-full bg-gradient-to-r from-sky-600 to-blue-600">
                  <Download className="mr-2 h-4 w-4" />
                  Generate PDF Report
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Events Table */}
        <Card className="border-0 shadow-sm bg-white">
          <CardHeader className="pb-4">
            <div className="flex items-center justify-between">
              <CardTitle>Recent Events ({filteredEvents.length})</CardTitle>
              <div className="text-sm text-slate-500">
                Showing events for {date?.toDateString()}
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="border-slate-200">
                    <TableHead className="w-[140px]">Timestamp</TableHead>
                    <TableHead>Event Type</TableHead>
                    <TableHead>Camera</TableHead>
                    <TableHead>Severity</TableHead>
                    <TableHead>Duration</TableHead>
                    <TableHead>Description</TableHead>
                    <TableHead className="w-[100px]">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredEvents.map((event) => (
                    <TableRow key={event.id} className="hover:bg-slate-50 border-slate-100">
                      <TableCell className="font-mono text-xs">
                        <div className="flex flex-col">
                          <span>{event.timestamp.split(' ')[1]}</span>
                          <span className="text-slate-500">{event.timestamp.split(' ')[0]}</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          {getEventIcon(event.eventType)}
                          <span className="font-medium">{event.eventType}</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Camera className="w-4 h-4 text-slate-400" />
                          <span>{event.camera}</span>
                        </div>
                      </TableCell>
                      <TableCell>{getSeverityBadge(event.severity)}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-1 text-sm text-slate-600">
                          <Clock className="w-3 h-3" />
                          {event.duration}
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="max-w-xs truncate text-slate-700">
                          {event.description}
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-1">
                          <Button size="sm" variant="ghost">
                            <Eye className="w-4 h-4" />
                          </Button>
                          <Button size="sm" variant="ghost">
                            <Download className="w-4 h-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
            
            {filteredEvents.length === 0 && (
              <div className="text-center py-8 text-slate-500">
                <Shield className="w-12 h-12 mx-auto text-slate-300 mb-4" />
                <p>No events found for the selected criteria.</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}
