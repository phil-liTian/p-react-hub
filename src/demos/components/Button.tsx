/*
 * @Author: phil
 * @Date: 2025-12-03 11:06:06
 */
import { PButton } from "@react/antd";

export const Button = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h2>PButton 组件使用示例</h2>

      <div style={{ marginBottom: "16px" }}>
        <h3>基础按钮类型</h3>
        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
          <PButton type="primary">主要按钮</PButton>
          <PButton type="default">默认按钮</PButton>
          <PButton type="dashed">虚线按钮</PButton>
          <PButton type="text">文本按钮</PButton>
          <PButton type="link">链接按钮</PButton>
        </div>
      </div>

      {/* <div style={{ marginBottom: "16px" }}>
        <h3>不同颜色</h3>
        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
          <PButton variant="solid" color="primary">
            Primary
          </PButton>
          <PButton variant="solid" color="green">
            Success
          </PButton>
          <PButton variant="solid" color="orange">
            Warning
          </PButton>
          <PButton variant="solid" color="red">
            Error
          </PButton>
          <PButton variant="solid" color="blue">
            Info
          </PButton>
        </div>
      </div>

      <div style={{ marginBottom: "16px" }}>
        <h3>不同变体</h3>
        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
          <PButton variant="solid" type="primary">
            Solid
          </PButton>
          <PButton variant="outlined" type="primary">
            Outlined
          </PButton>
          <PButton variant="dashed" type="primary">
            Dashed
          </PButton>
          <PButton variant="text" type="primary">
            Text
          </PButton>
          <PButton variant="link" type="primary">
            Link
          </PButton>
        </div>
      </div>

      <div style={{ marginBottom: "16px" }}>
        <h3>危险按钮</h3>
        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
          <PButton danger type="primary">
            危险主要
          </PButton>
          <PButton danger type="default">
            危险默认
          </PButton>
          <PButton danger type="text">
            危险文本
          </PButton>
        </div>
      </div>

      <div style={{ marginBottom: "16px" }}>
        <h3>禁用状态</h3>
        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
          <PButton disabled type="primary">
            禁用主要
          </PButton>
          <PButton disabled type="default">
            禁用默认
          </PButton>
          <PButton disabled type="text">
            禁用文本
          </PButton>
        </div>
      </div>

      <div style={{ marginBottom: "16px" }}>
        <h3>加载状态</h3>
        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
          <PButton loading type="primary">
            加载中
          </PButton>
          <PButton loading type="default">
            加载中
          </PButton>
          <PButton loading type="text">
            加载中
          </PButton>
        </div>
      </div>

      <div style={{ marginBottom: "16px" }}>
        <h3>幽灵按钮</h3>
        <div
          style={{
            background: "rgb(190, 200, 200)",
            padding: "16px",
            borderRadius: "4px",
          }}
        >
          <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
            <PButton ghost type="primary">
              幽灵主要
            </PButton>
            <PButton ghost type="default">
              幽灵默认
            </PButton>
            <PButton ghost type="dashed">
              幽灵虚线
            </PButton>
            <PButton ghost type="text">
              幽灵文本
            </PButton>
          </div>
        </div>
      </div>

      <div style={{ marginBottom: "16px" }}>
        <h3>块状按钮</h3>
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <PButton block type="primary">
            块状主要按钮
          </PButton>
          <PButton block type="default">
            块状默认按钮
          </PButton>
          <PButton block type="dashed">
            块状虚线按钮
          </PButton>
        </div>
      </div>

      <div style={{ marginBottom: "16px" }}>
        <h3>带图标</h3>
        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
          <PButton icon={<span>📧</span>} type="primary">
            发送邮件
          </PButton>
          <PButton icon={<span>🔄</span>} iconPlacement="end" type="primary">
            刷新
          </PButton>
          <PButton icon={<span>⚙️</span>} type="default">
            设置
          </PButton>
        </div>
      </div> */}
    </div>
  );
};
