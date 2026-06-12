import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import Hub from './pages/Hub.jsx'
import Sample1 from './pages/Sample1.jsx'
import Sample2 from './pages/Sample2.jsx'
import Sample3 from './pages/Sample3.jsx'
import Sample4 from './pages/Sample4.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Hub />} />
        <Route path="/sample1" element={<Sample1 />} />
        <Route path="/sample2" element={<Sample2 />} />
        <Route path="/sample3" element={<Sample3 />} />
        <Route path="/sample4" element={<Sample4 />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
