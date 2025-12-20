/*
 * @Author: phil
 * @Date: 2025-12-02 14:23:14
 */
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const About = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const getFontSize = (desktop: number, mobile: number) => {
    return isMobile ? mobile : desktop;
  };

  const getSpacing = (desktop: number, mobile: number) => {
    return isMobile ? mobile : desktop;
  };

  return (
    <div
      style={{
        padding: isMobile ? "20px 15px" : "40px",
        maxWidth: "1000px",
        margin: "0 auto",
        backgroundColor: "white",
        borderRadius: "12px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        minHeight: isMobile ? "auto" : "80vh",
        marginTop: isMobile ? "10px" : "20px",
        marginBottom: isMobile ? "10px" : "20px",
      }}
    >
      {/* 头像区域 */}
      <div
        style={{
          textAlign: "center",
          marginBottom: getSpacing(30, 20),
        }}
      >
        <div
          style={{
            width: getSpacing(120, 80),
            height: getSpacing(120, 80),
            borderRadius: "50%",
            backgroundColor: "#1890ff",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: getFontSize(48, 32),
            color: "white",
            marginBottom: getSpacing(20, 15),
            boxShadow: "0 4px 8px rgba(24,144,255,0.3)",
          }}
        >
          👨‍💻
        </div>
        <h1
          style={{
            color: "#333",
            marginBottom: "10px",
            fontSize: getFontSize(32, 24),
            fontWeight: "600",
          }}
        >
          黎田 (Phil Li)
        </h1>
        <p
          style={{
            color: "#666",
            fontSize: getFontSize(18, 16),
            marginBottom: getSpacing(30, 20),
          }}
        >
          高级前端工程师
        </p>
      </div>

      {/* 主要内容 */}
      <div
        style={{
          lineHeight: "1.6",
          color: "#555",
          fontSize: getFontSize(16, 14),
        }}
      >
        {/* 个人简介 */}
        <section style={{ marginBottom: getSpacing(30, 25) }}>
          <h2
            style={{
              color: "#333",
              marginBottom: "15px",
              fontSize: getFontSize(24, 20),
              borderBottom: "2px solid #1890ff",
              paddingBottom: "8px",
              display: "inline-block",
            }}
          >
            个人简介
          </h2>
          <p style={{ marginBottom: "15px" }}>
            我是一名充满激情的前端工程师，专注于 Vue
            生态系统开发，同时也具备丰富的 React
            开发经验。拥有丰富的大型项目开发经验，擅长组件化开发、性能优化和用户体验提升。
          </p>
          <p>
            热衷于探索新技术，喜欢分享技术心得，致力于构建高质量、可维护的前端应用。
          </p>
        </section>

        {/* 技术栈 */}
        <section style={{ marginBottom: getSpacing(30, 25) }}>
          <h2
            style={{
              color: "#333",
              marginBottom: "15px",
              fontSize: getFontSize(24, 20),
              borderBottom: "2px solid #52c41a",
              paddingBottom: "8px",
              display: "inline-block",
            }}
          >
            技术栈
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: isMobile
                ? "1fr"
                : "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "20px",
              marginTop: "20px",
            }}
          >
            <div>
              <h3 style={{ color: "#1890ff", marginBottom: "10px" }}>
                💻 前端技术
              </h3>
              <ul style={{ listStyle: "none", padding: 0 }}>
                <li>• Vue 3 / Vue Composition API / Pinia</li>
                <li>• React 19 / React Hooks / Context API</li>
                <li>• TypeScript / JavaScript ES6+</li>
                <li>• HTML5 / CSS3 / Sass / Less</li>
                <li>• Element Plus / Ant Design / Material-UI</li>
                <li>• Tailwind CSS / Styled-components</li>
              </ul>
            </div>
            <div>
              <h3 style={{ color: "#52c41a", marginBottom: "10px" }}>
                🛠️ 工程化
              </h3>
              <ul style={{ listStyle: "none", padding: 0 }}>
                <li>• Webpack / Vite / Rollup</li>
                <li>• Babel / ESLint / Prettier</li>
                <li>• Git / CI/CD / Docker</li>
                <li>• Jest / React Testing Library</li>
                <li>• Chrome DevTools / Performance</li>
              </ul>
            </div>
            <div>
              <h3 style={{ color: "#722ed1", marginBottom: "10px" }}>
                🌐 其他技能
              </h3>
              <ul style={{ listStyle: "none", padding: 0 }}>
                <li>• Node.js / Express / Koa</li>
                <li>• MongoDB / MySQL / Redis</li>
                <li>• RESTful API / GraphQL</li>
                <li>• 微前端架构设计</li>
                <li>• 性能优化 / 用户体验</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 项目经验 */}
        <section style={{ marginBottom: getSpacing(30, 25) }}>
          <h2
            style={{
              color: "#333",
              marginBottom: "15px",
              fontSize: getFontSize(24, 20),
              borderBottom: "2px solid #fa8c16",
              paddingBottom: "8px",
              display: "inline-block",
            }}
          >
            项目经验
          </h2>
          <div style={{ marginTop: "20px" }}>
            <div
              style={{
                backgroundColor: "#f6f8fa",
                padding: "20px",
                borderRadius: "8px",
                marginBottom: "15px",
                borderLeft: "4px solid #1890ff",
              }}
            >
              <h3 style={{ color: "#333", marginBottom: "8px" }}>
                🚀 Vue 企业级应用开发
              </h3>
              <p style={{ color: "#666", marginBottom: "8px" }}>
                <strong>技术栈：</strong>Vue 3 + TypeScript + Vite + Element
                Plus
              </p>
              <p style={{ color: "#555" }}>
                主导开发多个企业级 Vue
                应用，包含完整的业务功能模块，支持权限管理、数据可视化、主题定制等。
              </p>
            </div>
            <div
              style={{
                backgroundColor: "#f6f8fa",
                padding: "20px",
                borderRadius: "8px",
                marginBottom: "15px",
                borderLeft: "4px solid #52c41a",
              }}
            >
              <h3 style={{ color: "#333", marginBottom: "8px" }}>
                📱 移动端 H5 应用
              </h3>
              <p style={{ color: "#666", marginBottom: "8px" }}>
                <strong>技术栈：</strong>Vue 3 + TypeScript + Vite + PWA
              </p>
              <p style={{ color: "#555" }}>
                负责移动端电商项目开发，实现了 PWA
                离线缓存、图片懒加载、虚拟滚动等优化，页面加载速度提升 60%。
              </p>
            </div>
            <div
              style={{
                backgroundColor: "#f6f8fa",
                padding: "20px",
                borderRadius: "8px",
                marginBottom: "15px",
                borderLeft: "4px solid #722ed1",
              }}
            >
              <h3 style={{ color: "#333", marginBottom: "8px" }}>
                🏗️ 微前端架构
              </h3>
              <p style={{ color: "#666", marginBottom: "8px" }}>
                <strong>技术栈：</strong>qiankun + Vue 3 + React + Single-SPA
              </p>
              <p style={{ color: "#555" }}>
                设计并实现微前端架构，支持多技术栈子应用集成，解决了大型项目的模块化开发和部署问题。
              </p>
            </div>
            <div
              style={{
                backgroundColor: "#f6f8fa",
                padding: "20px",
                borderRadius: "8px",
                borderLeft: "4px solid #fa8c16",
              }}
            >
              <h3 style={{ color: "#333", marginBottom: "8px" }}>
                🛠️ Admin 管理系统
              </h3>
              <p style={{ color: "#666", marginBottom: "8px" }}>
                <strong>技术亮点：</strong>Monorepo + 优雅路由 + 自定义脚本 +
                模块化架构
              </p>
              <p style={{ color: "#555", marginBottom: "8px" }}>
                基于 Monorepo
                架构开发的企业级后台管理系统，采用优雅的路由设计、自定义脚本自动化处理，支持模块化开发和灵活的权限管理。
              </p>
              <p style={{ color: "#555" }}>
                <strong>核心特性：</strong>🚀 微前端架构支持 | 🎯 动态权限控制 |
                ⚡ 高性能优化 | 📦 组件化开发 | 🔧 工程化脚本
              </p>
            </div>
          </div>
        </section>

        {/* 工作经历 */}
        <section style={{ marginBottom: getSpacing(30, 25) }}>
          <h2
            style={{
              color: "#333",
              marginBottom: "15px",
              fontSize: getFontSize(24, 20),
              borderBottom: "2px solid #13c2c2",
              paddingBottom: "8px",
              display: "inline-block",
            }}
          >
            工作经历
          </h2>
          <div style={{ marginTop: "20px" }}>
            <div
              style={{
                backgroundColor: "#f6f8fa",
                padding: "20px",
                borderRadius: "8px",
                marginBottom: "15px",
                borderLeft: "4px solid #13c2c2",
              }}
            >
              <h3 style={{ color: "#333", marginBottom: "8px" }}>
                🏢 京东科技集团有限公司
              </h3>
              <p style={{ color: "#666", marginBottom: "8px" }}>
                <strong>职位：</strong>高级前端工程师
              </p>
              <p style={{ color: "#666", marginBottom: "8px" }}>
                <strong>时间：</strong>2025年4月 - 至今
              </p>
              <p style={{ color: "#555" }}>
                负责企业级前端项目开发，参与多个大型项目的技术选型和架构设计，积累了丰富的Vue和React生态系统以及TypeScript开发经验。
              </p>
            </div>
            <div
              style={{
                backgroundColor: "#f6f8fa",
                padding: "20px",
                borderRadius: "8px",
                borderLeft: "4px solid #faad14",
              }}
            >
              <h3 style={{ color: "#333", marginBottom: "8px" }}>
                🏢 上海博卡软件科技有限公司
              </h3>
              <p style={{ color: "#666", marginBottom: "8px" }}>
                <strong>职位：</strong>前端工程师
              </p>
              <p style={{ color: "#666", marginBottom: "8px" }}>
                <strong>时间：</strong>2020年10月 - 2025年4月
              </p>
              <p style={{ color: "#555" }}>
                参与SaaS平台的前端开发工作，负责多个核心模块的设计与实现，深入理解了企业级应用的开发流程和最佳实践。
              </p>
            </div>
          </div>
        </section>

        {/* 联系方式 */}
        <section style={{ marginBottom: getSpacing(20, 15) }}>
          <h2
            style={{
              color: "#333",
              marginBottom: "15px",
              fontSize: getFontSize(24, 20),
              borderBottom: "2px solid #eb2f96",
              paddingBottom: "8px",
              display: "inline-block",
            }}
          >
            联系方式
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: isMobile
                ? "1fr"
                : "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "15px",
              marginTop: "20px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                padding: "12px",
                backgroundColor: "#f0f2f5",
                borderRadius: "8px",
              }}
            >
              <span style={{ fontSize: "20px", marginRight: "10px" }}>📧</span>
              <span>phil_litian@163.com</span>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                padding: "12px",
                backgroundColor: "#f0f2f5",
                borderRadius: "8px",
              }}
            >
              <span style={{ fontSize: "20px", marginRight: "10px" }}>💬</span>
              <span>微信: philli1123</span>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                padding: "12px",
                backgroundColor: "#f0f2f5",
                borderRadius: "8px",
              }}
            >
              <span style={{ fontSize: "20px", marginRight: "10px" }}>🔗</span>
              <span>GitHub: https://github.com/phil-liTian</span>
            </div>
          </div>
        </section>
      </div>

      {/* 返回按钮 */}
      <div style={{ marginTop: getSpacing(30, 20), textAlign: "center" }}>
        <Link
          to="/"
          style={{
            display: "inline-flex",
            alignItems: "center",
            padding: isMobile ? "10px 20px" : "12px 24px",
            backgroundColor: "#1890ff",
            color: "white",
            textDecoration: "none",
            borderRadius: "6px",
            fontSize: getFontSize(16, 14),
            transition: "all 0.3s ease",
            boxShadow: "0 2px 4px rgba(24,144,255,0.3)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "#40a9ff";
            e.currentTarget.style.transform = "translateY(-2px)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "#1890ff";
            e.currentTarget.style.transform = "translateY(0)";
          }}
        >
          ← 返回首页
        </Link>
      </div>
    </div>
  );
};

export default About;
