describe('product-feedback-feature-comment: ReplyForm component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=replyform--primary&args=handle;'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to product-feedback-feature-comment!');
    });
});
