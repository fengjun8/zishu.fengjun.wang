# 字数在线统计器（zishu）

> ⚠️ **站点升级公告**：本项目原始在线地址 **https://zishu.fengjun.wang** 已升级为新版站点 **https://counter.best/zh**。
> 新站点在功能、性能和多语言上做了全面升级，欢迎体验。本仓库代码仍可独立部署使用，但请知悉官方托管地址已迁移。

一个开箱即用的**中文/英文字数在线统计工具**。粘贴文本即可实时统计字符总数、中文字符、英文单词、标点、数字、段落等 9 项指标，并提供清除行尾空格、段落整理、中英文标点互转、合并空格等排版整理功能。全部统计与处理均在浏览器本地完成，**不上传任何文本内容**，轻量、快速、隐私友好。

## ✨ 功能特性

实时字数统计，共 9 项指标：

| 指标 | 说明 |
| --- | --- |
| 字符总数 | 汉字、字母、数字、标点、空格等所有字符总和 |
| 中文字符 | `\u4e00-\u9fa5` 范围内的汉字数量 |
| 中文标点 | 全角标点符号数量 |
| 英文字符 | `a-z` / `A-Z` 字母数量 |
| 英文标点 | 半角英文标点数量 |
| 数字字符 | `0-9` 数字数量 |
| 英文单词 | 由空格/标点/换行分隔的英文单词数 |
| 数字单词 | 由空格/标点/换行分隔的数字组合数 |
| 段落总数 | 非空行数 |

文本排版整理工具：

- **清空文本**：一键重置输入框
- **清除行尾空格**：去除每行末尾多余空格
- **段落整理**：去除空行、行首缩进，规整段落
- **转中文标点**：半角标点转全角（`,`→`，`、`(`→`（` 等）
- **转英文标点**：全角标点转半角
- **合并空格**：连续多个空格/空白合并为一个

其它：内置「字数统计说明」「常见问题解答」「位/字/字节/字符/字数概念科普」等内容，适配 SEO；支持深色/浅色主题、返回顶部、响应式布局。

## 🛠 技术栈

- **框架**：[Next.js 15](https://nextjs.org/)（App Router）+ React 18
- **语言**：TypeScript 5
- **样式**：Tailwind CSS 3 + `tailwindcss-animate`
- **组件库**：[shadcn/ui](https://ui.shadcn.com/) + Radix UI + lucide-react 图标
- **表单/校验**：react-hook-form + zod
- **主题**：next-themes
- **构建工具**：pnpm / npm

统计与文本处理逻辑均为纯前端函数，位于 `lib/counter.ts` 与 `lib/text-processor.ts`，无后端、无数据库依赖。

## 📁 项目结构

```
.
├── app/                      # Next.js App Router 页面
│   ├── page.tsx              # 首页（统计器主界面）
│   ├── about/page.tsx        # 工具说明页
│   ├── layout.tsx            # 全局布局 / 头部导航 / 统计代码
│   └── globals.css           # 全局样式
├── components/
│   ├── character-counter.tsx # 核心统计器组件
│   ├── site-footer.tsx       # 页脚与浮动按钮
│   ├── theme-provider.tsx    # 主题提供者
│   └── ui/                   # shadcn/ui 组件
├── lib/
│   ├── counter.ts            # 字数统计逻辑
│   ├── text-processor.ts     # 文本排版处理逻辑
│   └── utils.ts              # 通用工具（cn 等）
├── hooks/                    # 自定义 hooks
├── next.config.mjs           # Next.js 配置
├── tailwind.config.ts        # Tailwind 配置
└── package.json
```

## 🚀 本地开发

要求：Node.js 18+，建议安装 [pnpm](https://pnpm.io/)。

```bash
# 1. 克隆仓库
git clone https://github.com/fengjun8/zishu.fengjun.wang.git
cd zishu.fengjun.wang

# 2. 安装依赖（任选其一）
pnpm install
# 或 npm install

# 3. 启动开发服务器
pnpm dev
# 或 npm run dev
```

启动后访问 http://localhost:3000 即可。

## 📦 构建与部署

### 生产构建

```bash
pnpm build      # 或 npm run build
pnpm start      # 或 npm start（默认监听 3012 端口）
```

> `npm start` 脚本已配置为 `next start -p 3012`，如需改端口可修改 `package.json` 中的 `start` 脚本。

### 方式一：Vercel（最简单）

1. 将本仓库推送到 GitHub；
2. 在 [Vercel](https://vercel.com/) 导入该仓库；
3. 保持默认构建设置，点击 Deploy 即可自动部署。

### 方式二：自有服务器（Nginx 反向代理）

适用于有 VPS / 宝塔面板等环境：

```bash
# 安装依赖并构建
pnpm install && pnpm build

# 用 pm2 常驻进程（推荐）
pm2 start "next start -p 3012" --name zishu
pm2 save
```

Nginx 配置示例，将域名反向代理到本地 3012 端口：

```nginx
server {
    listen 80;
    server_name your-domain.com;

    location / {
        proxy_pass http://127.0.0.1:3012;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

> 注：仓库中保留了原部署环境的 `.user.ini`、`.htaccess` 等宝塔面板遗留文件，与 Next.js 应用运行无直接关系，部署时可按需删除。

### 方式三：纯静态导出（可选）

本项目以客户端组件为主，如无需 SSR，可在 `next.config.mjs` 中加入 `output: 'export'`，`pnpm build` 后把 `out/` 目录部署到任意静态托管（如 GitHub Pages、对象存储）。

## 🔧 自定义说明

- **修改统计规则**：编辑 `lib/counter.ts`；
- **修改文本处理逻辑**：编辑 `lib/text-processor.ts`；
- **修改站点标题/描述（SEO）**：编辑 `app/layout.tsx` 中的 `metadata`；
- **移除统计代码**：删除 `app/layout.tsx` 中的 `Baidu Analytics` `<Script>` 片段。

## 📄 许可证

本项目以 MIT 许可证开源，详见 [LICENSE](./LICENSE)（如尚未添加可自行创建）。第三方组件版权归 shadcn/ui、Radix UI 等各自项目所有。

---

如果这个项目对你有帮助，欢迎点个 ⭐ Star 支持一下。也欢迎提 Issue 和 PR。
