import Image from "next/image";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@repo/ui/components/ui/card";
import { Badge } from "@repo/ui/components/ui/badge";

export default function BookingsCard() {
  return (
    <Card className="overflow-hidden">
      <CardContent>
        <Image
          alt="Product image"
          className="aspect-square w-full rounded-md object-cover mt-4"
          height="300"
          src="/img1.jpg"
          width="300"
        />
        <CardHeader className="p-0 pt-4">
          <CardTitle>Event Name</CardTitle>
          <CardDescription className="space-x-2">
            <Badge variant={"outline"}>15th March</Badge>
            <Badge variant={"outline"}>7:30 PM</Badge>
            <Badge>2 Person</Badge>
          </CardDescription>
        </CardHeader>
      </CardContent>
    </Card>
  );
}
