/*
 * @Author: phil
 * @Date: 2025-12-19 20:54:35
 */

import { locales } from "../locales/index.ts";
import pkg from 'enquirer';
import { execCommand } from '../shared/index.ts'
const { prompt } = pkg



export async function gitCommit(lang: Lang = 'zh-cn') {
  const { gitCommitMessages, gitCommitScopes, gitCommitTypes } = locales[lang];

  console.log('prompt', prompt);
  
  const result = await prompt([
    {
      type: 'select',
      name: 'type',
      message: gitCommitMessages.types,
      choices: gitCommitTypes.map(([value, label]) => ({ value, label }))
    },
    {
      type: 'select',
      name: 'scope',
      message: gitCommitMessages.scopes,
      choices: gitCommitScopes.map(([value, label]) => ({ value, label }))
    },
    {
      type: 'input',
      name: 'description',
      message: gitCommitMessages.description
    }
  ]);

  const breaking = result.description.startsWith('!') ? '!' : '';
  const description = result.description.replace(/^!/, '').trim();
  const commitMsg = `${result.type}(${result.scope})${breaking}: ${description}`;


  await execCommand('git', ['commit', '-m', commitMsg], { stdio: 'inherit' });
}