const test = 123;

export function calculate(a: number | string): number {
  if (typeof a === "number") {
    return a;
  }

  return Number(a);
}

function getProperty<
  Entity extends Record<string, unknown>,
  Key extends keyof Entity
>(obj: Entity, key: Key): Entity[Key] {
  return obj[key];
}

getProperty({ a: "", b: 123 }, "b");

type FunctionType<Arguments extends unknown[] = any[], ReturnValue = any> = (
  ...args: Arguments
) => ReturnValue;

function call<Arguments extends unknown[], ReturnValue>(
  callback: FunctionType<Arguments, ReturnValue>,
  ...args: Arguments
): ReturnValue {
  return callback(...args);
}

const make = (a: string, b: number) => {
  return 123;
};

call(make, "", 123);

function call2<Function extends FunctionType>(
  callback: Function,
  ...args: Parameters<Function>
): ReturnType<Function> {
  return callback(...args);
}

function call3<Function extends FunctionType>(
    callback: Function,
    ...args: Function extends (...args: infer Params) => any ? Params : never
  ): Function extends (...args: any) => infer ReturnType ? ReturnType : never {
    return callback(...args);

call2(make, "", 123);
call3(make, "", 123);

// type ReturnType<CurrentFunction extends Function> = CurrentFunction extends (
//   ...args: any
// ) => infer ReturnTypeVar
//   ? ReturnTypeVar
//   : never;

type Args<CurrentFunction extends FunctionType> = CurrentFunction extends (
  ...args: infer ArgsType
) => any
  ? ArgsType
  : never;

type FunctionComponent = (props: any, ...args: any) => any;

type Props<Component extends FunctionComponent> = Component extends (
  ...args: [infer PropsType, ...args: any]
) => any
  ? PropsType
  : never;

type MakeReturnType = ReturnType<typeof make>;
type MakeArgsType = Args<typeof make>;

type Typename<Entity extends { __typename: unknown }> = Entity extends {
  __typename: infer TypenameType;
}
  ? TypenameType
  : never;

const Button = (props: { a: string; b: number; size: string }) => {};

type ButtonProps = Props<typeof Button>;

const film = {
  __typename: "Film",
};

type FilmTypename = Typename<typeof film>;
