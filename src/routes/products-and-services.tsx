import { createFileRoute, Link } from '@tanstack/react-router';
import { useState } from 'react';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Breadcrumb, ContactBand, useLanguage } from '@/components/fiberform-site';
import { catalogUrl, productCategories } from '@/lib/fiberform-products';

export const Route = createFileRoute('/products-and-services')({
  head: () => ({ meta: [
    { title: 'Продукція і послуги — карбонові рішення FiberForm' },
    { name: 'description', content: 'Рами для FPV і БПЛА, карбонові листи та труби, фрезерування карбону й індивідуальні рішення FiberForm.' },
    { property: 'og:title', content: 'Продукція і послуги — FiberForm' },
    { property: 'og:description', content: 'Оберіть категорію карбонових виробів або виготовлення деталей за вашими кресленнями.' },
    { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary_large_image' },
  ] }), component: ProductsPage,
});

function ProductsPage() {
  const { en, t } = useLanguage();
  const [filter, setFilter] = useState('all');
  const products = productCategories.filter(item => filter === 'all' || item.type === filter);
  return <><main className="container"><Breadcrumb label={t('Продукція і послуги', 'Products & services')} />
    <section className="page-intro reveal"><p className="section-kicker">FIBERFORM / CARBON SOLUTIONS</p><div className="intro-row"><h1>{t('Продукція', 'Products')}<span>{t('і послуги.', '& services.')}</span></h1><p>{t('Готові вироби й індивідуальні деталі. Карбон для вашого наступного проєкту.', 'Finished products and custom components. Carbon for your next project.')}</p></div></section>
    <section className="product-browser" aria-label={t('Категорії продукції', 'Product categories')}><div className="catalog-toolbar"><div className="filter-tabs" role="group" aria-label={t('Тип пропозиції', 'Offering type')}>{[{ id: 'all', label: t('Усе', 'All') }, { id: 'products', label: t('Продукція', 'Products') }, { id: 'services', label: t('Послуги', 'Services') }].map(item => <Button variant="navigation" key={item.id} aria-pressed={filter === item.id} onClick={() => setFilter(item.id)}>{item.label}</Button>)}</div><span className="catalog-count">{String(products.length).padStart(2, '0')} / {t('КАТЕГОРІЇ', 'CATEGORIES')}</span></div>
    <div className="catalog-grid expanded-catalog">{products.map(cat => <a className="catalog-card" key={cat.id} href={catalogUrl(cat.category)} target="_blank" rel="noreferrer"><span className="catalog-number">0{productCategories.indexOf(cat) + 1}</span><div className={`catalog-visual ${cat.id === 'milling' ? 'machining' : ''}`}><img src={cat.image} alt={cat.title[en ? 1 : 0]} loading="lazy" /></div><div className="catalog-info"><span className="item-type">{cat.type === 'products' ? t('ПРОДУКЦІЯ', 'PRODUCTS') : t('ПОСЛУГИ', 'SERVICES')}</span><h2>{cat.title[en ? 1 : 0]}</h2><p>{cat.text[en ? 1 : 0]}</p><span className="catalog-open">{t('Переглянути в каталозі', 'View in catalog')}<ArrowUpRight /></span></div></a>)}</div></section>
    <section className="section custom-order"><div><p className="section-kicker">{t('ІНДИВІДУАЛЬНЕ ВИГОТОВЛЕННЯ', 'CUSTOM MANUFACTURING')}</p><h2>{t('Маєте креслення?', 'Have a drawing?')}</h2><p>{t('Обговоримо матеріал, форму та вимоги до вашої деталі.', 'Let’s discuss the material, shape and requirements for your component.')}</p><Button variant="industrialOutline" asChild><Link to="/contact">{t('Обговорити деталі', 'Discuss the details')}<ArrowRight /></Link></Button></div><ol className="process-list">{[[t('Ваше завдання', 'Your project'), t('Креслення, розміри та вимоги.', 'Drawings, dimensions and requirements.')], [t('Узгодження', 'Agreement'), t('Матеріал, обсяг та терміни виготовлення.', 'Material, quantity and manufacturing timeline.')], [t('Готове рішення', 'Finished solution'), t('Виготовлення деталей і погодження доставки.', 'Manufacturing and delivery arrangements.')]].map(([title, text], i) => <li key={title}><span>0{i + 1}</span><div><h3>{title}</h3><p>{text}</p></div></li>)}</ol></section>
  </main><ContactBand /></>;
}