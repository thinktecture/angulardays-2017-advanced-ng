import { NgdaysAdvancedPage } from './app.po';

describe('ngdays-advanced App', () => {
  let page: NgdaysAdvancedPage;

  beforeEach(() => {
    page = new NgdaysAdvancedPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
