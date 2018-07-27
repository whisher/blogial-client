export interface Authenticate {
  email: string;
  password: string;
}

export interface AuthenticationToken {
  token: string;
  expiresIn: number
}
