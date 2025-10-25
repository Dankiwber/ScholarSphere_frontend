# ScholarSphere Frontend

## 项目简介

ScholarSphere 是一个学术社交网络平台，旨在连接全球的研究者和学者。这个前端项目使用 React 构建，提供了用户注册、登录、搜索学者、查看工作机会、建立学术网络等功能。

## 技术栈

- **React 19.1.1** - 前端框架
- **React Router DOM 6.30.1** - 路由管理
- **Tailwind CSS 3.4.15** - 样式框架
- **Vite 7.1.10** - 构建工具

## 功能特性

- ✅ 用户注册和登录
- ✅ 学者搜索和浏览
- ✅ 工作机会查看
- ✅ 学术网络建立
- ✅ 个人资料管理
- ✅ 出版物展示
- ✅ 响应式设计

## 快速开始

### 1. 安装依赖

```bash
npm install
```

### 2. 环境配置

创建 `.env` 文件：

```env
# API配置
VITE_API_URL=http://localhost:3001/api

# 应用配置
VITE_APP_NAME=ScholarSphere
VITE_APP_VERSION=1.0.0

# 功能开关
VITE_ENABLE_MOCK_DATA=true
```

### 3. 启动开发服务器

```bash
npm run dev
```

应用将在 `http://localhost:5173` 启动

### 4. 构建生产版本

```bash
npm run build
```

## 项目结构

```
src/
├── components/          # 可复用组件
│   ├── common/         # 通用组件
│   ├── jobs/           # 工作相关组件
│   ├── network/        # 网络相关组件
│   ├── profile/        # 个人资料组件
│   └── search/         # 搜索相关组件
├── context/            # React Context
├── data/               # 模拟数据
├── pages/              # 页面组件
├── services/           # API服务
├── styles/             # 样式文件
└── utils/              # 工具函数
```

## API 需求

详细的 API 需求请参考 [API_REQUIREMENTS.md](./API_REQUIREMENTS.md) 文件。

### 主要 API 端点

- **认证**: `/api/auth/*` - 登录、注册、登出
- **用户**: `/api/users/*` - 用户信息管理
- **搜索**: `/api/search/*` - 学者搜索
- **工作**: `/api/jobs/*` - 工作机会管理
- **网络**: `/api/network/*` - 学术网络
- **资料**: `/api/profiles/*` - 个人资料

## 开发指南

### 代码规范

- 使用 ESLint 进行代码检查
- 遵循 React 最佳实践
- 使用 TypeScript 类型定义（可选）
- 组件命名使用 PascalCase
- 文件名使用 camelCase

### 样式指南

- 使用 Tailwind CSS 进行样式设计
- 遵循移动优先的响应式设计
- 保持一致的色彩和间距
- 使用语义化的 CSS 类名

### 组件开发

- 保持组件的单一职责
- 使用 React Hooks 进行状态管理
- 实现适当的错误边界
- 添加必要的 PropTypes 验证

## 测试用户

项目包含以下测试用户：

- **alice_wang** / password123 - PhD 学生
- **bob_chen** / password123 - 博士后研究员
- **carol_smith** / password123 - 助理教授

## 部署说明

### 环境变量

生产环境需要设置以下环境变量：

```env
VITE_API_URL=https://api.scholarsphere.com/api
VITE_ENABLE_MOCK_DATA=false
```
