import { z } from "zod";

export const SignUpSchema = z.object({
  userName: z
    .string()
    .min(2, { message: "Username must be at least 2 characters long." })
    .max(50, { message: "Username can't be longer than 50 characters." }),
  sic: z
    .string()
    .length(8, { message: "SIC should be exactly 8 characters long." })
    .regex(/^[a-zA-Z0-9]*$/, {
      message: "SIC should only contain alphanumeric characters.",
    }),
  branch: z
    .string()
    .regex(/^(cse|cen|cst|ece|eie|eee)$/, { message: "Must select a branch." }),
  year: z
    .string()
    .regex(/^(first|second|third|fourth)$/, { message: "Must select a year." }),
  phoneNumber: z
    .string()
    .length(10, { message: "Phone number should be exactly 10 digits long." })
    .regex(/^\d{10}$/, { message: "Phone number should only contain digits." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters long." })
    .max(20, { message: "Password can't be longer than 20 characters." })
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      {
        message:
          "Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character.",
      },
    ),
  avatar: z.string().url({ message: "Avatar must be a valid URL." }).optional(),
  role: z.enum(["student", "admin"]).default("student"),
});

export const SignInSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address." }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters long." })
    .max(20, { message: "Password can't be longer than 20 characters." })
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      {
        message:
          "Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character.",
      },
    ),
});

export const RegisteredTeamsSchema = z.object({
  teamName: z.string().max(50, {
    message: "Team name must not be longer than 50 characters.",
  }),
  idea: z.string().max(50, {
    message: "Idea name must not be longer than 50 characters.",
  }),
  ideaDescription: z.string().max(1000, {
    message: "Idea description must not be longer than 1000 characters.",
  }),
  teamMembers: z.array(
    z.string().length(8, {
      message: "SIC should be 8 characters long",
    }),
  ),
});

export const eventFormSchema = z
  .object({
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
    eventStartDateTime: z.string({
      required_error: "Please select a start date and time for the event.",
    }),
    eventFinishDateTime: z.string({
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
    contactMembersDetails: z
      .array(
        z.string().length(8, { message: "SIC should be 8 characters long" }),
      )
      .max(2, { message: "Maximum of 2 contact members allowed." }),
    isTeamEvent: z.boolean(),
    maxTeamMembers: z.number().default(0),
    registeredParticipants: z
      .array(
        z.string().length(8, { message: "SIC should be 8 characters long" }),
      )
      .optional(),
    registeredTeams: z.array(RegisteredTeamsSchema).default([]),
  })
  .superRefine((formData, ctx) => {
    if (formData.isTeamEvent) {
      if (formData.maxTeamMembers === 0) {
        ctx.addIssue({
          code: z.ZodIssueCode.too_small,
          minimum: 1,
          type: "number",
          inclusive: true,
          message: "Please set a maximum number of team members.",
        });
      }
      // Validate max members in each registered team
      if (formData.registeredTeams.length > 0) {
        formData.registeredTeams.forEach((team) => {
          if (team.teamMembers.length > formData.maxTeamMembers) {
            ctx.addIssue({
              code: z.ZodIssueCode.too_big,
              maximum: formData.maxTeamMembers,
              type: "number",
              inclusive: true,
              message: "Team members should not exceed the maximum limit.",
            });
          }
        });
      }
    } else {
      formData.maxTeamMembers = 0;
      formData.registeredTeams = [];
    }
    return formData;
  });

export const WinnerDeclareFormSchema = z.object({
  firstRankSIC: z.string().length(8, {
    message: "SIC should be at least 8 character",
  }),
  secondRankSIC: z.string().length(8, {
    message: "SIC should be at least 8 character",
  }),
  thirdRankSIC: z.string().length(8, {
    message: "SIC should be at least 8 character",
  }),
});

export const HonorableMentionFormSchema = z.object({
  firstMentionSIC: z.string().length(8, {
    message: "SIC should be at least 8 character",
  }),
  secondMentionSIC: z.string().length(8, {
    message: "SIC should be at least 8 character",
  }),
  thirdMentionSIC: z.string().length(8, {
    message: "SIC should be at least 8 character",
  }),
});

export const AccountFormSchema = z.object({
  name: z
    .string()
    .min(2, {
      message: "Name must be at least 2 characters.",
    })
    .max(30, {
      message: "Name must not be longer than 30 characters.",
    }),
  dob: z.date({
    required_error: "A date of birth is required.",
  }),
  language: z.string({
    required_error: "Please select a language.",
  }),
});

export const AppearanceFormSchema = z.object({
  theme: z.enum(["light", "dark"], {
    required_error: "Please select a theme.",
  }),
  font: z.enum(["inter", "manrope", "system"], {
    invalid_type_error: "Select a font",
    required_error: "Please select a font.",
  }),
});

export type SignUpType = z.infer<typeof SignUpSchema>;
export type SignInType = z.infer<typeof SignInSchema>;
export type EventFormType = z.infer<typeof eventFormSchema>;
export type RegisteredTeamsType = z.infer<typeof RegisteredTeamsSchema>;
export type WinnerDeclareFormType = z.infer<typeof WinnerDeclareFormSchema>;
export type HonorableMentionFormType = z.infer<
  typeof HonorableMentionFormSchema
>;
export type AccountFormType = z.infer<typeof AccountFormSchema>;
export type AppearanceFormType = z.infer<typeof AppearanceFormSchema>;
