import EventForm from "../components/event-form";

export default function CreateEventePage() {
  return (
    <div className="h-full flex-1 flex-col space-y-4 p-8 flex">
      <div className="flex items-center justify-between space-y-2">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Create Events</h2>
          <p className="text-muted-foreground">
            Fill out the form below to create a new event.
          </p>
        </div>
      </div>
      <EventForm />
    </div>
  );
}
