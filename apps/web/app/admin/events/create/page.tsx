import { Separator } from "@repo/ui/components/ui/separator";
import EventForm from "../components/event-form";

export default function SettingsAccountPage() {
  return (
    <div className="container">
      <h1 className="text-lg font-semibold md:text-2xl">Create an Event</h1>
      <div className="pt-4">
        <EventForm />
      </div>
    </div>
  );
}
