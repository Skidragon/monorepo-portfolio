describe('product-feedback-feature-product: ProjectFeedbackBoardCard component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=projectfeedbackboardcard--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to product-feedback-feature-product!');
    });
});
