import React from "react";
import Image from "next/image";
import { Button } from "@repo/ui/button";
import {
  CalendarCheck,
  CalendarX,
  Home,
  MapPin,
  Timer,
  TimerOff,
  Users,
} from "lucide-react";

const EventsDetailsPage = () => {
  return (
    <div className="container py-4">
      <div>
        <Image
          src="/img1.jpg"
          alt="Vercel Logo"
          className="w-full max-h-72 rounded-xl overflow-hidden object-cover"
          width={1024}
          height={768}
        />
      </div>
      <div className="py-6">
        {/* Title */}
        <div className="flex justify-between items-center pb-4">
          <div className="flex flex-col justify-center content-center">
            <h2 className="text-3xl font-bold tracking-tight">
              Build a community of practice for UX leaders
            </h2>
            <p className="flex text-gray-500 font-normal tracking-tighter">
              <Users className="pr-2" color="gray" />
              50 Attendees
            </p>
          </div>
          <div>
            <Button variant="outline" className="p-5 text-base">
              Register
            </Button>
          </div>
        </div>

        {/* Details : Organizer/club, Venue, Start Date, End Date */}
        <div className="grid gap-6 lg:grid-cols-6">
          <div className="max-w-48 p-6 border rounded-lg flex flex-col justify-center items-center content-center">
            <div>
              <Home />
            </div>
            <div>
              <h5 className="mb-2 mt-3 text-2xl font-semibold tracking-tight ">
                Club
              </h5>
              <p className="mb-2 font-normal text-gray-500">SMC</p>
            </div>
          </div>

          <div className="max-w-48 p-6 border rounded-lg flex flex-col justify-center items-center content-center">
            <div>
              <MapPin />
            </div>
            <div>
              <h5 className="mb-2 mt-3 text-2xl font-semibold tracking-tight ">
                Venue
              </h5>
              <p className="mb-2 font-normal text-gray-500">LT-1</p>
            </div>
          </div>

          <div className="max-w-48 p-6 border rounded-lg flex flex-col justify-center items-center content-center">
            <div>
              <CalendarCheck />
            </div>
            <div>
              <h5 className="mb-2 mt-3 text-2xl font-semibold tracking-tight ">
                Start Date
              </h5>
              <p className="mb-2 font-normal text-gray-500">15th March 2024</p>
            </div>
          </div>

          <div className="max-w-48 p-6 border rounded-lg flex flex-col justify-center items-center content-center">
            <div>
              <CalendarX />
            </div>
            <div>
              <h5 className="mb-2 mt-3 text-2xl font-semibold tracking-tight ">
                End Date
              </h5>
              <p className="mb-2 font-normal text-gray-500">20th March 2024</p>
            </div>
          </div>

          <div className="max-w-48 p-6 border rounded-lg flex flex-col justify-center items-center content-center">
            <div>
              <Timer />
            </div>
            <div>
              <h5 className="mb-2 mt-3 text-2xl font-semibold tracking-tight ">
                Start Time
              </h5>
              <p className="mb-2 font-normal text-gray-500">10:00 AM</p>
            </div>
          </div>

          <div className="max-w-48 p-6 border rounded-lg flex flex-col justify-center items-center content-center">
            <div>
              <TimerOff />
            </div>
            <div>
              <h5 className="mb-2 mt-3 text-2xl font-semibold tracking-tight ">
                End Time
              </h5>
              <p className="mb-2 font-normal text-gray-500">08:00 PM</p>
            </div>
          </div>
        </div>

        {/* Description */}
        <div>
          <h4 className="text-2xl font-bold tracking-tight pt-4 pb-1">
            Description
          </h4>
          <p className="font-medium hidden md:block">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti,
            consequatur minus accusamus optio voluptatibus laboriosam. Eius
            dolores soluta natus ipsum, iste suscipit accusantium harum facilis
            minus officiis temporibus fuga amet, fugit at repellendus modi
            perspiciatis aspernatur molestiae voluptatibus minima in.
            Repellendus facilis corporis molestias est voluptatibus unde
            pariatur laudantium voluptates ducimus repellat reprehenderit quo
            nobis rerum illo, totam aperiam, amet, magni reiciendis harum
            ratione eos. Alias velit odio saepe deleniti perferendis, at
            incidunt modi non. Maxime impedit labore officiis soluta deleniti
            optio fuga. Quibusdam nemo distinctio et. Ullam magnam ratione
            placeat alias deleniti tempora, veniam neque? Quo blanditiis ratione
            soluta. Esse iusto ex distinctio est debitis totam blanditiis ea,
            explicabo placeat quae necessitatibus magni vitae! Illum fuga facere
            id earum mollitia adipisci officia ipsum? Sit pariatur eaque minima
            laboriosam, illum fugit accusamus aliquid adipisci quibusdam quos
            quia reiciendis, a sint? Repellendus quia in sint culpa totam, iusto
            sit inventore, voluptates repudiandae error hic iste optio. Ipsum
            amet eligendi praesentium mollitia omnis temporibus sit. Excepturi,
            maxime iure! Tenetur dolores in rerum molestiae quo non provident
            quia quae reiciendis tempore. Quo reiciendis dolore est asperiores
            ut quis, tempore dolor, atque eos assumenda, laborum molestiae
            provident nesciunt consequuntur corporis quibusdam repellat! Dolor,
            ut.
          </p>
        </div>

        {/* Contacts */}
        <div>
          <h4 className="text-2xl font-bold tracking-tight pt-4 pb-2">
            Contact Us
          </h4>
          <div className="flex gap-6">
            <div className="flex justify-center text-center gap-4 text-gray-500 dark:text-gray-400">
              <Image
                src="/profile-picture-3.jpg"
                alt="profile"
                height={728}
                width={1024}
                className="mx-auto mb-4 w-14 h-14 rounded-full"
              />
              <div>
                <h3 className="text-xl font-bold tracking-tight">
                  <a href="#">Bonnie Green</a>
                </h3>
                <p>Mob: 909090758715</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsDetailsPage;
