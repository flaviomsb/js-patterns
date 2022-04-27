/**
 * Is Javascript compiled or interpreted? Most likely the answer in 2022 is compiled.
 * And, is there a way to know it? Well, yes. Whenever this script is executed
 * there will be an error like below:
 *
 * let a = . 4;
 *         ^
 *  SyntaxError: Unexpected token '.'
 *
 * The very first line is not printed as it would be expected if Javascript was purely interpreted.
 * That's because Javscript code gets tokenized and inspected for syntax errors before the execution
 * (Which is one of the compilation stages btw)
 */

console.log('I would like to be printed out but the syntax error below won\'t let me');

// Uncomment the line below before running this file
// let a = . 4;
