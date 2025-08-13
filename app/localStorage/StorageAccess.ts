import type { User } from "../models/User";

const activeUserKey = "activeUser";

function safeParse(json: string): User | null {
  try {
    const user = JSON.parse(json);
    return user && typeof user === "object" ? (user as User) : null;
  } catch {
    return null;
  }
}

export function getUser(): User | null {
  const user = localStorage.getItem(activeUserKey);
  return user ? safeParse(user) : null;
}

export function removeActiveUserFromLocalStorage(): void {
  localStorage.removeItem(activeUserKey);
}

export function putUser(user: User): void {
  removeActiveUserFromLocalStorage();
  localStorage.setItem(activeUserKey, JSON.stringify(user));
}

export function isAdminUser(): boolean {
  return getUser()?.role?.toLowerCase() === "admin";
}

export function getUserName(): string | null {
  return getUser()?.name ?? null;
}

export function getUserToken(): string {
  return getUser()?.token ?? '';
}

export function getUserRole(): string | null {
  return getUser()?.role ?? null;
}

export function userTokenIsSet(): boolean {
  const token = getUser()?.token;
  return typeof token === "string" && token.length > 0;
}
