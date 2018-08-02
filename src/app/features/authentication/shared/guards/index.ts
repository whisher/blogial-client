import { AuthenticationGuard } from './authentication.guard';
import { LoginGuard } from './login.guard';

export const guards: any[] = [
  AuthenticationGuard,
  LoginGuard
];

export * from './authentication.guard';
export * from './login.guard';
