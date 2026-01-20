import * as z from "zod";

export const airdropSchema = z.object({
  projectName: z.string().min(1, "This field is required"),
  walletAddress: z.string().min(1, "This field is required"),
  notes: z.string(),
});

export type airdropFormType = z.infer<typeof airdropSchema>;
