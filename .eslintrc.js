module.exports = {
    "extends": ["plugin:meteor/recommended", "airbnb"],
    "installedESLint": true,
    "plugins": [
        "react",
        "jsx-a11y",
        "import",
        "meteor"
    ],
    "rules": {
        "react/jsx-filename-extension": 0,
        "comma-dangle": 0,
        "class-methods-use-this": 0,
        "no-underscore-dangle": 0,
        "no-return-assign": "warn",
        "new-cap": "warn",
        "no-shadow": "warn",
        "func-names": "warn",
        "prefer-arrow-callback": "warn",
        "arrow-parens": 0,
        "import/prefer-default-export": "warn"
    },
    "parser": "babel-eslint"
};