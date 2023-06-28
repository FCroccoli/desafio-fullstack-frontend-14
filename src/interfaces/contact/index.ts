export interface iContact {
  email: string;
  id: string;
  first_name: string;
  last_name: string;
  telephone: string;
  created_at: string;
}

export interface iContactArrayRes {
  data: iContact[];
}
