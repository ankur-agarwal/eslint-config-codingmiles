'use strict';

module.exports = {
	parserOptions: {
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true
		}
	},
	env: {
		node: true,
		es6: true
	},
	reportUnusedDisableDirectives: true,
	extends: [
		'xo',
		'xo-react'
	],
	rules: {
		'object-curly-spacing': [
			'error',
			'always'
		],
		semi: [
			'error',
			'never'
		],
		'capitalized-comments': 'off'
	}
};
