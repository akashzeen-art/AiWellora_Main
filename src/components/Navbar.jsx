import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'
import logo from '../assets/logo.png'
import { useLang } from './LanguageContext'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [langOpen, setLangOpen] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'
  const { lang, setLang, t } = useLang()

  const navEntries = [
    { label: t.nav.home, to: '/' },
    { label: t.nav.about, to: '/about' },
    { label: t.nav.health, to: '/health' },
    { label: t.nav.relaxation, to: '/relaxation' },
    { label: t.nav.lifestyle, to: '/lifestyle' },
    { label: t.nav.logout, href: '#' },
  ]

  const selectLang = (code) => {
    setLang(code)
    setLangOpen(false)
  }

  return (
    <>
      <header className={`navbox${isHome ? '' : ' gradient_bg'}`}>
        <nav className="navbar">
          <Link className="navbar-brand" to="/" onClick={() => setOpen(false)}>
            <img className="logo" src={logo} alt="Wellora" />
          </Link>

          <div className="nav-controls">
            {/* Language dropdown */}
            <div className="lang-dropdown">
              <button
                className="lang-btn"
                type="button"
                onClick={() => setLangOpen((v) => !v)}
                aria-label="Select language"
              >
                {lang === 'en' ? '🇬🇧 EN' : '🇩🇪 DE'}
                <span className="lang-caret">▾</span>
              </button>
              {langOpen && (
                <div className="lang-menu">
                  <button type="button" onClick={() => selectLang('en')} className={lang === 'en' ? 'active' : ''}>
                    🇬🇧 English
                  </button>
                  <button type="button" onClick={() => selectLang('de')} className={lang === 'de' ? 'active' : ''}>
                    🇩🇪 Deutsch
                  </button>
                </div>
              )}
            </div>

            {/* Burger */}
            <button
              className="navbar-toggler custom-toggler"
              type="button"
              aria-controls="main-menu"
              aria-expanded={open}
              aria-label="Toggle navigation"
              onClick={() => setOpen((v) => !v)}
            >
              <span className="navbar-toggler-icon" />
            </button>
          </div>
        </nav>
      </header>

      <div className={`menu-panel${open ? ' is-open' : ''}`} id="main-menu">
        <div className="menu-panel-inner">
          <div className={`navbox menu-panel-bar${isHome ? '' : ' gradient_bg'}`}>
            <nav className="navbar">
              <Link className="navbar-brand" to="/" onClick={() => setOpen(false)}>
                <img className="logo" src={logo} alt="Wellora" />
              </Link>
              <div className="nav-controls">
                <div className="lang-dropdown">
                  <button
                    className="lang-btn"
                    type="button"
                    onClick={() => setLangOpen((v) => !v)}
                    aria-label="Select language"
                  >
                    {lang === 'en' ? '🇬🇧 EN' : '🇩🇪 DE'}
                    <span className="lang-caret">▾</span>
                  </button>
                  {langOpen && (
                    <div className="lang-menu">
                      <button type="button" onClick={() => selectLang('en')} className={lang === 'en' ? 'active' : ''}>
                        🇬🇧 English
                      </button>
                      <button type="button" onClick={() => selectLang('de')} className={lang === 'de' ? 'active' : ''}>
                        🇩🇪 Deutsch
                      </button>
                    </div>
                  )}
                </div>
                <button
                  className="navbar-toggler custom-toggler"
                  type="button"
                  aria-label="Close navigation"
                  aria-expanded={open}
                  onClick={() => setOpen(false)}
                >
                  <span className="navbar-toggler-icon" />
                </button>
              </div>
            </nav>
          </div>
          {navEntries.map((link) =>
            link.to ? (
              <Link
                key={link.label}
                to={link.to}
                className="menu_button"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.label}
                href={link.href || '#'}
                className="menu_button"
                onClick={(e) => {
                  e.preventDefault()
                  setOpen(false)
                }}
              >
                {link.label}
              </a>
            ),
          )}
        </div>
      </div>
    </>
  )
}
