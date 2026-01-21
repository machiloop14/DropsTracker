import * as z from "zod";

export const airdropSchema = z.object({
  projectName: z.string().min(1, "This field is required"),
  walletAddress: z.string(),
  notes: z.string(),
  repeat: z.number(),
});

export type airdropFormType = z.infer<typeof airdropSchema>;
