import { AccountGuard } from './account.guard';
import { AuthenticationGuard } from './authentication.guard';
import { LoginGuard } from './login.guard';
import { RoleGuard } from './role.guard';

export const guards: any[] = [
  AccountGuard,
  AuthenticationGuard,
  LoginGuard,
  RoleGuard
];

export * from './account.guard';
export * from './authentication.guard';
export * from './login.guard';
export * from './role.guard';
