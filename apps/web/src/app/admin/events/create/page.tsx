import { Separator } from "@repo/ui/separator";
import EventForm from "../components/event-form";

export default function SettingsAccountPage() {
  return (
    <div className="container ">
      <h2 className="text-3xl font-bold tracking-tight pb-4">
        Create an Event
      </h2>
      <EventForm />
    </div>
  );
}
