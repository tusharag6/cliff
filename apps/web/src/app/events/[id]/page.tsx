import React from "react";
import { Icons } from "@repo/ui/icons";
import Image from "next/image";
import EventsImageCarousel from "../components/event-image-carousel";
import { RegisterEventCard } from "../components/register-card";

const EventsDetailsPage = () => {
  return (
    <div className="container px-32 py-4">
      <div>
        <Image
          src="/img1.jpg"
          alt="Vercel Logo"
          className="w-full max-h-72 rounded-xl overflow-hidden object-cover"
          width={1024}
          height={768}
        />
      </div>
      <div className="grid grid-cols-3 gap-8 py-6">
        <div className="col-span-2">
          <div className="flex items-center justify-between content-center space-y-5">
            <div className="flex flex-col justify-center content-center">
              <h2 className="text-3xl font-bold tracking-tight pt-3">
                Build a community of practice for UX leaders
              </h2>
              <p className="text-muted-foreground font-medium hidden md:block">
                Wed, May 4 2022, 6:00 PM IST
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center content-center gap-1">
            <h4 className="text-2xl font-bold tracking-tight pt-3">
              Description
            </h4>
            <p className="font-medium hidden md:block">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae
              magnam facere quos rerum delectus! Possimus architecto, eos odio
              consectetur voluptate doloremque fuga quibusdam incidunt earum
              illum, atque fugiat quia officia.
            </p>
          </div>
          <div className="">
            <h4 className="text-2xl font-bold tracking-tight pt-3">Agenda</h4>
            <div className="flex content-center items-center gap-4">
              <span className="p-3 rounded-lg bg-accent mt-1">
                <Icons.people />
              </span>
              <div className="flex flex-col justify-center content-center">
                <h4 className="font-bold tracking-tight pt-3">Networking</h4>
                <p className="text-muted-foreground font-medium hidden md:block">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero,
                  aperiam?
                  <br />
                  6:00 PM IST
                </p>
              </div>
            </div>

            <div className="flex content-center items-center gap-4">
              <span className="p-3 rounded-lg bg-accent mt-1">
                <Icons.people />
              </span>
              <div className="flex flex-col justify-center content-center">
                <h4 className="font-bold tracking-tight pt-3">Networking</h4>
                <p className="text-muted-foreground font-medium hidden md:block">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero,
                  aperiam?
                  <br />
                  6:00 PM IST
                </p>
              </div>
            </div>

            <div className="flex content-center items-center gap-4">
              <span className="p-3 rounded-lg bg-accent mt-1">
                <Icons.people />
              </span>
              <div className="flex flex-col justify-center content-center">
                <h4 className="font-bold tracking-tight pt-3">Networking</h4>
                <p className="text-muted-foreground font-medium hidden md:block">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero,
                  aperiam?
                  <br />
                  6:00 PM IST
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center content-center gap-4">
            <h4 className="text-2xl font-bold tracking-tight pt-3">
              Organizer
            </h4>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-4">
                <Image
                  className="w-10 h-10 rounded-full"
                  src="/img1.jpg"
                  alt="Avatar"
                  width={100}
                  height={24}
                />
                <div className="font-medium dark:text-white">
                  <div>Jese Leos</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    +91-1234567890
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Image
                  className="w-10 h-10 rounded-full"
                  src="/img1.jpg"
                  alt="Avatar"
                  width={100}
                  height={24}
                />
                <div className="font-medium dark:text-white">
                  <div>Jese Leos</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    +91-1234567890
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <RegisterEventCard />
        </div>
      </div>
    </div>
  );
};

export default EventsDetailsPage;
