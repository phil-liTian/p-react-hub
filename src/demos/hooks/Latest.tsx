import { useLatest } from "@react/use";
import { useState, useEffect } from "react";

const Latest = () => {
  // 状态值
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  
  // 使用 useLatest 获取最新的值
  const latestCount = useLatest(count);
  const latestText = useLatest(text);

  // 容器样式
  const containerStyle: React.CSSProperties = {
    padding: "20px",
    backgroundColor: "#f8f9fa",
    borderRadius: "8px",
    margin: "10px 0",
    fontFamily: "Arial, sans-serif",
  };

  const sectionStyle: React.CSSProperties = {
    marginBottom: "20px",
    padding: "15px",
    backgroundColor: "white",
    borderRadius: "6px",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
  };

  const inputStyle: React.CSSProperties = {
    padding: "10px",
    border: "1px solid #ddd",
    borderRadius: "4px",
    fontSize: "14px",
    width: "100%",
    maxWidth: "300px",
    marginRight: "10px",
  };

  const buttonStyle: React.CSSProperties = {
    padding: "10px 20px",
    border: "none",
    borderRadius: "4px",
    backgroundColor: "#007bff",
    color: "white",
    cursor: "pointer",
    fontSize: "14px",
    transition: "background-color 0.3s",
    marginRight: "10px",
    marginBottom: "10px",
  };

  const displayStyle: React.CSSProperties = {
    padding: "10px",
    backgroundColor: "#e9ecef",
    borderRadius: "4px",
    marginTop: "10px",
    fontSize: "14px",
    fontFamily: "monospace",
  };

  const infoBoxStyle: React.CSSProperties = {
    padding: "15px",
    backgroundColor: "#e3f2fd",
    borderRadius: "4px",
    fontSize: "14px",
    color: "#1565c0",
    marginTop: "20px",
  };

  // 模拟异步操作，展示 useLatest 的作用
  useEffect(() => {
    const timer = setTimeout(() => {
      console.log("异步操作中获取的最新值:", {
        count: latestCount.current,
        text: latestText.current,
      });
    }, 2000);

    return () => clearTimeout(timer);
  }, [latestCount, latestText]);

  return (
    <div style={containerStyle}>
      <h3 style={{ textAlign: "center", color: "#333", marginBottom: "20px" }}>
        useLatest 示例 - 获取最新值
      </h3>

      {/* 计数器部分 */}
      <div style={sectionStyle}>
        <h4 style={{ marginTop: 0, color: "#495057" }}>🔄 计数器演示</h4>
        <div style={{ marginBottom: "15px" }}>
          <button
            style={buttonStyle}
            onClick={() => setCount(count + 1)}
            onMouseOver={(e) => e.currentTarget.style.backgroundColor = "#0056b3"}
            onMouseOut={(e) => e.currentTarget.style.backgroundColor = "#007bff"}
          >
            增加计数
          </button>
          <button
            style={buttonStyle}
            onClick={() => setCount(count - 1)}
            onMouseOver={(e) => e.currentTarget.style.backgroundColor = "#0056b3"}
            onMouseOut={(e) => e.currentTarget.style.backgroundColor = "#007bff"}
          >
            减少计数
          </button>
          <button
            style={buttonStyle}
            onClick={() => setCount(0)}
            onMouseOver={(e) => e.currentTarget.style.backgroundColor = "#0056b3"}
            onMouseOut={(e) => e.currentTarget.style.backgroundColor = "#007bff"}
          >
            重置
          </button>
        </div>
        <div style={displayStyle}>
          <strong>当前状态值:</strong> count = {count}
        </div>
        <div style={displayStyle}>
          <strong>useLatest 引用值:</strong> latestCount.current = {latestCount.current}
        </div>
      </div>

      {/* 文本输入部分 */}
      <div style={sectionStyle}>
        <h4 style={{ marginTop: 0, color: "#495057" }}>📝 文本输入演示</h4>
        <div style={{ marginBottom: "15px" }}>
          <input
            type="text"
            style={inputStyle}
            placeholder="请输入文本..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button
            style={buttonStyle}
            onClick={() => setText("")}
            onMouseOver={(e) => e.currentTarget.style.backgroundColor = "#0056b3"}
            onMouseOut={(e) => e.currentTarget.style.backgroundColor = "#007bff"}
          >
            清空
          </button>
        </div>
        <div style={displayStyle}>
          <strong>当前状态值:</strong> text = "{text}"
        </div>
        <div style={displayStyle}>
          <strong>useLatest 引用值:</strong> latestText.current = "{latestText.current}"
        </div>
      </div>

      {/* 值比较部分 */}
      <div style={sectionStyle}>
        <h4 style={{ marginTop: 0, color: "#495057" }}>🔄 值同步演示</h4>
        <div style={{ marginBottom: "15px" }}>
          <button
            style={buttonStyle}
            onClick={() => {
              const newCount = Math.floor(Math.random() * 100);
              const newText = `随机文本_${newCount}`;
              setCount(newCount);
              setText(newText);
            }}
            onMouseOver={(e) => e.currentTarget.style.backgroundColor = "#0056b3"}
            onMouseOut={(e) => e.currentTarget.style.backgroundColor = "#007bff"}
          >
            生成随机值
          </button>
        </div>
        <div style={displayStyle}>
          <strong>同步状态:</strong><br />
          count = {count} (latestCount.current = {latestCount.current})<br />
          text = "{text}" (latestText.current = "{latestText.current}")
        </div>
      </div>

      {/* 使用说明 */}
      <div style={infoBoxStyle}>
        <strong>💡 useLatest 说明：</strong>
        <ul style={{ marginTop: "10px", marginBottom: 0, paddingLeft: "20px" }}>
          <li>useLatest 返回一个包含 current 属性的 ref 对象</li>
          <li>ref.current 始终指向最新的值，不会触发重新渲染</li>
          <li>适用于需要在异步操作中获取最新状态值的场景</li>
          <li>与 useRef 类似，但会自动更新 ref.current 的值</li>
        </ul>
      </div>
    </div>
  );
};

export { Latest };