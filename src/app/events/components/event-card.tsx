import React from "react";
import Image from "next/image";

const EventCard = () => {
  return (
    <div className="pb-4 w-60">
      <Image
        className="rounded-2xl"
        src="/event.jpg"
        alt="event image"
        height={400}
        width={400}
      />
      <div>
        <h4 className="text-base font-semibold tracking-tight pt-2">
          Live Music
        </h4>
        <p className="text-sm text-muted-foreground font-medium">
          Sat, June 26, 7:00 PM
        </p>
      </div>
    </div>
  );
};

export default EventCard;
