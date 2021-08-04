module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends:
    process.env.NODE_ENV === "production"
      ? ["plugin:vue/essential", "eslint:recommended"]
      : [
          "plugin:vue/strongly-recommended",
          "plugin:prettier/recommended",
          "eslint:recommended",
          "@vue/prettier",
        ],
  parserOptions: {
    parser: "babel-eslint",
  },
  //https://eslint.org/docs/rules/no-mixed-spaces-and-tabs#disallow-mixed-spaces-and-tabs-for-indentation-no-mixed-spaces-and-tabs
  rules: {
    //indent: ["error", 2, { MemberExpression: 1 }],
    "linebreak-style": ["warn", "unix"],
    quotes: ["warn", "double"],
    "no-mixed-spaces-and-tabs": ["warn", "smart-tabs"],
    semi: ["error", "always"],
    //"comma-dangle": ["warn", "never"],
    "arrow-parens": ["warn", "always"],
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
  },
};
