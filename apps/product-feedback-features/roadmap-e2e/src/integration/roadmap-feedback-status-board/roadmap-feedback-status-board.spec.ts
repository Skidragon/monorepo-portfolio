describe('product-feedback-feature-roadmap: RoadmapFeedbackStatusBoard component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=roadmapfeedbackstatusboard--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to product-feedback-feature-roadmap!');
    });
});
