export {};

type Profile = {
  name: string;
  age?: number;
  zipCode: number;
};

type PartialType = Partial<Profile>;   // 全ての要素をoptionalにする
type RequiredType = Required<Profile>;

