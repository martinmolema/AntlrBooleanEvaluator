import SimpleBooleanVisitor from "./SimpleBooleanVisitor.js";

export class MyVisitor extends SimpleBooleanVisitor {


    constructor(/* Map<string,any> */ variables) {
        super();
        /* Map<string,any> */ this.variables = variables;
    }

    visitParse(/* SimpleBooleanParser.ParseContext */ ctx) {
        console.log('visitParse', ctx.getText());
        return super.visit(ctx.expression());
    }

    visitBinaryExpression(ctx) {
        console.log('visitBinaryExpression', ctx.getText());

        const left  = this.asBoolean(ctx.left);
        const right = this.asBoolean(ctx.right);

        if (ctx.op.AND())  { return left && right; }
        if (ctx.op.OR())   { return left || right; }
        if (ctx.op.XOR())  { return (left && !right) || (!left && right); }
        if (ctx.op.NOR())  { return !(left || right); }
        if (ctx.op.NAND()) { return !(left && right); }

        throw  new Error(`Unidentified operator "${ctx.op.getText()}"`);
    }

    visitDecimalExpression(/* DecimalExpression */ ctx) {
        console.log('visitDecimalExpression', ctx.DECIMAL().getText());
        return parseFloat(ctx.DECIMAL().getText());
    }

    visitBoolExpression(ctx) {
        console.log('visitBoolExpression', ctx.getText());
        switch (ctx.bool().getText().toUpperCase()) {
            case 'TRUE':
                return true;
            case 'FALSE':
                return false;
        }
    }

    visitIdentifierExpression(/* IdentifierExpression */ ctx) {
        const value = this.variables.get(ctx.IDENTIFIER().getText())
        console.log(`visitIdentifierExpression ${ctx.getText()} = ${value}`);
        return value;
    }

    visitNotExpression(/* NotExpressionContext */ ctx) {
        const res = this.visit(ctx.expression());
        console.log(`visitNotExpression : ${res} => ${! res}`);
        return ! res;
    }

    visitParenExpression(ctx) {
        console.log('visitParenExpression', ctx.getText());
        return super.visit(ctx.expression());
    }

    visitComparatorExpression(ctx) {
        console.log('visitComparatorExpression', ctx.getText());
        if (ctx.op.EQ() ) {
            const left = this.visit(ctx.left);
            const right = this.visit(ctx.right);

            return left == right;
        }
        else if (ctx.op.LE()) {
            return this.asDouble(ctx.left) <= this.asDouble(ctx.right);
        }
        else if (ctx.op.GE() ) {
            return this.asDouble(ctx.left) >= this.asDouble(ctx.right);
        }
        else if (ctx.op.LT()) {
            return this.asDouble(ctx.left) < this.asDouble(ctx.right);
        }
        else if (ctx.op.GT()) {
            return this.asDouble(ctx.left) > this.asDouble(ctx.right);
        }
        throw new Error('unknown comparator');
    }

    visitBool(/* BoolContext */ ctx) {
        console.log('visitBool', ctx.getText());
        if (ctx.TRUE()) { console.log(true);}
        if (ctx.FALSE()) { console.log(false);}
        // return super.visitBool(ctx);
    }

    asBoolean(/* SimpleBooleanParser.ExpressionContext */ ctx) {
        console.log(`asBoolean: ${ctx.getText()}`);
        const res = this.visit(ctx);
        console.log(`asBoolean: ${res}`);
        return res;
    }

    asDouble(/* SimpleBooleanParser.ExpressionContext */ ctx) {
        console.log(`asBoolean: `);
        const res = parseFloat(this.visit(ctx));
        console.log(res);
        return res;
    }

}
