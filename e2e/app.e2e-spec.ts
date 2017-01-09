import { BlogAngularCliBootstrapFontAwesomePage } from './app.po';

describe('blog-angular-cli-bootstrap-font-awesome App', function() {
  let page: BlogAngularCliBootstrapFontAwesomePage;

  beforeEach(() => {
    page = new BlogAngularCliBootstrapFontAwesomePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
