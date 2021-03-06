'use strict';

module.exports = {
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
		'capitalized-comments': 'off',
		'unicorn/filename-case': 'off',
		'new-cap': 'off'
	}
};
