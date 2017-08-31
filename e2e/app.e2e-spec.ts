import { AppCommentPage } from './app.po';

describe('app-comment App', () => {
  let page: AppCommentPage;

  beforeEach(() => {
    page = new AppCommentPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
