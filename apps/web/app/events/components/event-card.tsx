import React from "react";
import Image from "next/image";
import Link from "next/link";

const EventCard = () => {
  return (
    <Link href="/events/1">
      <div className="pb-4">
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
    </Link>
  );
};

export default EventCard;
