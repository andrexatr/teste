import { AppTeste6Page } from './app.po';

describe('app-teste6 App', function() {
  let page: AppTeste6Page;

  beforeEach(() => {
    page = new AppTeste6Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
