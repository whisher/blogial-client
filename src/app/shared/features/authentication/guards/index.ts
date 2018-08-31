import { AccountGuard } from './account.guard';
import { AuthenticationGuard } from './authentication.guard';
import { LoginGuard } from './login.guard';

export const guards: any[] = [
  AccountGuard,
  AuthenticationGuard,
  LoginGuard
];

export * from './account.guard';
export * from './authentication.guard';
export * from './login.guard';
