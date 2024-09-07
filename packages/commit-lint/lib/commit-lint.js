module.exports = {
  // 使用 conventional-changelog-conventionalcommits 预设解析器
  parserPreset: 'conventional-changelog-conventionalcommits',
  rules: {
    // 正文前必须有一个空行
    'body-leading-blank': [1, 'always'],
    // 正文每行最大长度为 100 个字符
    'body-max-line-length': [2, 'always', 100],
    // 脚注前必须有一个空行
    'footer-leading-blank': [1, 'always'],
    // 脚注每行最大长度为 100 个字符
    'footer-max-line-length': [2, 'always', 100],
    // 标题最大长度为 100 个字符
    'header-max-length': [2, 'always', 100],
    // 范围（scope）必须全部使用小写字母
    'scope-case': [2, 'always', 'lower-case'],
    // 主题（subject）的大小写不作强制规定（0 表示关闭此规则）
    'subject-case': [0],
    // 主题（subject）不能为空
    'subject-empty': [2, 'never'],
    // 主题（subject）末尾不能有句号
    'subject-full-stop': [2, 'never', '.'],
    // 类型（type）必须全部使用小写字母
    'type-case': [2, 'always', 'lower-case'],
    // 类型（type）不能为空
    'type-empty': [2, 'never'],
    // 类型（type）必须是枚举中的一种：feat, fix, docs, style, test, refactor, chore, revert
    'type-enum': [2, 'always', ['feat', 'fix', 'docs', 'style', 'test', 'refactor', 'chore', 'revert']],
  },
};