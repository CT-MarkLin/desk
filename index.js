const exec = require('child_process').execSync;
// const process = require("child_process");

// 执行 npm run build 命令
;(function() {
  exec('pm2 start ./amd64/hbbs && pm2 start ./amd64/hbbr', (error, stdout, stderr) => {
    if (!error) {
      // 成功
      console.log("success___________________")
    } else {
      // 失败
      console.log("fail___________________")
    }
  });
})();

var str = exec('pwd');
console.log(str.toString("utf8").trim());