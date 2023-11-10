#!/usr/bin/env node

import { execSync } from 'child_process';
import readlineSync from 'readline-sync';

const appName = readlineSync.question('Name your Farcaster app: ');

try {
  execSync(`git clone --depth 1 https://github.com/dylsteck/farcasterkit.git`, { stdio: 'inherit' });

  execSync(`mkdir ${appName}`);

  execSync(`mv farcasterkit/examples/starter/* ${appName}`);
  execSync(`mv farcasterkit/examples/starter/.[^.]* ${appName}`);

  execSync(`rm -rf farcasterkit`);

  console.log('App created successfully');
} catch (error) {
  console.error('Error occurred:', error);
}