'use strict';

module.exports = {
  types: [
    {
      value: 'feat',
      name: 'feat:      New feature',
    },
    {
      value: 'fix',
      name: 'fix:       Bug fix',
    },
    {
      value: 'style',
      name: 'style:       Change appearence of component',
    },
    {
      value: 'test',
      name: 'test:       New test',
    },
    {
      value: 'refactor',
      name: 'refactor:       Code refactoring',
    },
    {
      value: 'conf',
      name: 'conf:       Project configuration',
    },
  ],
  allowCustomScopes: true,
  allowBreakingChanges: false,
  footerPrefix: 'METADATA:',
  subjectLimit: 72,
};
