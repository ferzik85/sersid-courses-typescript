import type { User } from './User';

export interface Data<T> {
  successful: boolean;
  user: User;
  result: T;
}
