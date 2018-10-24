const { execSync } = require('child_process');
const BranchName = require('branch-name');

async function runPublish() {
  execSync('yarn run build:static');
  const branchName = await BranchName.get();
  execSync('git checkout gh-pages');
  execSync('git rm * -r');
  execSync('git add .');
  execSync('git commit -m "Automated publish"');
  execSync(`git checkout ${branchName}`);
}

// eslint-disable-next-line
runPublish().catch(console.error);
