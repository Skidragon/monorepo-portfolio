describe('audiophile-ui: Navbar component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=navbar--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to audiophile-ui!');
    });
});
