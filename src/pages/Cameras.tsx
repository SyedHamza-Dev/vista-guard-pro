import Layout from "@/components/Layout";
import { Seo } from "@/components/Seo";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const rows = [
  { name: "Front Door", status: "Online", location: "Main Entrance", tag: "Outdoor", last: "2 minutes ago" },
  { name: "Backyard", status: "Offline", location: "Backyard", tag: "Outdoor", last: "1 hour ago" },
  { name: "Living Room", status: "Online", location: "Living Room", tag: "Indoor", last: "5 minutes ago" },
  { name: "Garage", status: "Online", location: "Garage", tag: "Outdoor", last: "10 minutes ago" },
  { name: "Office", status: "Offline", location: "Office", tag: "Indoor", last: "2 hours ago" },
];

export default function Cameras() {
  return (
    <Layout>
      <Seo title="Cameras – Vista Guard Pro" description="Manage and monitor cameras" />
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-semibold">Cameras</h1>
      </div>
      <Card>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Location</TableHead>
              <TableHead>Tags</TableHead>
              <TableHead>Last Seen</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {rows.map((r) => (
              <TableRow key={r.name}>
                <TableCell>{r.name}</TableCell>
                <TableCell>
                  {r.status === "Online" ? (
                    <Badge variant="success">Online</Badge>
                  ) : (
                    <Badge variant="warning">Offline</Badge>
                  )}
                </TableCell>
                <TableCell>{r.location}</TableCell>
                <TableCell>
                  <Badge variant="secondary">{r.tag}</Badge>
                </TableCell>
                <TableCell>{r.last}</TableCell>
                <TableCell className="text-primary">View</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </Layout>
  );
}
