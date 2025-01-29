module.exports = { extends: ['@commitlint/config-conventional'],
    rules: {
        // Define custom rules for commit message format
        'header-max-length': [2, 'always', 72],  // Maximum length of the header (first line)
        'type-enum': [
            2,
            'always',
            ['feat', 'fix', 'docs', 'style', 'refactor', 'test', 'chore'],  // Custom types
        ],
        'subject-case': [2, 'never', ['start-case', 'pascal-case']],  // Custom subject format
        'type-case': [2, 'always', 'lower-case'], // Ensure commit type is lowercase
    },
 };
