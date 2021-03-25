// https://tomassetti.me/antlr-mega-tutorial/
// https://github.com/antlr/antlr4/blob/master/doc/javascript-target.md
// https://stackoverflow.com/questions/30976962/nested-boolean-expression-parser-using-antlr

import antlr4 from 'antlr4';
import SimpleBooleanLexer from "./SimpleBooleanLexer.js";
import SimpleBooleanParser from "./SimpleBooleanParser.js";
import {MyVisitor} from "./MyVisitor.js";

const variables = new Map();
variables.set('A' , 10);
variables.set('B' , 10);

const input = "a xor b"
const chars = new antlr4.InputStream(input);
const lexer = new SimpleBooleanLexer(chars);
const tokens  = new antlr4.CommonTokenStream(lexer);
const parser = new SimpleBooleanParser(tokens);
const visitor = new MyVisitor(variables);
const result = visitor.visit(parser.parse())
console.log(`result: ${result}`)
