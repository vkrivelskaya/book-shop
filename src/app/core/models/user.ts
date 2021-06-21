import { UserRights } from "src/app/shared/constants/user-rights";

export interface User {
    login: string,
    password: string,
    rights: UserRights[],
}