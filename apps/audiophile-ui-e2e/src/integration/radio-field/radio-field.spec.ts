describe('audiophile-ui: RadioField component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=radiofield--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to audiophile-ui!');
    });
});
