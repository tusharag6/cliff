import React from "react";
import EventCard from "./components/event-card";
import { Button } from "@repo/ui/components/ui/button";
import { Icons } from "@repo/ui/components/icons";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@repo/ui/components/ui/tabs";
import Link from "next/link";
import Image from "next/image";

const Page = () => {
  const products = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // Assuming you have an array of products

  return (
    <div className="container px-32">
      <div className="flex items-center justify-between content-center space-y-5">
        <div className="flex flex-col justify-center content-center">
          <h2 className="text-3xl font-bold tracking-tight pt-3">Events</h2>
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

      <div className="hidden md:block pt-2 text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
        <ul className="flex flex-wrap -mb-px">
          <li className="me-2">
            <Link
              href="#"
              className="pl-0 inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
            >
              Today
            </Link>
          </li>
          <li className="me-2">
            <Link
              href="#"
              className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
            >
              Tomorrow
            </Link>
          </li>
          <li className="me-2">
            <Link
              href="#"
              className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
            >
              This Weekend
            </Link>
          </li>
          <li className="me-2">
            <Link
              href="#"
              className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
            >
              This Week
            </Link>
          </li>
          <li className="me-2">
            <Link
              href="#"
              className="inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500"
              aria-current="page"
            >
              All Dates
            </Link>
          </li>
        </ul>
      </div>

      <div>
        <h3 className="text-xl font-bold tracking-tight py-4">
          Featured Events
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 py-4">
          {products.map((product, index) => (
            <EventCard key={index} />
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-xl font-bold tracking-tight py-4">
          Popular Events
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          <div className="pb-4">
            <Image
              className="rounded-xl"
              src="/event.jpg"
              alt="event image"
              height={400}
              width={300}
            />
            <div>
              <h4 className="text-base font-semibold tracking-tight pt-2">
                Live Music
              </h4>
              <p className="text-sm text-muted-foreground font-medium">
                Sat, June 26, 7:00 PM
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;

// Document ID
// club
// clubmembersic1
// clubmembersic2
// currentUser
//eventVenue
//eventdescription
// eventfinishdatetime
// eventname
// eventstartdatetime
// image_url
// is_team_event
// max_team_members
// registered_participants
// registered_teams
//team_name
// team_members
// idea
// idea_description
