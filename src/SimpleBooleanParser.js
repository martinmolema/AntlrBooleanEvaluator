// Generated from SimpleBoolean.g4 by ANTLR 4.9
// jshint ignore: start
import antlr4 from 'antlr4';
import SimpleBooleanListener from './SimpleBooleanListener.js';
import SimpleBooleanVisitor from './SimpleBooleanVisitor.js';


const serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786",
    "\u5964\u0003\u0014/\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
    "\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0003\u0002\u0003\u0002",
    "\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0005\u0003",
    "\u001a\n\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0007\u0003$\n\u0003\f\u0003",
    "\u000e\u0003\'\u000b\u0003\u0003\u0004\u0003\u0004\u0003\u0005\u0003",
    "\u0005\u0003\u0006\u0003\u0006\u0003\u0006\u0002\u0003\u0004\u0007\u0002",
    "\u0004\u0006\b\n\u0002\u0005\u0003\u0002\u000b\u000f\u0003\u0002\u0003",
    "\u0007\u0003\u0002\t\n\u0002/\u0002\f\u0003\u0002\u0002\u0002\u0004",
    "\u0019\u0003\u0002\u0002\u0002\u0006(\u0003\u0002\u0002\u0002\b*\u0003",
    "\u0002\u0002\u0002\n,\u0003\u0002\u0002\u0002\f\r\u0005\u0004\u0003",
    "\u0002\r\u000e\u0007\u0002\u0002\u0003\u000e\u0003\u0003\u0002\u0002",
    "\u0002\u000f\u0010\b\u0003\u0001\u0002\u0010\u0011\u0007\u0010\u0002",
    "\u0002\u0011\u0012\u0005\u0004\u0003\u0002\u0012\u0013\u0007\u0011\u0002",
    "\u0002\u0013\u001a\u0003\u0002\u0002\u0002\u0014\u0015\u0007\b\u0002",
    "\u0002\u0015\u001a\u0005\u0004\u0003\b\u0016\u001a\u0005\n\u0006\u0002",
    "\u0017\u001a\u0007\u0013\u0002\u0002\u0018\u001a\u0007\u0012\u0002\u0002",
    "\u0019\u000f\u0003\u0002\u0002\u0002\u0019\u0014\u0003\u0002\u0002\u0002",
    "\u0019\u0016\u0003\u0002\u0002\u0002\u0019\u0017\u0003\u0002\u0002\u0002",
    "\u0019\u0018\u0003\u0002\u0002\u0002\u001a%\u0003\u0002\u0002\u0002",
    "\u001b\u001c\f\u0007\u0002\u0002\u001c\u001d\u0005\u0006\u0004\u0002",
    "\u001d\u001e\u0005\u0004\u0003\b\u001e$\u0003\u0002\u0002\u0002\u001f",
    " \f\u0006\u0002\u0002 !\u0005\b\u0005\u0002!\"\u0005\u0004\u0003\u0007",
    "\"$\u0003\u0002\u0002\u0002#\u001b\u0003\u0002\u0002\u0002#\u001f\u0003",
    "\u0002\u0002\u0002$\'\u0003\u0002\u0002\u0002%#\u0003\u0002\u0002\u0002",
    "%&\u0003\u0002\u0002\u0002&\u0005\u0003\u0002\u0002\u0002\'%\u0003\u0002",
    "\u0002\u0002()\t\u0002\u0002\u0002)\u0007\u0003\u0002\u0002\u0002*+",
    "\t\u0003\u0002\u0002+\t\u0003\u0002\u0002\u0002,-\t\u0004\u0002\u0002",
    "-\u000b\u0003\u0002\u0002\u0002\u0005\u0019#%"].join("");


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class SimpleBooleanParser extends antlr4.Parser {

    static grammarFileName = "SimpleBoolean.g4";
    static literalNames = [ null, null, null, null, null, null, null, null, 
                            null, "'>'", "'>='", "'<'", "'<='", "'='", "'('", 
                            "')'" ];
    static symbolicNames = [ null, "AND", "OR", "XOR", "NAND", "NOR", "NOT", 
                             "TRUE", "FALSE", "GT", "GE", "LT", "LE", "EQ", 
                             "LPAREN", "RPAREN", "DECIMAL", "IDENTIFIER", 
                             "WS" ];
    static ruleNames = [ "parse", "expression", "comparator", "binary", 
                         "bool" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = SimpleBooleanParser.ruleNames;
        this.literalNames = SimpleBooleanParser.literalNames;
        this.symbolicNames = SimpleBooleanParser.symbolicNames;
    }

    get atn() {
        return atn;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 1:
    	    		return this.expression_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    expression_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return this.precpred(this._ctx, 5);
    		case 1:
    			return this.precpred(this._ctx, 4);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };




	parse() {
	    let localctx = new ParseContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, SimpleBooleanParser.RULE_parse);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 10;
	        this.expression(0);
	        this.state = 11;
	        this.match(SimpleBooleanParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


	expression(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new ExpressionContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 2;
	    this.enterRecursionRule(localctx, 2, SimpleBooleanParser.RULE_expression, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 23;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case SimpleBooleanParser.LPAREN:
	            localctx = new ParenExpressionContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;

	            this.state = 14;
	            this.match(SimpleBooleanParser.LPAREN);
	            this.state = 15;
	            this.expression(0);
	            this.state = 16;
	            this.match(SimpleBooleanParser.RPAREN);
	            break;
	        case SimpleBooleanParser.NOT:
	            localctx = new NotExpressionContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 18;
	            this.match(SimpleBooleanParser.NOT);
	            this.state = 19;
	            this.expression(6);
	            break;
	        case SimpleBooleanParser.TRUE:
	        case SimpleBooleanParser.FALSE:
	            localctx = new BoolExpressionContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 20;
	            this.bool();
	            break;
	        case SimpleBooleanParser.IDENTIFIER:
	            localctx = new IdentifierExpressionContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 21;
	            this.match(SimpleBooleanParser.IDENTIFIER);
	            break;
	        case SimpleBooleanParser.DECIMAL:
	            localctx = new DecimalExpressionContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 22;
	            this.match(SimpleBooleanParser.DECIMAL);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 35;
	        this._errHandler.sync(this);
	        let _alt = this._interp.adaptivePredict(this._input,2,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 33;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new ComparatorExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    localctx.left = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, SimpleBooleanParser.RULE_expression);
	                    this.state = 25;
	                    if (!( this.precpred(this._ctx, 5))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
	                    }
	                    this.state = 26;
	                    localctx.op = this.comparator();
	                    this.state = 27;
	                    localctx.right = this.expression(6);
	                    break;

	                case 2:
	                    localctx = new BinaryExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    localctx.left = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, SimpleBooleanParser.RULE_expression);
	                    this.state = 29;
	                    if (!( this.precpred(this._ctx, 4))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
	                    }
	                    this.state = 30;
	                    localctx.op = this.binary();
	                    this.state = 31;
	                    localctx.right = this.expression(5);
	                    break;

	                } 
	            }
	            this.state = 37;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,2,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}



	comparator() {
	    let localctx = new ComparatorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, SimpleBooleanParser.RULE_comparator);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 38;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << SimpleBooleanParser.GT) | (1 << SimpleBooleanParser.GE) | (1 << SimpleBooleanParser.LT) | (1 << SimpleBooleanParser.LE) | (1 << SimpleBooleanParser.EQ))) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	binary() {
	    let localctx = new BinaryContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, SimpleBooleanParser.RULE_binary);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 40;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << SimpleBooleanParser.AND) | (1 << SimpleBooleanParser.OR) | (1 << SimpleBooleanParser.XOR) | (1 << SimpleBooleanParser.NAND) | (1 << SimpleBooleanParser.NOR))) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	bool() {
	    let localctx = new BoolContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, SimpleBooleanParser.RULE_bool);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 42;
	        _la = this._input.LA(1);
	        if(!(_la===SimpleBooleanParser.TRUE || _la===SimpleBooleanParser.FALSE)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

SimpleBooleanParser.EOF = antlr4.Token.EOF;
SimpleBooleanParser.AND = 1;
SimpleBooleanParser.OR = 2;
SimpleBooleanParser.XOR = 3;
SimpleBooleanParser.NAND = 4;
SimpleBooleanParser.NOR = 5;
SimpleBooleanParser.NOT = 6;
SimpleBooleanParser.TRUE = 7;
SimpleBooleanParser.FALSE = 8;
SimpleBooleanParser.GT = 9;
SimpleBooleanParser.GE = 10;
SimpleBooleanParser.LT = 11;
SimpleBooleanParser.LE = 12;
SimpleBooleanParser.EQ = 13;
SimpleBooleanParser.LPAREN = 14;
SimpleBooleanParser.RPAREN = 15;
SimpleBooleanParser.DECIMAL = 16;
SimpleBooleanParser.IDENTIFIER = 17;
SimpleBooleanParser.WS = 18;

SimpleBooleanParser.RULE_parse = 0;
SimpleBooleanParser.RULE_expression = 1;
SimpleBooleanParser.RULE_comparator = 2;
SimpleBooleanParser.RULE_binary = 3;
SimpleBooleanParser.RULE_bool = 4;

class ParseContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SimpleBooleanParser.RULE_parse;
    }

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	EOF() {
	    return this.getToken(SimpleBooleanParser.EOF, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SimpleBooleanListener ) {
	        listener.enterParse(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SimpleBooleanListener ) {
	        listener.exitParse(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SimpleBooleanVisitor ) {
	        return visitor.visitParse(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SimpleBooleanParser.RULE_expression;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class BinaryExpressionContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        this.left = null; // ExpressionContext;
        this.op = null; // BinaryContext;
        this.right = null; // ExpressionContext;
        super.copyFrom(ctx);
    }

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	binary() {
	    return this.getTypedRuleContext(BinaryContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SimpleBooleanListener ) {
	        listener.enterBinaryExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SimpleBooleanListener ) {
	        listener.exitBinaryExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SimpleBooleanVisitor ) {
	        return visitor.visitBinaryExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

SimpleBooleanParser.BinaryExpressionContext = BinaryExpressionContext;

class DecimalExpressionContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	DECIMAL() {
	    return this.getToken(SimpleBooleanParser.DECIMAL, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SimpleBooleanListener ) {
	        listener.enterDecimalExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SimpleBooleanListener ) {
	        listener.exitDecimalExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SimpleBooleanVisitor ) {
	        return visitor.visitDecimalExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

SimpleBooleanParser.DecimalExpressionContext = DecimalExpressionContext;

class BoolExpressionContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	bool() {
	    return this.getTypedRuleContext(BoolContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SimpleBooleanListener ) {
	        listener.enterBoolExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SimpleBooleanListener ) {
	        listener.exitBoolExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SimpleBooleanVisitor ) {
	        return visitor.visitBoolExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

SimpleBooleanParser.BoolExpressionContext = BoolExpressionContext;

class IdentifierExpressionContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	IDENTIFIER() {
	    return this.getToken(SimpleBooleanParser.IDENTIFIER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SimpleBooleanListener ) {
	        listener.enterIdentifierExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SimpleBooleanListener ) {
	        listener.exitIdentifierExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SimpleBooleanVisitor ) {
	        return visitor.visitIdentifierExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

SimpleBooleanParser.IdentifierExpressionContext = IdentifierExpressionContext;

class NotExpressionContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	NOT() {
	    return this.getToken(SimpleBooleanParser.NOT, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SimpleBooleanListener ) {
	        listener.enterNotExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SimpleBooleanListener ) {
	        listener.exitNotExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SimpleBooleanVisitor ) {
	        return visitor.visitNotExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

SimpleBooleanParser.NotExpressionContext = NotExpressionContext;

class ParenExpressionContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	LPAREN() {
	    return this.getToken(SimpleBooleanParser.LPAREN, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	RPAREN() {
	    return this.getToken(SimpleBooleanParser.RPAREN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SimpleBooleanListener ) {
	        listener.enterParenExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SimpleBooleanListener ) {
	        listener.exitParenExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SimpleBooleanVisitor ) {
	        return visitor.visitParenExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

SimpleBooleanParser.ParenExpressionContext = ParenExpressionContext;

class ComparatorExpressionContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        this.left = null; // ExpressionContext;
        this.op = null; // ComparatorContext;
        this.right = null; // ExpressionContext;
        super.copyFrom(ctx);
    }

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	comparator() {
	    return this.getTypedRuleContext(ComparatorContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SimpleBooleanListener ) {
	        listener.enterComparatorExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SimpleBooleanListener ) {
	        listener.exitComparatorExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SimpleBooleanVisitor ) {
	        return visitor.visitComparatorExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

SimpleBooleanParser.ComparatorExpressionContext = ComparatorExpressionContext;

class ComparatorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SimpleBooleanParser.RULE_comparator;
    }

	GT() {
	    return this.getToken(SimpleBooleanParser.GT, 0);
	};

	GE() {
	    return this.getToken(SimpleBooleanParser.GE, 0);
	};

	LT() {
	    return this.getToken(SimpleBooleanParser.LT, 0);
	};

	LE() {
	    return this.getToken(SimpleBooleanParser.LE, 0);
	};

	EQ() {
	    return this.getToken(SimpleBooleanParser.EQ, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SimpleBooleanListener ) {
	        listener.enterComparator(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SimpleBooleanListener ) {
	        listener.exitComparator(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SimpleBooleanVisitor ) {
	        return visitor.visitComparator(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class BinaryContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SimpleBooleanParser.RULE_binary;
    }

	AND() {
	    return this.getToken(SimpleBooleanParser.AND, 0);
	};

	OR() {
	    return this.getToken(SimpleBooleanParser.OR, 0);
	};

	XOR() {
	    return this.getToken(SimpleBooleanParser.XOR, 0);
	};

	NAND() {
	    return this.getToken(SimpleBooleanParser.NAND, 0);
	};

	NOR() {
	    return this.getToken(SimpleBooleanParser.NOR, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SimpleBooleanListener ) {
	        listener.enterBinary(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SimpleBooleanListener ) {
	        listener.exitBinary(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SimpleBooleanVisitor ) {
	        return visitor.visitBinary(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class BoolContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SimpleBooleanParser.RULE_bool;
    }

	TRUE() {
	    return this.getToken(SimpleBooleanParser.TRUE, 0);
	};

	FALSE() {
	    return this.getToken(SimpleBooleanParser.FALSE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SimpleBooleanListener ) {
	        listener.enterBool(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SimpleBooleanListener ) {
	        listener.exitBool(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SimpleBooleanVisitor ) {
	        return visitor.visitBool(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




SimpleBooleanParser.ParseContext = ParseContext; 
SimpleBooleanParser.ExpressionContext = ExpressionContext; 
SimpleBooleanParser.ComparatorContext = ComparatorContext; 
SimpleBooleanParser.BinaryContext = BinaryContext; 
SimpleBooleanParser.BoolContext = BoolContext; 
