"use client";
import Link from "next/link";
import {
  Bell,
  CalendarPlus,
  CalendarSearch,
  Package2,
  Users,
} from "lucide-react";

import { Button } from "@repo/ui/components/ui/button";
import { usePathname } from "next/navigation";

export function Sidebar() {
  const currentUrl = usePathname();

  return (
    <div className="hidden h-full min-h-screen border-r bg-muted/40 md:block">
      <div className="flex flex-col gap-2">
        <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <Package2 className="h-6 w-6" />
            <span className="">Cliff</span>
          </Link>
          <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
            <Bell className="h-4 w-4" />
            <span className="sr-only">Toggle notifications</span>
          </Button>
        </div>
        <div className="flex-1">
          <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
            {/* Events */}
            <div>
              <h2 className="px-2 text-lg font-semibold tracking-tight">
                Events
              </h2>
              <Button
                asChild
                variant={
                  currentUrl === "/admin/events/create" ? "secondary" : "ghost"
                }
                className="w-full mb-1 justify-start transition-all hover:text-primary"
              >
                <Link href="/admin/events/create">
                  <CalendarPlus className="mr-2 h-4 w-4" />
                  Add New Event
                </Link>
              </Button>
              <Button
                asChild
                variant={
                  currentUrl === "/admin/events/all-events"
                    ? "secondary"
                    : "ghost"
                }
                className="w-full mb-1 justify-start transition-all hover:text-primary"
              >
                <Link href="/admin/events/all-events">
                  <CalendarSearch className="mr-2 h-4 w-4" />
                  Manage Events
                </Link>
              </Button>
              <Button
                asChild
                variant={
                  currentUrl === "/admin/events/all-registrations"
                    ? "secondary"
                    : "ghost"
                }
                className="w-full mb-1 justify-start transition-all hover:text-primary"
              >
                <Link href="/admin/events/all-registrations">
                  <Users className="mr-2 h-4 w-4" />
                  Manage Registrations
                </Link>
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}
