// we need to run our script, so we need to run a new process
const { execSync } = require("child_process");
const fs = require("fs");

export const handleBuild = ({ repo, themeName }) => {
  console.time("Build time");
  execSync(`./deploy.sh ${repo} ${themeName}`, {
    cwd: "lambda",
    stdio: "inherit",
  });
  console.timeEnd("Build time");
  console.log(__dirname);
  const contents = fs.readFileSync("./themes/theme.zip");
  return Promise.resolve(contents);
};
