module.exports = {
	"extends": "airbnb-base",
	"plugins": ["jest"],
	"env": {
    "jest/globals": true
  },
	"rules": {
		"linebreak-style": "off",
		"jest/no-disabled-tests": "warn",
		"jest/no-focused-tests": "error",
		"jest/no-identical-title": "error",
		"jest/prefer-to-have-length": "warn",
		"jest/valid-expect": "error",
	}
};