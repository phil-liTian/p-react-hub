/*
 * @Author: phil
 * @Date: 2025-07-23 17:05:46
 */
import { RouterProvider } from "@/features/router/RouterProvider";

function App() {
  return (
    // <div
    //   style={{ height: "100vh", backgroundColor: "#f8f9fa", overflowY: "auto" }}
    // >
    //   <Routes>
    //     <Route path="/" element={<Home />} />
    //     <Route path="/hooks" element={<HookDemo />} />
    //     <Route path="/components" element={<ComponentsDemo />} />
    //     <Route path="/about" element={<About />} />
    //     <Route path="/about" element={<About />} />
    //     <Route path="/tiktok" element={<Tiktok />} />
    //     <Route path="/404" element={<NotFound />} />
    //     {/* 捕获所有未匹配的路由并重定向到404页面 */}
    //     <Route path="*" element={<Navigate to="/404" replace />} />
    //   </Routes>
    // </div>
    <div
      style={{ height: "100vh", backgroundColor: "#f8f9fa", overflowY: "auto" }}
    >
      <RouterProvider />
    </div>
  );
}

export default App;
