/**
 * The code below will print the following output:
 *
 * Error: stack trace error
 *   at errorOut (.../js-patterns/src/foundations/call-stack-example.js:3:9)
 *   at function1 (.../js-patterns/src/foundations/call-stack-example.js:7:3)
 *   at function2 (.../js-patterns/src/foundations/call-stack-example.js:11:3)
 *   at function3 (.../js-patterns/src/foundations/call-stack-example.js:15:3)
 *   at Object.<anonymous> (.../js-patterns/src/foundations/call-stack-example.js:18:1)
 *   at Module._compile (node:internal/modules/cjs/loader:1099:14)
 *
 * 1. When function3() gets executed, an empty stack frame is created.
 *    It is the main (anonymous) entry point of the program.
 * 2. function3() then calls function2() which is pushed into the stack.
 * 3. function2() then calls function1() which is pushed into the stack.
 * 4. function1() finally calls errorOut() which is the last function pushed into the stack
 * 5. errorOut() is pop off the stack.
 * 6. The execution order then move to function1() and so on until
 *    function3() is pop off the stack, clearing the memory.
 */

function errorOut() {
  throw new Error('stack trace error');
}

function function1() {
  errorOut();
}

function function2() {
  function1();
}

function function3() {
  function2();
}

function3();
