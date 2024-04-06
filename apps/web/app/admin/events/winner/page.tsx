import { Button } from "@repo/ui/components/ui/button";
import Link from "next/link";

export default function WinnersPage() {
  return (
    <div className="flex flex-1 flex-col gap-4 px-4 lg:gap-6 lg:px-6">
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-semibold md:text-2xl">Declare Winner</h1>
        <Button asChild variant={"outline"}>
          <Link
            href="/admin/events/winner/previous"
            className="hidden min-[475px]:block"
          >
            Previous Winners
          </Link>
        </Button>
      </div>
      <div className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm px-4 sm:px-0">
        <div className="flex flex-col items-center gap-1 text-center">
          <h3 className="text-2xl font-bold tracking-tight">
            Want to declare a winner?
          </h3>
          <p className="text-sm text-muted-foreground">
            Click on the button below to declare the winner of the event.
          </p>
          <div className="flex gap-4 items-center justify-center mt-4 flex-col min-[475px]:flex-row">
            <Button>Grand Prize</Button>
            <Button variant={"outline"}>Honorable Mentions</Button>
            <Button
              asChild
              variant={"outline"}
              className="block min-[475px]:hidden"
            >
              <Link href="/admin/events/winner/previous">Previous Winners</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
