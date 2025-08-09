import { Seo } from "@/components/Seo";
import Layout from "@/components/Layout";
import cam1 from "@/assets/cam1.jpg";
import cam2 from "@/assets/cam2.jpg";
import cam3 from "@/assets/cam3.jpg";
import cam4 from "@/assets/cam4.jpg";
import { Card } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";

const feeds = [cam1, cam2, cam3, cam4];

export default function Dashboard() {
  return (
    <Layout>
      <Seo title="Dashboard – Vista Guard Pro" description="Overview of cameras and alerts" />
      <h1 className="text-3xl font-semibold mb-6">Dashboard</h1>

      <section className="mb-8">
        <h2 className="text-lg font-medium mb-3">Live Feeds</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {feeds.map((src, idx) => (
            <Card key={idx} className="overflow-hidden hover-scale">
              <img src={src} alt={`Camera ${idx + 1} live feed`} loading="lazy" className="w-full h-40 object-cover" />
            </Card>
          ))}
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-lg font-medium mb-3">Recent Alerts</h2>
        <Card>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Time</TableHead>
                <TableHead>Camera</TableHead>
                <TableHead>Event</TableHead>
                <TableHead>Description</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>10:15 AM</TableCell>
                <TableCell>Parking Lot</TableCell>
                <TableCell>Motion</TableCell>
                <TableCell>Person walking towards the building</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>11:30 AM</TableCell>
                <TableCell>Front Entrance</TableCell>
                <TableCell>Door Opened</TableCell>
                <TableCell>Front door opened and closed</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>12:45 PM</TableCell>
                <TableCell>Lobby</TableCell>
                <TableCell>Sound</TableCell>
                <TableCell>Loud noise in the lobby</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Card>
      </section>

      <section>
        <h2 className="text-lg font-medium mb-3">Quick Actions</h2>
        <div className="flex gap-3 flex-wrap">
          <Button variant="soft">Camera Configuration</Button>
          <Button variant="outline">Event Reports</Button>
        </div>
      </section>
    </Layout>
  );
}
