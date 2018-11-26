export enum Mode {
  LOGIN,
  SIGNUP
}

export interface ActionType {
  type: string;
  token?: string;
}
