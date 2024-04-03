import { Button } from "@repo/ui/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@repo/ui/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@repo/ui/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@repo/ui/components/ui/accordion";

import { CircleUser, LogOut, Menu, Settings, Shield, User } from "lucide-react";
import Link from "next/link";
import React from "react";

const Navbar = () => {
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
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1" className="border-b-0">
                <AccordionTrigger className="pb-1">Events</AccordionTrigger>
                <AccordionContent className="p-0">
                  <Button
                    asChild
                    variant={"link"}
                    className="w-full justify-start transition-all hover:text-primary"
                  >
                    <Link href="/admin/events/create">Add New Event</Link>
                  </Button>
                  <Button
                    asChild
                    variant={"link"}
                    className="w-full justify-start transition-all hover:text-primary"
                  >
                    <Link href="/admin/events/all-events">View all Events</Link>
                  </Button>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </nav>
        </SheetContent>
      </Sheet>
      <div className="w-full flex-1">
        <Button asChild variant={"outline"}>
          <Link href="/">Go To Home</Link>
        </Button>{" "}
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
            <Link href="/admin/events/create" className="flex items-center">
              <Shield className="pr-2 text-muted-foreground" />
              <span>Admin</span>
            </Link>
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
