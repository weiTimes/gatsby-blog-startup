# Gatsby Startup

> 💜你可以使用本项目快速开始一个`Gatsby`项目，本项目示例为博客项目。

### 🚀特性

* 项目中的`Typography.js`为站点生成了默认的基本板式，你不需要添加额外的样式就能看到好看的字体、排版效果。
* 集成`Bulma`。Bulma是基于Flexbox的免费、开源的CSS框架。
* 支持CSS预处理器`SASS`。
* 支持Theme UI, 根据自己的需求预设好主题样式，可以在任何组件方便地引用主题样式。
* 使用`css-in-js`的样式处理方案，将组件和样式紧密相连，我称之为样式组件，重用度、防止命名冲突都使项目非常易于维护，这里用的是`styled-component`库
```
const UserWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto 12px auto;
  &:last-child {
    margin-bottom: 0;
  }

  const Username = styled.h2`
  margin: 0 0 12px 0;
  padding: 0;

  const User = () => {
    <UserWrapper>
    <Username>My name is YEWEI</Username>
    </UserWrapper>
  }
```
* 使用GraphQL数据查询语言，为React组件提供数据
* Google Font
**typeface-open-sans**
* Font Awesome
  [fontawesome](https://fontawesome.com/)


### 插件
* gatsby-source-filesystem
* gatsby-plugin-manifest
* gatsby-transformer-remark
* gatsby-plugin-offline
* gatsby-plugin-react-helmet
* gatsby-image gatsby-transformer-sharp gatsby-plugin-sharp

### 库
* framer-motion 动画库