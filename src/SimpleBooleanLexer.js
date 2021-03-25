// Generated from SimpleBoolean.g4 by ANTLR 4.9
// jshint ignore: start
import antlr4 from 'antlr4';



const serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786",
    "\u5964\u0002\u0014x\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003",
    "\u0004\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007",
    "\t\u0007\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004",
    "\f\t\f\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010",
    "\t\u0010\u0004\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013",
    "\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0005",
    "\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0006\u0003\u0006",
    "\u0003\u0006\u0003\u0006\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007",
    "\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\t\u0003\t\u0003\t\u0003",
    "\t\u0003\t\u0003\t\u0003\n\u0003\n\u0003\u000b\u0003\u000b\u0003\u000b",
    "\u0003\f\u0003\f\u0003\r\u0003\r\u0003\r\u0003\u000e\u0003\u000e\u0003",
    "\u000f\u0003\u000f\u0003\u0010\u0003\u0010\u0003\u0011\u0005\u0011\\",
    "\n\u0011\u0003\u0011\u0006\u0011_\n\u0011\r\u0011\u000e\u0011`\u0003",
    "\u0011\u0003\u0011\u0006\u0011e\n\u0011\r\u0011\u000e\u0011f\u0005\u0011",
    "i\n\u0011\u0003\u0012\u0003\u0012\u0007\u0012m\n\u0012\f\u0012\u000e",
    "\u0012p\u000b\u0012\u0003\u0013\u0006\u0013s\n\u0013\r\u0013\u000e\u0013",
    "t\u0003\u0013\u0003\u0013\u0002\u0002\u0014\u0003\u0003\u0005\u0004",
    "\u0007\u0005\t\u0006\u000b\u0007\r\b\u000f\t\u0011\n\u0013\u000b\u0015",
    "\f\u0017\r\u0019\u000e\u001b\u000f\u001d\u0010\u001f\u0011!\u0012#\u0013",
    "%\u0014\u0003\u0002\u0012\u0005\u0002CCcc~~\u0005\u0002PPpp~~\u0005",
    "\u0002FFff~~\u0005\u0002QQqq~~\u0005\u0002TTtt~~\u0005\u0002ZZzz~~\u0005",
    "\u0002VVvv~~\u0005\u0002WWww~~\u0005\u0002GGgg~~\u0005\u0002HHhh~~\u0005",
    "\u0002NNnn~~\u0005\u0002UUuu~~\u0003\u00022;\u0005\u0002C\\aac|\u0006",
    "\u00022;C\\aac|\u0005\u0002\u000b\f\u000e\u000f\"\"\u0002}\u0002\u0003",
    "\u0003\u0002\u0002\u0002\u0002\u0005\u0003\u0002\u0002\u0002\u0002\u0007",
    "\u0003\u0002\u0002\u0002\u0002\t\u0003\u0002\u0002\u0002\u0002\u000b",
    "\u0003\u0002\u0002\u0002\u0002\r\u0003\u0002\u0002\u0002\u0002\u000f",
    "\u0003\u0002\u0002\u0002\u0002\u0011\u0003\u0002\u0002\u0002\u0002\u0013",
    "\u0003\u0002\u0002\u0002\u0002\u0015\u0003\u0002\u0002\u0002\u0002\u0017",
    "\u0003\u0002\u0002\u0002\u0002\u0019\u0003\u0002\u0002\u0002\u0002\u001b",
    "\u0003\u0002\u0002\u0002\u0002\u001d\u0003\u0002\u0002\u0002\u0002\u001f",
    "\u0003\u0002\u0002\u0002\u0002!\u0003\u0002\u0002\u0002\u0002#\u0003",
    "\u0002\u0002\u0002\u0002%\u0003\u0002\u0002\u0002\u0003\'\u0003\u0002",
    "\u0002\u0002\u0005+\u0003\u0002\u0002\u0002\u0007.\u0003\u0002\u0002",
    "\u0002\t2\u0003\u0002\u0002\u0002\u000b7\u0003\u0002\u0002\u0002\r;",
    "\u0003\u0002\u0002\u0002\u000f?\u0003\u0002\u0002\u0002\u0011D\u0003",
    "\u0002\u0002\u0002\u0013J\u0003\u0002\u0002\u0002\u0015L\u0003\u0002",
    "\u0002\u0002\u0017O\u0003\u0002\u0002\u0002\u0019Q\u0003\u0002\u0002",
    "\u0002\u001bT\u0003\u0002\u0002\u0002\u001dV\u0003\u0002\u0002\u0002",
    "\u001fX\u0003\u0002\u0002\u0002![\u0003\u0002\u0002\u0002#j\u0003\u0002",
    "\u0002\u0002%r\u0003\u0002\u0002\u0002\'(\t\u0002\u0002\u0002()\t\u0003",
    "\u0002\u0002)*\t\u0004\u0002\u0002*\u0004\u0003\u0002\u0002\u0002+,",
    "\t\u0005\u0002\u0002,-\t\u0006\u0002\u0002-\u0006\u0003\u0002\u0002",
    "\u0002./\t\u0007\u0002\u0002/0\t\u0005\u0002\u000201\t\u0006\u0002\u0002",
    "1\b\u0003\u0002\u0002\u000223\t\u0003\u0002\u000234\t\u0002\u0002\u0002",
    "45\t\u0003\u0002\u000256\t\u0004\u0002\u00026\n\u0003\u0002\u0002\u0002",
    "78\t\u0003\u0002\u000289\t\u0005\u0002\u00029:\t\u0006\u0002\u0002:",
    "\f\u0003\u0002\u0002\u0002;<\t\u0003\u0002\u0002<=\t\u0005\u0002\u0002",
    "=>\t\b\u0002\u0002>\u000e\u0003\u0002\u0002\u0002?@\t\b\u0002\u0002",
    "@A\t\u0006\u0002\u0002AB\t\t\u0002\u0002BC\t\n\u0002\u0002C\u0010\u0003",
    "\u0002\u0002\u0002DE\t\u000b\u0002\u0002EF\t\u0002\u0002\u0002FG\t\f",
    "\u0002\u0002GH\t\r\u0002\u0002HI\t\n\u0002\u0002I\u0012\u0003\u0002",
    "\u0002\u0002JK\u0007@\u0002\u0002K\u0014\u0003\u0002\u0002\u0002LM\u0007",
    "@\u0002\u0002MN\u0007?\u0002\u0002N\u0016\u0003\u0002\u0002\u0002OP",
    "\u0007>\u0002\u0002P\u0018\u0003\u0002\u0002\u0002QR\u0007>\u0002\u0002",
    "RS\u0007?\u0002\u0002S\u001a\u0003\u0002\u0002\u0002TU\u0007?\u0002",
    "\u0002U\u001c\u0003\u0002\u0002\u0002VW\u0007*\u0002\u0002W\u001e\u0003",
    "\u0002\u0002\u0002XY\u0007+\u0002\u0002Y \u0003\u0002\u0002\u0002Z\\",
    "\u0007/\u0002\u0002[Z\u0003\u0002\u0002\u0002[\\\u0003\u0002\u0002\u0002",
    "\\^\u0003\u0002\u0002\u0002]_\t\u000e\u0002\u0002^]\u0003\u0002\u0002",
    "\u0002_`\u0003\u0002\u0002\u0002`^\u0003\u0002\u0002\u0002`a\u0003\u0002",
    "\u0002\u0002ah\u0003\u0002\u0002\u0002bd\u00070\u0002\u0002ce\t\u000e",
    "\u0002\u0002dc\u0003\u0002\u0002\u0002ef\u0003\u0002\u0002\u0002fd\u0003",
    "\u0002\u0002\u0002fg\u0003\u0002\u0002\u0002gi\u0003\u0002\u0002\u0002",
    "hb\u0003\u0002\u0002\u0002hi\u0003\u0002\u0002\u0002i\"\u0003\u0002",
    "\u0002\u0002jn\t\u000f\u0002\u0002km\t\u0010\u0002\u0002lk\u0003\u0002",
    "\u0002\u0002mp\u0003\u0002\u0002\u0002nl\u0003\u0002\u0002\u0002no\u0003",
    "\u0002\u0002\u0002o$\u0003\u0002\u0002\u0002pn\u0003\u0002\u0002\u0002",
    "qs\t\u0011\u0002\u0002rq\u0003\u0002\u0002\u0002st\u0003\u0002\u0002",
    "\u0002tr\u0003\u0002\u0002\u0002tu\u0003\u0002\u0002\u0002uv\u0003\u0002",
    "\u0002\u0002vw\b\u0013\u0002\u0002w&\u0003\u0002\u0002\u0002\t\u0002",
    "[`fhnt\u0003\b\u0002\u0002"].join("");


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

