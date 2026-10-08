import { createContext, useContext, useState, type ReactNode } from 'react';
import { Link, useRouterState } from '@tanstack/react-router';
import { ArrowUpRight, Menu, X, Mail, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const LanguageContext = createContext({ en: false, toggle: () => {}, t: (ua: string, _english: string) => ua });

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [en, setEn] = useState(false);
  return <LanguageContext.Provider value={{ en, toggle: () => setEn(value => !value), t: (ua, english) => en ? english : ua }}>{children}</LanguageContext.Provider>;
}

export function useLanguage() { return useContext(LanguageContext); }

function Brand() {
  return <Link to="/" className="brand" aria-label="FiberForm — головна"><span className="brand-symbol">F</span><span className="brand-words"><span>FIBER</span><span>FORM</span></span></Link>;
}

export function SiteChrome({ children }: { children: ReactNode }) {
  const { en, toggle, t } = useLanguage();
  const pathname = useRouterState({ select: state => state.location.pathname });
  const home = pathname === '/';
  const [menu, setMenu] = useState(false);
  const links = [{ to: '/' as const, label: t('Головна', 'Home'), hash: 'home' }, { to: '/about' as const, label: t('Про нас', 'About'), hash: 'about' }, { to: '/products-and-services' as const, label: t('Продукція і послуги', 'Products & services'), hash: 'products' }];
  return <div className="page-shell" lang={en ? 'en' : 'uk'}>
    <div className="container" id="home"><header className="site-header"><Brand />
      <nav className="header-links" aria-label={t('Основна навігація', 'Main navigation')}>{links.map(item => <Button key={item.to} variant="navigation" asChild>{home ? <a href={`#${item.hash}`}>{item.label}</a> : <Link to={item.to} activeProps={{ className: 'nav-active' }} activeOptions={{ exact: true }}>{item.label}</Link>}</Button>)}</nav>
      <div className="header-actions"><Button variant="navigation" onClick={toggle} aria-label={t('Switch to English', 'Переключити на українську')}>{en ? 'UA' : 'EN'} ↗</Button><Button variant="industrialOutline" asChild>{home ? <a href="#contact">{t('Контакти', 'Contact')}</a> : <Link to="/contact">{t('Контакти', 'Contact')}</Link>}</Button><Button variant="ghost" size="icon" className="mobile-menu-trigger" aria-label={t('Меню', 'Menu')} aria-expanded={menu} onClick={() => setMenu(value => !value)}>{menu ? <X /> : <Menu />}</Button></div>
      {menu && <nav className="mobile-nav">{links.map(item => <Button variant="navigation" asChild key={item.to}>{home ? <a href={`#${item.hash}`} onClick={() => setMenu(false)}>{item.label}</a> : <Link to={item.to} onClick={() => setMenu(false)}>{item.label}</Link>}</Button>)}<Button variant="navigation" asChild><Link to="/contact" onClick={() => setMenu(false)}>{t('Контакти', 'Contact')}</Link></Button></nav>}
    </header></div>
    {children}
    <footer className="container site-footer"><Brand /><span>© 2026 FiberForm · {t('Львів, Україна', 'Lviv, Ukraine')}</span><nav className="footer-pages" aria-label={t('Сторінки', 'Pages')}><Link to="/about">{t('Про нас', 'About')}</Link><Link to="/products-and-services">{t('Продукція', 'Products')}</Link><Link to="/contact">{t('Контакти', 'Contact')}</Link></nav><div className="footer-socials"><a href="https://www.instagram.com/fiber_form/" target="_blank" rel="noreferrer">Instagram ↗</a><a href="https://www.youtube.com/@FiberForm-ua" target="_blank" rel="noreferrer">YouTube ↗</a></div></footer>
  </div>;
}

export function ContactBand() {
  const { t } = useLanguage();
  return <section className="contact-section"><div className="container contact-grid"><div><p className="section-kicker">FIBERFORM / {t('ВАШ НАСТУПНИЙ ПРОЄКТ', 'YOUR NEXT PROJECT')}</p><h2>{t('Втілимо ваш проєкт.', 'Let’s build your project.')}</h2><p>{t('Від ідеї до карбонового рішення.', 'From an idea to a carbon solution.')}</p></div><Button variant="industrialOutline" className="band-button" asChild><Link to="/contact">{t('Обговорити завдання', 'Discuss your project')}<ArrowUpRight /></Link></Button></div></section>;
}

export function ContactLinks() {
  return <div className="contact-links"><a href="mailto:sales@fiberform.org"><Mail />sales@fiberform.org<ArrowUpRight /></a><a href="tel:+380996164010"><Phone />+38 (099) 616 4010<ArrowUpRight /></a></div>;
}

export function Breadcrumb({ label }: { label: string }) {
  const { t } = useLanguage();
  return <nav className="page-breadcrumb" aria-label={t('Навігаційний шлях', 'Breadcrumb')}><Link to="/">{t('Головна', 'Home')}</Link><span>/</span><span aria-current="page">{label}</span></nav>;
}