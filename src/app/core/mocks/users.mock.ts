import { UserRights } from '../constants/user-rights';
import { User } from '../models/user';

export const users: User[] = [
  {
    login: 'user',
    password: '1111',
    rights: [UserRights.user],
  },
  {
    login: 'admin',
    password: '2222',
    rights: [UserRights.admin],
  },
];
