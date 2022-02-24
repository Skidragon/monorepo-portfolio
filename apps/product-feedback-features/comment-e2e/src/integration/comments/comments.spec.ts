describe('product-feedback-feature-comment: Comments component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=comments--primary&args=data;'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to product-feedback-feature-comment!');
    });
});
