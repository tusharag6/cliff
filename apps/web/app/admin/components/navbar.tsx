"use client";
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
import {
  Badge,
  CalendarPlus,
  CalendarSearch,
  CircleUser,
  Home,
  LineChart,
  LogOut,
  Menu,
  Package,
  Package2,
  Search,
  Settings,
  Shield,
  ShoppingCart,
  Ticket,
  User,
  Users,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navbar = () => {
  const currentUrl = usePathname();

  return (
    <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="shrink-0 md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="flex flex-col">
          <nav className="grid gap-2 text-lg font-medium">
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
        </SheetContent>
      </Sheet>
      <div className="w-full flex-1">
        <Button variant={"outline"}>Go To Home</Button>
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="secondary" size="icon" className="rounded-full">
            <CircleUser className="h-5 w-5" />
            <span className="sr-only">Toggle user menu</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Shield className="pr-2" />
            Admin
          </DropdownMenuItem>
          <DropdownMenuItem>
            <User className="pr-2" />
            Profile
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Settings className="pr-2" />
            Settings
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <LogOut className="pr-2" />
            Logout
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  );
};

export default Navbar;
