import { backendUrl } from "../../const/AppConsts";
import type { User } from "../../models/User";
import type { Data } from "../../models/Data";

export interface GetMeResult {
  ok: boolean;
  role: string | null;
}

const falseGetMeResult: GetMeResult = {
  ok: false,
  role: null,
};

export async function getMeAsync(token: string | null): Promise<GetMeResult> {
  if (!token) return falseGetMeResult;
  try {
    const response = await fetch(`${backendUrl}/users/me`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        accept: "*/*",
        Authorization: token,
      },
    });
    const data = await ParseResponseAsync<Data<User>>(response);
    const ok = response.ok && (data?.successful ?? false);
    if (ok) {
      return {
        ok: true,
        role: data?.result?.role ?? null,
      };
    }
  } catch (error) {
    // ignore
  }
  return falseGetMeResult;
}

async function ParseResponseAsync<T>(response: Response): Promise<T | null> {
  try {
    return (await response.json()) as T;
  } catch {
    return null;
  }
}
