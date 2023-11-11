#!/usr/bin/env node

import { execSync } from 'child_process';
import readlineSync from 'readline-sync';

const appName = readlineSync.question('Name your Farcaster app: ');

const choices = [
  'starter: a starter next.js app to help you get up and running quickly',
  'casterscan: a block explorer for farcaster, built on farcaster kit',
];
const index = readlineSync.keyInSelect(choices, 'Choose your template:', { cancel: false });

try {
  switch (index) {
    case 0: // starter
      execSync(`git clone --depth 1 https://github.com/dylsteck/farcasterkit.git`, { stdio: 'inherit' });
      execSync(`mkdir ${appName}`);
      execSync(`mv farcasterkit/examples/starter/* ${appName}`);
      execSync(`mv farcasterkit/examples/starter/.[^.]* ${appName}`);
      execSync(`rm -rf farcasterkit`);
      break;
    case 1: // casterscan
      execSync(`git clone --depth 1 https://github.com/dylsteck/casterscan.git ${appName}`, { stdio: 'inherit' });
      break;
  }
  console.log(`${appName} created successfully`);
} catch (error) {
  console.error(`Error occurred creating ${appName}:`, error);
}