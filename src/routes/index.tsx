import { createFileRoute } from '@tanstack/react-router';
import { useState } from 'react';
import { ArrowUpRight, ArrowDown, Menu, X, MoveRight, ShieldCheck, SlidersHorizontal, MapPin, Mail, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import frame from '@/assets/fiberform-001.asset.json';
import milling from '@/assets/fiberform-002.asset.json';
import sheets from '@/assets/fiberform-003.asset.json';
import custom from '@/assets/fiberform-004.asset.json';

export const Route = createFileRoute('/')({
  head: () => ({ meta: [
    { title: 'FiberForm — карбонові рами для FPV та БПЛА' },
    { name: 'description', content: 'Український виробник карбонових рам, листів і труб. Фрезерування карбону та виготовлення деталей за вашими кресленнями. Львів, Україна.' },
    { property: 'og:title', content: 'FiberForm — карбонові рами для FPV та БПЛА' },
    { property: 'og:description', content: 'Карбонові вироби українського виробництва. Рами для FPV, листи, труби та індивідуальні рішення.' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
  ] }),
  component: Index,
});

function Brand() {
  return <a href="#home" className="brand" aria-label="FiberForm — головна"><span className="brand-symbol">F</span><span className="brand-words"><span>FIBER</span><span>FORM</span></span></a>;
}

function Index() {
  const [en, setEn] = useState(false);
  const [menu, setMenu] = useState(false);
  const t = (ua: string, english: string) => en ? english : ua;
  const categories = [
    { title: t('Рами для FPV та БПЛА', 'FPV & UAV frames'), text: t('Карбонові рами для ваших польотів.', 'Carbon frames for your next flight.'), image: frame.url, category: 'frames-for-fpv-and-uavs' },
    { title: t('Листи та труби', 'Sheets & tubes'), text: t('Різні розміри й товщини під замовлення.', 'Custom dimensions and thicknesses.'), image: sheets.url, category: 'sheets-and-pipes' },
    { title: t('Фрезерування карбону', 'Carbon CNC milling'), text: t('Виготовлення деталей за кресленнями.', 'Parts manufactured to your drawings.'), image: milling.url, category: 'services', machining: true },
    { title: t('Індивідуальні рішення', 'Custom solutions'), text: t('Від вашої ідеї до готової деталі.', 'From your idea to a finished part.'), image: custom.url, category: '' },
  ];
  const nav = [ { id: 'home', name: t('Головна', 'Home') }, { id: 'about', name: t('Про нас', 'About') }, { id: 'products', name: t('Продукція і послуги', 'Products & services') } ];
  const faqs = [
    [t('Чи можна замовити деталі за власними кресленнями?', 'Can I order parts from my own drawings?'), t('Так, ми виготовляємо карбонові вироби за вашими кресленнями та вимогами. Зв’яжіться з нами, щоб обговорити ваше завдання.', 'Yes, we manufacture carbon products to your drawings and requirements. Contact us to discuss your project.')],
    [t('Як оформити замовлення?', 'How do I place an order?'), t('Зателефонуйте нам, напишіть на sales@fiberform.org або в Instagram. Ми допоможемо підібрати оптимальне рішення.', 'Call us, email sales@fiberform.org or message us on Instagram. We will help you find the right solution.')],
    [t('Чи здійснюєте ви доставку?', 'Do you offer delivery?'), t('Так, здійснюємо доставку по всій Україні зручним для вас способом. Деталі узгоджуються під час оформлення замовлення.', 'Yes, we deliver throughout Ukraine. Delivery arrangements are agreed when placing your order.')],
    [t('Скільки часу займає виготовлення?', 'How long does manufacturing take?'), t('Терміни залежать від складності замовлення та обсягу роботи. Узгодимо їх із вами перед початком виготовлення.', 'Lead times depend on the complexity and volume of your order. We will agree on timing before production begins.')],
  ];
  return <div className="page-shell" lang={en ? 'en' : 'uk'}>
    <div className="container" id="home">
      <header className="site-header">
        <Brand />
        <nav className="header-links" aria-label={t('Основна навігація', 'Main navigation')}>{nav.map(item => <Button variant="navigation" asChild key={item.id}><a href={`#${item.id}`}>{item.name}</a></Button>)}</nav>
        <div className="header-actions">
          <Button variant="navigation" onClick={() => setEn(!en)} aria-label={t('Switch to English', 'Переключити на українську')}>{en ? 'UA' : 'EN'} <span className="text-muted-foreground">↗</span></Button>
          <Button variant="industrialOutline" asChild><a href="#contact">{t('Контакти', 'Contact')}</a></Button>
          <Button variant="ghost" size="icon" className="mobile-menu-trigger" onClick={() => setMenu(!menu)} aria-expanded={menu} aria-label={t('Меню', 'Menu')}>{menu ? <X /> : <Menu />}</Button>
        </div>
        {menu && <nav className="mobile-nav">{[...nav, {id:'contact', name:t('Контакти', 'Contact')}].map(item => <a key={item.id} href={`#${item.id}`} onClick={() => setMenu(false)}>{item.name}</a>)}</nav>}
      </header>
      <main>
        <section className="hero" aria-label="FiberForm">
          <div className="hero-art reveal"><img src={frame.url} alt={t('Карбонова рама FiberForm для FPV-дрона', 'FiberForm carbon FPV drone frame')} fetchPriority="high" /></div>
          <div className="hero-copy reveal">
            <div className="eyebrow origin">ENGINEERED IN UKRAINE</div>
            <h1 className="hero-title">{t('Карбонові рами', 'Carbon frames')}<span>{t('для FPV та БПЛА', 'for FPV & UAVs')}</span></h1>
            <p className="hero-description">{t('Український виробник карбонових виробів. Від матеріалу до готового рішення для ваших технологій.', 'Ukrainian manufacturer of carbon products. From raw material to a finished solution for your technology.')}</p>
            <div className="hero-cta"><Button variant="industrial" asChild><a href="#contact">{t('Зв’язатися', 'Get in touch')} <ArrowUpRight /></a></Button><a href="#products" className="micro-label">{t('ДО КАТАЛОГУ', 'EXPLORE PRODUCTS')} <MoveRight size={14} /></a></div>
          </div>
          <div className="product-tag"><div><span>{t('МАТЕРІАЛ', 'MATERIAL')}</span><strong>CARBON FIBER</strong></div><div><span>{t('ВИРОБНИЦТВО', 'MANUFACTURED')}</span><strong>UKRAINE</strong></div></div>
        </section>
        <div className="hero-footer"><a href="#products"><ArrowDown />{t('ДОСЛІДЖУЙТЕ МОЖЛИВОСТІ КАРБОНУ', 'EXPLORE THE POSSIBILITIES OF CARBON')}</a><span>FIBERFORM / 01</span></div>
        <section id="products" className="section">
          <div className="section-heading"><div><p className="section-kicker">01 / {t('ПРОДУКЦІЯ І ПОСЛУГИ', 'PRODUCTS & SERVICES')}</p><h2>{t('Ваша ідея. Наш карбон.', 'Your idea. Our carbon.')}</h2></div><a className="section-link" href="https://www.fiberform.com.ua/products-and-services/" target="_blank" rel="noreferrer">{t('Уся продукція', 'All products')}<ArrowUpRight size={17} /></a></div>
          <div className="catalog-grid">{categories.map((cat,i) => <a className="catalog-card" key={cat.category} href={`https://www.fiberform.com.ua/products-and-services/${cat.category ? `?ucterms=category:${cat.category}` : ''}`} target="_blank" rel="noreferrer"><span className="catalog-number">0{i+1}</span><div className={`catalog-visual ${cat.machining ? 'machining' : ''}`}><img src={cat.image} alt={cat.title} loading="lazy" /></div><div className="catalog-info"><h3>{cat.title}</h3><p>{cat.text}</p><ArrowUpRight className="card-arrow" /></div></a>)}</div>
        </section>
        <section className="section about-section" id="about"><div className="about-grid"><div><p className="section-kicker">02 / {t('ПРО FIBERFORM', 'ABOUT FIBERFORM')}</p><h2>{t('Створено в Україні.', 'Made in Ukraine.')}<br />{t('Спроєктовано для вас.', 'Engineered for you.')}</h2></div><div className="about-copy"><p>{t('FiberForm — український бренд у сфері композитних матеріалів. Ми працюємо, щоб інженери, пілоти FPV-дронів та розробники мали доступ до якісних карбонових рішень, виготовлених у нашій країні.', 'FiberForm is a Ukrainian composite materials brand. We give engineers, FPV pilots and developers access to quality carbon solutions made in Ukraine.')}</p><a className="section-link" href="https://www.youtube.com/watch?v=GS3V2DY0ftE" target="_blank" rel="noreferrer">{t('Подивитися виробництво', 'Watch our production')}<ArrowUpRight size={17} /></a></div></div><div className="about-points">{[
          {icon:ShieldCheck,title:t('Якість без компромісів','Uncompromising quality'),body:t('Контролюємо матеріали та кожен етап виробництва.','Materials and every production stage are carefully controlled.')},
          {icon:SlidersHorizontal,title:t('Індивідуальний підхід','Custom approach'),body:t('Виготовляємо рішення під ваші креслення та вимоги.','Solutions manufactured to your drawings and requirements.')},
          {icon:MapPin,title:t('Власне виробництво','Our own production'),body:t('Працюємо у Львові. Доставляємо по всій Україні.','Based in Lviv. Delivery throughout Ukraine.')},
        ].map(p => <div className="about-point" key={p.title}><p.icon /><h3>{p.title}</h3><p>{p.body}</p></div>)}</div></section>
        <section className="section faq"><div className="faq-layout"><div><p className="section-kicker">03 / FAQ</p><h2>{t('Важливі запитання', 'Good questions')}</h2></div><div>{faqs.map(([q,a]) => <details key={q}><summary>{q}</summary><p>{a}</p></details>)}</div></div></section>
      </main>
    </div>
    <section id="contact" className="contact-section"><div className="container contact-grid"><div><p className="section-kicker">04 / {t('КОНТАКТИ', 'CONTACT')}</p><h2>{t('Втілимо ваш проєкт.', 'Let’s build your project.')}</h2><p>{t('Розкажіть, що потрібно. Знайдемо карбонове рішення.', 'Tell us what you need. We’ll find your carbon solution.')}</p></div><div className="contact-links"><a href="mailto:sales@fiberform.org"><Mail />sales@fiberform.org<ArrowUpRight /></a><a href="tel:+380996164010"><Phone />+38 (099) 616 4010<ArrowUpRight /></a></div></div></section>
    <footer className="container site-footer"><Brand /><span>© 2026 FiberForm · {t('Львів, Україна', 'Lviv, Ukraine')}</span><div className="footer-socials"><a href="https://www.instagram.com/fiber_form/" target="_blank" rel="noreferrer">Instagram ↗</a><a href="https://www.youtube.com/@FiberForm-ua" target="_blank" rel="noreferrer">YouTube ↗</a></div></footer>
  </div>;
}
