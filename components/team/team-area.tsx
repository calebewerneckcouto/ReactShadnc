import { members } from "@/app/data/members";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { TeamItem } from "./team-item";

export const TeamArea = () => {
  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle>Team Members</CardTitle>
        <CardDescription>
          Invite your team members to collaborate.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        {members.map((item) => (
          <TeamItem key={item.id} data={item} />
        ))}
      </CardContent>
    </Card>
  );
};
