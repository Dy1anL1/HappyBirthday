# 生日快乐祝福网站 🎂

一个精美的生日祝福网站，包含多个交互页面和动画效果，完美支持 PC 端和移动端。

本项目预览页面：https://dy1anl1.github.io/HappyBirthday/

## 📱 项目特点

- 🎨 渐变粉色主题设计
- 📱 完整的移动端响应式适配
- 🎭 丰富的 CSS3 动画效果
- 🎵 背景音乐支持
- 🎉 多页面交互体验
- 🕯️ 3D 生日蛋糕和蜡烛动画

## 🗂️ 项目结构

```
生日快乐祝福/
├── html/
│   ├── login.html          # 登录页面
│   ├── index1.html         # 粒子文字动画页面
│   ├── BirthdayCake.html   # 生日蛋糕页面
│   ├── Memories.html       # 回忆相册页面
│   └── EasterEgg.html      # 彩蛋烟花页面
├── css/
│   ├── styles.css          # 登录页面样式
│   ├── stylel.css          # 粒子动画页面样式
│   ├── styless.css         # 蛋糕页面样式
│   ├── style.css           # 回忆页面样式
│   └── jquery.fullPage.css # fullPage.js样式
├── js/
│   ├── jquery.js           # jQuery库
│   ├── indexl.js           # 粒子动画脚本
│   ├── jquery.fullPage.min.js  # fullPage.js库
│   └── diy.js              # 自定义脚本
├── img/                    # 图片资源文件夹
├── music/                  # 背景音乐文件夹
└── README.md               # 项目说明文档
```

## 🚀 快速开始

### 1. 直接打开

双击 `html/login.html` 文件即可在浏览器中打开网站。

### 2. 使用本地服务器（推荐）

```bash
# 使用Python启动本地服务器
python -m http.server 8000

# 或使用Node.js
npx http-server
```

然后在浏览器中访问：`http://localhost:8000/html/login.html`

## 📄 页面介绍

### 1. 登录页面 (login.html)

- 简洁的登录界面
- 浮动气泡背景动画
- 默认用户名：驰姐
- 输入密码后点击"进入"开始体验

### 2. 粒子文字动画页面 (index1.html)

- 交互式粒子动画
- 可输入文字生成粒子效果
- 支持多种形状（心形、圆形、字母等）
- 移动端自动适配字体大小

### 3. 生日蛋糕页面 (BirthdayCake.html)

- 3D 生日蛋糕模型
- 蜡烛点燃动画（延迟 6 秒自动下落）
- 三个交互按钮：
  - "必须开心" - 进入回忆相册
  - "不太开心" - 显示提示消息
  - "Bro 过生日开心吗？" - 中央按钮
- 移动端完美适配蛋糕和按钮位置

### 4. 回忆相册页面 (Memories.html)

- 时间轴式照片展示
- fullPage.js 全屏滚动效果
- 多个卡片式布局展示照片和文字
- 移动端优化：卡片垂直堆叠，图片自适应显示
- 彩蛋入口：点击"点击有彩蛋"链接

### 5. 彩蛋烟花页面 (EasterEgg.html)

- 火箭烟花动画
- 定制文字烟花效果
- 全屏烟花表演

## 🎨 主题色彩

```css
主色调：#DDA0DD (淡紫色)
辅助色：#FFB6D9 (粉色)
渐变：linear-gradient(to bottom right, #DDA0DD 0%, #FFB6D9 100%)
```

## 📱 移动端适配

项目已完整适配移动端，主要断点：

- **平板/iPad** (max-width: 768px)

  - 蛋糕缩放至 70%
  - 按钮和文字大小调整
  - 卡片宽度调整为 90%

- **手机** (max-width: 480px)
  - 蛋糕缩放至 50%
  - 进一步缩小文字和按钮
  - 卡片宽度调整为 95%
  - 图片容器高度优化

## 🎵 音乐支持

每个页面都支持背景音乐播放：

```html
<audio src="../music/1.mp3" autoplay="autoplay" loop="loop"></audio>
```

将音乐文件放入 `music/` 文件夹并命名为：

- `1.mp3` - 回忆页面背景音乐
- `2.mp3` - 蛋糕页面背景音乐

## 🖼️ 图片资源

将照片放入 `img/` 文件夹，建议命名为：

- `HappyBirthday.png` - 生日快乐标题图
- `2.png`, `3.png`, `5.jpg`, `6.jpg`, `8.jpg`, `9.jpg` - 回忆照片

## 🔧 自定义修改

### 修改用户名和密码

编辑 `html/login.html`：

```html
<input id="userName" type="text" placeholder="请输入姓名" value="你的名字" />
<input id="pwd" type="password" placeholder="密码" />
```

### 修改祝福文字

编辑 `html/Memories.html` 中的各个文本段落。

### 修改烟花文字

编辑 `html/EasterEgg.html` 第 165 行：

```javascript
const text = "你的祝福文字！";
```

## 🌟 技术栈

- **HTML5** - 页面结构
- **CSS3** - 样式和动画
- **JavaScript/jQuery** - 交互逻辑
- **fullPage.js** - 全屏滚动效果
- **Canvas API** - 粒子动画和烟花效果

## 📝 浏览器兼容性

- ✅ Chrome (推荐)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ iOS Safari
- ✅ Android Chrome

## ⚠️ 注意事项

1. **音乐自动播放**：某些浏览器可能会阻止音频自动播放，需要用户手动点击页面后才能播放
2. **本地文件访问**：建议使用本地服务器运行，避免跨域问题
3. **图片加载**：确保图片路径正确，否则移动端可能显示不正常

## 🐛 常见问题

### Q: 蜡烛位置不对？

A: 已针对不同设备优化，iPad 和手机端蜡烛会自动调整位置。

### Q: 移动端图片不显示？

A: 检查 `img/` 文件夹中的图片是否存在，确保文件名与 HTML 中引用的一致。

### Q: "不太开心"按钮点击无反应？

A: 已添加 jQuery 事件处理，确保页面加载了 `jquery.js`。

### Q: 移动端卡片重叠？

A: CSS 已优化为移动端垂直堆叠布局，清除浏览器缓存后重试。

## 💝 致谢

感谢所有开源库和资源的贡献者：

- jQuery
- fullPage.js
- 各种 CSS 动画灵感来源

## 📜 许可证

本项目仅供个人学习和使用。

---

**祝生日快乐！🎂🎉**
