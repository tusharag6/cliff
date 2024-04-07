"use client";
import { ColumnDef } from "@tanstack/react-table";
import { EventFormType as Event } from "@repo/types";
import { Badge } from "@repo/ui/components/ui/badge";
import { DataTableColumnHeader } from "./event-table-column-header";
import { DataTableRowActions } from "./event-table-row-actions";

export const columns: ColumnDef<Event>[] = [
  {
    accessorKey: "eventName",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Event Name" />
    ),
    cell: ({ row }) => {
      return (
        <div className="max-w-[500px] truncate font-medium">
          {row.getValue("eventName")}
        </div>
      );
    },
    enableHiding: false,
  },
  {
    accessorKey: "organizedClub",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Club" />
    ),
    cell: ({ row }) => {
      return (
        <div className="max-w-[100px] truncate font-medium">
          {row.getValue("organizedClub")}
        </div>
      );
    },
  },
  {
    accessorKey: "eventVenue",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Venue" />
    ),
    cell: ({ row }) => {
      return (
        <div className="max-w-[100px] truncate font-medium">
          {row.getValue("eventVenue")}
        </div>
      );
    },
  },
  {
    accessorKey: "eventStartDateTime",
    header: ({ column }) => {
      <DataTableColumnHeader column={column} title="Start Date" />;
    },
    cell: ({ row }) => {
      const date = new Date(row.getValue("eventStartDateTime"));
      const day = date.getDate();
      const month = date.toLocaleString("default", { month: "long" });
      const formatted = `${day}${
        day === 1 ? "st" : day === 2 ? "nd" : day === 3 ? "rd" : "th"
      } ${month}`;
      return (
        <div className="max-w-[100px] truncate font-medium">{formatted}</div>
      );
    },
  },
  {
    accessorKey: "eventFinishDateTime",
    header: ({ column }) => {
      <DataTableColumnHeader column={column} title="Status" />;
    },
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

      <div className="max-w-[100px] truncate font-medium">
        {status && <Badge variant="outline">{status}</Badge>}
      </div>;
    },
  },
  {
    id: "actions",
    cell: ({ row }) => <DataTableRowActions row={row} />,
  },
];
