# ScholarSphere Frontend

一个现代化的学术社交网络平台前端应用，专为研究者和学者设计。

## 🚀 快速开始

### 环境要求

- Node.js 16+
- npm 或 yarn

### 安装和运行

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build
```

应用将在 `http://localhost:5173` 启动

## 📋 功能特性

- ✅ **用户认证** - 登录/注册系统
- ✅ **学者搜索** - 按姓名、机构、研究领域搜索
- ✅ **工作机会** - 查看和申请学术职位
- ✅ **学术网络** - 建立专业联系
- ✅ **个人资料** - 展示研究成果和经历
- ✅ **响应式设计** - 支持移动端和桌面端

## 🛠 技术栈

- **React 19.1.1** - 前端框架
- **React Router DOM 6.30.1** - 路由管理
- **Tailwind CSS 3.4.15** - 样式框架
- **Vite 7.1.10** - 构建工具

## 📁 项目结构

```
src/
├── components/          # 可复用组件
│   ├── common/          # 通用组件 (Header, Footer, UserDropdown)
│   ├── jobs/            # 工作相关组件
│   ├── network/         # 网络相关组件
│   ├── profile/         # 个人资料组件
│   └── search/          # 搜索相关组件
├── context/             # React Context (认证、主题)
├── data/                # 模拟数据
├── pages/               # 页面组件
├── services/            # API服务层
├── styles/              # 样式文件
└── utils/               # 工具函数
```

## 🔐 测试账户

项目包含以下测试用户（密码均为 `password123`）：

- **lei_wang** - 教授，强化学习专家
- **jing_li** - 助理教授，自然语言处理
- **wei_zhang** - 博士后研究员，计算机视觉
- **sam_chen** - 博士生，人机交互
- **yejin_choi** - 教授，自然语言处理
- **david_patterson** - 教授，计算机架构

## 🌐 API 集成

项目使用模拟数据，但已准备好与后端 API 集成：

- **认证**: `/api/auth/*` - 登录、注册、登出
- **用户**: `/api/users/*` - 用户信息管理
- **搜索**: `/api/search/*` - 学者搜索
- **工作**: `/api/jobs/*` - 工作机会管理
- **网络**: `/api/network/*` - 学术网络
- **资料**: `/api/profiles/*` - 个人资料

## 🎨 开发指南

### 代码规范

- 使用 ESLint 进行代码检查
- 组件命名使用 PascalCase
- 文件名使用 camelCase
- 遵循 React Hooks 最佳实践

### 样式指南

- 使用 Tailwind CSS 进行样式设计
- 遵循移动优先的响应式设计
- 保持一致的色彩和间距

### 组件开发

- 保持组件的单一职责
- 使用 React Context 进行状态管理
- 实现适当的错误处理

## 📦 构建和部署

### 环境变量

创建 `.env` 文件：

```env
# API配置
VITE_API_URL=http://localhost:3001/api

# 应用配置
VITE_APP_NAME=ScholarSphere
VITE_ENABLE_MOCK_DATA=true
```

### 生产构建

```bash
npm run build
```

构建文件将输出到 `dist/` 目录。

## 🤝 贡献指南

1. Fork 项目
2. 创建功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 打开 Pull Request

## 📄 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情。

## 📞 联系方式

如有问题或建议，请通过以下方式联系：

- 项目 Issues: [GitHub Issues](https://github.com/your-username/scholarsphere-frontend/issues)
- 邮箱: your-email@example.com

---

**注意**: 这是一个演示项目，使用模拟数据。在生产环境中使用时，请确保连接到真实的后端 API。
