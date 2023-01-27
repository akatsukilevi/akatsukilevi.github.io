module.exports = {
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 2022,
		project: 'tsconfig.json',
		tsconfigRootDir: __dirname,
		sourceType: 'module',
	},
	plugins: [
		'@typescript-eslint/eslint-plugin',
		'deprecate',
		'woke',
		'promise',
		'no-secrets',
		'xss',
		'simple-import-sort',
		'no-unsanitized',
	],
	extends: [
		'plugin:@typescript-eslint/recommended',
		'plugin:prettier/recommended',
		'plugin:node/recommended',
		'plugin:promise/recommended',
		'plugin:jsonc/base',
		'plugin:security/recommended',
	],
	root: true,
	env: {
		browser: true,
	},
	rules: {
		//* We are using Typescript, node doesn't need to support it to use it
		'node/no-unsupported-features/es-syntax': 'off',
		//* Vite related weirdness
		'node/no-unpublished-import': 'off',
		'node/no-extraneous-import': 'off',
		//* Invalid 'security warnings'
		'security/detect-object-injection': 'off',

		//* Misc organization rules
		'@typescript-eslint/explicit-module-boundary-types': 'off',
		'@typescript-eslint/explicit-function-return-type': 'off',
		'@typescript-eslint/interface-name-prefix': 'off',
		'@typescript-eslint/no-explicit-any': 'off',
		'no-secrets/no-secrets': 'error',
		'woke/all': 'error',
	},
};
