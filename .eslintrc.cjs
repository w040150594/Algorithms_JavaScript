module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: ['eslint:recommended'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },

  /*
   * "off" 或 0    ==>  关闭规则
   * "warn" 或 1   ==>  打开的规则作为警告（不影响代码执行）
   * "error" 或 2  ==>  规则作为一个错误（代码不能执行，界面报错）
   */
  rules: {
    'no-var': 'error', // 要求使用 let 或 const 而不是 var
    'no-undef': 'off', // 禁用未声明的变量
    'no-unused-vars': 'off', // 禁止出现未使用过的变量
    'no-const-assign': 'error' // 禁止修改 const 声明的变量
  }
};
