describe('product-feedback-feature-feedback: Feedbacks component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=feedbacks--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to product-feedback-feature-feedback!');
    });
});
