发布自己的项目到npm官网上去
1、文件夹的名字、package.json里的name 与 bin里的命令，三者名字保持一致！（举个例子：wdd-pack）
2、进入到目录，wdd-pack。
-> npm adduser 输入账号密码
-> npm publish 发布前，要升级版本号，1.0.0->1.0.1
-> 发布成功后，命令行会出现：wdd-pack@1.0.1
-> 而后会收到一个npm发来的邮件
-> 过5分钟，打开https://www.npmjs.com/package/，搜索wdd-pack，就能看到啦！！！


别人安装，大概需要在发布后10分钟之后才能安装到最新的包！：
npm install wdd-pack -g，之后进入到 C:\Users\ASROCK\AppData\Roaming\npm\node_modules，就可以看到wdd-pack包啦！
npm install wdd-pack -d，就可以在当前目录的node_modules看到wdd-pack包啦！