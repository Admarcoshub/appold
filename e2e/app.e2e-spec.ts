import { MiappPage } from './app.po';

describe('miapp App', () => {
  let page: MiappPage;

  beforeEach(() => {
    page = new MiappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
