export interface Authenticate {
  email: string;
  password: string;
}

export interface AuthenticationToken {
  token: string;
  expiresIn: number;
}

export interface Account {
  _id: string;
  avatar: string;
  display_name: string;
  email: string;
  firstname: string;
  lastname: string;
  last_login: string;
  role: string;
}
