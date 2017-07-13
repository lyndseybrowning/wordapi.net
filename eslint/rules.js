module.exports = {
  "rules": {
    "array-bracket-spacing": [2, "never", { "objectsInArrays": false }],
    // always return from array method callbacks
    "array-callback-return": 2,
    // omit () only when returning single argument
    // require () when the function body is surrounded by braces {}
    "arrow-parens": [2, "as-needed", { "requireForBlockBody": true }],
    // use variables within the scope they are defined
    "block-scoped-var": 2,
    // enforce braces in if and put else on same line as if closing braces
    "brace-style": [2, "1tbs"],
    // use camelCase for objects, functions and instances
    "camelcase": [2, { "properties": "always" }],
    // always create dangling comma on multiline items
    "comma-dangle": [2, "always-multiline"],
    // no leading comma's, ever!
    "comma-style": [2, "last"],
    "dot-notation": 2,
    // end files with a single line char
    "eol-last": 2,
    // prefer === vs ==
    "eqeqeq": 2,
    // use named function expressions instead of function declarations
    "func-style": 2,
    // enforce spaces before and after but not for if, while and for
    "keyword-spacing": [2, { "overrides": { "catch": { "after": false }, "throw": { "after": false }, "for": { "after": false }, "while": { "after": false } } }],
    // max length of code
    "max-len": [2, 80],
    // use PascalCase for constructors or classes
    "new-cap": 2,
    // create new line for chained calls
    "newline-per-chained-call": [2, { "ignoreChainWithDepth": 3 }],
    // prefer [] vs new Array()
    "no-array-constructor": 2,
    // wrap case decs in braces to avoid lexical visibility
    "no-case-declarations": 2,
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
    "no-underscore-dangle": 2,
    // e.g. const foo = a ? a : b should be const foo = a || b;
    "no-unneeded-ternary": 2,
    // no empty class constructor
    "no-useless-constructor": 2,
    "no-var": 2,
    "no-whitespace-before-property": 2,
    // spaces between curly braces e.g. { name: 'Lyndsey' }
    "object-curly-spacing": [2, "always"],
    // prefer object() shorthand function declarations
    "object-shorthand": 2,
    // one declaration for each variable, don't combine
    "one-var": [2, "never"],
    // don't pad blocks with blank lines
    "padded-blocks": [2, "never"],
    // prefer arrow function instead of function expression
    "prefer-arrow-callback": 2,
    "prefer-const": 2,
    // prefer rest params vs arguments object
    "prefer-rest-params": 2,
    // prefer template strings vs concatenation
    "prefer-template": 2,
    "quotes": [2, "single"],
    // always supply radix in parseInt
    "radix": [2, "always"],
    // semi-colons, always
    "semi": [2, "always"],
    // place 1 space before leading braces
    "space-before-blocks": [2, "always"],
    // create space between operators e.g a = 0
    "space-infix-ops": 2,
    // no space inside params
    "space-in-parens": [2, "never"],
    // quotes around property names only when needed & for reserved words
    "quote-props": [2, "as-needed", { "keywords": true }],
    // prefer ${name} vs ${ name }
    "template-curly-spacing": 2,
  }
};
