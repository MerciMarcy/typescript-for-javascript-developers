export {};

function add(a: number, b: number) {
  return a + b;
}
console.log(add(1, 2));

type ReturnTypeFromAdd = ReturnType<typeof add>;

/**
/**
 * Obtain the return type of a function type
 */
type MyReturnType<T extends (...args: any) => any> = T extends (
  ...args: any
) => infer R   // infer 条件を記載する部分にかける特殊なキーワード
  ? R
  : any;
