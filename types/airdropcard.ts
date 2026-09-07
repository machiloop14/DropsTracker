type itemProps = {
  projectName: string;
  category: string;
  endDate: Date | null;
  id: string;
  notes: string | null;
  repeat: number;
  startAlarm: Date | null;
  startDate: Date;
  userId: string;
  walletAddress: string;
};

export type AirdropCardProps = {
  item: itemProps;
  index: number;
};
