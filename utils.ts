export function sum(...args: number[]): number {
  return args.reduce((t, v) => t + v, 0);
}

export function multipication(...args: number[]): number {
  return args.reduce((t, v) => t * v, 1);
}
