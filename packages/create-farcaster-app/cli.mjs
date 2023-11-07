#!/usr/bin/env node

import { execSync } from 'child_process';
import readlineSync from 'readline-sync';

const appName = readlineSync.question('Name your Farcaster app: ');

try {
  execSync(`git clone https://github.com/dylsteck/farcasterkit/tree/main/examples/starter.git ${appName}`, { stdio: 'inherit' });
  console.log('App created successfully');
} catch (error) {
  console.error('Error occurred:', error);
}