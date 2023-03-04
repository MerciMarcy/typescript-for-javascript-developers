export {};

const debugProfile = (name: string, age: number) => {
  console.log({ name, age });
};

debugProfile('marcy', 27);

type Profile = Parameters<typeof debugProfile>;

const profile: Profile = ['Gloria', 76];

debugProfile(...profile);

/**
 * Obtain the parameters of a function type in a tuple
 */
type MyParameters<T extends (...args: any) => any> = T extends (
  ...args: infer P
) => any
  ? P
  : never;