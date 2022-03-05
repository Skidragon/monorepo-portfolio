describe('audiophile-ui: LineItem component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=lineitem--primary&args=children;'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to audiophile-ui!');
    });
});
