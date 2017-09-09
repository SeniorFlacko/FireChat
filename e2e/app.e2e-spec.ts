import { FirechatPage } from './app.po';

describe('firechat App', () => {
  let page: FirechatPage;

  beforeEach(() => {
    page = new FirechatPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
