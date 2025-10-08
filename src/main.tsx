// 顶部模块引入区域
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import '@douyinfe/semi-ui/dist/css/semi.min.css';

// ReactDOM 渲染逻辑
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
