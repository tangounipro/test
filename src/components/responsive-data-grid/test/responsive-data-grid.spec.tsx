import { newSpecPage } from '@stencil/core/testing';
import { ResponsiveDataGrid } from '../responsive-data-grid';

describe('responsive-data-grid', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ResponsiveDataGrid],
      html: `<responsive-data-grid></responsive-data-grid>`,
    });
    expect(page.root).toEqualHtml(`
      <responsive-data-grid>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </responsive-data-grid>
    `);
  });
});
