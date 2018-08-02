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
  email: string;
  id: string;
  username: string;
}
