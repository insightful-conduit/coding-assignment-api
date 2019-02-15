import * as crypto from "crypto";
import * as jwt from "jsonwebtoken";
import { Root, RootVersion, JwtPayload } from "./types";

export type ValueSeed = number;
export type Hash = string;

export function getRoot() {
  const root: Root = {
    project: "coding-assignment",
    message: "use this api for your coding assignment",
    documentation: "",
    time: Date.now()
  };
  return root;
}

export function getRootVersion(version: string) {
  const root: RootVersion = {
    version,
    time: Date.now()
  };
  return root;
}

export function makeJwt(object: any, secret: string = "secret"): JwtPayload {
  const json = JSON.stringify(object, null, 2);
  const payload: JwtPayload = jwt.sign(json, secret);
  return payload;
}

export function getHash(input: string): Hash {
  const hash = crypto.createHash("sha256");
  hash.update(input);
  return hash.digest("hex");
}

export function getValueFromHash(
  hash: string,
  start: number = 0,
  end: number = 2
): ValueSeed {
  const twoDigits = hash.substring(start, end);
  const twoDigitsValue = parseInt(twoDigits, 16);
  return twoDigitsValue;
}
