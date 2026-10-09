import { createFileRoute, Link, notFound } from '@tanstack/react-router';
import { useState } from 'react';
import { ArrowUpRight, ZoomIn, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { ContactBand, useLanguage } from '@/components/fiberform-site';
import { frameProduct } from '@/lib/fiberform-product-detail';

export const Route = createFileRoute('/product/$slug')({
  beforeLoad: ({ params }) => { if (params.slug !== frameProduct.slug) throw notFound(); },
  head: () => ({ meta: [
    { title: 'Карбонова рама для FPV — FiberForm' },
    { name: 'description', content: 'Карбонова рама FiberForm для FPV-дрона. Фото виробу, опис та запит на замовлення.' },
    { property: 'og:title', content: 'Карбонова рама для FPV — FiberForm' },
    { property: 'og:description', content: 'Карбонова основа для вашої FPV-збірки. Обговоріть замовлення з FiberForm.' },
    { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary_large_image' },
  ] }), component: ProductPage,
});

function ProductPage() {
  const { en, t } = useLanguage();
  const [tab, setTab] = useState('description');
  const name = frameProduct.name[en ? 1 : 0];
  const specs = [[t('Матеріал', 'Material'), t('Карбон', 'Carbon fiber')], [t('Призначення', 'Application'), t('FPV-дрони', 'FPV drones')], [t('Виробник', 'Manufacturer'), 'FiberForm'], [t('Виробництво', 'Manufactured in'), t('Україна', 'Ukraine')]];
  return <><main className="container"><nav className="page-breadcrumb" aria-label={t('Навігаційний шлях', 'Breadcrumb')}><Link to="/">{t('Головна', 'Home')}</Link><span>/</span><Link to="/products-and-services">{t('Продукція', 'Products')}</Link><span>/</span><span aria-current="page">{name}</span></nav>
    <section className="product-detail"><div className="product-image-stage"><img src={frameProduct.image} alt={name} fetchPriority="high" /><span className="image-caption">FIBERFORM / CARBON FRAME</span><Dialog><DialogTrigger asChild><Button variant="ghost" size="icon" className="zoom-control" aria-label={t('Збільшити фото', 'Enlarge photo')} title={t('Збільшити фото', 'Enlarge photo')}><ZoomIn /></Button></DialogTrigger><DialogContent className="product-lightbox"><DialogTitle className="sr-only">{name}</DialogTitle><DialogDescription className="sr-only">{t('Фото карбонової рами FiberForm', 'FiberForm carbon frame photo')}</DialogDescription><img src={frameProduct.image} alt={name} /></DialogContent></Dialog></div>
    <div className="product-summary"><p className="section-kicker">FIBERFORM / FPV & UAV</p><h1>{name}</h1><p>{frameProduct.description[en ? 1 : 0]}</p><dl className="product-specs">{specs.map(([key,value]) => <div key={key}><dt>{key}</dt><dd>{value}</dd></div>)}</dl><div className="product-order"><h2>{t('Уточнити вартість і комплектацію', 'Enquire about price & configuration')}</h2><p>{t('Розмір рами, комплектацію, наявність і терміни узгодимо під ваше замовлення.', 'Frame dimensions, configuration, availability and timing are confirmed for your order.')}</p><div className="product-order-actions"><Button variant="industrial" asChild><a href={`mailto:sales@fiberform.org?subject=${encodeURIComponent(`${t('Запит на товар', 'Product enquiry')} — ${name}`)}`}><Mail />{t('Запит на замовлення', 'Enquire to order')}<ArrowUpRight /></a></Button><Button variant="navigation" asChild><a href={frameProduct.sourceUrl} target="_blank" rel="noreferrer">{t('Чинний каталог', 'Current catalog')}<ArrowUpRight /></a></Button></div></div></div></section>
    <section className="product-information"><div className="filter-tabs" role="tablist" aria-label={t('Інформація про товар', 'Product information')}>{[{ id:'description', name:t('Опис', 'Description') },{ id:'specifications',name:t('Характеристики', 'Specifications') },{ id:'order',name:t('Замовлення', 'Ordering') }].map(item => <Button variant="navigation" key={item.id} role="tab" id={`tab-${item.id}`} aria-selected={tab === item.id} aria-pressed={tab === item.id} aria-controls="product-panel" onClick={() => setTab(item.id)}>{item.name}</Button>)}</div><div className="product-tab-panel" role="tabpanel" id="product-panel" aria-labelledby={`tab-${tab}`}>
    {tab === 'description' && <><h2>{t('Основа вашого польоту.', 'The foundation of your flight.')}</h2><p>{t('FiberForm виготовляє карбонові рами для FPV та БПЛА. Обирайте рішення для своєї збірки або звертайтеся до нас із кресленнями та вимогами до індивідуальних деталей.', 'FiberForm manufactures carbon frames for FPV and UAVs. Choose a solution for your build or contact us with drawings and requirements for custom components.')}</p></>}
    {tab === 'specifications' && <><h2>{t('Про виріб', 'Product details')}</h2><dl className="product-specs">{specs.map(([key,value]) => <div key={key}><dt>{key}</dt><dd>{value}</dd></div>)}</dl><p>{t('Точні розміри й комплектацію конкретної моделі уточнюйте у чинному каталозі або в команди FiberForm.', 'Confirm exact model dimensions and configuration in the current catalog or with the FiberForm team.')}</p></>}
    {tab === 'order' && <><h2>{t('Обговоримо вашу збірку.', 'Let’s discuss your build.')}</h2><p>{t('Напишіть на sales@fiberform.org або зателефонуйте +38 (099) 616 4010. Вкажіть потрібну модель і кількість. Вартість, терміни та доставку узгодимо перед замовленням.', 'Email sales@fiberform.org or call +38 (099) 616 4010. Include your preferred model and quantity. Price, timing and delivery are agreed before ordering.')}</p><Button variant="industrialOutline" asChild><Link to="/contact">{t('Усі контакти', 'All contacts')}<ArrowUpRight /></Link></Button></>}
    </div></section></main><ContactBand /></>;
}
