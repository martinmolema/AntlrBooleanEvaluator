grammar SimpleBoolean;

parse
 : expression EOF
 ;

expression
 : LPAREN expression RPAREN                       #parenExpression
 | NOT expression                                 #notExpression
 | left=expression op=comparator right=expression #comparatorExpression
 | left=expression op=binary right=expression     #binaryExpression
 | bool                                           #boolExpression
 | IDENTIFIER                                     #identifierExpression
 | DECIMAL                                        #decimalExpression
 ;

comparator
 : GT | GE | LT | LE | EQ
 ;

binary
 : AND | OR | XOR | NAND | NOR
 ;

bool
 : TRUE | FALSE
 ;

AND        : [A|a][N|n][D|d] ;
OR         : [O|o][R|r] ;
XOR        : [X|x][O|o][R|r] ;
NAND       : [N|n][A|a][N|n][D|d] ;
NOR        : [N|n][O|o][R|r] ;
NOT        : [N|n][O|o][T|t];
TRUE       : [T|t][R|r][U|u][E|e] ;
FALSE      : [F|f][A|a][L|l][S|s][E|e] ;
GT         : '>' ;
GE         : '>=' ;
LT         : '<' ;
LE         : '<=' ;
EQ         : '=' ;
LPAREN     : '(' ;
RPAREN     : ')' ;
DECIMAL    : '-'? [0-9]+ ( '.' [0-9]+ )? ;
IDENTIFIER : [a-zA-Z_] [a-zA-Z_0-9]* ;
WS         : [ \r\t\u000C\n]+ -> skip;
