module.exports = {
  "rules": {
    "quotes": [2, "single"],
    "no-var": 2,
    "prefer-const": 2,
    "no-empty-function": 2,
    // prefer === vs ==
    "eqeqeq": 2,
    // no const reassignment
    "no-const-assign": 2,
    // use variables within the scope they are defined
    "block-scoped-var": 2,
    // disallow else after a return statement in if block
    "no-else-return": 2,
    // no unnecessary bind() methods
    "no-extra-bind": 2,
    // no switch fall-through
    "no-fallthrough": 2,
    // no function declarations inside loop
    "no-loop-func": 2,
    // prefer {} vs new Object();
    "no-new-object": 2,
    // prefer object() shorthand function declarations
    "object-shorthand": 2,
    // quotes around property names only when needed & for reserved words
    "quote-props": [2, "as-needed", { "keywords": true }],
    // prefer [] vs new Array()
    "no-array-constructor": 2,
    // always return from array method callbacks
    "array-callback-return": 2,
    // prefer template strings vs concatenation
    "prefer-template": 2,
    // prefer ${name} vs ${ name }
    "template-curly-spacing": 2
  }
};
