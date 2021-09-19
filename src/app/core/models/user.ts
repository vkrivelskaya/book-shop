import { UserRights } from 'src/app/core/constants/user-rights';

export interface User {
  login: string;
  password: string;
  rights: UserRights[];
}
