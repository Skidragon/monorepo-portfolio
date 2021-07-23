describe('product-feedback-feature-feedback: Feedback component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=feedback--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to product-feedback-feature-feedback!');
    });
});
