export type Many<T> = T | ReadonlyArray<T>;

export type PropertyName = string | number | symbol;

export type PropertyPath = Many<PropertyName>;

export interface Dictionary<T> {
  [index: string]: T;
}

export type Values<T extends object> = T[keyof T];

export interface ClassType<T = any, A = any> {
  prototype: T;
  new (args?: A): T;
}
