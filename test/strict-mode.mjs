import assert from "node:assert";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const { parser } = require("../lib/jsonlint");

const result = parser.parse('{"a": 1}');
assert.equal(result.a, 1);
assert.equal(result.__line__, 1);

console.log("strict mode esm: ok");
