import { columns } from "../components/columns";
import { DataTable } from "../components/data-table";
import { EventFormType, eventFormSchema } from "@repo/types";

export const events: EventFormType[] = [
  {
    eventName: "Hackathon 2023",
    eventDescription:
      "A weekend-long hackathon focused on building innovative solutions.",
    eventStartDateTime: "2023-10-27T09:00:00",
    eventFinishDateTime: "2023-10-29T18:00:00",
    eventVenue: "Tech Hub Innovation Center",
    organizedClub: "Computer Science Club",
    eventImage: "https://example.com/hackathon2023.jpg",
    contactMembersDetails: ["12345678", "87654321"],
    isTeamEvent: true,
    maxTeamMembers: 4,
    registeredTeams: [
      {
        teamName: "The Coders",
        idea: "Smart Home Automation System",
        ideaDescription:
          "A user-friendly system to control lights, temperature, and appliances remotely.",
        teamMembers: ["12345678", "23456789", "34567890", "12345678"],
      },
      {
        teamName: "The Creatives",
        idea: "AI-powered Educational Platform",
        ideaDescription:
          "A personalized learning platform that adapts to individual needs.",
        teamMembers: ["87654321", "98765432", "10987654"],
      },
    ],
  },
  {
    eventName: "Introduction to Python Programming",
    eventDescription:
      "Learn the basics of Python, a versatile programming language.",
    eventStartDateTime: "2024-09-15T10:00:00",
    eventFinishDateTime: "2024-09-15T17:00:00",
    eventVenue: "University Library, Computer Lab",
    organizedClub: "Programming Enthusiasts",
    contactMembersDetails: ["54321098"],
    isTeamEvent: false,
    registeredParticipants: ["11223344", "55667788"],
    eventImage: "https://example.com/hackathon2023.jpg",
    registeredTeams: [],
    maxTeamMembers: 0,
  },
  {
    eventName: "RoboFest 2023",
    eventDescription:
      "A national robotics competition for high school students.",
    eventStartDateTime: "2023-04-20T09:00:00",
    eventFinishDateTime: "2023-04-22T17:00:00",
    eventVenue: "National Stadium Complex",
    organizedClub: "National Robotics Association",
    eventImage: "https://example.com/robofest2023.jpg",
    contactMembersDetails: ["90123456", "78901234"],
    isTeamEvent: true,
    maxTeamMembers: 6,
    registeredTeams: [
      {
        teamName: "Gearheads",
        idea: "Line Following and Obstacle Avoiding Robot",
        ideaDescription:
          "A robot designed to navigate a complex course accurately and efficiently.",
        teamMembers: ["11122233", "22233344", "33344455", "44455566"],
      },
      {
        teamName: "The Innovators",
        idea: "AI-powered Object Sorting Robot",
        ideaDescription:
          "A robot that uses computer vision to sort objects based on color and shape.",
        teamMembers: ["55566677", "66677788", "77788899"],
      },
    ],
  },
  {
    eventName: "Building a Successful Startup",
    eventDescription:
      "Learn from experts on launching and growing your own business.",
    eventStartDateTime: "2025-02-10T09:00:00",
    eventFinishDateTime: "2025-02-10T13:00:00",
    eventVenue: "Convention Center, Hall A",
    organizedClub: "Business Incubator",
    contactMembersDetails: ["12378901"],
    isTeamEvent: false,
    registeredParticipants: ["89012345", "01234567"],
    eventImage: "https://example.com/hackathon2023.jpg",
    registeredTeams: [],
    maxTeamMembers: 0,
  },
  {
    eventName: "Introduction to Data Analysis with Python",
    eventDescription:
      "Learn how to use Python libraries for data cleaning, manipulation, and visualization.",
    eventStartDateTime: "2024-10-26T10:00:00",
    eventFinishDateTime: "2024-10-26T17:00:00",
    eventVenue: "University Lecture Hall 3",
    organizedClub: "Data Science Society",
    contactMembersDetails: ["34567890"],
    isTeamEvent: false,
    registeredParticipants: ["22334455", "66778899"],
    eventImage: "https://example.com/hackathon2023.jpg",
    registeredTeams: [],
    maxTeamMembers: 0,
  },
  {
    eventName: "International Film Festival Screening",
    eventDescription:
      "A showcase of award-winning films from around the world.",
    eventStartDateTime: "2023-11-18T19:00:00",
    eventFinishDateTime: "2023-11-18T21:00:00",
    eventVenue: "University Auditorium",
    organizedClub: "Film Appreciation Club",
    contactMembersDetails: ["45678901"],
    isTeamEvent: false,
    registeredParticipants: ["33445566", "77889900"],
    eventImage: "https://example.com/hackathon2023.jpg",
    registeredTeams: [],
    maxTeamMembers: 0,
  },
  {
    eventName: "Game Jam: Create the Next Big Hit!",
    eventDescription:
      "A 48-hour hackathon to develop a playable game prototype.",
    eventStartDateTime: "2024-12-13T18:00:00",
    eventFinishDateTime: "2024-12-15T18:00:00",
    eventVenue: "Online",
    organizedClub: "Game Development Club",
    contactMembersDetails: ["56789012", "90123456"],
    isTeamEvent: true,
    maxTeamMembers: 5,
    eventImage: "https://example.com/hackathon2023.jpg",
    registeredTeams: [],
  },
  {
    eventName: "Master the Art of Public Speaking",
    eventDescription:
      "Learn techniques to deliver clear, confident, and engaging presentations.",
    eventStartDateTime: "2025-03-22T09:00:00",
    eventFinishDateTime: "2025-03-22T13:00:00",
    eventVenue: "Community Center Auditorium",
    organizedClub: "Toastmasters International",
    contactMembersDetails: ["01234567"],
    isTeamEvent: false,
    registeredParticipants: ["12345678", "23456789"],
    eventImage: "https://example.com/hackathon2023.jpg",
    registeredTeams: [],
    maxTeamMembers: 0,
  },
  {
    eventName: "AI for Social Good Conference",
    eventDescription:
      "Explore how artificial intelligence is being used to tackle global challenges.",
    eventStartDateTime: "2025-05-15T09:00:00",
    eventFinishDateTime: "2025-05-17T17:00:00",
    eventVenue: "Convention Center, Hall B",
    organizedClub: "Artificial Intelligence Society",
    contactMembersDetails: ["78901234", "89012345"],
    isTeamEvent: false,
    eventImage: "https://example.com/hackathon2023.jpg",
    registeredTeams: [],
    maxTeamMembers: 0,
  },
  {
    eventName: "Virtual Career Fair",
    eventDescription:
      "Connect with top companies and explore career opportunities.",
    eventStartDateTime: "2024-11-14T10:00:00",
    eventFinishDateTime: "2024-11-14T16:00:00",
    eventVenue: "Online",
    organizedClub: "Career Services Center",
    contactMembersDetails: ["10112233"],
    isTeamEvent: false,
    registeredParticipants: ["45678901", "56789012"],
    eventImage: "https://example.com/hackathon2023.jpg",
    registeredTeams: [],
    maxTeamMembers: 0,
  },
];

export default async function AllEventsPage() {
  return (
    <div className="h-full flex-1 flex-col space-y-8 p-8 flex">
      <div className="flex items-center justify-between space-y-2">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Manage Events</h2>
          <p className="text-muted-foreground">
            Here's a list of events you can manage.
          </p>
        </div>
      </div>
      <DataTable data={events} columns={columns} />
    </div>
  );
}
