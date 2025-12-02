/*
 * @Author: phil
 * @Date: 2025-12-02 20:00:00
 */
import type { FC } from "react";
import { useState } from "react";
import { useKey } from "@react/use";

export const Key: FC = () => {
  const [lastKey, setLastKey] = useState("");
  const [keyCount, setKeyCount] = useState(0);
  const [pressedKeys, setPressedKeys] = useState<string[]>([]);

  // 监听空格键
  useKey(" ", (event) => {
    event.preventDefault();
    setLastKey("空格键");
    setKeyCount(prev => prev + 1);
    setPressedKeys(prev => [...prev, "空格键"]);
  });

  // 监听回车键
  useKey("Enter", (event) => {
    event.preventDefault();
    setLastKey("回车键");
    setKeyCount(prev => prev + 1);
    setPressedKeys(prev => [...prev, "回车键"]);
  });

  // 监听ESC键
  useKey("Escape", (event) => {
    event.preventDefault();
    setLastKey("ESC键");
    setKeyCount(prev => prev + 1);
    setPressedKeys(prev => [...prev, "ESC键"]);
    // ESC键清空历史
    if (pressedKeys.length > 0) {
      setTimeout(() => {
        setPressedKeys([]);
        setLastKey("历史已清空");
      }, 500);
    }
  });

  // 监听方向键
  useKey("ArrowUp", (event) => {
    event.preventDefault();
    setLastKey("↑ 上方向键");
    setKeyCount(prev => prev + 1);
    setPressedKeys(prev => [...prev, "↑"]);
  });

  useKey("ArrowDown", (event) => {
    event.preventDefault();
    setLastKey("↓ 下方向键");
    setKeyCount(prev => prev + 1);
    setPressedKeys(prev => [...prev, "↓"]);
  });

  useKey("ArrowLeft", (event) => {
    event.preventDefault();
    setLastKey("← 左方向键");
    setKeyCount(prev => prev + 1);
    setPressedKeys(prev => [...prev, "←"]);
  });

  useKey("ArrowRight", (event) => {
    event.preventDefault();
    setLastKey("→ 右方向键");
    setKeyCount(prev => prev + 1);
    setPressedKeys(prev => [...prev, "→"]);
  });

  // 监听字母键A-Z
  useKey((event) => /^[a-zA-Z]$/.test(event.key), (event) => {
    const keyName = `字母键: ${event.key.toUpperCase()}`;
    setLastKey(keyName);
    setKeyCount(prev => prev + 1);
    setPressedKeys(prev => [...prev, event.key.toUpperCase()]);
  });

  // 样式定义
  const containerStyle: React.CSSProperties = {
    padding: "20px",
    borderRadius: "8px",
    backgroundColor: "#f5f5f5",
    margin: "10px 0",
  };

  const titleStyle: React.CSSProperties = {
    color: "#333",
    fontSize: "18px",
    fontWeight: "bold",
    marginBottom: "15px",
  };

  const infoBoxStyle: React.CSSProperties = {
    padding: "15px",
    backgroundColor: "#fff",
    borderRadius: "6px",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
    marginBottom: "15px",
  };

  const keyDisplayStyle: React.CSSProperties = {
    padding: "10px 15px",
    backgroundColor: "#007bff",
    color: "white",
    borderRadius: "4px",
    fontSize: "16px",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: "10px",
  };

  const historyStyle: React.CSSProperties = {
    display: "flex",
    flexWrap: "wrap",
    gap: "8px",
    marginTop: "10px",
  };

  const historyItemStyle: React.CSSProperties = {
    padding: "4px 8px",
    backgroundColor: "#e9ecef",
    borderRadius: "4px",
    fontSize: "12px",
  };

  const instructionsStyle: React.CSSProperties = {
    padding: "15px",
    backgroundColor: "#fff3cd",
    border: "1px solid #ffeaa7",
    borderRadius: "4px",
    marginBottom: "15px",
  };

  return (
    <div style={containerStyle}>
      <h3 style={titleStyle}>键盘事件监听 (useKey)</h3>
      
      <div style={instructionsStyle}>
        <strong>使用说明：</strong>点击下方区域激活键盘监听，然后按下任意按键体验功能
      </div>

      <div style={infoBoxStyle}>
        <div style={{ marginBottom: "10px" }}>
          <strong>按键总数：</strong>
          <span style={{ color: "#007bff", fontWeight: "bold", marginLeft: "8px" }}>
            {keyCount}
          </span>
        </div>
        
        <div style={{ marginBottom: "10px" }}>
          <strong>最后按键：</strong>
          <div style={keyDisplayStyle}>
            {lastKey || "等待按键..."}
          </div>
        </div>

        <div>
          <strong>按键历史：</strong>
          <div style={historyStyle}>
            {pressedKeys.length === 0 ? (
              <span style={{ color: "#6c757d", fontStyle: "italic" }}>
                暂无按键记录
              </span>
            ) : (
              pressedKeys.slice(-10).map((key, index) => (
                <span key={index} style={historyItemStyle}>
                  {key}
                </span>
              ))
            )}
          </div>
          {pressedKeys.length > 10 && (
            <div style={{ fontSize: "12px", color: "#6c757d", marginTop: "5px" }}>
              显示最近10个按键，共 {pressedKeys.length} 个
            </div>
          )}
        </div>
      </div>

      <div style={infoBoxStyle}>
        <h4 style={{ marginBottom: "10px", color: "#495057" }}>支持的按键：</h4>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: "10px" }}>
          <div style={{ padding: "8px", backgroundColor: "#f8f9fa", borderRadius: "4px" }}>
            <strong>空格键</strong> - 添加空格记录
          </div>
          <div style={{ padding: "8px", backgroundColor: "#f8f9fa", borderRadius: "4px" }}>
            <strong>回车键</strong> - 添加回车记录
          </div>
          <div style={{ padding: "8px", backgroundColor: "#f8f9fa", borderRadius: "4px" }}>
            <strong>ESC键</strong> - 清空历史记录
          </div>
          <div style={{ padding: "8px", backgroundColor: "#f8f9fa", borderRadius: "4px" }}>
            <strong>方向键</strong> - 显示方向箭头
          </div>
          <div style={{ padding: "8px", backgroundColor: "#f8f9fa", borderRadius: "4px" }}>
            <strong>字母键</strong> - 显示具体字母
          </div>
        </div>
      </div>
    </div>
  );
};