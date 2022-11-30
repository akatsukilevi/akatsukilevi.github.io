export default {
	extensions: ['ts'],
	require: ['ts-node/register', 'tsconfig-paths/register'],
	files: ['src/**/*.spec.ts'],
	timeout: '1m',
};
