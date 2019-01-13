import { POCNgObsvUnsubPage } from './app.po';

describe('pocng-obsv-unsub App', function() {
  let page: POCNgObsvUnsubPage;

  beforeEach(() => {
    page = new POCNgObsvUnsubPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
