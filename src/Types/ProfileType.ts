export interface ProfileType {
  number: number;
  title: string;
  user: {
    login?: string;
  };
  created_at: string;
  comments: number;
  state: string;
}
