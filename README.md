本库已迁移到 [https://github.com/iDongMobility/imgenius-docs](https://github.com/iDongMobility/imgenius-docs) ，此库不在维护。

# imgenius 用户手册

欢迎使用艾动科技imgenius的开源文档，参与开源不仅仅是提供更新，它也让我们知道何时出现问题。请查看此自述文件以了解如何帮助参与撰写本文档。

[文档目录](_sidebar.md)

## 先决条件

参与撰写文档需要一个 GitHub 帐户，如果还没有帐户，请自行创建。 [注册GitHub账户](https://github.com/join)

## 请安装以下工具

* [Git](https://git-scm.com/download)
* [TortoiseGit](https://tortoisegit.org/download/)（Git客户端，可选）
* [Node.js](https://nodejs.org/zh-cn/download/)（本地预览手册，可选）
* [docsify](https://docsify.js.org/)（本地预览手册，可选）
* [Visual Studio Code](https://code.visualstudio.com/Download)（Markdown编辑器，可选）

## 生成PDF

通过[docsify-pdf-converter](https://github.com/meff34/docsify-to-pdf-converter)工具可以在本地生成PDF文档。

### 安装

```sh
npm install --save-dev docsify-pdf-converter
```

### 转化

```sh
npm run convert
```

## 贡献文档注意事项

* 每页文档只有一个一级标题，一级标题名就是文档名。
* 按内容合理规划二级标题，二级标题会自动作为右侧导航目录。
* 如果用Visual Studio Code作为本地编辑器，推荐安装[markdownlint](https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint)扩展，并尽可能修复由此插件检查出来的不合规范的地方。
* 文档间和文档内部的超链接请使用相对地址，禁止使用绝对地址。
* 文档内部跳转请直接使用标题作为锚点，不要额外创建锚点。
* 除在描述特定步骤时，尽量少用有序列表。
* 文字描述为主，截图或动画为辅，能用文字描述清楚的可不用截图。
* 备注、提示、注意和禁止请按下面格式书写。

```markdown
> [!note] 
> 请把备注信息写到这里。
```

> [!note] 
> 请把备注信息写到这里。

```markdown
> [!tip] 
> 请把提示信息写到这里。
```

> [!tip] 
> 请把提示信息写到这里。

```markdown
> [!warning] 
> 请把注意信息写到这里。
```

> [!warning] 
> 请把注意信息写到这里。

```markdown
> [!danger] 
> 请把禁止信息写到这里。
```

> [!danger] 
> 请把禁止信息写到这里。

## 许可

请参阅 [LICENSE](LICENSE.md)了解许可信息。

## 支持

若有其他任何问题或意见，请联系 [im@idongmobility.com](mailto:im@idongmobility.com)。
