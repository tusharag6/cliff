"use client";
import Link from "next/link";
import {
  Bell,
  CalendarPlus,
  CalendarSearch,
  CircleUser,
  Home,
  LineChart,
  Menu,
  Package,
  Package2,
  Search,
  ShoppingCart,
  Users,
} from "lucide-react";

import { Badge } from "@repo/ui/components/ui/badge";
import { Button } from "@repo/ui/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@repo/ui/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@repo/ui/components/ui/dropdown-menu";
import { Input } from "@repo/ui/components/ui/input";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@repo/ui/components/ui/sheet";
import { usePathname } from "next/navigation";

export function Sidebar() {
  const currentUrl = usePathname();

  return (
    <div className="hidden border-r bg-muted/40 md:block">
      <div className="flex h-full max-h-screen flex-col gap-2">
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
              <Link href="/admin/events/create">
                <Button
                  variant={
                    currentUrl === "/admin/events/create"
                      ? "secondary"
                      : "ghost"
                  }
                  className="w-full mb-1 justify-start text-muted-foreground transition-all hover:text-primary"
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
                  className="w-full mb-1 justify-start text-muted-foreground transition-all hover:text-primary"
                >
                  <CalendarSearch className="mr-2 h-4 w-4" />
                  View all Events
                </Button>
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}
