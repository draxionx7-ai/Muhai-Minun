import { execSync } from 'child_process';
try {
  console.log(execSync('git status', { encoding: 'utf-8' }));
  console.log(execSync('git checkout .', { encoding: 'utf-8' }));
} catch (e) {
  console.error(e.message);
}
