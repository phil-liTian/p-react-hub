# pReactUse - React 自定义 Hooks 库

一个轻量级、实用的 React 自定义 Hooks 集合，提供了常用的状态管理和副作用处理工具。

## 🚀 功能特性

- **useBattery** - 电池状态监测
- **useCounter** - 计数器管理
- **useEvent** - 事件监听管理
- **useGetSet** - 获取和设置状态
- **useToggle** - 布尔值切换
- **useUpdate** - 强制更新组件
- **useLatest** - 获取最新状态值的引用

## 📦 安装

```bash
npm install @react/use
# 或
yarn add @react/use
# 或
pnpm add @react/use
```

## 🔧 使用方法

### useBattery - 电池状态监测

```tsx
import { useBattery } from "@react/use";

function BatteryStatus() {
  const battery = useBattery();

  return (
    <div>
      <p>电池电量: {battery.level * 100}%</p>
      <p>充电状态: {battery.charging ? "充电中" : "未充电"}</p>
    </div>
  );
}
```

### useCounter - 计数器管理

```tsx
import { useCounter } from "@react/use";

function Counter() {
  const { count, increment, decrement, reset } = useCounter(0);

  return (
    <div>
      <p>计数: {count}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>重置</button>
    </div>
  );
}
```

### useToggle - 布尔值切换

```tsx
import { useToggle } from "@react/use";

function ToggleDemo() {
  const [isOpen, toggle] = useToggle(false);

  return (
    <div>
      <button onClick={toggle}>{isOpen ? "关闭" : "打开"}</button>
      {isOpen && <div>内容显示</div>}
    </div>
  );
}
```

### useLatest - 获取最新状态值的引用

```tsx
import { useLatest } from "@react/use";
import { useState, useEffect } from "react";

function LatestDemo() {
  const [count, setCount] = useState(0);
  const latestCount = useLatest(count);

  useEffect(() => {
    // 在异步操作中获取最新值
    const timer = setTimeout(() => {
      console.log("最新计数值:", latestCount.current);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <p>当前计数: {count}</p>
      <p>最新引用值: {latestCount.current}</p>
      <button onClick={() => setCount(count + 1)}>增加</button>
    </div>
  );
}
```

## 🛠️ 开发环境

### 技术栈

- **React** - 19.2.0
- **TypeScript** - 5.9.3
- **Vite** - 7.2.4
- **pnpm** - 包管理器

### 项目结构

```
p-ant-design/
├── packages/
│   └── react-use/          # Hooks库源码
│       ├── src/            # Hooks实现
│       ├── index.ts        # 导出文件
│       └── package.json    # 包配置
├── src/
│   ├── demos/hooks/        # Hooks演示组件
│   ├── pages/              # 页面组件
│   └── components/         # 通用组件
├── public/                 # 静态资源
└── dist/                   # 构建输出
```

### 开发命令

```bash
# 安装依赖
pnpm install

# 启动开发服务器
pnpm dev
# 或
npm run dev

# 构建项目
pnpm build
# 或
npm run build

# 预览构建结果
pnpm preview
# 或
npm run preview

# 部署到GitHub Pages
pnpm publish
# 或
npm run publish
```

## 🎯 演示

项目包含完整的 Hooks 演示页面，展示了每个 Hook 的使用方法和效果。

访问 [在线演示](https://phil-litian.github.io/p-react-hub/) 查看所有 Hooks 的实际应用。

## 📄 许可证

MIT License

## 🤝 贡献

欢迎提交 Issue 和 Pull Request 来改进这个项目！

## 📞 联系方式

如有问题或建议，请通过 GitHub Issues 联系。

---

**作者**: phil  
**创建时间**: 2025-10-11  
**更新时间**: 2025-12-02
