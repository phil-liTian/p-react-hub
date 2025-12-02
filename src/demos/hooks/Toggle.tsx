import { useToggle } from "@react/use";

const Toggle = () => {
  // 多个切换状态演示
  const [isLightOn, toggleLight] = useToggle(false);
  const [isModalOpen, toggleModal] = useToggle(false);
  const [isSubscribed, toggleSubscription] = useToggle(true);

  // 样式定义
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

  const toggleContainerStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "10px",
  };

  const labelStyle: React.CSSProperties = {
    fontSize: "16px",
    fontWeight: "bold",
    color: "#333",
  };

  const toggleButtonStyle = (isActive: boolean): React.CSSProperties => ({
    padding: "8px 16px",
    border: "none",
    borderRadius: "20px",
    backgroundColor: isActive ? "#28a745" : "#6c757d",
    color: "white",
    cursor: "pointer",
    fontSize: "14px",
    transition: "all 0.3s ease",
    minWidth: "80px",
  });

  const statusIndicatorStyle = (isActive: boolean): React.CSSProperties => ({
    width: "12px",
    height: "12px",
    borderRadius: "50%",
    backgroundColor: isActive ? "#28a745" : "#dc3545",
    marginLeft: "10px",
  });

  const modalStyle = (isOpen: boolean): React.CSSProperties => ({
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "white",
    padding: "clamp(16px, 4vw, 24px)",
    borderRadius: "clamp(8px, 2vw, 12px)",
    boxShadow: "0 8px 32px rgba(0,0,0,0.2)",
    zIndex: 1000,
    display: isOpen ? "block" : "none",
    maxWidth: "min(90vw, 400px)",
    maxHeight: "min(80vh, 500px)",
    overflowY: "auto",
    width: "100%",
    minWidth: "280px",
    fontSize: "clamp(14px, 2.5vw, 16px)",
    lineHeight: 1.5,
  });

  const overlayStyle: React.CSSProperties = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.5)",
    zIndex: 999,
  };

  return (
    <div style={containerStyle}>
      <h3 style={{ textAlign: "center", color: "#333", marginBottom: "20px" }}>
        切换开关示例
      </h3>

      {/* 灯光开关 */}
      <div style={sectionStyle}>
        <div style={toggleContainerStyle}>
          <span style={labelStyle}>💡 灯光控制</span>
          <div style={{ display: "flex", alignItems: "center" }}>
            <button
              style={toggleButtonStyle(isLightOn)}
              onClick={() => toggleLight()}
            >
              {isLightOn ? "开启" : "关闭"}
            </button>
            <div style={statusIndicatorStyle(isLightOn)}></div>
          </div>
        </div>
        <div
          style={{
            padding: "10px",
            backgroundColor: isLightOn ? "#fff3cd" : "#e9ecef",
            borderRadius: "4px",
            marginTop: "10px",
            transition: "background-color 0.3s ease",
          }}
        >
          {isLightOn ? "💡 灯已开启 - 房间明亮" : "🌙 灯已关闭 - 房间昏暗"}
        </div>
      </div>

      {/* 模态框开关 */}
      <div style={sectionStyle}>
        <div style={toggleContainerStyle}>
          <span style={labelStyle}>📋 模态框控制</span>
          <button
            style={toggleButtonStyle(isModalOpen)}
            onClick={() => toggleModal()}
          >
            {isModalOpen ? "显示" : "隐藏"}
          </button>
        </div>
        <div style={{ marginTop: "10px" }}>点击按钮切换模态框的显示状态</div>
      </div>

      {/* 订阅开关 */}
      <div style={sectionStyle}>
        <div style={toggleContainerStyle}>
          <span style={labelStyle}>📧 订阅状态</span>
          <div style={{ display: "flex", alignItems: "center" }}>
            <button
              style={toggleButtonStyle(isSubscribed)}
              onClick={() => toggleSubscription()}
            >
              {isSubscribed ? "已订阅" : "未订阅"}
            </button>
            <div style={statusIndicatorStyle(isSubscribed)}></div>
          </div>
        </div>
        <div
          style={{
            padding: "10px",
            backgroundColor: isSubscribed ? "#d4edda" : "#f8d7da",
            borderRadius: "4px",
            marginTop: "10px",
            color: isSubscribed ? "#155724" : "#721c24",
          }}
        >
          {isSubscribed
            ? "✅ 您已订阅我们的服务，将收到最新通知"
            : "❌ 您未订阅，将不会收到通知"}
        </div>
      </div>

      {/* 模态框 */}
      {isModalOpen && (
        <>
          <div style={overlayStyle} onClick={() => toggleModal()}></div>
          <div style={modalStyle(isModalOpen)}>
            <h4>模态框内容</h4>
            <p>这是一个通过 useToggle 控制的模态框示例</p>
            <p>点击遮罩层或下面的按钮关闭</p>
            <button
              style={{
                ...toggleButtonStyle(false),
                marginTop: "15px",
              }}
              onClick={() => toggleModal()}
            >
              关闭模态框
            </button>
          </div>
        </>
      )}

      {/* 使用说明 */}
      <div
        style={{
          marginTop: "20px",
          padding: "15px",
          backgroundColor: "#e3f2fd",
          borderRadius: "4px",
          fontSize: "14px",
          color: "#1565c0",
        }}
      >
        <strong>💡 使用说明：</strong>
        <ul style={{ marginTop: "10px", marginBottom: 0 }}>
          <li>useToggle 可以轻松管理布尔状态</li>
          <li>点击切换按钮会在 true/false 之间切换</li>
          <li>也可以传入具体的布尔值来设置状态</li>
        </ul>
      </div>
    </div>
  );
};

export { Toggle };
