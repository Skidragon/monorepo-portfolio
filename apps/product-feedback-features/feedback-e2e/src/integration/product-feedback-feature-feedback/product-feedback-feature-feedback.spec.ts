describe('product-feedback-feature-feedback: ProductFeedbackFeatureFeedback component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=productfeedbackfeaturefeedback--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to product-feedback-feature-feedback!');
    });
});
