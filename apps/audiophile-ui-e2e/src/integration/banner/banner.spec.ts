describe('audiophile-ui: Banner component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=banner--primary&args=children;'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to audiophile-ui!');
    });
});