export default class SimpleBooleanLexer extends antlr4.Lexer {

    static grammarFileName = "SimpleBoolean.g4";
    static channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	static modeNames = [ "DEFAULT_MODE" ];
	static literalNames = [ null, null, null, null, null, null, null, null, 
                         null, "'>'", "'>='", "'<'", "'<='", "'='", "'('", 
                         "')'" ];
	static symbolicNames = [ null, "AND", "OR", "XOR", "NAND", "NOR", "NOT", 
                          "TRUE", "FALSE", "GT", "GE", "LT", "LE", "EQ", 
                          "LPAREN", "RPAREN", "DECIMAL", "IDENTIFIER", "WS" ];
	static ruleNames = [ "AND", "OR", "XOR", "NAND", "NOR", "NOT", "TRUE", 
                      "FALSE", "GT", "GE", "LT", "LE", "EQ", "LPAREN", "RPAREN", 
                      "DECIMAL", "IDENTIFIER", "WS" ];

    constructor(input) {
        super(input)
        this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    }

    get atn() {
        return atn;
    }
}

SimpleBooleanLexer.EOF = antlr4.Token.EOF;
SimpleBooleanLexer.AND = 1;
SimpleBooleanLexer.OR = 2;
SimpleBooleanLexer.XOR = 3;
SimpleBooleanLexer.NAND = 4;
SimpleBooleanLexer.NOR = 5;
SimpleBooleanLexer.NOT = 6;
SimpleBooleanLexer.TRUE = 7;
SimpleBooleanLexer.FALSE = 8;
SimpleBooleanLexer.GT = 9;
SimpleBooleanLexer.GE = 10;
SimpleBooleanLexer.LT = 11;
SimpleBooleanLexer.LE = 12;
SimpleBooleanLexer.EQ = 13;
SimpleBooleanLexer.LPAREN = 14;
SimpleBooleanLexer.RPAREN = 15;
SimpleBooleanLexer.DECIMAL = 16;
SimpleBooleanLexer.IDENTIFIER = 17;
SimpleBooleanLexer.WS = 18;



