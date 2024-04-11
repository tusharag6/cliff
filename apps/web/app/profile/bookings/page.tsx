import React from "react";
import Image from "next/image";
import { Upload } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@repo/ui/components/ui/card";
import { Button } from "@repo/ui/components/ui/button";
import { Icons } from "@repo/ui/components/icons";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@repo/ui/components/ui/tabs";
import BookingsCard from "../_components/bookings-card";

const BookingsPage = () => {
  return (
    <div className="container">
      <div className="flex items-center justify-between content-center space-y-5">
        <div className="flex flex-col justify-center content-center">
          <h2 className="text-3xl font-bold tracking-tight pt-3">Bookings</h2>
          <p className="text-muted-foreground font-medium hidden md:block">
            Find best events in your college.
          </p>
        </div>
        <div className="flex items-center space-x-2 md:hidden">
          <Button variant="outline">
            <Icons.filter className="mr-2 h-4 w-4" />
            Filters
          </Button>
        </div>
      </div>

      <Tabs defaultValue="ongoing" className="mt-4">
        <TabsList>
          <TabsTrigger value="ongoing">Ongoing</TabsTrigger>
          <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
          <TabsTrigger value="past">Past</TabsTrigger>
        </TabsList>
        <TabsContent value="ongoing" className="grid grid-cols-4 gap-4">
          <BookingsCard />
          <BookingsCard />
          <BookingsCard />
          <BookingsCard />
          <BookingsCard />
          <BookingsCard />
          <BookingsCard />
          <BookingsCard />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default BookingsPage;
