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
        "react/jsx-filename-extension": 0
    },
    "parser": "babel-eslint"
};