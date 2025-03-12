import { BrowserRouter, Route, Routes } from "react-router-dom"

import MainPage from "@pages/index"
import AboutPage from "@pages/about"

function App() {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route index path="/" element={<MainPage/>}></Route>
                <Route index path="/about" element={<AboutPage/>}></Route>
                <Route index path="/about/:id" element={<AboutPage/>}></Route>
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App
