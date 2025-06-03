import { Role } from "./role";

export type Member = {
    id: number;
    avatar: string;
    name: string;
    email: string;
    role: Role;

}