export {};

let name: any = "Ham";

// let length = name.length as number;
let length = (name as string).length;
// let length = (<string>name).length;   // 非推奨 jsxの記法と類似しているため

// length = "foo";