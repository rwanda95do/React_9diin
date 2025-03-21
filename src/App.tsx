import { BrowserRouter, Route, Routes } from "react-router-dom"

// 페이지 컴포넌트
import MainPage from "@pages/index/index"
import { RecoilRoot } from "recoil"


function App() {
  return (
    <div>
        <RecoilRoot>
            <BrowserRouter>
                <Routes>
                    <Route index path="/" element={<MainPage/>}></Route>
                </Routes>
            </BrowserRouter>
        </RecoilRoot>
    </div>
  )
}

export default App
