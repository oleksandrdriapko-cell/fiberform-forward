import { describe, expect, it } from 'vitest';
import { catalogUrl, productCategories } from '@/lib/fiberform-products';

describe('Original FiberForm inventory links', () => {
  it('keeps every category on the existing FiberForm catalog', () => {
    for (const category of productCategories) {
      const url = new URL(catalogUrl(category.category));
      expect(url.origin).toBe('https://www.fiberform.com.ua');
      expect(url.pathname).toBe('/products-and-services/');
    }
  });
  it('preserves the FPV and material category filters', () => {
    expect(new URL(catalogUrl('frames-for-fpv-and-uavs')).searchParams.get('ucterms')).toBe('category:frames-for-fpv-and-uavs');
    expect(new URL(catalogUrl('sheets-and-pipes')).searchParams.get('ucterms')).toBe('category:sheets-and-pipes');
  });
});