import { createFileRoute, Link } from '@tanstack/react-router';
import { ArrowUpRight, Play, ShieldCheck, SlidersHorizontal, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Breadcrumb, ContactBand, useLanguage } from '@/components/fiberform-site';
import production from '@/assets/fiberform-022.asset.json';
import milling from '@/assets/fiberform-002.asset.json';

export const Route = createFileRoute('/about')({
  head: () => ({ meta: [
    { title: 'Про FiberForm — українське виробництво карбону' },
    { name: 'description', content: 'Знайомтеся з FiberForm: український бренд композитних матеріалів, карбонові вироби та виготовлення деталей за кресленнями.' },
    { property: 'og:title', content: 'Про FiberForm — українське виробництво карбону' },
    { property: 'og:description', content: 'Від матеріалу до готового рішення. Виробництво карбонових деталей в Україні.' },
    { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary_large_image' },
  ] }), component: AboutPage,
});

function AboutPage() {
  const { t } = useLanguage();
  return <><main className="container"><Breadcrumb label={t('Про нас', 'About')} />
    <section className="editorial-cover reveal"><img src={production.url} alt={t('Карбонові вироби FiberForm', 'FiberForm carbon products')} fetchPriority="high" /><div className="cover-copy"><p className="section-kicker">FIBERFORM / {t('ПРО НАС', 'ABOUT US')}</p><h1>FIBERFORM<span>{t('Створено в Україні.', 'Made in Ukraine.')}</span></h1><p>{t('Карбон. Інженерія. Ваші можливості.', 'Carbon. Engineering. Your possibilities.')}</p><Button variant="industrial" asChild><a href="https://www.youtube.com/watch?v=GS3V2DY0ftE" target="_blank" rel="noreferrer"><Play />{t('Подивитися виробництво', 'Watch our production')}</a></Button></div><span className="cover-caption">COMPOSITE MATERIALS / UKRAINE</span></section>
    <section className="section story-section"><div><p className="section-kicker">01 / {t('ХТО МИ', 'WHO WE ARE')}</p><h2>{t('Матеріал для', 'Material for')}<br /><span className="text-primary">{t('ваших ідей.', 'your ideas.')}</span></h2></div><div className="about-copy"><p>{t('FiberForm — український бренд у сфері композитних матеріалів. Ми працюємо, щоб інженери, пілоти FPV-дронів та розробники мали доступ до карбонових рішень, виготовлених у нашій країні.', 'FiberForm is a Ukrainian composite materials brand. We give engineers, FPV pilots and developers access to carbon solutions made in Ukraine.')}</p><p>{t('Рами для FPV та БПЛА, листи й труби, фрезерування та індивідуальні деталі — обирайте готове рішення або звертайтеся зі своїм завданням.', 'FPV and UAV frames, sheets and tubes, CNC milling and custom parts — choose an existing solution or bring us your project.')}</p><Button variant="navigation" asChild><Link to="/products-and-services">{t('Наша продукція і послуги', 'Our products & services')}<ArrowUpRight /></Link></Button></div></section>
    <section className="section production-section"><div className="section-heading"><div><p className="section-kicker">02 / {t('НАШ ПІДХІД', 'OUR APPROACH')}</p><h2>{t('Від креслення до деталі.', 'From drawing to part.')}</h2></div></div><div className="production-grid"><img src={milling.url} alt={t('Фрезерування карбонових деталей', 'Carbon component CNC milling')} loading="lazy" /><div className="production-principles">{[
      { icon: ShieldCheck, title: t('Увага до матеріалу', 'Attention to material'), text: t('Контролюємо матеріали та етапи виробництва.', 'Materials and production stages are carefully controlled.') },
      { icon: SlidersHorizontal, title: t('Під ваше завдання', 'Made for your project'), text: t('Працюємо з вашими кресленнями та вимогами.', 'We work with your drawings and requirements.') },
      { icon: MapPin, title: t('Виробництво в Україні', 'Manufactured in Ukraine'), text: t('Працюємо у Львові. Доставляємо по всій Україні.', 'Based in Lviv. Delivery throughout Ukraine.') },
    ].map(item => <div className="principle" key={item.title}><item.icon /><div><h3>{item.title}</h3><p>{item.text}</p></div></div>)}</div></div></section>
  </main><ContactBand /></>;
}