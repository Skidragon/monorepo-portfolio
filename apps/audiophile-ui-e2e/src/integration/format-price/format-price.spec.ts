describe('audiophile-ui: FormatPrice component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=formatprice--primary&args=price;'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to audiophile-ui!');
    });
});
