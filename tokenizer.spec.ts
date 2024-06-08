import { test, expect } from "vitest";
import { tokeneizer, TokenTypes } from "./tokenizer";

test.skip("tokenizer", () => {
  const code = `(add 2 (subtract 4 2))`;

  const tokens = [
    { type: TokenTypes.Paren, value: "(" },
    { type: TokenTypes.Name, value: "add" },
    { type: TokenTypes.Number, value: "2" },
    { type: TokenTypes.Paren, value: "(" },
    { type: TokenTypes.Name, value: "subtract" },
    { type: TokenTypes.Number, value: "4" },
    { type: TokenTypes.Number, value: "2" },
    { type: TokenTypes.Paren, value: ")" },
    { type: TokenTypes.Paren, value: ")" },
  ];

  expect(tokeneizer(code)).toEqual(tokens);
});

test("left paren", () => {
    const code = `(`;
  
    const tokens = [
      { type: TokenTypes.Paren, value: "(" },
    ];
  
    expect(tokeneizer(code)).toEqual(tokens);
});

test("right paren", () => {
    const code = `)`;
  
    const tokens = [
      { type: TokenTypes.Paren, value: ")" },
    ];
  
    expect(tokeneizer(code)).toEqual(tokens);
});

test("tokenizer", () => {
    const code = `add`;
  
    const tokens = [
      { type: TokenTypes.Name, value: "add" },
    ];
  
    expect(tokeneizer(code)).toEqual(tokens);
});

test("tokenizer", () => {
    const code = `22`;
  
    const tokens = [
      { type: TokenTypes.Number, value: "22" },
    ];
  
    expect(tokeneizer(code)).toEqual(tokens);
});


test.only("tokenizer", () => {
    const code = `(add 1 2)`;
    // 应该用有限状体机吧
    const tokens = [
        { type: TokenTypes.Paren, value: "(" },
        { type: TokenTypes.Name, value: "add" },
        { type: TokenTypes.Number, value: "1" },
        { type: TokenTypes.Number, value: "2" },
        { type: TokenTypes.Paren, value: ")" },
    ];
  
    expect(tokeneizer(code)).toEqual(tokens);
});