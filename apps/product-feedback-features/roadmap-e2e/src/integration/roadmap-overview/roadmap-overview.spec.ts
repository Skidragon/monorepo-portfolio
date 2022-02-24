describe('product-feedback-feature-roadmap: RoadmapOverview component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=roadmapoverview--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to product-feedback-feature-roadmap!');
    });
});
