export type Staff = {
  _id: string;
  name: string;
  role: ExecutionGroupType;
  team: string;
  quote: string;
  photo?: string;
  title: string;
  subtitle: string[];
  session: number;
};
