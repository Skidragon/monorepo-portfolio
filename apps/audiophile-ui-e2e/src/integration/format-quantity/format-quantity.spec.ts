describe('audiophile-ui: FormatQuantity component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=formatquantity--primary&args=quantity;'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to audiophile-ui!');
    });
});
