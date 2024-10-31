const [issueNumber, branchTitle] = process.argv.slice(2);
const command = `bash ./branch-create.sh ${issueNumber} "${branchTitle}"`;
require("child_process").execSync(command, {stdio: "inherit"});
