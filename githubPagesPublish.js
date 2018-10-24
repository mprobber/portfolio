const { execSync } = require('child_process');
const BranchName = require('branch-name');

async function runPublish() {
  execSync('yarn run build:static');
  const branchName = await BranchName.get();
  execSync('git checkout gh-pages');
  execSync('git rm * -r');
  execSync('git add .');
  execSync('git commit -m "Automated publish"');
  try {
    execSync('git push origin gh-pages');
  } catch (e) {
    // eslint-disable-next-line
    console.error(e);
  }
  execSync(`git checkout ${branchName}`);
}

// eslint-disable-next-line
runPublish().catch(console.error);
