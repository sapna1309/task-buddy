import { UserConfig } from '@commitlint/types';

const config: UserConfig = {
    extends: ['@commitlint/config-conventional'],
    rules: {
        'header-max-length': [2, 'always', 72],
        'type-enum': [
            2,
            'always',
            ['feat', 'fix', 'docs', 'style', 'refactor', 'test', 'chore'],
        ],
        'subject-case': [2, 'never', ['start-case', 'pascal-case']],
        'type-case': [2, 'always', 'lower-case'],
    },
};

export default config;
