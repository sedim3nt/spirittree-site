import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.jsx'
import Specs from './Specs.jsx'
import CodexSpecs from './CodexSpecs.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/specs" element={<Specs />} />
      <Route path="/codex" element={<CodexSpecs />} />
    </Routes>
  </BrowserRouter>
)
