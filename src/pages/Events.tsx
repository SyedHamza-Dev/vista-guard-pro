import Layout from "@/components/Layout";
import { Seo } from "@/components/Seo";
import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export default function Events() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <Layout>
      <Seo title="Events – Vista Guard Pro" description="Browse and export event reports" />
      <h1 className="text-3xl font-semibold mb-6">Events</h1>

      <div className="grid lg:grid-cols-2 gap-6 mb-8">
        <Card className="p-4">
          <Calendar mode="single" selected={date} onSelect={setDate} />
        </Card>
        <Card className="p-4 flex items-center justify-between">
          <div>
            <div className="text-sm text-muted-foreground">Selected date</div>
            <div className="text-xl font-medium">{date?.toDateString()}</div>
          </div>
          <div className="flex gap-3">
            <Button variant="outline">Export CSV</Button>
            <Button>Export PDF</Button>
          </div>
        </Card>
      </div>

      <Card>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Timestamp</TableHead>
              <TableHead>Camera</TableHead>
              <TableHead>Event Type</TableHead>
              <TableHead>Preview</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>2024-07-26 14:30:00</TableCell>
              <TableCell>Front Door</TableCell>
              <TableCell>Person Detected</TableCell>
              <TableCell>
                <div className="size-8 rounded-md bg-muted" />
              </TableCell>
              <TableCell className="text-primary">View</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>2024-07-26 15:00:00</TableCell>
              <TableCell>Garage</TableCell>
              <TableCell>Vehicle</TableCell>
              <TableCell>
                <div className="size-8 rounded-md bg-muted" />
              </TableCell>
              <TableCell className="text-primary">View</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Card>
    </Layout>
  );
}
