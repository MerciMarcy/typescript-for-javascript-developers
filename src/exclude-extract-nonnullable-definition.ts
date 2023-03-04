export {};

// type MyExclude =
//   | (string extends string | number ? never : string)   // never
//   | (number extends string | number ? never : number)   // never
//   | (DebugType extends string | number ? never : DebugType);   // DebugType
type MyExclude = DebugType
type DebugType = () => void;
type SomeTypes = string | number | DebugType;
type FunctionType = Exclude<SomeTypes, string | number>;
type MyfunctionType = MyExclude;

type FunctionTypeByExtract = Extract<SomeTypes, DebugType>;
type NonFunctionTypeByExtract = Extract<SomeTypes, string | number>;
type FunctionTypeByExtractingFunction = Extract<SomeTypes, Function>;

type NullableTypes = string | number | null | undefined;
type NonNullableTypes = NonNullable<NullableTypes>;
