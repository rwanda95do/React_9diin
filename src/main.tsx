import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
    <App />
// 디버그모드
//   <StrictMode>
//   </StrictMode>,
)
