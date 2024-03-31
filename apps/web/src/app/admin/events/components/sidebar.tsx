"use client";
import { Button } from "@repo/ui/button";
import { CalendarPlus, CalendarSearch } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Sidebar() {
  const currentUrl = usePathname();

  return (
    <div className="pb-12">
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            Events
          </h2>
          <div className="space-y-1">
            <Link href="/admin/events/create">
              <Button
                variant={
                  currentUrl === "/admin/events/create" ? "secondary" : "ghost"
                }
                className="w-full justify-start"
              >
                <CalendarPlus className="mr-2 h-4 w-4" />
                Add New Event
              </Button>
            </Link>
            <Link href="/admin/events/all-events">
              <Button
                variant={
                  currentUrl === "/admin/events/all-events"
                    ? "secondary"
                    : "ghost"
                }
                className="w-full justify-start"
              >
                <CalendarSearch className="mr-2 h-4 w-4" />
                View all Events
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
