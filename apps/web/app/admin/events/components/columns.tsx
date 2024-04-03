"use client";
import { ColumnDef } from "@tanstack/react-table";
import { EventFormType as Event } from "@repo/types";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";

import { Button } from "@repo/ui/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@repo/ui/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@repo/ui/components/ui/sheet";

export const columns: ColumnDef<Event>[] = [
  {
    accessorKey: "eventName",
    header: "Event Name",
  },
  {
    accessorKey: "organizedClub",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Club
          <ArrowUpDown className="h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "eventVenue",
    header: "Venue",
  },
  {
    accessorKey: "eventStartDateTime",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Date
          <ArrowUpDown className="h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const date = new Date(row.getValue("eventStartDateTime"));
      const day = date.getDate();
      const month = date.toLocaleString("default", { month: "long" });
      const formatted = `${day}${
        day === 1 ? "st" : day === 2 ? "nd" : day === 3 ? "rd" : "th"
      } ${month}`;
      return <span>{formatted}</span>;
    },
  },
  {
    accessorKey: "eventFinishDateTime",
    header: "Status",
    cell: ({ row }) => {
      const startDate = new Date(row.getValue("eventStartDateTime"));
      const endDate = new Date(row.getValue("eventFinishDateTime"));
      const currentDate = new Date();

      let status;
      if (currentDate < startDate) {
        status = "Upcoming";
      } else if (currentDate > endDate) {
        status = "Finished";
      } else {
        status = "Ongoing";
      }

      return <span>{status}</span>;
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const payment = row.original;

      return (
        <>
          <Sheet>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="h-8 w-8 p-0">
                  <span className="sr-only">Open menu</span>
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <SheetTrigger>
                  <DropdownMenuItem>More Details</DropdownMenuItem>
                </SheetTrigger>
                <DropdownMenuItem>Edit</DropdownMenuItem>
                <DropdownMenuItem>Delete</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Are you absolutely sure?</SheetTitle>
                <SheetDescription>
                  This action cannot be undone. This will permanently delete
                  your account and remove your data from our servers.
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </>
      );
    },
  },
];
