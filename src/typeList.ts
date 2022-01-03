/* eslint-disable @typescript-eslint/no-unused-vars */

let bool: boolean = true;

let number: number = 0;

let string: string = "string";

let arr1: Array<number> = [0];
let arr2: number[] = [0];

let taple: [number, string] = [0, "string"];
console.log(taple);

let any: any = false;

// void type
// void宣言しなくてもtypescriptが自動で型判別してくれる。
const func = (): void => {
  const test = 1;
};
console.log(func());

let null1: null = null;
let undefined1: undefined = undefined;

let obj1: object = {};
let obj2: { id: number; name: string } = { id: 0, name: "name" };
