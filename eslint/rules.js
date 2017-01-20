module.exports = {
  "rules": {
    // always return from array method callbacks
    "array-callback-return": 2,
    // require () around arrow function with more than one argument
    "arrow-parens": [2, "as-needed"],
    // use variables within the scope they are defined
    "block-scoped-var": 2,
    "dot-notation": 2,
    // prefer === vs ==
    "eqeqeq": 2,
    // use named function expressions instead of function declarations
    "func-style": 2,
    // prefer [] vs new Array()
    "no-array-constructor": 2,
    // no const reassignment
    "no-const-assign": 2,
    "no-dupe-class-members": 2,
    "no-duplicate-imports": 2,
    // disallow else after a return statement in if block
    "no-else-return": 2,
    // as it says
    "no-empty-function": 2,
    // no unnecessary bind() methods
    "no-extra-bind": 2,
    // no switch fall-through
    "no-fallthrough": 2,
    // no function declarations inside loop
    "no-loop-func": 2,
    // prefer {} vs new Object();
    "no-new-object": 2,
    // never use function constructor e.g. new Function()
    "no-new-func": 2,
    // never reassign parameters
    "no-param-reassign": 2,
    // ++ or --. +=1 is more expressive. Allow ++/-- in a for loop
    "no-plusplus": [2, { "allowForLoopAfterthoughts": true }],
    // no undefined variables
    "no-undef": 2,
    // no empty class constructor
    "no-useless-constructor": 2,
    "no-var": 2,
    // prefer object() shorthand function declarations
    "object-shorthand": 2,
    // one declaration for each variable, don't combine
    "one-var": [2, "never"],
    // prefer arrow function instead of function expression
    "prefer-arrow-callback": 2,
    "prefer-const": 2,
    // prefer rest params vs arguments object
    "prefer-rest-params": 2,
    // prefer template strings vs concatenation
    "prefer-template": 2,
    "quotes": [2, "single"],
    // quotes around property names only when needed & for reserved words
    "quote-props": [2, "as-needed", { "keywords": true }],
    // prefer ${name} vs ${ name }
    "template-curly-spacing": 2,
  }
};
