export interface iUserRegister {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  passwordCheck: string;
  phone: string;
}

export interface iUser {
  created_at?: string;
  email: string;
  id: string;
  first_name: string;
  last_name: string;
  phone: string;
}

export interface iUserRes {
  data: {
    id: string;
    first_name: string;
    last_name: string;
    email: string;
    phone: string;
    created_at: string;
  };
}

export interface iLoginRes {
  data: {
    user: iUserRes;
    token: string;
  };
}

export interface iLoginUser {
  email: string;
  password: string;
}
