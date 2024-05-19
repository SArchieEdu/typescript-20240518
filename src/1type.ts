// Boolean
let isTrue: boolean = true;

// Number
let num: number = 132;
let float: number = 132.23;
let binary: number = 0b101;

// Bigint
Number.MAX_SAFE_INTEGER;
let bigNumber: bigint = 100n;

// String
let str: string = "Hello";
str = "";

// Null
let nullLet: null = null;

// Undefined
let undefinedLet: undefined = undefined;

// Object
let obj: { a: string; b?: number } = { a: "", b: 123 };

// Array
let array: string[] = ["a", "b"];

// Tuple
let tuple: [string, number] = ["", 123];

// Function

let callback: (a: number, b?: number) => number;

function calculate(a: number, b?: number): void {
  return;
}

const calculate2 = (a: number, b?: number): number => {
  return 123;
};

callback = calculate2;

// Any
let anyLet: any;
anyLet.calculate();
num = anyLet;

// Unknown
let unknownLet: unknown = { a: 123 };
// unknownLet.a;

// never

// literal
let fontWeight: 300 | 400 | 500 | 600 = 400;
fontWeight = 500;
fontWeight = 600;
let size: "s" | "m" | "l";
size = "s";

// Union
let a: (string | number)[] = ["", 123];

// Intersection
let b: ({ a: string } & { b: number })[] = [];
