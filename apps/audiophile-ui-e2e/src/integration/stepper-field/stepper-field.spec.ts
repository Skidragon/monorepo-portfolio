describe('audiophile-ui: StepperField component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=stepperfield--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to audiophile-ui!');
    });
});
