import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ChevronDown, Languages } from 'lucide-react';
import logo from '../assets/tamaynut.png';

const LANGUAGES = [
  { code: 'en', label: 'EN', flag: '🇬🇧', full: 'English' },
  { code: 'fr', label: 'FR', flag: '🇫🇷', full: 'Français' },
  { code: 'ar', label: 'AR', flag: '🇲🇦', full: 'العربية' },
  { code: 'zgh', label: 'ⵣ', flag: '⵿', full: 'ⵜⴰⵎⴰⵣⵉⵖⵜ' },
];

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  const currentLang = LANGUAGES.find((l) => l.code === i18n.language) || LANGUAGES[0];

  const handleLangChange = (code) => {
    i18n.changeLanguage(code);
    setOpen(false);
  };

  // Enforce RTL/LTR dynamically
  useEffect(() => {
    const dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.setAttribute('dir', dir);
  }, [i18n.language]);

  // Close on outside click
  useEffect(() => {
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass h-20 flex items-center">
      <div className="max-w-7xl mx-auto w-full px-6 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="Tamaynut Logo" className="h-14 w-auto object-contain" />
          <span className="text-brand-navy font-bold text-xl tracking-tight hidden sm:block">
            TAMAYNUT
          </span>
        </Link>

        {/* Nav links */}
        <div className="hidden md:flex items-center gap-8">
          <Link to="/" className="nav-link">{t('nav.home')}</Link>
          <Link to="/about" className="nav-link">{t('nav.about')}</Link>
          <Link to="/activities" className="nav-link">{t('nav.activities')}</Link>
          <Link to="/join" className="nav-link">{t('nav.joinUs')}</Link>
        </div>

        {/* Right actions */}
        <div className="flex items-center gap-3">
          {/* Language switcher */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setOpen((v) => !v)}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl border border-slate-200/80 bg-white/60 backdrop-blur-sm text-slate-600 hover:border-brand-gold hover:text-brand-navy transition-all text-sm font-semibold shadow-sm"
              aria-label="Switch language"
            >
              <Languages className="w-4 h-4" />
              <span>{currentLang.flag} {currentLang.label}</span>
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
              />
            </button>

            {open && (
              <div className="absolute top-full mt-2 end-0 w-44 bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden z-50 py-1">
                {LANGUAGES.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => handleLangChange(lang.code)}
                    className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm transition-colors hover:bg-slate-50 ${
                      lang.code === i18n.language
                        ? 'text-brand-navy font-bold bg-brand-gold/10'
                        : 'text-slate-600 font-medium'
                    }`}
                  >
                    <span className="text-base">{lang.flag}</span>
                    <span>{lang.full}</span>
                    {lang.code === i18n.language && (
                      <span className="ms-auto w-2 h-2 rounded-full bg-brand-gold" />
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Donate button */}
          <Link to="/donate" className="btn-primary hidden sm:block text-center pt-2">
            {t('nav.donate')}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
