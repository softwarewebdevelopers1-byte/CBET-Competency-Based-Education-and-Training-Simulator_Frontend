import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { LoginRoute } from './AuthRoutes/login.jsx'
import { SignUpRoute } from './AuthRoutes/signIn.jsx'

function App() {
	return (
		<BrowserRouter>
        <Routes>
            <Route path="/" element={<LoginRoute />} />
            <Route path="/signup" element={<SignUpRoute />} />
        </Routes>
		</BrowserRouter>
	)
}

export default App
