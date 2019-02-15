export class Root {
  project: string;
  message: string;
  documentation: string;
  time: number;
}

export class RootVersion {
  version: string;
  time: number;
}

export type JwtPayload = string;

export class JwtResponse {
  payload: JwtPayload;
}
