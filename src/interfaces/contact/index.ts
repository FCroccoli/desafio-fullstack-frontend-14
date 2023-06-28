export interface iContact {
  email: string;
  id: string;
  first_name: string;
  last_name: string;
  phone: string;
  created_at: string;
}

export interface iContactRegister {
  email: string;
  first_name: string;
  last_name: string;
  phone: string;
}

export interface iContactArrayRes {
  data: iContact[];
}
