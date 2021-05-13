import { newE2EPage } from '@stencil/core/testing';

describe('responsive-data-grid', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<responsive-data-grid></responsive-data-grid>');

    const element = await page.find('responsive-data-grid');
    expect(element).toHaveClass('hydrated');
  });
});
