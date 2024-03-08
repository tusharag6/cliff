import { z } from "zod";
export const eventFormSchema = z.object({
  eventName: z
    .string()
    .min(2, {
      message: "Event name must be at least 2 characters.",
    })
    .max(50, {
      message: "Event name must not be longer than 50 characters.",
    }),
  eventDescription: z.string().max(200, {
    message: "Event description must not be longer than 200 characters.",
  }),
  eventStartDateTime: z.date({
    required_error: "Please select a start date and time for the event.",
  }),
  eventFinishDateTime: z.date({
    required_error: "Please select a finish date and time for the event.",
  }),
  eventVenue: z.string().max(100, {
    message: "Event venue must not be longer than 100 characters.",
  }),
  organizedClub: z.string().max(50, {
    message: "Please select the club organizing the event.",
  }),
  eventImage: z.string().url({
    message: "Event image must be a valid URL.",
  }),
  contactMembersDetails: z.string().max(200, {
    message: "Contact members must be selected.",
  }),
  isTeamEvent: z.boolean(),
  maxTeamMembers: z.number().min(1, {
    message: "Maximum team members must be at least 1.",
  }),
});

export type EventFormType = z.infer<typeof eventFormSchema>;
