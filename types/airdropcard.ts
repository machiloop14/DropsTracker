type itemProps = {
  id: string;
  name: string;
  type: string;
  status: string;
  percentage: number;
  frequency: string;
};

export type AirdropCardProps = {
  item: itemProps;
  index: number;
};
