// @ts-check

export default {
  rules: {
    'vue/multi-word-component-names': 'off',
    'vue/no-multiple-template-root': 'off',
    'vue/html-self-closing': 'off',

    'indent': ['error', 2], // Два пробела для отступов
    'quotes': ['error', 'single'], // Одинарные кавычки для строк
    'semi': ['error', 'always'], // Обязательные точки с запятой
    'no-console': 'warn', // Предупреждение при использовании console
    'no-debugger': 'warn', // Предупреждение при использовании debugger
    'eqeqeq': ['error', 'always'], // Строгое сравнение
    '@stylistic/brace-style': ['error', 'stroustrup', { allowSingleLine: true }],
    'max-len': ['error', { code: 140 }], // Максимальная длина строки 120 символов
    'object-curly-spacing': ['error', 'always'], // Пробелы вокруг фигурных скобок
    'array-bracket-spacing': ['error', 'never'], // Пробелы внутри квадратных скобок
    'no-trailing-spaces': 'error', // Запрещены пробелы в конце строки
    'eol-last': ['error', 'always'], // Требуется пустая строка в конце файла
    '@stylistic/arrow-parens': ['error', 'always'],

    // Правила для Vue
    'vue/max-attributes-per-line': ['error', { singleline: 2, multiline: 1 }],
    'vue/singleline-html-element-content-newline': ['error'],
    'vue/multiline-html-element-content-newline': ['error', { allowEmptyLines: false }],

    // Дополнительные правила TypeScript
    '@typescript-eslint/explicit-module-boundary-types': 'off', // Отключение требования явно указывать типы для функций
    '@typescript-eslint/ban-ts-comment': 'off',
  },
};
