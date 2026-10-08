import frame from '@/assets/fiberform-001.asset.json';
import milling from '@/assets/fiberform-002.asset.json';
import sheets from '@/assets/fiberform-003.asset.json';
import custom from '@/assets/fiberform-004.asset.json';

export const productCategories = [
  { id: 'frames', title: ['Рами для FPV та БПЛА', 'FPV & UAV frames'], text: ['Карбонові рами для ваших польотів.', 'Carbon frames for your next flight.'], image: frame.url, category: 'frames-for-fpv-and-uavs', type: 'products' },
  { id: 'materials', title: ['Листи та труби', 'Sheets & tubes'], text: ['Матеріали для ваших карбонових деталей.', 'Materials for your carbon components.'], image: sheets.url, category: 'sheets-and-pipes', type: 'products' },
  { id: 'milling', title: ['Фрезерування карбону', 'Carbon CNC milling'], text: ['Виготовлення деталей за кресленнями.', 'Parts manufactured to your drawings.'], image: milling.url, category: 'services', type: 'services' },
  { id: 'custom', title: ['Індивідуальні рішення', 'Custom solutions'], text: ['Від вашої ідеї до готової деталі.', 'From your idea to a finished part.'], image: custom.url, category: '', type: 'services' },
] as const;

export function catalogUrl(category: string) {
  return `https://www.fiberform.com.ua/products-and-services/${category ? `?ucterms=category:${category}` : ''}`;
}