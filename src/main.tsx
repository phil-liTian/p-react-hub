/*
 * @Author: phil
 * @Date: 2025-07-23 17:05:46
 */
import { createRoot } from "react-dom/client";
import "virtual:uno.css";
import App from "./App.tsx";
import "./style/index.less";
import { setupI18n } from "./locales";

// createRoot(document.getElementById("root")!).render(
//   <StrictMode>
//     <BrowserRouter basename="/p-react-hub/">
//       <App />
//     </BrowserRouter>
//   </StrictMode>
// );

function setupApp() {
  const container = document.getElementById("root");
  if (!container) return;
  const root = createRoot(container);

  root.render(<App />);

  setupI18n();
}

setupApp();
