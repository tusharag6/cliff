"use client";

import { Table } from "@tanstack/react-table";

import { Input } from "@repo/ui/components/ui/input";
import { DataTableViewOptions } from "./event-table-view-options";

interface DataTableToolbarProps<TData> {
  table: Table<TData>;
}

export function DataTableToolbar<TData>({
  table,
}: DataTableToolbarProps<TData>) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-1 items-center space-x-2">
        <Input
          placeholder="Search Events..."
          value={
            (table.getColumn("eventName")?.getFilterValue() as string) ?? ""
          }
          onChange={(event) =>
            table.getColumn("eventName")?.setFilterValue(event.target.value)
          }
          className="h-8 w-[150px] lg:w-[250px]"
        />
      </div>
      <DataTableViewOptions table={table} />
    </div>
  );
}
