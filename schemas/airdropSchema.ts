import * as z from "zod";

export const airdropSchema = z.object({
  projectName: z.string().min(1, "This field is required"),
  walletAddress: z.string(),
  notes: z.string(),
  repeat: z.preprocess((val) => Number(val), z.number()),
  category: z.string().min(1, "This field is required"),
  startDate: z.date().refine(Boolean, {
    message: "Start date is required",
  }),
  endDate: z.date().optional(),
  startAlarm: z.date().optional(),
  endAlarm: z.date().optional(),
});

export type airdropFormType = z.infer<typeof airdropSchema>;
