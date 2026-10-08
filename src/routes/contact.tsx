import { createFileRoute } from '@tanstack/react-router';
import { ArrowUpRight, MapPin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Breadcrumb, ContactLinks, useLanguage } from '@/components/fiberform-site';
import custom from '@/assets/fiberform-004.asset.json';

export const Route = createFileRoute('/contact')({
  head: () => ({ meta: [
    { title: 'Контакти FiberForm — обговорити карбоновий проєкт' },
    { name: 'description', content: 'Зв’яжіться з FiberForm: sales@fiberform.org, +38 (099) 616 4010. Карбонові вироби та індивідуальне виготовлення у Львові.' },
    { property: 'og:title', content: 'Контакти FiberForm — втілимо ваш проєкт' },
    { property: 'og:description', content: 'Обговоріть карбонові рами, матеріали або виготовлення деталей з командою FiberForm.' },
    { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary_large_image' },
  ] }), component: ContactPage,
});

function ContactPage() {
  const { t } = useLanguage();
  return <main className="container"><Breadcrumb label={t('Контакти', 'Contact')} />
    <section className="page-intro reveal"><p className="section-kicker">FIBERFORM / {t('КОНТАКТИ', 'CONTACT')}</p><div className="intro-row"><h1>{t('Ваш проєкт.', 'Your project.')}<span>{t('Наш карбон.', 'Our carbon.')}</span></h1><p>{t('Розкажіть, що потрібно. Разом знайдемо рішення.', 'Tell us what you need. We’ll find a solution together.')}</p></div></section>
    <section className="contact-page-grid"><div className="contact-details"><p className="section-kicker">01 / {t('НАПИШІТЬ АБО ЗАТЕЛЕФОНУЙТЕ', 'EMAIL OR CALL US')}</p><ContactLinks /><div className="contact-location"><MapPin /><div><h2>{t('Львів, Україна', 'Lviv, Ukraine')}</h2><p>{t('Власне виробництво. Доставка по всій Україні.', 'Our own production. Delivery throughout Ukraine.')}</p></div></div><div className="contact-social"><p className="section-kicker">02 / {t('МИ У СОЦМЕРЕЖАХ', 'FOLLOW US')}</p><a href="https://www.instagram.com/fiber_form/" target="_blank" rel="noreferrer">Instagram / @fiber_form<ArrowUpRight /></a><a href="https://www.youtube.com/@FiberForm-ua" target="_blank" rel="noreferrer">YouTube / FiberForm<ArrowUpRight /></a></div></div><div className="contact-product"><img src={custom.url} alt={t('Індивідуальні карбонові деталі FiberForm', 'Custom FiberForm carbon components')} fetchPriority="high" /><span>FIBERFORM / CUSTOM CARBON</span></div></section>
    <section className="section enquiry-section"><div><p className="section-kicker">03 / {t('ІНДИВІДУАЛЬНЕ ЗАМОВЛЕННЯ', 'CUSTOM ORDER')}</p><h2>{t('Почнемо з вашої ідеї.', 'Start with your idea.')}</h2><p>{t('Надішліть креслення або опис деталі, потрібні розміри та кількість. Обговоримо можливості виготовлення і терміни.', 'Send your drawing or component description, dimensions and quantity. We’ll discuss manufacturing options and timing.')}</p></div><Button variant="industrial" asChild><a href={`mailto:sales@fiberform.org?subject=${encodeURIComponent(t('Запит на виготовлення — FiberForm', 'Manufacturing enquiry — FiberForm'))}`}><Mail />{t('Написати на email', 'Send an email')}<ArrowUpRight /></a></Button></section>
  </main>;
}