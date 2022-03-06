describe('audiophile-ui: SeeProductCard component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=seeproductcard--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to audiophile-ui!');
    });
});
