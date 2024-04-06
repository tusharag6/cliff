import { Button } from "@repo/ui/components/ui/button";
import Link from "next/link";
import { Copy } from "lucide-react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@repo/ui/components/ui/dialog";
import { Input } from "@repo/ui/components/ui/input";
import { Label } from "@repo/ui/components/ui/label";
import WinnerDeclareForm from "../components/winner-declare-form";

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
            <Dialog>
              <DialogTrigger asChild>
                <Button>Grand Prize</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader className="flex items-start text-start">
                  <DialogTitle>Declare Winners</DialogTitle>
                </DialogHeader>
                <WinnerDeclareForm />
                <DialogFooter className="justify-between gap-2 flex-row items-center">
                  <DialogClose asChild>
                    <Button type="button" variant="secondary">
                      Close
                    </Button>
                  </DialogClose>
                  <Button type="submit">Announce</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
            <Dialog>
              <DialogTrigger asChild>
                <Button variant={"outline"}>Honorable Mentions</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader className="flex items-start text-start">
                  <DialogTitle>Declare Honorable Mentions</DialogTitle>
                </DialogHeader>
                <WinnerDeclareForm />
                <DialogFooter className="justify-between gap-2 flex-row items-center">
                  <DialogClose asChild>
                    <Button type="button" variant="secondary">
                      Close
                    </Button>
                  </DialogClose>
                  <Button type="submit">Announce</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
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
