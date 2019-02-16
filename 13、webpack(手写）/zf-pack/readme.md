1、在zf-pack新建一个bin文件夹，里面有一个zf-pack.js文件，文件里面写上如下代码：
#! /user/bin/env node

console.log('star');

###############################################################################

2、package.json里设bin
如下：
  "bin": {
    "zf-pack": "./bin/zf-pack"
  }

###############################################################################

3、在zf-pack根目录执行：npm link，就可以看到这样2行代码，表示成功了！作用：把zf-pack映射到全局上，方便
npm WARN zf-pack@1.0.0 No repository field.
up to date in 0.05s
C:\Users\ASROCK\AppData\Roaming\npm\zf-pack -> C:\Users\ASROCK\AppData\Roaming\npm\node_modules\zf-pack\bin\zf-pack.js
C:\Users\ASROCK\AppData\Roaming\npm\node_modules\zf-pack -> C:\Users\ASROCK\Desktop\zf-pack

###############################################################################

一边编写，一边测试，就需要在当前项目下，把zf-pack链接进来
这样在本地开发的时候，就可以实时更新了！！

4、之后到webpack-dev 的目录下执行  npm link zf-pack 链接过去，如下表示成功！
C:\Users\ASROCK\Desktop\webpack-dev\node_modules\zf-pack -> C:\Users\ASROCK\AppData\Roaming\npm\node_modules\zf-pack -> C:\Users\ASROCK\Desktop\zf-pack

5、之后到webpack-dev 的目录下执行  npx zf-pack，出现了zf-pack.js里面要打印的内容，这样就成功啦！！！
npx: 1 安装成功，用时 1.494 秒
The "path" argument must be of type string
C:\Users\ASROCK\Desktop\webpack-dev\node_modules\zf-pack\bin\zf-pack.js
start


##############################################################################

5、到webpack-dev的目录下执行 npx zf-pack就可以看到效果，会自动生成一个boundle.js文件





