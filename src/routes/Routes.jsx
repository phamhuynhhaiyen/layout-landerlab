import React from 'react'
import { BrowserRouter , Routes, Route} from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Login'

const Layout = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/layout-landerlab" index element={<Home />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Layout
