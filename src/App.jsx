import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import ScrollToTop from './components/ScrollToTop'
import { LanguageProvider, useLang } from './components/LanguageContext'
import HomePage from './pages/HomePage'
import LifestylePage from './pages/LifestylePage'
import HealthPage from './pages/HealthPage'
import RelaxationPage from './pages/RelaxationPage'
import ChatPage from './pages/ChatPage'
import './App.css'

function PlaceholderPage() {
  const { t } = useLang()
  return (
    <main className="page-content">
      <div className="page-inner">
        <h1 className="title">{t.about.title}</h1>
        <p className="basic_text" style={{ textAlign: 'center' }}>
          {t.about.comingSoon}
        </p>
      </div>
    </main>
  )
}

function AppRoutes() {
  return (
    <div className="app hero">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/lifestyle" element={<LifestylePage />} />
        <Route path="/health" element={<HealthPage />} />
        <Route path="/relaxation" element={<RelaxationPage />} />
        <Route path="/guide/:guideId" element={<ChatPage />} />
        <Route path="/about" element={<PlaceholderPage />} />
      </Routes>
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <LanguageProvider>
        <AppRoutes />
      </LanguageProvider>
    </BrowserRouter>
  )
}
