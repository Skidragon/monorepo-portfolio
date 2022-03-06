describe('audiophile-ui: GapCard component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=gapcard--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to audiophile-ui!');
    });
});
