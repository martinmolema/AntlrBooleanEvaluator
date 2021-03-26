// Generated from SimpleBoolean.g4 by ANTLR 4.9.2
import org.antlr.v4.runtime.Lexer;
import org.antlr.v4.runtime.CharStream;
import org.antlr.v4.runtime.Token;
import org.antlr.v4.runtime.TokenStream;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.misc.*;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class SimpleBooleanLexer extends Lexer {
	static { RuntimeMetaData.checkVersion("4.9.2", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		AND=1, OR=2, XOR=3, NAND=4, NOR=5, NOT=6, TRUE=7, FALSE=8, GT=9, GE=10, 
		LT=11, LE=12, EQ=13, LPAREN=14, RPAREN=15, DECIMAL=16, IDENTIFIER=17, 
		WS=18;
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	private static String[] makeRuleNames() {
		return new String[] {
			"AND", "OR", "XOR", "NAND", "NOR", "NOT", "TRUE", "FALSE", "GT", "GE", 
			"LT", "LE", "EQ", "LPAREN", "RPAREN", "DECIMAL", "IDENTIFIER", "WS"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, null, null, null, null, null, null, null, null, "'>'", "'>='", 
			"'<'", "'<='", "'='", "'('", "')'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "AND", "OR", "XOR", "NAND", "NOR", "NOT", "TRUE", "FALSE", "GT", 
			"GE", "LT", "LE", "EQ", "LPAREN", "RPAREN", "DECIMAL", "IDENTIFIER", 
			"WS"
		};
	}
	private static final String[] _SYMBOLIC_NAMES = makeSymbolicNames();
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}


	public SimpleBooleanLexer(CharStream input) {
		super(input);
		_interp = new LexerATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@Override
	public String getGrammarFileName() { return "SimpleBoolean.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public String[] getChannelNames() { return channelNames; }

	@Override
	public String[] getModeNames() { return modeNames; }

	@Override
	public ATN getATN() { return _ATN; }

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\2\24x\b\1\4\2\t\2\4"+
		"\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13\t"+
		"\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\4\22\t\22"+
		"\4\23\t\23\3\2\3\2\3\2\3\2\3\3\3\3\3\3\3\4\3\4\3\4\3\4\3\5\3\5\3\5\3\5"+
		"\3\5\3\6\3\6\3\6\3\6\3\7\3\7\3\7\3\7\3\b\3\b\3\b\3\b\3\b\3\t\3\t\3\t\3"+
		"\t\3\t\3\t\3\n\3\n\3\13\3\13\3\13\3\f\3\f\3\r\3\r\3\r\3\16\3\16\3\17\3"+
		"\17\3\20\3\20\3\21\5\21\\\n\21\3\21\6\21_\n\21\r\21\16\21`\3\21\3\21\6"+
		"\21e\n\21\r\21\16\21f\5\21i\n\21\3\22\3\22\7\22m\n\22\f\22\16\22p\13\22"+
		"\3\23\6\23s\n\23\r\23\16\23t\3\23\3\23\2\2\24\3\3\5\4\7\5\t\6\13\7\r\b"+
		"\17\t\21\n\23\13\25\f\27\r\31\16\33\17\35\20\37\21!\22#\23%\24\3\2\22"+
		"\5\2CCcc~~\5\2PPpp~~\5\2FFff~~\5\2QQqq~~\5\2TTtt~~\5\2ZZzz~~\5\2VVvv~"+
		"~\5\2WWww~~\5\2GGgg~~\5\2HHhh~~\5\2NNnn~~\5\2UUuu~~\3\2\62;\5\2C\\aac"+
		"|\6\2\62;C\\aac|\5\2\13\f\16\17\"\"\2}\2\3\3\2\2\2\2\5\3\2\2\2\2\7\3\2"+
		"\2\2\2\t\3\2\2\2\2\13\3\2\2\2\2\r\3\2\2\2\2\17\3\2\2\2\2\21\3\2\2\2\2"+
		"\23\3\2\2\2\2\25\3\2\2\2\2\27\3\2\2\2\2\31\3\2\2\2\2\33\3\2\2\2\2\35\3"+
		"\2\2\2\2\37\3\2\2\2\2!\3\2\2\2\2#\3\2\2\2\2%\3\2\2\2\3\'\3\2\2\2\5+\3"+
		"\2\2\2\7.\3\2\2\2\t\62\3\2\2\2\13\67\3\2\2\2\r;\3\2\2\2\17?\3\2\2\2\21"+
		"D\3\2\2\2\23J\3\2\2\2\25L\3\2\2\2\27O\3\2\2\2\31Q\3\2\2\2\33T\3\2\2\2"+
		"\35V\3\2\2\2\37X\3\2\2\2![\3\2\2\2#j\3\2\2\2%r\3\2\2\2\'(\t\2\2\2()\t"+
		"\3\2\2)*\t\4\2\2*\4\3\2\2\2+,\t\5\2\2,-\t\6\2\2-\6\3\2\2\2./\t\7\2\2/"+
		"\60\t\5\2\2\60\61\t\6\2\2\61\b\3\2\2\2\62\63\t\3\2\2\63\64\t\2\2\2\64"+
		"\65\t\3\2\2\65\66\t\4\2\2\66\n\3\2\2\2\678\t\3\2\289\t\5\2\29:\t\6\2\2"+
		":\f\3\2\2\2;<\t\3\2\2<=\t\5\2\2=>\t\b\2\2>\16\3\2\2\2?@\t\b\2\2@A\t\6"+
		"\2\2AB\t\t\2\2BC\t\n\2\2C\20\3\2\2\2DE\t\13\2\2EF\t\2\2\2FG\t\f\2\2GH"+
		"\t\r\2\2HI\t\n\2\2I\22\3\2\2\2JK\7@\2\2K\24\3\2\2\2LM\7@\2\2MN\7?\2\2"+
		"N\26\3\2\2\2OP\7>\2\2P\30\3\2\2\2QR\7>\2\2RS\7?\2\2S\32\3\2\2\2TU\7?\2"+
		"\2U\34\3\2\2\2VW\7*\2\2W\36\3\2\2\2XY\7+\2\2Y \3\2\2\2Z\\\7/\2\2[Z\3\2"+
		"\2\2[\\\3\2\2\2\\^\3\2\2\2]_\t\16\2\2^]\3\2\2\2_`\3\2\2\2`^\3\2\2\2`a"+
		"\3\2\2\2ah\3\2\2\2bd\7\60\2\2ce\t\16\2\2dc\3\2\2\2ef\3\2\2\2fd\3\2\2\2"+
		"fg\3\2\2\2gi\3\2\2\2hb\3\2\2\2hi\3\2\2\2i\"\3\2\2\2jn\t\17\2\2km\t\20"+
		"\2\2lk\3\2\2\2mp\3\2\2\2nl\3\2\2\2no\3\2\2\2o$\3\2\2\2pn\3\2\2\2qs\t\21"+
		"\2\2rq\3\2\2\2st\3\2\2\2tr\3\2\2\2tu\3\2\2\2uv\3\2\2\2vw\b\23\2\2w&\3"+
		"\2\2\2\t\2[`fhnt\3\b\2\2";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}