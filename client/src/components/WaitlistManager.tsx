import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Mail, CheckCircle2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface WaitlistEntry {
  id: string;
  email: string;
  position: number;
  joinedAt: string;
}

export default function WaitlistManager() {
  const [email, setEmail] = useState("");
  const [joined, setJoined] = useState(false);
  const [entries, setEntries] = useState<WaitlistEntry[]>([
    { id: '1', email: 'user1@example.com', position: 1, joinedAt: '2024-01-15' },
    { id: '2', email: 'user2@example.com', position: 2, joinedAt: '2024-01-16' },
    { id: '3', email: 'user3@example.com', position: 3, joinedAt: '2024-01-17' }
  ]);
  const { toast } = useToast();

  const joinWaitlist = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      const newEntry: WaitlistEntry = {
        id: Date.now().toString(),
        email,
        position: entries.length + 1,
        joinedAt: new Date().toISOString().split('T')[0]
      };
      setEntries([...entries, newEntry]);
      setJoined(true);
      console.log('Joined waitlist:', newEntry);
      toast({
        title: "Welcome!",
        description: `You're #${newEntry.position} on the waitlist.`,
      });
    }
  };

  return (
    <div className="space-y-6">
      <Card className="p-8 text-center">
        {!joined ? (
          <div className="max-w-md mx-auto space-y-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mx-auto">
              <Mail className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold">Join the Waitlist</h3>
            <p className="text-muted-foreground">
              Be the first to know when we launch. Get exclusive early access.
            </p>
            <form onSubmit={joinWaitlist} className="space-y-3">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                data-testid="input-waitlist-email"
              />
              <Button type="submit" className="w-full" data-testid="button-join-waitlist">
                Join Waitlist
              </Button>
            </form>
            <p className="text-xs text-muted-foreground">
              {entries.length} people already joined
            </p>
          </div>
        ) : (
          <div className="max-w-md mx-auto space-y-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mx-auto">
              <CheckCircle2 className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold">You're In!</h3>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">#{entries.length}</div>
              <p className="text-muted-foreground">in line</p>
            </div>
            <p className="text-sm text-muted-foreground">
              We'll notify you at <span className="font-medium text-foreground">{email}</span>
            </p>
          </div>
        )}
      </Card>

      <Card className="p-6">
        <h3 className="text-xl font-semibold mb-4">Waitlist Entries</h3>
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Position</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Joined</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {entries.map((entry) => (
                <TableRow key={entry.id} data-testid={`row-waitlist-${entry.id}`}>
                  <TableCell className="font-mono">#{entry.position}</TableCell>
                  <TableCell>{entry.email}</TableCell>
                  <TableCell className="text-muted-foreground">{entry.joinedAt}</TableCell>
                  <TableCell>
                    <Badge variant="secondary">Waiting</Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </Card>
    </div>
  );
}
