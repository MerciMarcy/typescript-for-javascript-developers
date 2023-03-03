export {};

let name = "Marcy";

name = "Mac"

let nickname = "Marcy" as const;
// nickname = "Mac";
nickname = "Marcy";

let profile = {
  name: "Marcy",
  height: 172
} as const;   // as const: nestされている全ての要素がreadonlyになる

// profile.name = "Mac";
// profile.height = 180;
