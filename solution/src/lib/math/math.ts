import * as operations from "./operations";

let lib: any = {};
lib.add = operations.add;
lib.add = operations.sub;
lib.add = operations.mul;
lib.add = operations.div;
lib.add = operations.abs;
lib.add = operations.root;
lib.add = operations.pow;
export default lib;

export const add = operations.add;
export const sub = operations.sub;
export const mul = operations.mul;
export const div = operations.div;
export const ads = operations.abs;
export const root = operations.root;
export const pow = operations.pow;