import SimpleBooleanListener from "./SimpleBooleanListener.js";

export class MyListener extends SimpleBooleanListener {

    enterParse(ctx) {
        super.enterParse(ctx);
    }

    exitParse(ctx) {
        super.exitParse(ctx);
    }

    enterBinaryExpression(ctx) {
        super.enterBinaryExpression(ctx);
    }

    exitBinaryExpression(ctx) {
        super.exitBinaryExpression(ctx);
    }

    enterDecimalExpression(ctx) {
        super.enterDecimalExpression(ctx);
    }

    exitDecimalExpression(ctx) {
        super.exitDecimalExpression(ctx);
    }

    enterBoolExpression(ctx) {
        super.enterBoolExpression(ctx);
    }

    exitBoolExpression(ctx) {
        super.exitBoolExpression(ctx);
    }

    enterIdentifierExpression(ctx) {
        super.enterIdentifierExpression(ctx);
    }

    exitIdentifierExpression(ctx) {
        super.exitIdentifierExpression(ctx);
    }

    enterNotExpression(ctx) {
        super.enterNotExpression(ctx);
    }

    exitNotExpression(ctx) {
        super.exitNotExpression(ctx);
    }

    enterParenExpression(ctx) {
        super.enterParenExpression(ctx);
    }

    exitParenExpression(ctx) {
        super.exitParenExpression(ctx);
    }

    enterComparatorExpression(ctx) {
        super.enterComparatorExpression(ctx);
    }

    exitComparatorExpression(ctx) {
        super.exitComparatorExpression(ctx);
    }

    enterComparator(ctx) {
        super.enterComparator(ctx);
    }

    exitComparator(ctx) {
        super.exitComparator(ctx);
    }

    enterBinary(ctx) {
        super.enterBinary(ctx);
    }

    exitBinary(ctx) {
        super.exitBinary(ctx);
    }

    enterBool(ctx) {
        super.enterBool(ctx);
        if (ctx.TRUE()) { console.log(true); return true; }
        if (ctx.FALSE()) { console.log(false); return false}
    }

    exitBool(ctx) {
        super.exitBool(ctx);
    }
}
