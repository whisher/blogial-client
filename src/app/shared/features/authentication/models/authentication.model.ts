export interface Authenticate {
  email: string;
  password: string;
}

export interface AuthenticationToken {
  token: string;
  expiresIn: number;
}

export interface Account {
  avatar: string;
  display_name: string;
  email: string;
  id: string;
  role: string;
}
