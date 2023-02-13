import React from 'react'
import { BrowserRouter , Routes, Route } from 'react-router-dom'

import LandingPage from './components/pages/LandingPage'
import LoginPage from './components/pages/LoginPage'
import RegisterPage from './components/pages/RegisterPage'
import Dashboard from './components/pages/Dashboard'

import './App.css'

export default function App() {
    return (
        <BrowserRouter>
            <div>
                <Routes>
                    <Route exact path="/" element={ <LandingPage/> } />
                    <Route path="/login" element={ <LoginPage/> } />
                    <Route path="/register" element={ <RegisterPage/> } />
                    <Route path="/dashboard" element={ <Dashboard/> } />
                </Routes>
                <Footer />
            </div>
        </BrowserRouter>
    )
}

const Footer = () => {
    return (
        <p className="text-center" style={ FooterStyle }>Designed & coded by <a href="https://www.spacex.com" target="_blank" rel="noopener noreferrer">KrishFredrick</a></p>
    )
}

const FooterStyle = {
    background: "#222",
    fontSize: ".8rem",
    color: "#fff",
    position: "absolute",
    bottom: 0,
    padding: "1rem",
    margin: 0,
    width: "100%",
    opacity: ".5"
}