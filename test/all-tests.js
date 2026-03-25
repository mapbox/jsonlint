var fs = require("node:fs"),
    assert = require("node:assert"),
    { test } = require("node:test"),
    parser = require("../lib/jsonlint").parser;

test("test string with line break", function () {
    var json = '{"foo": "bar\nbar"}';
    assert["throws"](function () {parser.parse(json)}, "should throw error");
});

test("test string literal", function () {
    var json = '"foo"';
    assert.equal(parser.parse(json), "foo");
    assert.equal(parser.parse(json).__line__, 1);
});

test("test number literal", function () {
    var json = '1234';
    assert.equal(parser.parse(json), 1234);
    assert.equal(parser.parse(json).__line__, 1);
});

test("test null literal", function () {
    var json = 'null';
    assert.equal(parser.parse(json), null);
});

test("test boolean literal", function () {
    var json = 'true';
    assert.equal(parser.parse(json), true);
    assert.equal(parser.parse(json).__line__, 1);
});

test("test unclosed array", function () {
  var json = fs.readFileSync(__dirname + "/fails/2.json").toString();
  assert["throws"](function () {parser.parse(json)}, "should throw error");
});

test("test unquotedkey keys must be quoted", function () {
  var json = fs.readFileSync(__dirname + "/fails/3.json").toString();
  assert["throws"](function () {parser.parse(json)}, "should throw error");
});

test("test extra comma", function () {
  var json = fs.readFileSync(__dirname + "/fails/4.json").toString();
  assert["throws"](function () {parser.parse(json)}, "should throw error");
});

test("test double extra comma", function () {
  var json = fs.readFileSync(__dirname + "/fails/5.json").toString();
  assert["throws"](function () {parser.parse(json)}, "should throw error");
});

test("test missing value", function () {
  var json = fs.readFileSync(__dirname + "/fails/6.json").toString();
  assert["throws"](function () {parser.parse(json)}, "should throw error");
});

test("test comma after the close", function () {
  var json = fs.readFileSync(__dirname + "/fails/7.json").toString();
  assert["throws"](function () {parser.parse(json)}, "should throw error");
});

test("test extra close", function () {
  var json = fs.readFileSync(__dirname + "/fails/8.json").toString();
  assert["throws"](function () {parser.parse(json)}, "should throw error");
});

test("test extra comma after value", function () {
  var json = fs.readFileSync(__dirname + "/fails/9.json").toString();
  assert["throws"](function () {parser.parse(json)}, "should throw error");
});

test("test extra value after close with misplaced quotes", function () {
  var json = fs.readFileSync(__dirname + "/fails/10.json").toString();
  assert["throws"](function () {parser.parse(json)}, "should throw error");
});

test("test illegal expression addition", function () {
  var json = fs.readFileSync(__dirname + "/fails/11.json").toString();
  assert["throws"](function () {parser.parse(json)}, "should throw error");
});

test("test illegal invocation of alert", function () {
  var json = fs.readFileSync(__dirname + "/fails/12.json").toString();
  assert["throws"](function () {parser.parse(json)}, "should throw error");
});

test("test numbers cannot have leading zeroes", function () {
  var json = fs.readFileSync(__dirname + "/fails/13.json").toString();
  assert["throws"](function () {parser.parse(json)}, "should throw error");
});

test("test numbers cannot be hex", function () {
  var json = fs.readFileSync(__dirname + "/fails/14.json").toString();
  assert["throws"](function () {parser.parse(json)}, "should throw error");
});

test("test illegal backslash escape \\0", function () {
  var json = fs.readFileSync(__dirname + "/fails/15.json").toString();
  assert["throws"](function () {parser.parse(json)}, "should throw error");
});

test("test unquoted text", function () {
  var json = fs.readFileSync(__dirname + "/fails/16.json").toString();
  assert["throws"](function () {parser.parse(json)}, "should throw error");
});

test("test illegal backslash escape \\x", function () {
  var json = fs.readFileSync(__dirname + "/fails/17.json").toString();
  assert["throws"](function () {parser.parse(json)}, "should throw error");
});

test("test missing colon", function () {
  var json = fs.readFileSync(__dirname + "/fails/19.json")
  assert["throws"](function () {parser.parse(json)}, "should throw error");
});

test("test double colon", function () {
  var json = fs.readFileSync(__dirname + "/fails/20.json").toString();
  assert["throws"](function () {parser.parse(json)}, "should throw error");
});

test("test comma instead of colon", function () {
  var json = fs.readFileSync(__dirname + "/fails/21.json").toString();
  assert["throws"](function () {parser.parse(json)}, "should throw error");
});

test("test colon instead of comma", function () {
  var json = fs.readFileSync(__dirname + "/fails/22.json").toString();
  assert["throws"](function () {parser.parse(json)}, "should throw error");
});

test("test bad raw value", function () {
  var json = fs.readFileSync(__dirname + "/fails/23.json").toString();
  assert["throws"](function () {parser.parse(json)}, "should throw error");
});

test("test single quotes", function () {
  var json = fs.readFileSync(__dirname + "/fails/24.json").toString();
  assert["throws"](function () {parser.parse(json)}, "should throw error");
});

test("test tab character in string", function () {
  var json = fs.readFileSync(__dirname + "/fails/25.json").toString();
  assert["throws"](function () {parser.parse(json)}, "should throw error");
});

test("test tab character in string 2", function () {
  var json = fs.readFileSync(__dirname + "/fails/26.json").toString();
  assert["throws"](function () {parser.parse(json)}, "should throw error");
});

test("test line break in string", function () {
  var json = fs.readFileSync(__dirname + "/fails/27.json").toString();
  assert["throws"](function () {parser.parse(json)}, "should throw error");
});

test("test line break in string in array", function () {
  var json = fs.readFileSync(__dirname + "/fails/28.json").toString();
  assert["throws"](function () {parser.parse(json)}, "should throw error");
});

test("test 0e", function () {
  var json = fs.readFileSync(__dirname + "/fails/29.json").toString();
  assert["throws"](function () {parser.parse(json)}, "should throw error");
});

test("test 0e+", function () {
  var json = fs.readFileSync(__dirname + "/fails/30.json").toString();
  assert["throws"](function () {parser.parse(json)}, "should throw error");
});

test("test 0e+ 1", function () {
  var json = fs.readFileSync(__dirname + "/fails/31.json").toString();
  assert["throws"](function () {parser.parse(json)}, "should throw error");
});

test("test comma instead of closing brace", function () {
  var json = fs.readFileSync(__dirname + "/fails/32.json").toString();
  assert["throws"](function () {parser.parse(json)}, "should throw error");
});

test("test bracket mismatch", function () {
  var json = fs.readFileSync(__dirname + "/fails/33.json").toString();
  assert["throws"](function () {parser.parse(json)}, "should throw error");
});

test("test extra brace", function () {
  var json = fs.readFileSync(__dirname + "/fails/34.json").toString();
  assert["throws"](function () {parser.parse(json)}, "should throw error");
});

test("test pass-1", function () {
  var json = fs.readFileSync(__dirname + "/passes/1.json").toString();
  assert.doesNotThrow(function () {parser.parse(json)}, "should pass");
});

test("test pass-2", function () {
  var json = fs.readFileSync(__dirname + "/passes/2.json").toString();
  assert.doesNotThrow(function () {parser.parse(json)}, "should pass");
});

test("test pass-3", function () {
  var json = fs.readFileSync(__dirname + "/passes/3.json").toString();
  assert.doesNotThrow(function () {parser.parse(json)}, "should pass");
});
