import { execSync } from 'child_process';
import * as readlineSync from 'readline-sync';

const appName = readlineSync.question('Name your Farcaster app: ');

execSync(`git clone https://github.com/dylsteck/farcasterkit/tree/main/examples/starter.git ${appName} && echo "App created"`, { stdio: 'inherit' });